/* louise.ivan creator vault — app logic
   Sections: aggregates, stat cards, bars, timeline, graph view, table, playbook, nav */

const NICHE_COLORS = {
  'Lifestyle / Relatable':'#4cc2ff','Meme / Humor':'#ffd166','Founder Story':'#a78bfa',
  'AI / Tech Workflows':'#4ade80','Motivation / Mindset':'#f472b6','Crypto / Ryder':'#fb923c',
  'How-To / List':'#22d3ee','Contrarian Take':'#f87171'
};
const fmt = n => n>=1e6 ? (n/1e6).toFixed(1)+'M' : n>=1e3 ? (n/1e3).toFixed(1)+'K' : String(n);
const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const REDUCE = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- aggregates ---------- */
const byNiche = {};
DATA.forEach(d=>{
  const a = byNiche[d.niche] || (byNiche[d.niche]={n:0,v:0,s:0,sh:0,l:0,c:0,views:[]});
  a.n++; a.v+=d.views; a.s+=d.saves; a.sh+=d.shares; a.l+=d.likes; a.c+=d.comments; a.views.push(d.views);
});
Object.values(byNiche).forEach(a=>{
  a.views.sort((x,y)=>x-y);
  a.med = a.views[Math.floor(a.views.length/2)];
  a.avg = Math.round(a.v/a.n);
  a.saveRate = a.s/Math.max(a.v,1)*1000;
});
const byHook = {};
DATA.forEach(d=>{
  const a = byHook[d.hook] || (byHook[d.hook]={n:0,v:0,s:0});
  a.n++; a.v+=d.views; a.s+=d.saves;
});
Object.values(byHook).forEach(a=>{a.avg=Math.round(a.v/a.n); a.saveRate=a.s/Math.max(a.v,1)*1000;});
const totals = DATA.reduce((t,d)=>({v:t.v+d.views,s:t.s+d.saves,sh:t.sh+d.shares,l:t.l+d.likes,c:t.c+d.comments}),{v:0,s:0,sh:0,l:0,c:0});

/* ---------- stat cards + sidebar ---------- */
document.getElementById('statcards').innerHTML = [
  ['Posts analyzed', DATA.length, 'reels + feed'],
  ['Total views', fmt(totals.v), 'lifetime'],
  ['Total saves', fmt(totals.s), 'authority signal'],
  ['Total shares', fmt(totals.sh), 'distribution signal'],
  ['Followers', '7,347', 'at pull time'],
  ['Views per follower', (totals.v/7347).toFixed(0)+'x', 'reach beyond audience']
].map(([k,v,d])=>`<div class="card"><div class="k">${k}</div><div class="v">${v}</div><div class="d">${d}</div></div>`).join('');

document.getElementById('sidemeta').innerHTML =
  '<div class="row"><span>posts</span><b>'+DATA.length+'</b></div>'+
  '<div class="row"><span>niches</span><b>'+Object.keys(byNiche).length+'</b></div>'+
  '<div class="row"><span>views</span><b>'+fmt(totals.v)+'</b></div>'+
  '<div class="row"><span>pulled</span><b>2026-07-02</b></div>';

/* ---------- bars ---------- */
function bars(el, rows, colorFn, valFmt){
  const max = Math.max(...rows.map(r=>r[1]));
  document.getElementById(el).innerHTML = rows.map(([k,v])=>
    `<div class="brow"><div class="lbl">${k}</div><div class="trk"><div class="fill" style="width:${Math.max(v/max*100,1)}%;background:${colorFn(k)}"></div></div><div class="num">${valFmt(v)}</div></div>`
  ).join('');
}
const nc = k => NICHE_COLORS[k] || '#8b8f98';
function ranked(obj, key){ return Object.entries(obj).map(([k,a])=>[k,a[key]]).sort((a,b)=>b[1]-a[1]); }
bars('nviews', ranked(byNiche,'avg'), nc, fmt);
bars('nsaves', ranked(byNiche,'saveRate'), nc, v=>v.toFixed(1));
bars('nmed', ranked(byNiche,'med'), nc, fmt);
bars('nshares', ranked(byNiche,'sh'), nc, fmt);
bars('hviews', ranked(byHook,'avg'), ()=> '#7c6bd8', fmt);
bars('hsaves', ranked(byHook,'saveRate'), ()=> '#4ade80', v=>v.toFixed(1));

/* ---------- timeline: weekly bars + monthly calendar ---------- */
(function(){
  const svg = document.getElementById('tl');
  const cal = document.getElementById('cal');
  const detail = document.getElementById('tldetail');
  const title = document.getElementById('tltitle');
  const mnav = document.getElementById('mnav');
  const mlabel = document.getElementById('mlabel');
  const bW = document.getElementById('modeweek');
  const bC = document.getElementById('modecal');

  /* index posts by ISO week and by calendar day */
  function isoWeek(t){
    const d = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const y0 = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    return d.getUTCFullYear()+'-W'+String(Math.ceil((((d - y0)/864e5)+1)/7)).padStart(2,'0');
  }
  const byWeek = {}, byDay = {};
  DATA.forEach(d=>{
    const t = new Date(d.ts);
    const wk = isoWeek(t);
    const day = d.ts.slice(0,10);
    (byWeek[wk] = byWeek[wk] || {v:0, posts:[]}).v += d.views; byWeek[wk].posts.push(d);
    (byDay[day] = byDay[day] || {v:0, posts:[]}).v += d.views; byDay[day].posts.push(d);
  });
  const weekKeys = Object.keys(byWeek).sort();

  /* month state: default to the latest post's month */
  const lastTs = DATA.map(d=>d.ts).sort().pop();
  let mY = +lastTs.slice(0,4), mM = +lastTs.slice(5,7)-1;
  const firstTs = DATA.map(d=>d.ts).sort()[0];
  const MIN = firstTs.slice(0,7), MAX = lastTs.slice(0,7);
  const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  function showDetail(label, posts, totalV){
    posts = [...posts].sort((a,b)=>b.views-a.views);
    detail.hidden = false;
    detail.innerHTML = '<div class="dt">'+label+' · <b>'+posts.length+'</b> posts · <b>'+fmt(totalV)+'</b> views</div>'+
      '<div class="plist">'+posts.map(d=>
        '<a class="pitem" href="'+d.url+'" target="_blank" rel="noopener">'+
        '<span class="pc"><span class="pdot" style="background:'+nc(d.niche)+'"></span>'+esc(d.cap.slice(0,90) || '(no caption)')+'</span>'+
        '<span class="pm">'+fmt(d.views)+' views · '+fmt(d.saves)+' saves</span></a>'
      ).join('')+'</div>';
  }

  let range90 = true;
  function visibleWeeks(){
    if(!range90) return weekKeys;
    const cutoff = new Date(new Date(lastTs).getTime() - 90*864e5);
    return weekKeys.filter(k=>{
      const posts = byWeek[k].posts;
      return new Date(posts[posts.length-1].ts) >= cutoff || new Date(posts[0].ts) >= cutoff;
    });
  }
  function drawWeeks(){
    const wk = visibleWeeks();
    const W = svg.clientWidth || 900, H = 150, pad = 4;
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const max = Math.max(...wk.map(k=>byWeek[k].v));
    const bw = (W - pad*2) / wk.length;
    svg.innerHTML = wk.map((k,i)=>{
      const h = Math.max(byWeek[k].v/max*(H-26),2);
      return `<rect data-wk="${k}" x="${pad+i*bw+1}" y="${H-20-h}" width="${Math.max(bw-2,1)}" height="${h}" rx="2" fill="${byWeek[k].v===max?'#a78bfa':'#4a4f58'}"><title>${k}: ${fmt(byWeek[k].v)} views, ${byWeek[k].posts.length} posts. Click to list them.</title></rect>`;
    }).join('') + `<text x="${pad}" y="${H-6}" fill="#5c6067" font-size="10" font-family="JetBrains Mono">${wk[0]||''}</text><text x="${W-pad}" y="${H-6}" fill="#5c6067" font-size="10" text-anchor="end" font-family="JetBrains Mono">${wk[wk.length-1]||''}</text>`;
    svg.querySelectorAll('rect').forEach(r=>r.addEventListener('click',()=>{
      const k = r.dataset.wk;
      svg.querySelectorAll('rect').forEach(x=>x.setAttribute('stroke','none'));
      r.setAttribute('stroke','#a78bfa'); r.setAttribute('stroke-width','1.5');
      showDetail('Week '+k, byWeek[k].posts, byWeek[k].v);
    }));
  }

  function drawCal(){
    const first = new Date(mY, mM, 1);
    const daysIn = new Date(mY, mM+1, 0).getDate();
    const lead = (first.getDay()+6)%7;  /* monday first */
    mlabel.textContent = MONTHS[mM].slice(0,3)+' '+mY;
    const monthCells = [];
    let monthMax = 1;
    for(let d=1; d<=daysIn; d++){
      const key = mY+'-'+String(mM+1).padStart(2,'0')+'-'+String(d).padStart(2,'0');
      const rec = byDay[key];
      if(rec) monthMax = Math.max(monthMax, rec.v);
      monthCells.push({d, key, rec});
    }
    const todayKey = new Date().toISOString().slice(0,10);
    cal.innerHTML =
      ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=>'<div class="dow">'+d+'</div>').join('') +
      Array(lead).fill('<div class="day pad"></div>').join('') +
      monthCells.map(c=>{
        const heat = c.rec ? Math.pow(c.rec.v/monthMax, 0.5) : 0;
        const bg = c.rec ? `style="background:rgba(167,139,250,${(0.06+heat*0.30).toFixed(2)})"` : '';
        const dots = c.rec ? '<div class="dots">'+c.rec.posts.slice(0,6).map(p=>'<span class="pd" style="background:'+nc(p.niche)+'"></span>').join('')+(c.rec.posts.length>6?'<span class="pd" style="background:#5c6067"></span>':'')+'</div>' : '';
        const views = c.rec ? '<div class="dv">'+fmt(c.rec.v)+'</div>' : '';
        return `<div class="day${c.rec?' haspost':''}${c.key===todayKey?' today':''}" data-day="${c.key}" ${bg}
          role="${c.rec?'button':''}" tabindex="${c.rec?0:-1}"
          title="${c.rec ? c.rec.posts.length+' posts, '+fmt(c.rec.v)+' views' : 'no posts'}">
          <div class="dn">${c.d}</div>${views}${dots}</div>`;
      }).join('');
    cal.querySelectorAll('.day.haspost').forEach(el=>{
      const openDay = ()=>{
        cal.querySelectorAll('.day').forEach(x=>x.classList.remove('sel'));
        el.classList.add('sel');
        const rec = byDay[el.dataset.day];
        showDetail(el.dataset.day, rec.posts, rec.v);
      };
      el.addEventListener('click', openDay);
      el.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){e.preventDefault(); openDay();} });
    });
    /* clamp nav to data range */
    const cur = mY+'-'+String(mM+1).padStart(2,'0');
    document.getElementById('mprev').disabled = cur <= MIN;
    document.getElementById('mnext').disabled = cur >= MAX;
  }

  function setMode(m){
    const week = m==='week';
    svg.style.display = week ? 'block' : 'none';
    cal.hidden = week; mnav.hidden = week;
    detail.hidden = true;
    bW.classList.toggle('on', week); bC.classList.toggle('on', !week);
    bW.setAttribute('aria-selected', week); bC.setAttribute('aria-selected', !week);
    title.textContent = week ? (range90 ? 'Views per week · last 90 days' : 'Views per week · all time') : 'Monthly calendar';
    const rseg = document.getElementById('rangeseg');
    if(rseg) rseg.hidden = !week;
    if(week) drawWeeks(); else drawCal();
  }
  const r90 = document.getElementById('r90'), rall = document.getElementById('rall');
  if(r90 && rall){
    r90.addEventListener('click',()=>{ range90=true; r90.classList.add('on'); rall.classList.remove('on'); detail.hidden=true; setMode('week'); });
    rall.addEventListener('click',()=>{ range90=false; rall.classList.add('on'); r90.classList.remove('on'); detail.hidden=true; setMode('week'); });
  }
  bW.addEventListener('click',()=>setMode('week'));
  bC.addEventListener('click',()=>setMode('cal'));
  document.getElementById('mprev').addEventListener('click',()=>{ mM--; if(mM<0){mM=11;mY--;} detail.hidden=true; drawCal(); });
  document.getElementById('mnext').addEventListener('click',()=>{ mM++; if(mM>11){mM=0;mY++;} detail.hidden=true; drawCal(); });
  setMode('week');
})();

/* ---------- legend ---------- */
document.getElementById('legend').innerHTML = Object.entries(NICHE_COLORS)
  .map(([k,c])=>`<span><span class="dot" style="background:${c}"></span>${k}</span>`).join('');

/* ---------- graph view (Obsidian-style animation) ----------
   Entrance: hubs pop in first, then leaves stagger in by view rank,
   each with an ease-out-back scale and its link fading in.
   Idle: low-energy physics keeps settling, then nodes breathe on a
   per-node sine drift, like Obsidian's live graph.
   Hover: the node's cluster lights up, the rest of the graph dims. */
(function(){
  const canvas = document.getElementById('graph');
  const tip = document.getElementById('gtip');
  const dpr = window.devicePixelRatio || 1;
  let W, H;
  function size(){ W = canvas.clientWidth; H = 520; canvas.width = W*dpr; canvas.height = H*dpr; }
  size();
  const ctx = canvas.getContext('2d');

  const top = [...DATA].sort((a,b)=>b.views-a.views).slice(0,60);
  const maxV = top[0].views;
  const niches = Object.keys(byNiche);

  let nodes, links, t0;
  function build(){
    nodes = []; links = [];
    niches.forEach((n,i)=>{
      const ang = i/niches.length*Math.PI*2;
      nodes.push({hub:true, niche:n, x:W/2+Math.cos(ang)*180, y:H/2+Math.sin(ang)*130,
        r:14, vx:0, vy:0, birth:0, phase:Math.random()*6.28, neighbors:new Set()});
    });
    top.forEach((d,rank)=>{
      const hub = nodes.find(n=>n.hub && n.niche===d.niche);
      const node = {hub:false, d, niche:d.niche,
        x:hub.x+(Math.random()-0.5)*30, y:hub.y+(Math.random()-0.5)*30,
        r: 3.5 + Math.sqrt(d.views/maxV)*15, vx:0, vy:0,
        birth: 500 + rank*45,                 /* staggered entrance */
        phase: Math.random()*6.28,
        halo: Math.min(d.saves/Math.max(d.views,1)*1000/25, 1),
        hubRef: hub, neighbors:new Set([hub])};
      hub.neighbors.add(node);
      nodes.push(node);
      links.push({a:hub, b:node, birth:node.birth});
    });
    t0 = performance.now();
  }
  build();

  let cam = {x:0, y:0, z:1};
  let hoverNode = null, dragging = false, dragStart = null;
  let dimT = 0; /* 0 = no highlight, 1 = full dim of non-neighbors */

  const easeOutBack = t => { const c1=1.70158, c3=c1+1; return 1 + c3*Math.pow(t-1,3) + c1*Math.pow(t-1,2); };
  const clamp01 = t => Math.max(0, Math.min(1, t));

  function tick(now){
    const settle = Math.max(0.15, 1 - (now-t0)/6000);  /* physics cools over 6s, keeps a pulse */
    for(let i=0;i<nodes.length;i++){
      const a = nodes[i];
      if(now-t0 < a.birth) continue;
      for(let j=i+1;j<nodes.length;j++){
        const b = nodes[j];
        if(now-t0 < b.birth) continue;
        let dx=b.x-a.x, dy=b.y-a.y, d2=dx*dx+dy*dy;
        if(d2<1) d2=1;
        const d = Math.sqrt(d2);
        const rep = (a.hub&&b.hub? 2600 : 420)/d2 * settle;
        dx/=d; dy/=d;
        a.vx-=dx*rep; a.vy-=dy*rep; b.vx+=dx*rep; b.vy+=dy*rep;
      }
      a.vx += (W/2-a.x)*0.0012*settle; a.vy += (H/2-a.y)*0.0012*settle;
    }
    links.forEach(l=>{
      if(now-t0 < l.birth) return;
      let dx=l.b.x-l.a.x, dy=l.b.y-l.a.y;
      const d = Math.sqrt(dx*dx+dy*dy)||1;
      const target = 60 + l.b.r*2.4;
      const f = (d-target)*0.012*settle;
      dx/=d; dy/=d;
      l.a.vx+=dx*f; l.a.vy+=dy*f; l.b.vx-=dx*f; l.b.vy-=dy*f;
    });
    nodes.forEach(n=>{ n.vx*=0.82; n.vy*=0.82; n.x+=n.vx; n.y+=n.vy; });
  }

  function draw(now){
    const elapsed = now - t0;
    ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.clearRect(0,0,W,H);
    ctx.translate(cam.x, cam.y); ctx.scale(cam.z, cam.z);

    /* highlight state eases in and out */
    const targetDim = hoverNode ? 1 : 0;
    dimT += (targetDim - dimT) * (REDUCE ? 1 : 0.15);
    const hovSet = hoverNode ? hoverNode.neighbors : null;
    const isLit = n => !hoverNode || n===hoverNode || (hovSet && hovSet.has(n));

    links.forEach(l=>{
      const age = clamp01((elapsed - l.birth)/400);
      if(age<=0) return;
      const lit = !hoverNode || (l.a===hoverNode||l.b===hoverNode);
      const alpha = age * (lit ? 0.18 + dimT*0.35 : 0.18*(1-dimT*0.85));
      ctx.strokeStyle = lit && dimT>0.05 ? hexA(nc(l.b.niche), alpha) : `rgba(139,143,152,${alpha})`;
      ctx.lineWidth = lit && dimT>0.05 ? 1.4 : 1;
      ctx.beginPath(); ctx.moveTo(l.a.x,l.a.y); ctx.lineTo(l.b.x,l.b.y); ctx.stroke();
    });

    /* ambient breathing after entrance */
    const breathe = REDUCE ? 0 : Math.min(1, Math.max(0,(elapsed-3500)/1500));

    nodes.forEach(n=>{
      const age = clamp01((elapsed - n.birth)/450);
      if(age<=0) return;
      const pop = REDUCE ? 1 : easeOutBack(age);
      const bx = n.x + Math.sin(now/1400 + n.phase)*1.3*breathe;
      const by = n.y + Math.cos(now/1700 + n.phase)*1.3*breathe;
      const lit = isLit(n);
      const fade = lit ? 1 : 1 - dimT*0.82;
      const c = nc(n.niche);
      const r = n.r * pop;

      if(!n.hub && n.halo>0.12){
        ctx.beginPath(); ctx.arc(bx,by,r+4,0,7);
        ctx.fillStyle = hexA(c, 0.13*fade*(lit&&dimT>0.05?2:1)); ctx.fill();
      }
      ctx.globalAlpha = fade;
      ctx.beginPath(); ctx.arc(bx,by,r,0,7);
      ctx.fillStyle = n.hub ? '#1b1d21' : c;
      ctx.fill();
      if(n.hub){ ctx.lineWidth=2; ctx.strokeStyle=c; ctx.stroke(); }
      if(n===hoverNode){ ctx.lineWidth=1.5; ctx.strokeStyle='#fff'; ctx.stroke(); }
      if(n.hub){
        ctx.fillStyle='#dcddde'; ctx.font='600 11px Inter'; ctx.textAlign='center';
        ctx.fillText(n.niche.split(' / ')[0], bx, by - r - 8);
      }
      ctx.globalAlpha = 1;
      n.rx = bx; n.ry = by;  /* rendered position for picking */
    });
  }
  function hexA(hex, a){
    const r=parseInt(hex.slice(1,3),16), g=parseInt(hex.slice(3,5),16), b=parseInt(hex.slice(5,7),16);
    return `rgba(${r},${g},${b},${a})`;
  }

  const CYCLE = 16000;  /* entrance ~3.5s, settle + breathe, then replay */
  function loop(now){
    if(now - t0 > CYCLE){ cam = {x:0, y:0, z:cam.z}; build(); }
    tick(now); draw(now); requestAnimationFrame(loop);
  }
  if(REDUCE){
    /* settle instantly, draw one static frame */
    nodes.forEach(n=>n.birth=0); links.forEach(l=>l.birth=0);
    const now0 = performance.now();
    for(let i=0;i<300;i++) tick(now0);
    draw(now0+10000);
  } else requestAnimationFrame(loop);

  document.getElementById('replay').addEventListener('click',()=>{
    cam={x:0,y:0,z:1}; build();
    if(REDUCE){ nodes.forEach(n=>n.birth=0); links.forEach(l=>l.birth=0);
      const n0=performance.now(); for(let i=0;i<300;i++) tick(n0); draw(n0+10000); }
  });

  function toWorld(px,py){ return {x:(px-cam.x)/cam.z, y:(py-cam.y)/cam.z}; }
  function pick(px,py){
    const p = toWorld(px,py);
    return nodes.slice().reverse().find(n=>{
      const x=n.rx??n.x, y=n.ry??n.y, dx=x-p.x, dy=y-p.y;
      return dx*dx+dy*dy<=(n.r+3)*(n.r+3);
    });
  }
  canvas.addEventListener('mousemove',e=>{
    const r = canvas.getBoundingClientRect();
    if(dragging){ cam.x+=e.clientX-dragStart.x; cam.y+=e.clientY-dragStart.y; dragStart={x:e.clientX,y:e.clientY}; if(REDUCE)draw(performance.now()+10000); return; }
    hoverNode = pick(e.clientX-r.left, e.clientY-r.top);
    if(hoverNode && !hoverNode.hub){
      const d = hoverNode.d;
      tip.style.display='block';
      tip.style.left=Math.min(e.clientX-r.left+14, W-270)+'px';
      tip.style.top=(e.clientY-r.top+10)+'px';
      tip.innerHTML = '<div class="t">'+esc(d.cap.slice(0,90))+'…</div><div class="m">'+fmt(d.views)+' views · '+fmt(d.saves)+' saves · '+fmt(d.shares)+' shares</div>';
      canvas.style.cursor='pointer';
    } else { tip.style.display='none'; canvas.style.cursor=dragging?'grabbing':'grab'; }
    if(REDUCE) draw(performance.now()+10000);
  });
  canvas.addEventListener('mouseleave',()=>{ hoverNode=null; tip.style.display='none'; if(REDUCE)draw(performance.now()+10000); });
  canvas.addEventListener('mousedown',e=>{ if(!hoverNode||hoverNode.hub){dragging=true;dragStart={x:e.clientX,y:e.clientY};} });
  addEventListener('mouseup',()=>dragging=false);
  canvas.addEventListener('click',()=>{ if(hoverNode && !hoverNode.hub) open(hoverNode.d.url,'_blank'); });
  canvas.addEventListener('wheel',e=>{
    e.preventDefault();
    const r = canvas.getBoundingClientRect();
    const mx=e.clientX-r.left, my=e.clientY-r.top;
    const nz = Math.min(Math.max(cam.z*(e.deltaY<0?1.1:0.9),0.4),3);
    cam.x = mx-(mx-cam.x)*nz/cam.z; cam.y = my-(my-cam.y)*nz/cam.z; cam.z=nz;
    if(REDUCE) draw(performance.now()+10000);
  },{passive:false});
  addEventListener('resize',()=>{size(); if(REDUCE)draw(performance.now()+10000);});
})();

/* ---------- table ---------- */
(function(){
  const tbody = document.getElementById('tbody');
  const q = document.getElementById('q');
  const fn = document.getElementById('fniche');
  Object.keys(byNiche).sort().forEach(n=>{ fn.innerHTML+=`<option>${n}</option>`; });
  let sortKey='views', sortDir=-1;
  function render(){
    const term = q.value.toLowerCase();
    let rows = DATA.filter(d=>(!term||d.cap.toLowerCase().includes(term))&&(!fn.value||d.niche===fn.value));
    rows.sort((a,b)=>{
      let x=a[sortKey], y=b[sortKey];
      if(sortKey==='fol'){ x = x==null?-1:x; y = y==null?-1:y; }
      return (typeof x==='string' ? x.localeCompare(y) : x-y)*sortDir;
    });
    document.getElementById('rowcount').textContent = rows.length+' posts';
    tbody.innerHTML = rows.map(d=>`<tr>
      <td><a class="rowcap" href="${d.url}" target="_blank" rel="noopener">${esc(d.cap)||'(no caption)'}</a>
        <div class="rowmeta"><span class="tag" style="color:${nc(d.niche)};background:${nc(d.niche)}18">${d.niche}</span> · ${d.hook} · ${d.type}</div></td>
      <td>${fmt(d.views)}</td><td>${fmt(d.saves)}</td><td>${fmt(d.shares)}</td><td>${d.fol==null?'\u2013':d.fol}</td>
      <td>${fmt(d.likes)}</td><td>${d.comments}</td><td>${d.watch||'–'}</td>
      <td>${d.ts.slice(0,10)}</td></tr>`).join('');
  }
  document.querySelectorAll('th').forEach(th=>th.addEventListener('click',()=>{
    const k = th.dataset.k;
    if(sortKey===k) sortDir*=-1; else {sortKey=k; sortDir = k==='cap'||k==='ts' ? 1 : -1;}
    document.querySelectorAll('th').forEach(t=>{t.classList.toggle('sorted',t===th); t.textContent=t.textContent.replace(/ [↓↑]$/,'');});
    th.textContent += sortDir===-1?' ↓':' ↑';
    render();
  }));
  q.addEventListener('input',render); fn.addEventListener('change',render);
  render();
})();


/* ---------- best performing hooks ---------- */
(function(){
  const firstLine = c => (c.split(/[.!?]\s/)[0] || c).slice(0, 90);
  const item = (d, metric) => `<a class="hkrow" href="${d.url}" target="_blank" rel="noopener">
    <span class="hkrank"></span>
    <div class="hkbody">
      <div class="hktext">${esc(firstLine(d.cap) || '(visual hook, no caption)')}</div>
      <div class="hkmeta"><span class="tag" style="color:${nc(d.niche)};background:${nc(d.niche)}18">${d.hook}</span> ${metric}</div>
    </div></a>`;
  const byViews = [...DATA].sort((a,b)=>b.views-a.views).slice(0,8);
  document.getElementById('besthooks-views').innerHTML =
    byViews.map(d=>item(d, fmt(d.views)+' views · '+fmt(d.saves)+' saves')).join('');
  const bySaveRate = DATA.filter(d=>d.views>=1000)
    .map(d=>({d, r:d.saves/d.views*1000}))
    .sort((a,b)=>b.r-a.r).slice(0,8);
  document.getElementById('besthooks-saves').innerHTML =
    bySaveRate.map(({d,r})=>item(d, r.toFixed(1)+' saves/1K · '+fmt(d.views)+' views')).join('');
})();

/* ---------- playbook ---------- */
(function(){
  const ai = byNiche['AI / Tech Workflows'], founder = byNiche['Founder Story'],
        life = byNiche['Lifestyle / Relatable'], meme = byNiche['Meme / Humor'];
  document.getElementById('playout').innerHTML = `
  <div class="callout green">
    <div class="ct"><span class="cico">double down</span>AI workflows with a contrarian hook</div>
    <p>This niche saves at <b>${ai.saveRate.toFixed(1)} per 1,000 views</b>. The next best niche is under 6. Saves are the thought leader metric: people file your post away as a resource. The proof post is the "ChatGPT open in a tab is not using AI" reel: <b>172K views, 4,061 saves, 966 shares</b>. That is reach and authority in one post. Make one AI workflow reel with a hard-truth opener every week, minimum.</p>
  </div>
  <div class="callout yellow">
    <div class="ct"><span class="cico">keep as fuel</span>Lifestyle and meme content is the reach engine, not the brand</div>
    <p>Lifestyle and memes account for <b>${fmt(life.v+meme.v)} of your ${fmt(totals.v)} total views</b> and nearly all shares. But their medians are low: these are lottery tickets, and the winners (Amsterdam house tour, Japan shirts, the Dutch meme) are travel and humor, not founder authority. Keep 2 to 3 per week to feed the algorithm, and put a founder-context line in every caption so the reach converts into the right followers.</p>
  </div>
  <div class="callout red">
    <div class="ct"><span class="cico">fix</span>Founder story content is underperforming its importance</div>
    <p>${founder.n} posts, <b>0.5 saves per 1,000 views</b>, ${fmt(founder.sh)} total shares. This is your core positioning pillar and it is the weakest on every authority metric. The problem is packaging, not the story: your top founder posts led with a number or a confession ("It took me 9 years", "$1 million on the line"). The weak ones led with context. Rebuild this pillar on the confession and list structures that already work in your bank.</p>
  </div>
  <div class="callout">
    <div class="ct"><span class="cico">repost</span>Reposting is free money</div>
    <p>The same ChatGPT reel was posted 5 times. Results: 266, 4.5K, 6.5K, 21K, then <b>172K views</b>. The winner was the 5th upload. Your best content has not found its ceiling on the first post. Build a 30-day resurface loop for anything that clears 20 saves per 1,000 views.</p>
  </div>
  <div class="callout">
    <div class="ct"><span class="cico">thought leader math</span>The path to 100K</div>
    <p>Your views run at <b>${(totals.v/7347).toFixed(0)}x your follower count</b>, so reach is not the constraint. Conversion is. The niches that convert viewers into followers who care about Louise the founder are AI workflows (saves) and confession-led founder story (comments: the "Turned 32" post pulled 29 comments on 763 reach). Weekly split that this data supports: 3 AI or crypto authority reels, 2 confession-led founder reels, 2 lifestyle reach plays.</p>
  </div>`;
})();

/* ---------- nav highlight ---------- */
const secs=[...document.querySelectorAll('section')], navlinks=[...document.querySelectorAll('.nav a')];
addEventListener('scroll',()=>{
  const y=scrollY+120;
  let cur=secs[0];
  secs.forEach(s=>{if(s.offsetTop<=y)cur=s;});
  navlinks.forEach(l=>l.classList.toggle('on',l.getAttribute('href')==='#'+cur.id));
},{passive:true});

/* ---------- 30-day content plan calendar ---------- */
(function(){
  const byDate = {};
  PLAN.forEach(p=>byDate[p.date]=p);
  const detail = document.getElementById('plandetail');

  function renderMonth(gridId, year, month, fromDay, toDay){
    const grid = document.getElementById(gridId);
    const daysIn = new Date(year, month+1, 0).getDate();
    const lead = (new Date(year, month, 1).getDay()+6)%7;
    let cells = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=>'<div class="dow">'+d+'</div>').join('');
    cells += Array(lead).fill('<div class="pcell pad"></div>').join('');
    for(let d=1; d<=daysIn; d++){
      const key = year+'-'+String(month+1).padStart(2,'0')+'-'+String(d).padStart(2,'0');
      const p = byDate[key];
      if(d<fromDay || d>toDay || !p){ cells += '<div class="pcell pad"></div>'; continue; }
      cells += `<div class="pcell" data-date="${key}" role="button" tabindex="0" title="${p.topic} · ${p.mission}">
        <div class="pdn">${d}</div>
        <div class="pname">${esc(p.name)}</div>
        <div class="ppills"><span class="pl-pill t-${p.topic}">${p.topic}</span><span class="pl-pill m-${p.mission}">${p.mission}</span></div>
      </div>`;
    }
    grid.innerHTML = cells;
  }
  renderMonth('plangrid1', 2026, 6, 3, 31);   /* July 3-31 */
  renderMonth('plangrid2', 2026, 7, 1, 1);    /* Aug 1 */

  function openCard(key){
    document.querySelectorAll('.pcell').forEach(x=>x.classList.remove('sel'));
    const cell = document.querySelector('.pcell[data-date="'+key+'"]');
    if(cell) cell.classList.add('sel');
    const p = byDate[key];
    detail.hidden = false;
    const hooksHtml = p.hooks.map((h,i)=>`<div class="hkopt${i===0?' top':''}">
      <div class="hkt">#${i+1} ${h.t}${i===0?' · top pick':''}</div>
      <div class="hkline"><span>Spoken</span>${esc(h.s)}</div>
      <div class="hkline"><span>Overlay</span>${esc(h.o)}</div>
      <div class="hkline"><span>Visual</span>${esc(h.v)}</div>
    </div>`).join('');
    detail.innerHTML = `<div class="plancard">
      <div class="pct">${esc(p.name)}</div>
      <div class="pcm">
        <span class="pl-pill t-${p.topic}">${p.topic}</span>
        <span class="pl-pill m-${p.mission}">${p.mission}</span>
        <span class="status-pill">Idea</span>
        <span class="mono">${p.date} · ${p.format} · ${p.intensity} intensity · ${p.hookType} · Instagram</span>
      </div>
      <div class="pcw" style="margin-bottom:14px"><b>Why this slot:</b> ${p.why}</div>
      <div class="pkgrid">
        <div class="pkblock"><h4>Hook options</h4>${hooksHtml}</div>
        <div class="pkblock"><h4>Script (hook / build / payoff / loop)</h4><p class="pkscript">${esc(p.script)}</p>
          <h4 style="margin-top:14px">Shot list</h4><ul class="pkshots">${p.shots.map(s=>'<li>'+esc(s)+'</li>').join('')}</ul>
          <h4 style="margin-top:14px">On-screen text</h4><div class="pkoverlay">${p.overlay.map(o=>'<span>'+esc(o)+'</span>').join('')}</div>
        </div>
      </div>
      <div class="pkblock" style="margin-top:14px"><h4>Caption <button class="copybtn" data-copy="${p.date}">copy</button></h4>
        <p class="pkcaption" id="cap-${p.date}">${esc(p.caption)}</p>
        <div class="pkcta mono">CTA: ${esc(p.cta)}</div>
      </div>
    </div>`;
    const btn = detail.querySelector('.copybtn');
    if(btn) btn.addEventListener('click', ()=>{
      navigator.clipboard.writeText(p.caption).then(()=>{ btn.textContent='copied'; setTimeout(()=>btn.textContent='copy',1500); });
    });
    detail.scrollIntoView({behavior:'smooth', block:'nearest'});
  }
  document.querySelectorAll('#plan .pcell:not(.pad)').forEach(el=>{
    el.addEventListener('click', ()=>openCard(el.dataset.date));
    el.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){e.preventDefault(); openCard(el.dataset.date);} });
  });
})();
