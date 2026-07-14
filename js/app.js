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

  let range90 = false;
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

/* ---------- graph view (Obsidian-style constellation, full history) ----------
   Every niche is a hub; every post in the archive is a node linked to
   its hub. The archive streams in chronologically — one continuous
   pass, oldest to newest — while the HUD counts every metric. Arrivals
   ripple, light pulses travel the links, and when the sweep reaches the
   present the graph settles into a live ambient state: breathing nodes,
   radar sweep, drifting sparks. It never resets or loops.
   Drag to pan, scroll to zoom, hover to light up a cluster. */
(function(){
  const canvas = document.getElementById('graph');
  const ctx = canvas.getContext('2d');
  const tip = document.getElementById('gtip');
  const statusChip = document.getElementById('gstatus');
  const stateEl = document.getElementById('gstate');
  const dateEl = document.getElementById('gdate');
  const progEl = document.getElementById('gprog');
  const chipsEl = document.getElementById('gchips');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  /* full archive, oldest first */
  const posts = [...DATA].sort((a,b)=> new Date(a.ts) - new Date(b.ts));
  const N = posts.length;
  const times = posts.map(p=> +new Date(p.ts));
  const maxPostViews = Math.max(...posts.map(p=>p.views), 1);
  const niches = Object.keys(byNiche);

  const METRICS = [
    {key:'views',    label:'views',    color:'#38bdf8'},
    {key:'likes',    label:'likes',    color:'#f472b6'},
    {key:'saves',    label:'saves',    color:'#34d399'},
    {key:'shares',   label:'shares',   color:'#fbbf24'},
    {key:'comments', label:'comments', color:'#a78bfa'}
  ];
  METRICS.forEach(m=>{ let s=0; m.cum = posts.map(p=> s += (p[m.key]||0)); });

  chipsEl.innerHTML = METRICS.map(m=>
    `<span class="gchip"><span class="gdot" style="background:${m.color};color:${m.color}"></span><span class="glab">${m.label}</span><b data-m="${m.key}">0</b></span>`).join('');
  const chipVals = {};
  chipsEl.querySelectorAll('b').forEach(b=> chipVals[b.dataset.m] = b);

  const MON3 = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const fdate = ms => { const d = new Date(ms); return String(d.getDate()).padStart(2,'0')+' '+MON3[d.getMonth()]+' '+d.getFullYear(); };
  const gnote = document.querySelector('#graph-view .gnote');
  if(gnote){
    const a = new Date(times[0]), b = new Date(times[N-1]);
    gnote.textContent = 'Constellation of all '+N+' posts · '+MON3[a.getMonth()]+' '+a.getFullYear()+' → '+MON3[b.getMonth()]+' '+b.getFullYear()+'. Node size is views, color is niche, brighter halo is a higher save rate. Drag to pan, scroll to zoom.';
  }

  /* helpers */
  const lerp = (a,b,t)=> a+(b-a)*t;
  const clamp01 = t => Math.max(0, Math.min(1, t));
  const easeIO = t => -(Math.cos(Math.PI*t)-1)/2;
  const easeOutBack = t => { const c1=1.70158, c3=c1+1; return 1 + c3*Math.pow(t-1,3) + c1*Math.pow(t-1,2); };
  function hexA(hex, a){
    const r=parseInt(hex.slice(1,3),16), g=parseInt(hex.slice(3,5),16), b=parseInt(hex.slice(5,7),16);
    return `rgba(${r},${g},${b},${a})`;
  }
  function valAt(m, fp){
    const i = Math.min(Math.floor(fp), N-1), f = fp - i;
    return lerp(m.cum[i], m.cum[Math.min(i+1, N-1)], f);
  }

  /* animation state — one pass, then live. No cycle, no reset. */
  const DUR = 42000;
  let mode = 'reveal';
  let acc = 0, p = 0, arrived = -1, lastT = null, clock = 0, liveClock = 0, spawnAcc = 0, pulseAcc = 0;
  const ripples = [], particles = [], pulses = [];
  let hoverNode = null, dimT = 0;
  let cam = {x:0, y:0, z:1}, dragging = false, dragStart = null;

  /* graph model */
  let W, H, nodes = [], hubs = [], leafByIdx = [], links = [];
  function size(){
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = W*dpr; canvas.height = H*dpr;
    homes();
  }
  function homes(){
    const RX = Math.min(W*0.34, 300), RY = Math.min(H*0.30, 175);
    hubs.forEach((h,j)=>{
      const ang = j/hubs.length*Math.PI*2 - Math.PI/2;
      h.hx = W/2 + Math.cos(ang)*RX; h.hy = H/2 + Math.sin(ang)*RY;
    });
  }
  function build(){
    nodes = []; hubs = []; leafByIdx = []; links = [];
    const hubOf = {};
    niches.forEach(nm=>{
      const hub = {hub:true, niche:nm, x:0, y:0, hx:0, hy:0, r:13, vx:0, vy:0,
        active:false, born:0, phase:Math.random()*6.28, spawned:0, neighbors:new Set()};
      hubOf[nm] = hub; hubs.push(hub); nodes.push(hub);
    });
    homes();
    hubs.forEach(h=>{ h.x = h.hx; h.y = h.hy; });
    posts.forEach((d,i)=>{
      const hub = hubOf[d.niche];
      const ang = i*2.399963;
      const leaf = {hub:false, d, i, niche:d.niche,
        x:hub.hx + Math.cos(ang)*(hub.r+10), y:hub.hy + Math.sin(ang)*(hub.r+10),
        r: 2.2 + Math.sqrt(d.views/maxPostViews)*11, vx:0, vy:0,
        active:false, born:0, phase:Math.random()*6.28,
        halo: Math.min(d.saves/Math.max(d.views,1)*1000/25, 1),
        hubRef:hub, neighbors:new Set([hub])};
      hub.neighbors.add(leaf);
      leafByIdx.push(leaf); nodes.push(leaf);
      links.push({a:hub, b:leaf, active:false, born:0});
    });
    ripples.length = 0; particles.length = 0; pulses.length = 0;
  }

  /* physics: gentle force layout, energy follows the processing state */
  function tickPhysics(){
    const settle = mode==='reveal' ? 0.6 : Math.max(0.15, 0.6 - liveClock/9000*0.45);
    for(let i=0;i<nodes.length;i++){
      const a = nodes[i];
      if(!a.active) continue;
      for(let j=i+1;j<nodes.length;j++){
        const b = nodes[j];
        if(!b.active) continue;
        let dx = b.x-a.x, dy = b.y-a.y, d2 = dx*dx+dy*dy;
        if(d2 > 32400) continue;              /* ignore pairs beyond 180px */
        if(d2 < 1) d2 = 1;
        const d = Math.sqrt(d2);
        const rep = (a.hub||b.hub ? 760 : 300)/d2 * settle;
        dx/=d; dy/=d;
        a.vx-=dx*rep; a.vy-=dy*rep; b.vx+=dx*rep; b.vy+=dy*rep;
      }
      if(a.hub){ a.vx += (a.hx-a.x)*0.006*settle; a.vy += (a.hy-a.y)*0.006*settle; }
      else { a.vx += (W/2-a.x)*0.0006*settle; a.vy += (H/2-a.y)*0.0006*settle; }
    }
    links.forEach(l=>{
      if(!l.active) return;
      let dx = l.b.x-l.a.x, dy = l.b.y-l.a.y;
      const d = Math.sqrt(dx*dx+dy*dy)||1;
      const target = 30 + l.b.r*2.2;
      const f = (d-target)*0.013*settle;
      dx/=d; dy/=d;
      l.a.vx += dx*f*0.15; l.a.vy += dy*f*0.15;
      l.b.vx -= dx*f; l.b.vy -= dy*f;
    });
    nodes.forEach(n=>{
      if(!n.active) return;
      n.vx*=0.84; n.vy*=0.84;
      const sp = Math.hypot(n.vx, n.vy);
      if(sp > 2.6){ n.vx*=2.6/sp; n.vy*=2.6/sp; }
      n.x+=n.vx; n.y+=n.vy;
    });
  }

  /* arrivals: node lands at its hub, ripple + pulse + sparks */
  function activateHub(h){
    if(h.active) return;
    h.active = true; h.born = clock;
    ripples.push({n:h, r0:h.r+2, t:0, dur:900, c:nc(h.niche)});
  }
  function onArrive(i){
    const leaf = leafByIdx[i], hub = leaf.hubRef, c = nc(leaf.niche);
    activateHub(hub);
    const ang = hub.spawned*2.399963; hub.spawned++;
    const dist = hub.r + 8 + Math.random()*16;
    leaf.x = hub.x + Math.cos(ang)*dist; leaf.y = hub.y + Math.sin(ang)*dist;
    leaf.vx = Math.cos(ang)*0.8; leaf.vy = Math.sin(ang)*0.8;
    leaf.active = true; leaf.born = clock;
    const l = links[i];
    l.active = true; l.born = clock;
    ripples.push({n:leaf, r0:leaf.r+2, t:0, dur:760+leaf.r*36, c});
    if(pulses.length < 40) pulses.push({l, t:0, dur:480});
    const burst = leaf.r > 7 ? 3 : 1;
    for(let k=0;k<burst;k++){
      const a2 = Math.random()*6.283;
      particles.push({x:leaf.x, y:leaf.y, vx:Math.cos(a2)*.018, vy:Math.sin(a2)*.016-.014, life:0, dur:1100+Math.random()*900, c, r:.8+Math.random()*1.2});
    }
  }
  function ambient(dt){
    spawnAcc += dt;
    const every = mode==='live' ? 150 : 230;
    const cap = W < 640 ? 30 : 60;
    while(spawnAcc > every){
      spawnAcc -= every;
      if(particles.length < cap && arrived >= 0){
        const leaf = leafByIdx[(Math.random()*(arrived+1))|0];
        const a = Math.random()*6.283, rr = leaf.r+2+Math.random()*6;
        particles.push({x:leaf.x+Math.cos(a)*rr, y:leaf.y+Math.sin(a)*rr,
          vx:Math.cos(a)*.006+(Math.random()-.5)*.004, vy:Math.sin(a)*.006-.008,
          life:0, dur:2400+Math.random()*2000, c:nc(leaf.niche), r:.7+Math.random()*1.1});
      }
    }
    if(mode==='live'){
      pulseAcc += dt;
      while(pulseAcc > 170){
        pulseAcc -= 170;
        if(pulses.length < 40 && arrived >= 0){
          const l = links[(Math.random()*(arrived+1))|0];
          if(l && l.active) pulses.push({l, t:0, dur:520+Math.random()*300});
        }
      }
    }
    for(let i=particles.length-1;i>=0;i--){ const q=particles[i]; q.life+=dt; if(q.life>q.dur){ particles.splice(i,1); continue; } q.x+=q.vx*dt; q.y+=q.vy*dt; }
    for(let i=ripples.length-1;i>=0;i--){ const q=ripples[i]; q.t+=dt; if(q.t>q.dur) ripples.splice(i,1); }
    for(let i=pulses.length-1;i>=0;i--){ const q=pulses[i]; q.t+=dt; if(q.t>q.dur) pulses.splice(i,1); }
  }

  /* render */
  function draw(){
    ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.clearRect(0,0,W,H);

    /* depth backdrop + radar rings (screen space) */
    const bg = ctx.createRadialGradient(W/2, H/2, 40, W/2, H/2, Math.max(W,H)*0.72);
    bg.addColorStop(0,'rgba(56,120,255,0.055)');
    bg.addColorStop(.55,'rgba(18,22,32,0.28)');
    bg.addColorStop(1,'rgba(9,11,15,0.55)');
    ctx.fillStyle = bg; ctx.fillRect(0,0,W,H);
    ctx.strokeStyle = 'rgba(122,160,255,0.045)'; ctx.lineWidth = 1;
    for(let k=1;k<=3;k++){ ctx.beginPath(); ctx.arc(W/2, H/2, Math.min(W,H)*0.16*k, 0, 7); ctx.stroke(); }

    /* camera */
    ctx.save();
    ctx.translate(cam.x, cam.y); ctx.scale(cam.z, cam.z);

    /* cluster highlight eases in and out */
    dimT += ((hoverNode?1:0) - dimT) * (REDUCE ? 1 : 0.15);
    const hovSet = hoverNode ? hoverNode.neighbors : null;
    const isLit = n => !hoverNode || n===hoverNode || (hovSet && hovSet.has(n));

    /* links: colored glow threads (additive) */
    ctx.globalCompositeOperation = 'lighter';
    const lpulse = mode==='live' && !REDUCE ? 1 + Math.sin(clock/1300)*0.15 : 1;
    links.forEach(l=>{
      if(!l.active) return;
      const age = REDUCE ? 1 : clamp01((clock - l.born)/500);
      const lit = !hoverNode || (l.a===hoverNode || l.b===hoverNode);
      const alpha = age * (lit ? 0.13*lpulse + dimT*0.30 : 0.13*(1 - dimT*0.85));
      ctx.strokeStyle = hexA(nc(l.b.niche), alpha);
      ctx.lineWidth = lit && dimT>0.05 ? 1.5 : 1;
      ctx.beginPath(); ctx.moveTo(l.a.x, l.a.y); ctx.lineTo(l.b.x, l.b.y); ctx.stroke();
    });

    /* light pulses traveling the links */
    pulses.forEach(q=>{
      const t = q.t/q.dur, e = easeIO(t);
      const ax=q.l.a.x, ay=q.l.a.y, bx=q.l.b.x, by=q.l.b.y;
      const x = lerp(ax,bx,e), y = lerp(ay,by,e);
      const e2 = Math.max(e-0.10, 0), x2 = lerp(ax,bx,e2), y2 = lerp(ay,by,e2);
      const c = nc(q.l.b.niche);
      ctx.strokeStyle = hexA(c, .55*(1-t*0.5)); ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.moveTo(x2,y2); ctx.lineTo(x,y); ctx.stroke();
      ctx.fillStyle = hexA(c, .9); ctx.beginPath(); ctx.arc(x, y, 1.8, 0, 7); ctx.fill();
    });

    /* arrival ripples (anchored to their node) + drifting sparks */
    ripples.forEach(q=>{
      const t = q.t/q.dur, e = 1 - Math.pow(1-t, 2.2);
      ctx.strokeStyle = hexA(q.c, .42*(1-t)); ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.arc(q.n.x, q.n.y, q.r0 + e*26, 0, 7); ctx.stroke();
    });
    particles.forEach(q=>{
      const t = q.life/q.dur, a = t < .2 ? t/.2 : 1-(t-.2)/.8;
      ctx.fillStyle = hexA(q.c, .5*a);
      ctx.beginPath(); ctx.arc(q.x, q.y, q.r, 0, 7); ctx.fill();
    });

    /* nodes: additive halo + crisp core */
    nodes.forEach(n=>{
      if(!n.active) return;
      const age = REDUCE ? 1 : clamp01((clock - n.born)/450);
      const pop = REDUCE ? 1 : easeOutBack(age);
      const breathe = REDUCE ? 0 : clamp01((clock - n.born - 700)/1500);
      const bx = n.x + Math.sin(clock/1400 + n.phase)*1.3*breathe;
      const by = n.y + Math.cos(clock/1700 + n.phase)*1.3*breathe;
      const lit = isLit(n);
      const fade = lit ? 1 : 1 - dimT*0.82;
      const c = nc(n.niche);
      const r = Math.max(n.r*pop, 0.4);
      ctx.globalCompositeOperation = 'lighter';
      if(n.hub){
        ctx.fillStyle = hexA(c, .10*fade);
        ctx.beginPath(); ctx.arc(bx, by, r+9, 0, 7); ctx.fill();
      } else if(n.halo > 0.12){
        ctx.fillStyle = hexA(c, (.10 + .16*n.halo)*fade*(lit && dimT>0.05 ? 1.8 : 1));
        ctx.beginPath(); ctx.arc(bx, by, r+4+n.halo*3, 0, 7); ctx.fill();
      }
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = fade;
      ctx.beginPath(); ctx.arc(bx, by, r, 0, 7);
      ctx.fillStyle = n.hub ? '#10141b' : c;
      ctx.fill();
      if(n.hub){ ctx.lineWidth = 2; ctx.strokeStyle = c; ctx.stroke(); }
      if(n === hoverNode){ ctx.lineWidth = 1.5; ctx.strokeStyle = '#fff'; ctx.stroke(); }
      if(n.hub){
        ctx.fillStyle = 'rgba(220,221,222,'+(0.9*fade).toFixed(3)+')';
        ctx.font = '600 11px Inter,sans-serif'; ctx.textAlign = 'center';
        ctx.fillText(n.niche.split(' / ')[0], bx, by - r - 9);
      }
      ctx.globalAlpha = 1;
      n.rx = bx; n.ry = by;   /* rendered position for picking */
    });
    ctx.restore();

    /* radar sweep once the archive is live (screen space) */
    if(!REDUCE && mode==='live' && ctx.createConicGradient){
      const ang = (liveClock/5200)*Math.PI*2;
      const cg = ctx.createConicGradient(ang, W/2, H/2);
      cg.addColorStop(0,'rgba(120,200,255,0.10)');
      cg.addColorStop(0.06,'rgba(120,200,255,0.028)');
      cg.addColorStop(0.16,'rgba(120,200,255,0)');
      cg.addColorStop(1,'rgba(120,200,255,0)');
      ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = cg;
      ctx.beginPath(); ctx.arc(W/2, H/2, Math.max(W,H)*0.62, 0, 7); ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
    }
  }

  function updateHUD(){
    const i = Math.min(Math.floor(p), N-1), f = p - i;
    dateEl.textContent = fdate(lerp(times[i], times[Math.min(i+1, N-1)], f));
    progEl.textContent = Math.round((N<2 ? 1 : p/(N-1))*100)+'%';
    METRICS.forEach(m=> chipVals[m.key].textContent = fmt(Math.round(valAt(m, p))));
    const live = mode==='live';
    stateEl.textContent = live ? 'live · archive synced' : 'processing archive';
    statusChip.classList.toggle('live', live);
  }

  function frame(now){
    const dt = lastT==null ? 16.7 : Math.min(now-lastT, 50);  /* clamped: no jumps after tab switches */
    lastT = now; clock += dt;
    if(mode==='reveal'){
      acc += dt;
      hubs.forEach((h,j)=>{ if(!h.active && acc >= j*110) activateHub(h); });
      const f = Math.min(acc/DUR, 1);
      p = easeIO(f)*(N-1);
      while(arrived < Math.floor(p)){ arrived++; onArrive(arrived); }
      if(f >= 1) mode = 'live';
    } else liveClock += dt;
    tickPhysics();
    ambient(dt);
    draw(); updateHUD();
    requestAnimationFrame(frame);
  }

  /* interaction: pan, zoom, hover, click */
  function toWorld(px,py){ return {x:(px-cam.x)/cam.z, y:(py-cam.y)/cam.z}; }
  function pick(px,py){
    const pt = toWorld(px,py);
    let best = null, bd = 1e9;
    nodes.forEach(n=>{
      if(!n.active) return;
      const dx = (n.rx ?? n.x)-pt.x, dy = (n.ry ?? n.y)-pt.y, dd = dx*dx+dy*dy, rr = (n.r+4)*(n.r+4);
      if(dd < rr && dd < bd){ bd = dd; best = n; }
    });
    return best;
  }
  canvas.addEventListener('mousemove', e=>{
    const rc = canvas.getBoundingClientRect();
    if(dragging){
      cam.x += e.clientX-dragStart.x; cam.y += e.clientY-dragStart.y;
      dragStart = {x:e.clientX, y:e.clientY};
      if(REDUCE) draw();
      return;
    }
    hoverNode = pick(e.clientX-rc.left, e.clientY-rc.top);
    if(hoverNode && !hoverNode.hub){
      const d = hoverNode.d;
      tip.style.display = 'block';
      tip.style.left = Math.min(e.clientX-rc.left+14, W-272)+'px';
      tip.style.top = Math.min(e.clientY-rc.top+12, H-84)+'px';
      tip.innerHTML = '<div class="t">'+esc((d.cap||'(no caption)').slice(0,90))+'</div><div class="m">'+d.ts.slice(0,10)+' · '+fmt(d.views)+' views · '+fmt(d.saves)+' saves · '+fmt(d.shares)+' shares</div>';
      canvas.style.cursor = 'pointer';
    } else {
      tip.style.display = 'none';
      canvas.style.cursor = dragging ? 'grabbing' : 'grab';
    }
    if(REDUCE) draw();
  });
  canvas.addEventListener('mouseleave', ()=>{ hoverNode = null; tip.style.display = 'none'; if(REDUCE) draw(); });
  canvas.addEventListener('mousedown', e=>{ if(!hoverNode || hoverNode.hub){ dragging = true; dragStart = {x:e.clientX, y:e.clientY}; } });
  addEventListener('mouseup', ()=> dragging = false);
  canvas.addEventListener('click', ()=>{ if(hoverNode && !hoverNode.hub) open(hoverNode.d.url, '_blank'); });
  canvas.addEventListener('wheel', e=>{
    e.preventDefault();
    const rc = canvas.getBoundingClientRect();
    const mx = e.clientX-rc.left, my = e.clientY-rc.top;
    const nz = Math.min(Math.max(cam.z*(e.deltaY<0 ? 1.1 : 0.9), 0.4), 3);
    cam.x = mx-(mx-cam.x)*nz/cam.z; cam.y = my-(my-cam.y)*nz/cam.z; cam.z = nz;
    if(REDUCE) draw();
  }, {passive:false});

  function settleStatic(){
    nodes.forEach(n=>{ n.active = true; n.born = -1e6; });
    links.forEach(l=>{ l.active = true; l.born = -1e6; });
    for(let k=0;k<320;k++) tickPhysics();
    draw(); updateHUD();
  }
  document.getElementById('replay').addEventListener('click', ()=>{
    cam = {x:0, y:0, z:1}; hoverNode = null; dimT = 0;
    build();
    mode = 'reveal'; acc = 0; p = 0; arrived = -1; liveClock = 0; lastT = null;
    if(REDUCE){ mode = 'live'; p = N-1; arrived = N-1; settleStatic(); }
  });
  addEventListener('resize', ()=>{ size(); if(REDUCE) draw(); });

  /* boot */
  size();
  build();
  if(REDUCE){ mode = 'live'; p = N-1; arrived = N-1; settleStatic(); }
  else requestAnimationFrame(frame);
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
