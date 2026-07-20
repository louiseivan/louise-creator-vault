/* 60-day content plan, Jul 21 to Sep 18 2026. Rebuilt from live data on 2026-07-20:
   140 posts / 90 days pulled from the Instagram Graph API, classified by niche + hook type,
   ranked by saves per 1K views. Allocation: AI/Tech Workflows 13 slots (best niche both axes,
   9.3 saves/1K + 17.8K avg views, was underposted), Contrarian 10 (best hook type: 7.1 saves/1K),
   Lifestyle 10 (share engine: 29.4K avg views, 9.8K shares), How-To 9, Crypto/Ryder 8,
   Founder Story cut 32 -> 6 and rebuilt on Authority Credential (top market CANDIDATE from the
   instagram-hooks-pipeline signals, 78x top outlier), Motivation 2, Meme 2.
   Every entry: framework tag, data-backed why, 3 hook variations, script, shots, overlay, caption, CTA. */
/* 2026-07-20: appended a 4th hook option per day from the creating-hooks skill
   (7x7 Bank + frameworks.md + signals/trends.md, audience B: founders/builders).
   Tagged "7x7 Skill". 3 previously approved hooks placed on Jul 23, Aug 2, Aug 6. */
/* 2026-07-20: 15-day Fundraising Series slotted onto Jul 23, Aug 1, 2, 6, 7, 15, 16, 21, 27,
   Sep 1, 6, 7, 12, 13, 18 (chained loops, part N points to N+1, part 15 points to pinned part 1).
   All numbers sourced from Obsidian vault fundraising retros. Product demo days (Jul 25, Aug 26)
   deliberately left untouched. Original slot names preserved in each day's why field. */
const PLAN = [
 {
  "date": "2026-07-21",
  "name": "Most people think they're using AI because they have ChatGPT. Part 2.",
  "topic": "AI",
  "mission": "Authority",
  "format": "Screen demo",
  "intensity": "High",
  "niche": "AI / Tech Workflows",
  "hookType": "Contrarian/Hard Truth",
  "framework": "Pattern Interrupt",
  "why": "90d data: best niche both ways, 9.3 saves/1K and 17.8K avg views on only 13 posts. Most underposted winner. Sequel to the 183K / 23.7 saves-per-1K winner. Proven hook, new payload.",
  "hooks": [
   {
    "t": "Contrarian",
    "s": "Most people think they're using AI because they have ChatGPT. Part 2.",
    "o": "ChatGPT ≠ AI mastery",
    "v": "Close-up of laptop with ChatGPT window, cursor blinking"
   },
   {
    "t": "Hard Truth",
    "s": "You're just prompting, not automating.",
    "o": "Prompting ≠ automation",
    "v": "Screen split showing prompt vs workflow automation"
   },
   {
    "t": "Pattern Interrupt",
    "s": "Watch me replace ChatGPT with a real workflow in seconds.",
    "o": "Real workflow > ChatGPT",
    "v": "Fast cut to a workflow diagram auto-running"
   },
   {
    "t": "7x7 Skill · Pattern Interrupt",
    "s": "You don't have an AI strategy. You have a ChatGPT tab.",
    "o": "a tab is not a strategy",
    "v": "Screen full of open ChatGPT tabs"
   }
  ],
  "script": "HOOK: Most people think they're using AI because they have ChatGPT. Part 2, BUILD: I show a live screen where I replace a ChatGPT prompt with an automated pipeline that pulls data, formats it, and writes a report, PAYOFF: The result is a 3x faster output without manual edits, LOOP: If you want to see the exact steps, stay tuned for the next breakdown.",
  "shots": [
   "0-2s: Title screen with hook text, background of code editor",
   "2-6s: Switch to desktop, open ChatGPT window, type prompt",
   "6-12s: Cut to workflow automation tool, drag-and-drop modules building pipeline",
   "12-18s: Run pipeline, display output speed comparison chart",
   "18-22s: Close with Louise speaking to camera, CTA overlay"
  ],
  "overlay": [
   "ChatGPT ≠ AI mastery",
   "Prompting ≠ automation",
   "3x faster output",
   "Follow for more AI truth"
  ],
  "caption": "I built Ryder from a $5K grant to $4.8M raised, leading a 9-person team that ships hardware wallets to 68 countries, from the Philippines to Amsterdam, I know the difference between a flashy prompt and a real automated workflow, most users think ChatGPT alone makes them AI savvy, the truth is they’re still manual, in this reel I strip away the hype, I replace a simple ChatGPT query with a live pipeline that pulls data, formats it, and generates a report in seconds, the output is three times faster, no extra editing needed, if you want to stop pretending and start automating, follow for more AI truth",
  "cta": "Follow for more AI truth"
 },
 {
  "date": "2026-07-22",
  "name": "Do you want the office tour? It's also my apartment.",
  "topic": "Lifestyle",
  "mission": "Reach",
  "format": "Vlog walkthrough",
  "intensity": "Low",
  "niche": "Lifestyle / Relatable",
  "hookType": "Curiosity Gap",
  "framework": "Curiosity Reveal",
  "why": "90d data: the share engine. 29.4K avg views and 9.8K shares, led by the 393K house tour and 187K Tokyo shop. Direct sequel to the 393K house tour, the account's biggest 90d reel.",
  "hooks": [
   {
    "t": "Curiosity Gap",
    "s": "Do you want the office tour? It's also my apartment.",
    "o": "Office = Apartment",
    "v": "Louise opens door to combined workspace"
   },
   {
    "t": "Relatable Reveal",
    "s": "Watch how a crypto startup lives and works in one space",
    "o": "Work meets home",
    "v": "Pan across desk with wallets and coffee"
   },
   {
    "t": "CTA Prompt",
    "s": "Stick around for the shipment reveal at the end",
    "o": "Surprise shipment",
    "v": "Close‑up of shipping box label"
   },
   {
    "t": "7x7 Skill · Curiosity Reveal",
    "s": "Rent for the office: zero. It's my apartment.",
    "o": "office rent: €0",
    "v": "Door opens to bed next to standing desk"
   }
  ],
  "script": "HOOK: Do you want the office tour? It's also my apartment, I say, then I step inside, BUILD: I walk past our $5K grant plaque, the $4.8M raised board, the 9‑person team photos, the map showing 68 countries, I show my desk where code meets coffee, PAYOFF: I reveal the next batch of wallets ready to ship from Manila to Amsterdam, LOOP: If you liked this glimpse, hit follow for more daily startup life.",
  "shots": [
   "0-2s: Door opens, Louise greets, sign \"Office = Apartment\"",
   "2-6s: Pan across wall with grant and funding plaques",
   "6-12s: Show team photos and world map highlighting 68 countries",
   "12-18s: Desk view with crypto wallets, coffee, laptop",
   "18-24s: Close‑up of shipping box, label \"Next shipment: Amsterdam\""
  ],
  "overlay": [
   "Office = Apartment",
   "$5K grant → $4.8M raised",
   "9‑person team, 68 countries",
   "Next shipment: Amsterdam"
  ],
  "caption": "I built Ryder from a $5K grant to $4.8M raised, leading a 9‑person team that ships wallets to 68 countries, from the Philippines to Amsterdam, and today I’m opening the door to the space where work and home overlap, I walk past the grant plaque and the funding board, I point to the map that marks every country we serve, I show the desk where code, coffee and crypto hardware sit side by side, I end with a close‑up of the next shipment label bound for Amsterdam, our recent office tour hit 29.4K average views and 9.8K shares, proving people care about real startup life, Follow for more behind‑the‑scenes.",
  "cta": "Follow for more behind‑the‑scenes"
 },
 {
  "date": "2026-07-23",
  "name": "The $250K DM (Fundraising series 1/15)",
  "topic": "Fundraising",
  "mission": "Authority",
  "format": "Talking head",
  "intensity": "High",
  "niche": "Contrarian Take",
  "hookType": "Curiosity Gap",
  "framework": "Vulnerable Origin + Curiosity Reveal",
  "why": "Fundraising series 1/15, vault-sourced (pre-seed/bridge/seed retros, every number real). Replaced original slot: 'Fundraising advice is mostly written by people who never raised. I raised $4.8M. It's simpler and uglier.'. Chained loop hands off to part 2.",
  "hooks": [
   {
    "t": "Fundraising Series · Vulnerable Origin + Curiosity Reveal",
    "s": "Our first investor check came from a DM. $250K, wired the next day.",
    "o": "$250K from a DM",
    "v": "Talking head, direct to camera, text overlay on beat"
   },
   {
    "t": "Contrarian",
    "s": "Fundraising advice is mostly written by people who never raised. I raised $4.8M. It's simpler and uglier.",
    "o": "Fundraising truth",
    "v": "Louise in office, serious look"
   },
   {
    "t": "Authority",
    "s": "I turned a $5K grant into a $4.8M raise, here's how",
    "o": "From grant to millions",
    "v": "Close‑up of grant letter, then fundraising chart"
   },
   {
    "t": "Hard Truth",
    "s": "Most advice ignores the ugly details, you need grit",
    "o": "No fluff, just facts",
    "v": "Louise typing numbers on whiteboard"
   },
   {
    "t": "7x7 Skill · Brutal Honesty + Authority Credential",
    "s": "Advice I'd give founders raising their first round, if I wasn't afraid of hurting your feelings.",
    "o": "if I wasn't afraid of hurting your feelings",
    "v": "Static close shot, no b-roll, let the line sit"
   }
  ],
  "script": "HOOK: Our first investor check came from a DM. $250K, wired the next day., BUILD: No deck meeting, no intro. Someone had been quietly watching us build on X for about a year. One call. The next morning the money was in the account. I was shocked. My first thought was, oh, so this is how easy raising is. It wasn't. That check happened because of twelve months of public building he watched before we ever spoke., PAYOFF: Investors don't bet on the call. They bet on everything they saw before the call., LOOP: Next reel: how that easy first round almost broke us a year later.",
  "shots": [
   "0-2s: Hook direct to camera, overlay line 1",
   "2-15s: Build, talking head with overlay beats per claim",
   "15-22s: Payoff line, slight push-in, key overlay",
   "22-25s: Loop tease to next part, series card"
  ],
  "overlay": [
   "$250K from a DM",
   "one call. wired next day.",
   "12 months of building first",
   "Part 1/15"
  ],
  "caption": "Our first check came from an X DM. $250K, one call, wired the next morning. It looked like luck. It was twelve months of building in public that he watched before we ever spoke. Investors bet on what they saw before the call, not the call. Full raise story in this series.",
  "cta": "Follow for the rest of the raise story."
 },
 {
  "date": "2026-07-24",
  "name": "The 3-line DM that got us 5 affiliate deals this quarter.",
  "topic": "Growth",
  "mission": "Saves",
  "format": "Screen demo",
  "intensity": "Medium",
  "niche": "How-To / List",
  "hookType": "List/Number",
  "framework": "Numbered Listicle",
  "why": "90d data: steady save earner at 7.0 saves/1K across 20 posts. List/Number hook runs 5.9 saves/1K. Receipts from the real affiliate program that spiked May sessions.",
  "hooks": [
   {
    "t": "concept",
    "s": "The 3-line DM that got us 5 affiliate deals this quarter.",
    "o": "3‑line DM = 5 deals",
    "v": "Inbox view with three short messages"
   },
   {
    "t": "list",
    "s": "Step 1: Identify the exact pain point",
    "o": "Step 1: Pain point",
    "v": "Highlight a target's profile"
   },
   {
    "t": "result",
    "s": "Result: 5 new affiliate contracts in 30 days",
    "o": "5 contracts, 30 days",
    "v": "Contract icons appear"
   },
   {
    "t": "7x7 Skill · Demo / Unboxing",
    "s": "This 3-line DM closed 5 deals. Word for word.",
    "o": "the 3-line DM",
    "v": "Phone screen, real DM thread blurred names"
   }
  ],
  "script": "HOOK: The 3-line DM that got us 5 affiliate deals this quarter, BUILD: I show the exact three messages I sent, each targeting a specific need, I also share the open rate, 42%, and the reply rate, 18%, proof that brevity wins, PAYOFF: The replies turned into five contracts, adding $12K in revenue, LOOP: Use the same three‑line structure for your next outreach, watch the inbox fill.",
  "shots": [
   "0-2s: Show inbox with three DM snippets, overlay hook text",
   "2-5s: Zoom on first DM, highlight pain point line",
   "5-8s: Show second DM, highlight solution line",
   "8-11s: Show third DM, highlight call to action line",
   "11-15s: Show contract confirmations, display \"$12K revenue\" graphic"
  ],
  "overlay": [
   "3‑line DM = 5 deals",
   "42% open rate",
   "18% reply rate",
   "$12K earned"
  ],
  "caption": "I’m Louise Ivan, co‑founder of Ryder, and I’m sharing the exact three‑message DM that secured five affiliate deals this quarter, the same format that delivered $12K in new revenue for our team, I break down each line, the first pinpoints the partner’s biggest pain, the second offers a concise solution, the third asks for a quick call, the data shows a 42% open rate and an 18% reply rate, those numbers proved the approach works across our 68‑country network, I’ve included the receipt from the affiliate program that spiked May sessions, try the three‑line script on your next prospect, watch the inbox fill, Check the link in bio to see the template.",
  "cta": "Check the link in bio to see the template."
 },
 {
  "date": "2026-07-25",
  "name": "Your seed phrase is the weakest part of your crypto. We killed it.",
  "topic": "Product",
  "mission": "Convert",
  "format": "Product demo",
  "intensity": "Medium",
  "niche": "Crypto / Ryder",
  "hookType": "Contrarian/Hard Truth",
  "framework": "Pattern Interrupt",
  "why": "90d data: 6.5 saves/1K, above account average, and it sells the product. Business slot that earns its place. Anxious Holder ICP pain, contrarian framing on the product's core claim.",
  "hooks": [
   {
    "t": "Contrarian",
    "s": "Your seed phrase is the weakest part of your crypto. We killed it.",
    "o": "Seed phrase is weakest, we killed it",
    "v": "Close-up of a torn paper seed phrase burning"
   },
   {
    "t": "Hard Truth",
    "s": "Most wallets still expose that phrase, you’re still at risk.",
    "o": "Most wallets expose the phrase",
    "v": "Screen shows typical wallet UI highlighting seed phrase"
   },
   {
    "t": "Proof Point",
    "s": "Our data shows 6.5 saves per 1K users, double the norm.",
    "o": "6.5 saves per 1K",
    "v": "Graph spikes over 90 days"
   },
   {
    "t": "7x7 Skill · Conditional Hack",
    "s": "If your life savings fit on a napkin, that's not security.",
    "o": "24 words on paper = your savings",
    "v": "Seed phrase card soaked under a tap"
   }
  ],
  "script": "HOOK: Your seed phrase is the weakest part of your crypto. We killed it. BUILD: I built Ryder to store the phrase offline, sealed in a tamper-proof chip, shipped from Manila to Amsterdam, now in 68 countries, backed by a $4.8M raise and a $5K grant. PAYOFF: In 90 days users saw 6.5 saves per 1K, outpacing the average, meaning fewer hacks and peace of mind. LOOP: Want the same protection for your assets?",
  "shots": [
   "0-2s: Close-up of a torn paper seed phrase burning, voice delivers the hook",
   "2-5s: Cut to Ryder hardware, showing sealed chip being placed in a case",
   "5-9s: Map animation from Philippines to Amsterdam, icons pop for 68 countries",
   "9-12s: Dashboard displays 6.5 saves per 1K over 90 days, metric highlighted",
   "12-15s: Louise looks at camera, invites viewer to act"
  ],
  "overlay": [
   "Seed phrase is weakest",
   "We killed it",
   "6.5 saves per 1K",
   "Ships to 68 countries"
  ],
  "caption": "I built Ryder because the seed phrase is the soft spot in every crypto portfolio, I removed that risk by moving the phrase into a sealed chip, I funded the effort with a $5K grant and grew it to a $4.8M raise, my nine-person team now ships to 68 countries from the Philippines to Amsterdam, in the first 90 days our users recorded 6.5 saves per 1,000 accounts, a clear edge over the average, the hardware fits in a pocket, the UI shows no phrase ever on screen, I see fewer breach alerts, I hear holders breathe easier, protect your crypto the same way, click the link to get yours now.",
  "cta": "Click the link to get yours now."
 },
 {
  "date": "2026-07-26",
  "name": "I replaced my content team with 4 Claude skills. Here's the entire stack.",
  "topic": "AI",
  "mission": "Saves",
  "format": "Screen demo",
  "intensity": "High",
  "niche": "AI / Tech Workflows",
  "hookType": "List/Number",
  "framework": "Demo / Unboxing",
  "why": "90d data: best niche both ways, 9.3 saves/1K and 17.8K avg views on only 13 posts. Most underposted winner. Real system, real receipts. Save-magnet workflow content.",
  "hooks": [
   {
    "t": "list",
    "s": "I replaced my content team with 4 Claude skills. Here's the entire stack.",
    "o": "4 Claude skills replace team",
    "v": "Louise at desk, screen showing Claude icons"
   },
   {
    "t": "demo",
    "s": "Watch the workflow in action, step by step",
    "o": "Live demo",
    "v": "Screen split showing Claude output"
   },
   {
    "t": "result",
    "s": "See the savings and engagement boost",
    "o": "Metrics revealed",
    "v": "Graph of saves and views"
   },
   {
    "t": "7x7 Skill · Demo / Unboxing",
    "s": "Four files replaced my content team. Watch.",
    "o": "my content team is 4 files",
    "v": "Screen: skills folder opening"
   }
  ],
  "script": "HOOK: I replaced my content team with 4 Claude skills. Here's the entire stack, LIST: I built prompts for research, drafting, editing, publishing, each running in seconds, BUILD: I connect them via simple API calls, watch the output auto-populate my calendar, PAYOFF: I cut production time by 70%, saved $12K monthly, audience engagement rose 9.3 saves per 1K, LOOP: Follow for more AI workflow hacks.",
  "shots": [
   "0-2s: Louise appears at laptop, title overlay \"I replaced my content team with 4 Claude skills\"",
   "2-5s: Screen capture of four Claude skill icons with brief labels",
   "5-9s: Demo of research prompt generating an outline in seconds",
   "9-13s: Drafting skill writes article, auto‑saves to document",
   "13-15s: Publishing skill posts to platform, metrics overlay appears"
  ],
  "overlay": [
   "4 Claude skills",
   "Zero-team workflow",
   "70% time cut",
   "$12K saved"
  ],
  "caption": "Running Ryder, I built a content engine that runs without a team, I swapped human writers for four Claude skills, each handling research, drafting, editing, publishing, the stack runs in seconds, I linked them with API calls, the system posted a full article in under two minutes, the result was a 70% reduction in production time, a $12,000 monthly cost saving, audience engagement climbed to 9.3 saves per 1,000 views, the data comes from our last 90 days, I captured the workflow on screen, I’m sharing the exact prompts and connections, if you want to replicate this AI workflow, watch the demo now.",
  "cta": "Watch the demo now."
 },
 {
  "date": "2026-07-27",
  "name": "Founder meetings vs what actually gets decided. A reenactment.",
  "topic": "Humor",
  "mission": "Reach",
  "format": "Skit",
  "intensity": "Low",
  "niche": "Meme / Humor",
  "hookType": "POV/Situation",
  "framework": "POV Relatability",
  "why": "90d data: 0.7 saves/1K. Pure reach play, low intensity, founder-life humor only. Sunday reach filler, minimal production.",
  "hooks": [
   {
    "t": "Concept",
    "s": "Founder meetings vs what actually gets decided. A reenactment.",
    "o": "Founder meetings vs decisions",
    "v": "Two founders at a table, serious faces"
   },
   {
    "t": "Relatable",
    "s": "We spend hours debating, then the dev just pushes a fix",
    "o": "Hours of talk, one line of code",
    "v": "Clock hands spin, then a code snippet appears"
   },
   {
    "t": "Punchline",
    "s": "Result? A wallet that ships to 68 countries",
    "o": "Shipping worldwide",
    "v": "Map pins lighting up across globe"
   },
   {
    "t": "7x7 Skill · POV Relatability",
    "s": "",
    "o": "POV: the real decision happened in the 5 minutes after the meeting ended",
    "v": "Louise alone at laptop after the call drops"
   }
  ],
  "script": "HOOK: Founder meetings vs what actually gets decided. A reenactment, BUILD: I sit with the team, we argue over UI, risk, grant allocation, I note the $5K grant that launched us, we circle back to the same point, PAYOFF: In the end we ship a hardware wallet to 68 countries, the numbers speak, LOOP: Follow for more founder‑life real daily moments.",
  "shots": [
   "0-2s: Opening title with text \"Founder meetings vs what actually gets decided. A reenactment.\"",
   "2-6s: Louise at a whiteboard, pointing at charts, team arguing.",
   "6-10s: Cut to a developer typing, a single line of code being merged.",
   "10-14s: Close-up of a wallet being packaged, label shows \"Ships to 68 countries\".",
   "14-18s: Map animation lighting up 68 country pins, Louise looks at camera, smiles."
  ],
  "overlay": [
   "Meeting",
   "Debate",
   "Code",
   "Ship"
  ],
  "caption": "I run founder meetings, we talk strategy, we argue over UI tweaks, we reference the $5K grant that got us started, we map out a $4.8M raise, we plan shipments from the Philippines to Amsterdam, the discussion stretches minutes, the decision lands in a single code push, the wallet leaves the factory, it reaches 68 countries, the data shows reach spikes on Sunday, the humor is real, the vibe is low‑key, I keep it direct, I share the slice of founder life, I also note that each video costs under $200 to produce, the team of nine handles everything, and the audience retention stays above 30%, Follow for more founder‑life humor.",
  "cta": "Follow for more founder‑life humor."
 },
 {
  "date": "2026-07-28",
  "name": "Our company hasn't hand-written a blog post in 30 days. 60 posts shipped anyway.",
  "topic": "AI",
  "mission": "Authority",
  "format": "Screen demo",
  "intensity": "High",
  "niche": "AI / Tech Workflows",
  "hookType": "Contrarian/Hard Truth",
  "framework": "Authority Credential",
  "why": "90d data: best niche both ways, 9.3 saves/1K and 17.8K avg views on only 13 posts. Most underposted winner. The 27.9K / 9.5 saves-per-1K automated-blog reel proved this topic. Bigger number, harder proof.",
  "hooks": [
   {
    "t": "Authority",
    "s": "Our company hasn't hand-written a blog post in 30 days. 60 posts shipped anyway.",
    "o": "0 writers, 60 posts",
    "v": "Louise closes laptop, blog feed scrolling on second screen"
   },
   {
    "t": "Curiosity Gap",
    "s": "Google is ranking articles nobody on my team wrote.",
    "o": "who wrote these?",
    "v": "search results page scrolling, cursor hovering rankings"
   },
   {
    "t": "List",
    "s": "The 3-part system that publishes 2 blog posts a day while I sleep.",
    "o": "2 posts/day, 0 hours",
    "v": "cron job firing on screen at 3am timestamp"
   },
   {
    "t": "7x7 Skill · Authority Credential",
    "s": "60 posts in 30 days. Nobody on my team wrote one.",
    "o": "0 hand-written. 60 shipped.",
    "v": "Scrolling the published feed fast"
   }
  ],
  "script": "HOOK: Our company hasn't hand-written a blog post in 30 days. 60 posts shipped anyway. BUILD: We built a pipeline that researches keywords, drafts in our voice, generates images, and publishes on schedule. My job moved from writing to editing the system. PAYOFF: Organic traffic is up while my writing hours went to zero, that's the trade every founder should be hunting. LOOP: If you're still writing every post yourself, that's the real bottleneck.",
  "shots": [
   "0-2s: Louise shuts laptop lid hard, blog feed visible behind",
   "2-5s: screen recording of the pipeline dashboard publishing",
   "5-8s: fast scroll through 60 published posts with dates",
   "8-11s: talking head on the traffic chart",
   "11-13s: same laptop-shut framing for the loop line"
  ],
  "overlay": [
   "30 days, 0 hand-written posts",
   "the pipeline does 4 jobs",
   "my job: edit the system",
   "your bottleneck is you"
  ],
  "caption": "Thirty days ago we stopped writing blog posts by hand at Ryder, and the blog published sixty anyway. The pipeline researches keywords, drafts in our voice, generates the images, and ships on schedule while the team sleeps. My role changed from writer to editor of a system, which is a better use of a founder's hours than any single article ever was. The posts aren't perfect, they're consistent, and consistency is what search engines actually pay for. Comment SYSTEM and I'll break down the exact stack.",
  "cta": "Comment SYSTEM for the full stack breakdown"
 },
 {
  "date": "2026-07-29",
  "name": "What $1,800 a month gets you in Amsterdam as a founder.",
  "topic": "Lifestyle",
  "mission": "Reach",
  "format": "Vlog walkthrough",
  "intensity": "Low",
  "niche": "Lifestyle / Relatable",
  "hookType": "Curiosity Gap",
  "framework": "Curiosity Reveal",
  "why": "90d data: the share engine. 29.4K avg views and 9.8K shares, led by the 393K house tour and 187K Tokyo shop. Cost-of-living reveal, the highest-share format class on the account.",
  "hooks": [
   {
    "t": "Curiosity Gap",
    "s": "What $1,800 a month gets you in Amsterdam as a founder.",
    "o": "Amsterdam founder budget",
    "v": "Louise opening a window overlooking canals, camera pans to a coffee shop"
   },
   {
    "t": "Lifestyle Reveal",
    "s": "See how I stretch a $1,800 budget across rent, transport, and coworking.",
    "o": "Budget breakdown",
    "v": "Split-screen of rent receipt and bike rental app"
   },
   {
    "t": "Relatable Moment",
    "s": "I compare my Dutch expenses to a typical startup grind back home.",
    "o": "Home vs Amsterdam",
    "v": "Side-by-side footage of Manila street and Amsterdam canal"
   },
   {
    "t": "7x7 Skill · Curiosity Reveal",
    "s": "$1,800 a month in Amsterdam. Here's exactly where it goes.",
    "o": "$1,800/mo in Amsterdam",
    "v": "Canal walk, cost lines dropping in"
   }
  ],
  "script": "HOOK: What $1,800 a month gets you in Amsterdam as a founder, BUILD: I walk you through my rented studio, the 45 minute bike commute, the coworking desk that costs €200, the grocery bill that balances at €150, PAYOFF: you’ll see the real cost‑of‑living trade‑offs and why the city fuels my product focus, LOOP: stay till the end for the exact monthly spreadsheet I share in the description.",
  "shots": [
   "0-2s: Opening view of Amsterdam canals, Louise speaking to camera",
   "2-6s: Inside rented studio, showing rent receipt $1,800",
   "6-12s: Bike ride to coworking space, overlay of commute time",
   "12-18s: Coworking desk, price tag €200",
   "18-24s: Grocery aisle, total €150"
  ],
  "overlay": [
   "$1,800 rent",
   "€200 coworking",
   "45 min bike",
   "€150 groceries"
  ],
  "caption": "I’m Louise Ivan, co‑founder of Ryder, and I break down what $1,800 a month buys me in Amsterdam as a founder, from a 45 minute bike commute to a €200 coworking desk, a modest €150 grocery bill, and a studio that costs exactly $1,800 in rent, all while running a 9‑person team that ships hardware to 68 countries, from the Philippines to Amsterdam, the numbers are real, the lifestyle is tangible, the trade‑offs are clear, I also show how the grant of $5K turned into a $4.8M raise, how each euro stretches across my daily routine, and why the city’s bike lanes save me time and money, check the link in bio for the full expense sheet.",
  "cta": "Watch the full vlog in my bio."
 },
 {
  "date": "2026-07-30",
  "name": "Posting every day is destroying your account. Post this instead.",
  "topic": "Content",
  "mission": "Authority",
  "format": "Talking head",
  "intensity": "High",
  "niche": "Contrarian Take",
  "hookType": "Contrarian/Hard Truth",
  "framework": "Pattern Interrupt",
  "why": "90d data: Contrarian/Hard Truth is the best hook on both axes, 7.1 saves/1K and 13.5K avg views. Market signals also flag Pattern Interrupt as CANDIDATE (3 accounts). Pattern Interrupt is a market CANDIDATE. Backed by his own 138-post 90d dataset.",
  "hooks": [
   {
    "t": "Pattern Interrupt",
    "s": "Posting every day is destroying your account. Post this instead.",
    "o": "daily posting = slow death",
    "v": "Louise deletes a scheduled post on camera"
   },
   {
    "t": "Contrarian",
    "s": "I posted 138 times in 90 days. Most of it was wasted work.",
    "o": "138 posts, 90 days",
    "v": "calendar heatmap of posts flashing"
   },
   {
    "t": "Curiosity Gap",
    "s": "My data says half my posts should never have existed.",
    "o": "half were wasted",
    "v": "dashboard bar chart, half the bars greyed out"
   },
   {
    "t": "7x7 Skill · Pattern Interrupt",
    "s": "Stop optimizing your posting schedule. Optimize the format you repeat.",
    "o": "schedule < format",
    "v": "Calendar app closed, one reel format on loop"
   }
  ],
  "script": "HOOK: Posting every day is destroying your account. Post this instead. BUILD: I pulled my own 90-day data, 138 posts. The winners cluster in three formats, everything else trained the algorithm to expect mediocrity from me. PAYOFF: Cutting the filler and doubling the winning formats beats any streak, volume only compounds when it's pointed at what already works. LOOP: Check your last 30 posts. How many earned their slot?",
  "shots": [
   "0-2s: finger deletes scheduled post, hard cut to face",
   "2-5s: screen recording of the 90-day dashboard",
   "5-8s: three winning formats highlighted in sequence",
   "8-11s: talking head, slower on the payoff",
   "11-13s: opening framing repeats for the loop question"
  ],
  "overlay": [
   "138 posts in 90 days",
   "3 formats did the work",
   "streaks reward the wrong thing",
   "audit your last 30"
  ],
  "caption": "I posted 138 times in the last 90 days and my own dashboard says a lot of it was wasted effort. The reels that moved followers and saves cluster into three formats, and the rest existed to keep a streak alive, which is a goal the algorithm never asked for. Daily posting feels like discipline but it's often just noise with a schedule, and noise teaches the feed to expect less from you. I'd rather ship four posts a week that each earn their slot. Comment AUDIT and I'll show you how I graded mine.",
  "cta": "Comment AUDIT for my post-grading sheet"
 },
 {
  "date": "2026-07-31",
  "name": "6 things I check before posting any reel. Number 4 is why most flop.",
  "topic": "Content",
  "mission": "Saves",
  "format": "Talking head + overlay",
  "intensity": "Medium",
  "niche": "How-To / List",
  "hookType": "List/Number",
  "framework": "Numbered Listicle",
  "why": "90d data: steady save earner at 7.0 saves/1K across 20 posts. List/Number hook runs 5.9 saves/1K. The skill's real scoring rubric, turned into a checklist reel.",
  "hooks": [
   {
    "t": "Direct",
    "s": "6 things I check before posting any reel. Number 4 is why most flop.",
    "o": "6 checks, #4 kills",
    "v": "Louise at desk, pointing to list"
   },
   {
    "t": "Curiosity",
    "s": "Do you ever wonder why some reels never get saved?",
    "o": "Why reels flop",
    "v": "Close-up of low engagement numbers"
   },
   {
    "t": "Authority",
    "s": "I built this checklist from 90 days of data, it drives 7 saves per thousand views.",
    "o": "Data‑backed",
    "v": "Graph of saves per 1K"
   },
   {
    "t": "7x7 Skill · Numbered Listicle",
    "s": "Most reels die before posting. My 6-point check catches it.",
    "o": "6 checks before I post",
    "v": "Checklist over editing timeline"
   }
  ],
  "script": "HOOK: 6 things I check before posting any reel. Number 4 is why most flop. BUILD: I walk through each item, from thumbnail clarity to caption length, I pause on the fourth step where I verify the hook matches the audience intent, I show the metric that proves its impact. PAYOFF: Apply the list and you’ll see saves climb, as my last post jumped to 7.0 saves per thousand. LOOP: Follow for the next checklist.",
  "shots": [
   "0-2s: Louise faces camera, title overlay appears",
   "2-5s: Close-up of thumbnail example, pointer highlights clarity",
   "5-9s: Quick cut to caption length screen, underline optimal length",
   "9-13s: Focus on step 4, metric graph showing 7.0 saves/1K",
   "13-15s: Call to action overlay, Louise gestures to follow"
  ],
  "overlay": [
   "6 checks",
   "Hook match",
   "Metric: 7.0 saves/1K",
   "Apply now"
  ],
  "caption": "Running a crypto wallet startup taught me that content saves are a real indicator of value, I track them daily, over the past 90 days my reels average 7.0 saves per thousand views across 20 posts, the numbered list format yields 5.9 saves per thousand, I built a six‑point checklist from that data, each point is a quick visual test, step four checks the hook against audience intent, I verify the thumbnail is clear, I keep captions under 150 characters, I add a clear call to action, I record the result, I repeat, the process cuts guesswork, follow the checklist and watch your saves rise.",
  "cta": "Follow the checklist and watch your saves rise."
 },
 {
  "date": "2026-08-01",
  "name": "The easy round lie (Fundraising series 2/15)",
  "topic": "Product",
  "mission": "Authority",
  "format": "Talking head",
  "intensity": "High",
  "niche": "Crypto / Ryder",
  "hookType": "Contrarian/Hard Truth",
  "framework": "Brutal Honesty + Vulnerable Origin",
  "why": "Fundraising series 2/15, vault-sourced (pre-seed/bridge/seed retros, every number real). Replaced original slot: 'I've shipped hardware wallets to 68 countries. The top 5 surprised me.'. Chained loop hands off to part 3.",
  "hooks": [
   {
    "t": "Fundraising Series · Brutal Honesty + Vulnerable Origin",
    "s": "Our first round closed itself. That almost killed the company.",
    "o": "round 1: closed itself",
    "v": "Talking head, direct to camera, text overlay on beat"
   },
   {
    "t": "Statement",
    "s": "I've shipped hardware wallets to 68 countries. The top 5 surprised me.",
    "o": "68 countries, top 5 insights",
    "v": "World map highlighting shipments"
   },
   {
    "t": "Question",
    "s": "Which market delivered the highest adoption rate?",
    "o": "Highest adoption?",
    "v": "Bar chart rising"
   },
   {
    "t": "Teaser",
    "s": "Stay for the data that proves our wallet saves 6.5 users per 1,000 in 90 days.",
    "o": "6.5 saves/1k",
    "v": "Metric overlay"
   },
   {
    "t": "7x7 Skill · Curiosity Reveal + Authority Credential",
    "s": "68 countries buy our wallet. The top five made no sense.",
    "o": "guess our #1 country. wrong.",
    "v": "World map filling in dots"
   }
  ],
  "script": "HOOK: Our first round closed itself. That almost killed the company., BUILD: Pre-seed: about a million dollars, mostly from our network, in a bull market. It came together so fast we assumed that's what fundraising is. A year later we went out for a small bridge and hit a wall. Different market, money already sunk into manufacturing, and the confidence from round one made us slower to adapt., PAYOFF: An easy round is a market condition, not a skill. Never build your expectations on it., LOOP: The number in our bank account when we finally learned this? That's the next reel.",
  "shots": [
   "0-2s: Hook direct to camera, overlay line 1",
   "2-15s: Build, talking head with overlay beats per claim",
   "15-22s: Payoff line, slight push-in, key overlay",
   "22-25s: Loop tease to next part, series card"
  ],
  "overlay": [
   "round 1: closed itself",
   "round 2: hit a wall",
   "easy ≠ skill",
   "Part 2/15"
  ],
  "caption": "Our pre-seed closed itself: about $1M, mostly network, peak bull market. That ease set an expectation that nearly broke us when the bridge round hit a cold market a year later. An easy round is a market condition, not a skill. Part 2 of the fundraising series.",
  "cta": "Save this before your first raise."
 },
 {
  "date": "2026-08-02",
  "name": "$42K in the bank (Fundraising series 3/15)",
  "topic": "Founder",
  "mission": "Authority",
  "format": "Talking head",
  "intensity": "High",
  "niche": "Founder Story",
  "hookType": "Contrarian/Hard Truth",
  "framework": "Vulnerable Origin",
  "why": "Fundraising series 3/15, vault-sourced (pre-seed/bridge/seed retros, every number real). Replaced original slot: 'I started Ryder with a $5K grant. We've raised $4.8M. The middle was the problem.'. Chained loop hands off to part 4.",
  "hooks": [
   {
    "t": "Fundraising Series · Vulnerable Origin",
    "s": "$42K in the bank. Nine people. No founder salaries. This is that story.",
    "o": "$42K left",
    "v": "Talking head, direct to camera, text overlay on beat"
   },
   {
    "t": "Authority Credential",
    "s": "I started Ryder with a $5K grant. We've raised $4.8M. The middle was the problem.",
    "o": "$5K to $4.8M",
    "v": "old grant email on screen, cut to Louise's face"
   },
   {
    "t": "Curiosity Gap",
    "s": "Everyone asks about the $4.8M. Nobody asks about year two.",
    "o": "year two almost ended us",
    "v": "timeline graphic pausing on a gap"
   },
   {
    "t": "Confession",
    "s": "The $5K grant was the easy part. Staying alive to raise $4.8M wasn't.",
    "o": "surviving > raising",
    "v": "Louise holding the Ryder device, thumb over logo"
   },
   {
    "t": "7x7 Skill · Vulnerable Origin + POV",
    "s": "I left the Philippines at 21 with no network. Last month a jury in Germany gave our wallet a Red Dot Award.",
    "o": "21, no network. now: Red Dot Award.",
    "v": "Old photo cut against award footage"
   }
  ],
  "script": "HOOK: $42K in the bank. Nine people. No founder salaries. This is that story., BUILD: This was the bridge round. Our crowdfunding campaign fell short of covering manufacturing, the market was cold, and we'd already sunk money into the first production run. Every founder was working unpaid. And the biggest lesson from that stretch wasn't hustle. It was that you should raise when you're strong, because raising desperate costs you twice., PAYOFF: We closed $405K at nearly double our target. Not because of the desperation. Because we finally got transparent about exactly what the money did., LOOP: The one-line ask that closed it is in the next reel.",
  "shots": [
   "0-2s: Hook direct to camera, overlay line 1",
   "2-15s: Build, talking head with overlay beats per claim",
   "15-22s: Payoff line, slight push-in, key overlay",
   "22-25s: Loop tease to next part, series card"
  ],
  "overlay": [
   "$42K left",
   "0 founder salaries",
   "closed 1.93x target",
   "Part 3/15"
  ],
  "caption": "At the low point of our bridge round we had $42K in the bank and no founder was taking a salary. The round still closed at $405K, almost double the target, because we stopped hiding the situation and got specific about what every dollar did. Raise at strength when you can. Be transparent when you can't. Part 3.",
  "cta": "Follow for the one-line ask."
 },
 {
  "date": "2026-08-03",
  "name": "I built an AI that studies 340 viral reels before I write a single hook.",
  "topic": "AI",
  "mission": "Saves",
  "format": "Screen demo",
  "intensity": "High",
  "niche": "AI / Tech Workflows",
  "hookType": "Curiosity Gap",
  "framework": "Demo / Unboxing",
  "why": "90d data: best niche both ways, 9.3 saves/1K and 17.8K avg views on only 13 posts. Most underposted winner. Meta reel about the hooks pipeline itself. Builder-in-public with a working system.",
  "hooks": [
   {
    "t": "Curiosity Gap",
    "s": "I built an AI that studies 340 viral reels before I write a single hook.",
    "o": "340 reels, then I write",
    "v": "terminal scrolling reel data fast"
   },
   {
    "t": "Demo",
    "s": "This system reads my niche's outliers every week. Then it writes with me.",
    "o": "outliers in, hooks out",
    "v": "dashboard showing outlier table populating"
   },
   {
    "t": "Authority",
    "s": "My hooks aren't guesses. They're pattern-matched against 340 winners.",
    "o": "0 guessing",
    "v": "side-by-side of bank file and new hook draft"
   },
   {
    "t": "7x7 Skill · Demo / Unboxing",
    "s": "My AI reads 340 viral reels before I write one hook.",
    "o": "340 reels before every hook",
    "v": "Terminal scrolling the bank data"
   }
  ],
  "script": "HOOK: I built an AI that studies 340 viral reels before I write a single hook. BUILD: Every week it scrapes my niche, keeps only posts that beat their own account's baseline by 3x, and tags each one against 14 hook frameworks. PAYOFF: When I sit down to write, I'm choosing from patterns already proven this month, not improvising into the void. LOOP: The bank grows every week, which means the writing gets easier, not harder.",
  "shots": [
   "0-2s: terminal scroll, cut to Louise mid-explain",
   "2-5s: screen recording of the outlier table",
   "5-8s: framework tags appearing on real hooks",
   "8-11s: split screen, data left, draft right",
   "11-13s: talking head close for the loop"
  ],
  "overlay": [
   "340 winning reels banked",
   "3x outliers only",
   "14 frameworks tagged",
   "patterns > guesses"
  ],
  "caption": "Before I write any hook, an AI pipeline I built has already done the homework. It scrapes accounts in my niche weekly, throws away everything except posts that beat their own account's median by three times, and tags each survivor against fourteen hook frameworks pulled from a bank of 340 proven reels. So when I write, I'm not guessing what might stop a scroll, I'm choosing from patterns that worked this month for accounts like mine. The system is public on my GitHub. Comment PIPELINE and I'll send you the repo.",
  "cta": "Comment PIPELINE for the GitHub repo"
 },
 {
  "date": "2026-08-04",
  "name": "Rating every desk I've worked from in 3 countries this year.",
  "topic": "Lifestyle",
  "mission": "Reach",
  "format": "Montage",
  "intensity": "Low",
  "niche": "Lifestyle / Relatable",
  "hookType": "List/Number",
  "framework": "Numbered Listicle",
  "why": "90d data: the share engine. 29.4K avg views and 9.8K shares, led by the 393K house tour and 187K Tokyo shop. Nomad-founder montage, share bait with zero script load.",
  "hooks": [
   {
    "t": "List Intro",
    "s": "Rating every desk I've worked from in 3 countries this year.",
    "o": "Desk ratings",
    "v": "Louise at a desk, camera pans across workspace"
   },
   {
    "t": "Teaser",
    "s": "Which desk earned a perfect 10?",
    "o": "Perfect 10?",
    "v": "Close-up of a rating scale"
   },
   {
    "t": "Hook Promise",
    "s": "Stay to see the surprise office in Amsterdam.",
    "o": "Amsterdam surprise",
    "v": "Silhouette of a modern office"
   },
   {
    "t": "7x7 Skill · Numbered Listicle",
    "s": "Every desk I worked from this year, rated. One was a carinderia.",
    "o": "desk tour: 3 countries",
    "v": "Rapid cuts of desks"
   }
  ],
  "script": "HOOK: Rating every desk I've worked from in 3 countries this year. BUILD: I show each workspace, score it on comfort, view, and power access, cut between Manila coffee shop, Berlin co‑working hub, and Amsterdam loft, each rating flashing on screen. PAYOFF: The Amsterdam desk hits a perfect 10, and I reveal the one feature that made it unbeatable. LOOP: If you found a desk you’d love, drop a comment and follow for more nomad setups.",
  "shots": [
   "0-2s: Opening title with rating scale overlay, Louise sitting at Manila desk",
   "2-5s: Pan across Manila coffee shop desk, close-up of laptop and rating number",
   "5-9s: Transition to Berlin co‑working space, quick cut of view, rating appears",
   "9-13s: Reveal Amsterdam loft desk, wide shot, rating 10 pops",
   "13-16s: Closing shot of Louise smiling, call to action overlay"
  ],
  "overlay": [
   "Desk #1: Manila",
   "Score: 7/10",
   "Desk #2: Berlin",
   "Score: 9/10"
  ],
  "caption": "I’m Louise Ivan, co‑founder of Ryder, and I spent the past year rating every desk I used while traveling across three countries, from a cramped Manila coffee shop to a bright Berlin co‑working hub and finally a spacious Amsterdam loft, each spot got a score based on comfort, view, and power access, and the Amsterdam desk earned a perfect 10 thanks to its natural light and secure outlet, our team of nine ships wallets to 68 countries, and the data shows a clear link between a good workspace and productivity, if you want to see more of my nomad setup, follow me for the next rating.",
  "cta": "Follow me for the next rating."
 },
 {
  "date": "2026-08-05",
  "name": "Stop hiring social media managers. The founder is the channel.",
  "topic": "Growth",
  "mission": "Authority",
  "format": "Talking head",
  "intensity": "Medium",
  "niche": "Contrarian Take",
  "hookType": "Contrarian/Hard Truth",
  "framework": "Pattern Interrupt",
  "why": "90d data: Contrarian/Hard Truth is the best hook on both axes, 7.1 saves/1K and 13.5K avg views. Market signals also flag Pattern Interrupt as CANDIDATE (3 accounts). Spiky, defensible, aimed at the founder audience that saves his contrarian takes.",
  "hooks": [
   {
    "t": "Contrarian",
    "s": "Stop hiring social media managers. The founder is the channel.",
    "o": "the founder IS the channel",
    "v": "Louise filming herself, tripod visible in mirror"
   },
   {
    "t": "Brutal Honesty",
    "s": "Your SMM can't say what only you survived.",
    "o": "they can't tell your story",
    "v": "generic branded post vs raw founder clip side by side"
   },
   {
    "t": "Curiosity Gap",
    "s": "We deleted the content calendar and views went up. Here's why.",
    "o": "less polish, more views",
    "v": "analytics line trending up"
   },
   {
    "t": "7x7 Skill · Pattern Interrupt",
    "s": "Your social media manager can't say what the founder can.",
    "o": "the founder is the channel",
    "v": "Louise filming himself, no crew"
   }
  ],
  "script": "HOOK: Stop hiring social media managers. The founder is the channel. BUILD: An agency can schedule posts, it cannot raise your round, ship your product, or survive your worst quarter, and that lived experience is the only content moat left. PAYOFF: My face and my receipts outperform anything polished we ever outsourced, because audiences follow people through things, not brands around them. LOOP: Delegate the editing. Never delegate the voice.",
  "shots": [
   "0-2s: Louise flips camera to selfie mode mid-sentence",
   "2-5s: b-roll of founder life, calls, boxes, screens",
   "5-8s: side-by-side branded post vs founder reel stats",
   "8-11s: talking head, direct",
   "11-13s: selfie framing returns for the loop"
  ],
  "overlay": [
   "agencies schedule, founders convert",
   "your story is the moat",
   "delegate editing",
   "never delegate voice"
  ],
  "caption": "Every founder I meet wants to hire the content problem away, and it almost never works, because the thing audiences actually follow is a person moving through real stakes. An agency can schedule and polish, it cannot describe the month your hardware got stuck in customs or the call that saved your round, and that specificity is the entire game now. At Ryder my face with real receipts beats every branded asset we've ever produced. Keep the editor, keep the systems, keep the calendar if you must, but the voice stays yours. Comment VOICE for my founder-content starter system.",
  "cta": "Comment VOICE for the starter system"
 },
 {
  "date": "2026-08-06",
  "name": "The one-line ask (Fundraising series 4/15)",
  "topic": "Fundraising",
  "mission": "Authority",
  "format": "Talking head",
  "intensity": "High",
  "niche": "How-To / List",
  "hookType": "Contrarian/Hard Truth",
  "framework": "Pattern Interrupt + Authority Credential",
  "why": "Fundraising series 4/15, vault-sourced (pre-seed/bridge/seed retros, every number real). Replaced original slot: '5 fundraising email subject lines that actually got replies.'. Chained loop hands off to part 5.",
  "hooks": [
   {
    "t": "Fundraising Series · Pattern Interrupt + Authority Credential",
    "s": "The ask that closed our bridge round was one line long.",
    "o": "the entire ask:",
    "v": "Talking head, direct to camera, text overlay on beat"
   },
   {
    "t": "Direct",
    "s": "5 fundraising email subject lines that actually got replies.",
    "o": "Subject lines that work",
    "v": "Close-up of inbox with subject lines highlighted"
   },
   {
    "t": "Curiosity",
    "s": "See why investors opened these emails",
    "o": "Open rates spiked",
    "v": "Graph of open rates rising"
   },
   {
    "t": "Proof",
    "s": "Real replies, no fluff",
    "o": "Inbox receipts",
    "v": "Screenshot of reply email"
   },
   {
    "t": "7x7 Skill · Pattern Interrupt + Brutal Honesty",
    "s": "Stop polishing your pitch deck. Investors forgot it before the elevator reached the lobby.",
    "o": "your deck is already forgotten",
    "v": "Deck on screen, closed mid-slide"
   }
  ],
  "script": "HOOK: The ask that closed our bridge round was one line long., BUILD: This $400K establishes Ryder's manufacturing line. That's it. That's the whole pitch. No magic numbers, no vision slide, no vague runway math. When investors asked what the money does, there was exactly one answer, and it was the same answer every time. Compare that to the average raise: a number pulled from nowhere and a use-of-funds slide nobody believes., PAYOFF: If you can't say what the round does in one sentence, the round isn't ready., LOOP: How we backed that one line with actual line items, next.",
  "shots": [
   "0-2s: Hook direct to camera, overlay line 1",
   "2-15s: Build, talking head with overlay beats per claim",
   "15-22s: Payoff line, slight push-in, key overlay",
   "22-25s: Loop tease to next part, series card"
  ],
  "overlay": [
   "the entire ask:",
   "\"$400K establishes our manufacturing line\"",
   "one line. every time.",
   "Part 4/15"
  ],
  "caption": "The ask that closed our bridge was one sentence: this $400K establishes Ryder's manufacturing line. Same answer to every investor, every time. If you can't say what the round does in one line, the round isn't ready. Comment RAISE for the full breakdown. Part 4.",
  "cta": "Comment RAISE and I'll send the breakdown."
 },
 {
  "date": "2026-08-07",
  "name": "Investors fund line items (Fundraising series 5/15)",
  "topic": "Product",
  "mission": "Authority",
  "format": "Talking head",
  "intensity": "High",
  "niche": "Crypto / Ryder",
  "hookType": "List/Number",
  "framework": "Numbered Listicle + Authority Credential",
  "why": "Fundraising series 5/15, vault-sourced (pre-seed/bridge/seed retros, every number real). Replaced original slot: 'Most people's crypto dies with them. Here's the 60-second fix.'. Chained loop hands off to part 6.",
  "hooks": [
   {
    "t": "Fundraising Series · Numbered Listicle + Authority Credential",
    "s": "VCs don't fund visions. They fund line items. Here are ours.",
    "o": "chips $85K",
    "v": "Talking head, direct to camera, text overlay on beat"
   },
   {
    "t": "Contrarian/Hard Truth",
    "s": "Most people's crypto dies with them. Here's the 60-second fix.",
    "o": "Crypto dies with owners",
    "v": "Person holding a dead phone, wallet icon fading"
   },
   {
    "t": "Problem Agitation",
    "s": "When you lose your seed phrase, your crypto disappears.",
    "o": "No recovery, no value",
    "v": "Close-up of a frustrated user on a blank screen"
   },
   {
    "t": "Solution Reveal",
    "s": "Ryder's TapSafe lets trusted contacts restore access in seconds.",
    "o": "Recover with a tap",
    "v": "Hands tapping phone, wallet lights up"
   },
   {
    "t": "7x7 Skill · Conditional Hack",
    "s": "When you die, your crypto dies with you. Sixty seconds fixes it.",
    "o": "your crypto dies with you",
    "v": "Ryder One tap in real time"
   }
  ],
  "script": "HOOK: VCs don't fund visions. They fund line items. Here are ours., BUILD: Our bridge target was $210K. That wasn't a round number we liked. It was chip development, $85K. Legal certifications, $30K. Molds, $70K. Design for manufacturing, $25K. Add it up: exactly $210K. Every investor could see precisely what physical thing their money turned into., PAYOFF: The round closed at 1.93x that target. Specificity is what oversubscribes a round in a down market., LOOP: There's a second trick hiding in that structure. Target versus extras. Next reel.",
  "shots": [
   "0-2s: Hook direct to camera, overlay line 1",
   "2-15s: Build, talking head with overlay beats per claim",
   "15-22s: Payoff line, slight push-in, key overlay",
   "22-25s: Loop tease to next part, series card"
  ],
  "overlay": [
   "chips $85K",
   "certs $30K",
   "molds $70K",
   "DFM $25K",
   "= $210K. not a vibe.",
   "Part 5/15"
  ],
  "caption": "Our $210K bridge target wasn't a number we liked. It was chip development $85K, certifications $30K, molds $70K, DFM $25K. Exactly $210K. Investors could see the physical thing their money turned into, and the round closed at 1.93x target in a down market. Line items, not visions. Part 5.",
  "cta": "Save this for your next raise."
 },
 {
  "date": "2026-08-08",
  "name": "I gave AI my entire Instagram history. It told me exactly what to post next.",
  "topic": "AI",
  "mission": "Saves",
  "format": "Screen demo",
  "intensity": "High",
  "niche": "AI / Tech Workflows",
  "hookType": "Curiosity Gap",
  "framework": "Demo / Unboxing",
  "why": "90d data: best niche both ways, 9.3 saves/1K and 17.8K avg views on only 13 posts. Most underposted winner. This exact calendar rebuild as content. The dashboard is already built and filmable.",
  "hooks": [
   {
    "t": "Curiosity Gap",
    "s": "I gave AI my entire Instagram history. It told me exactly what to post next.",
    "o": "140 posts analyzed",
    "v": "dashboard ingesting posts, counters climbing"
   },
   {
    "t": "Demo",
    "s": "My last 90 days of posts, graded by a machine with no feelings.",
    "o": "no feelings, just data",
    "v": "table of posts sorting by saves per 1K"
   },
   {
    "t": "Contrarian",
    "s": "I stopped brainstorming content. My own data writes the calendar now.",
    "o": "data writes the calendar",
    "v": "60-day calendar filling itself on screen"
   },
   {
    "t": "7x7 Skill · Demo / Unboxing",
    "s": "I fed AI 229 of my posts. It found the pattern I couldn't.",
    "o": "229 posts. one pattern.",
    "v": "Dashboard graph reveal"
   }
  ],
  "script": "HOOK: I gave AI my entire Instagram history. It told me exactly what to post next. BUILD: It pulled 140 posts from 90 days, classified every niche and hook type, and ranked them by saves per thousand views, not vanity views. PAYOFF: Turns out my most-posted category was my worst performer, and my best one was starving, so the next 60 days are already planned around that gap. LOOP: Your account already knows what to post. You just haven't asked it.",
  "shots": [
   "0-2s: posts flooding into a dashboard, cut to face",
   "2-5s: classification table filling with niches and hooks",
   "5-8s: the overposted vs underposted bars",
   "8-11s: 60-day calendar view scrolling",
   "11-13s: talking head for the loop line"
  ],
  "overlay": [
   "140 posts, 90 days",
   "ranked by saves/1K",
   "worst niche = most posted",
   "calendar fixed the gap"
  ],
  "caption": "I fed my last 90 days of Instagram into an analysis pipeline, 140 posts, every one classified by niche and hook type, then ranked by saves per thousand views because that's the number that builds an audience, not raw reach. The result was uncomfortable, my most-posted category was one of my weakest, and the niche with my best numbers was barely getting slots. So the next 60 days of content are planned directly from that gap, every post has a reason attached. Comment DATA and I'll show you how to run the same audit on your account.",
  "cta": "Comment DATA for the audit walkthrough"
 },
 {
  "date": "2026-08-09",
  "name": "My flatmates found out I raised millions. Their reaction.",
  "topic": "Lifestyle",
  "mission": "Reach",
  "format": "Vlog",
  "intensity": "Low",
  "niche": "Lifestyle / Relatable",
  "hookType": "Curiosity Gap",
  "framework": "Cliffhanger Tease",
  "why": "90d data: the share engine. 29.4K avg views and 9.8K shares, led by the 393K house tour and 187K Tokyo shop. Personal stakes plus the Amsterdam flat cast from the 393K reel.",
  "hooks": [
   {
    "t": "Cliffhanger",
    "s": "My flatmates found out I raised millions. Their reaction.",
    "o": "they had no idea",
    "v": "kitchen scene, flatmates mid-conversation, freeze frame"
   },
   {
    "t": "POV",
    "s": "POV: you split rent with someone who just closed a funding round.",
    "o": "still splits the rent",
    "v": "rent transfer notification on phone"
   },
   {
    "t": "Curiosity Gap",
    "s": "There's a reason I never told my flatmates what I do.",
    "o": "the secret lasted 2 years",
    "v": "Louise closing laptop as someone walks in"
   },
   {
    "t": "7x7 Skill · Cliffhanger Tease",
    "s": "They thought I was unemployed.",
    "o": "my flatmates just found out about the $4.8M",
    "v": "Kitchen, real reactions"
   }
  ],
  "script": "HOOK: My flatmates found out I raised millions. Their reaction. BUILD: For two years I was just the flatmate who's always on calls. Then one of them found the funding announcement online. PAYOFF: The best part is nothing changed, I still do my dishes and split the rent, because raising money is fuel, not a finish line, and Amsterdam flats keep you honest. LOOP: The tour of this famous flat is on my page.",
  "shots": [
   "0-2s: kitchen scene, freeze on flatmate's face",
   "2-5s: phone screen with the announcement, reaction shots",
   "5-8s: b-roll of normal flat life, dishes, rent app",
   "8-11s: Louise talking head, grinning",
   "11-13s: doorway shot pointing toward the tour reel"
  ],
  "overlay": [
   "2 years undercover",
   "they googled me",
   "rent still split",
   "fuel, not finish line"
  ],
  "caption": "For two years my flatmates knew me as the one who is always on calls, and then one of them found the funding announcement and the kitchen went quiet in the funniest way possible. The truth is nothing about the flat changed, I still do my dishes, I still split rent, because a raise is fuel for the company, not a lifestyle event, and an Amsterdam apartment with flatmates keeps a founder very honest about that. If you missed the tour of this place, it's the most-watched reel on my page. Comment TOUR if you want part two.",
  "cta": "Comment TOUR for part two of the flat"
 },
 {
  "date": "2026-08-10",
  "name": "31, two startups, one exit from broke. The timeline you're jealous of doesn't exist.",
  "topic": "Mindset",
  "mission": "Reach",
  "format": "Talking head",
  "intensity": "Low",
  "niche": "Motivation / Mindset",
  "hookType": "Contrarian/Hard Truth",
  "framework": "Brutal Honesty",
  "why": "90d data: 1.2 saves/1K. Low-effort reach filler only, one earned specific per line. Motivation slot but anchored in specific numbers, not poster lines.",
  "hooks": [
   {
    "t": "Brutal Honesty",
    "s": "31, two startups, one exit from broke. The timeline you're jealous of doesn't exist.",
    "o": "the timeline is fake",
    "v": "Louise direct to lens, no b-roll, hard cut in"
   },
   {
    "t": "Confession",
    "s": "I looked successful in every year I was struggling.",
    "o": "looked fine, wasn't",
    "v": "old celebratory post next to blurred bank app"
   },
   {
    "t": "Contrarian",
    "s": "Comparing timelines is the only race where everyone loses.",
    "o": "everyone loses this race",
    "v": "split screen of highlight reels scrolling"
   },
   {
    "t": "7x7 Skill · Brutal Honesty",
    "s": "You're jealous of a timeline that includes the broke years.",
    "o": "the timeline includes the broke years",
    "v": "Photo timeline flip, fast"
   }
  ],
  "script": "HOOK: 31, two startups, one exit from broke. The timeline you're jealous of doesn't exist. BUILD: The years that look like milestones from outside were mostly survival from inside, the grant, the visa stress, the round that took longer than anyone posts about. PAYOFF: Your timeline only has to beat one thing, the version of you that would have quit. LOOP: Screenshot this on the day you want to stop.",
  "shots": [
   "0-2s: hard cut to face, no music beat drop",
   "2-5s: quick flashes of real milestones with dates",
   "5-8s: slower b-roll, quiet office at night",
   "8-11s: direct to lens payoff",
   "11-13s: still frame with the loop text"
  ],
  "overlay": [
   "31, two startups",
   "milestones hide survival",
   "beat one person: past you",
   "screenshot for the bad day"
  ],
  "caption": "I'm 31, on my second startup, and there were stretches where one bad month separated me from broke, which is not what the announcement posts looked like from outside. The timeline people envy is an edit, the grant came with visa stress, the raise came after the year nobody claps for, and every founder you follow has a version of that gap. The only comparison that ever helped me was against the version of myself that wanted to quit, and that one I intend to keep beating. Save this for the day you need it.",
  "cta": "Save this for the bad day"
 },
 {
  "date": "2026-08-11",
  "name": "Stop paying for 12 AI tools. These 3 workflows replace all of them.",
  "topic": "AI",
  "mission": "Saves",
  "format": "Screen demo",
  "intensity": "High",
  "niche": "AI / Tech Workflows",
  "hookType": "List/Number",
  "framework": "Pattern Interrupt",
  "why": "90d data: best niche both ways, 9.3 saves/1K and 17.8K avg views on only 13 posts. Most underposted winner. Consolidation angle, high save intent from tool-fatigued builders.",
  "hooks": [
   {
    "t": "Pattern Interrupt",
    "s": "Stop paying for 12 AI tools. These 3 workflows replace all of them.",
    "o": "12 tools, 3 workflows",
    "v": "subscriptions list scrolling, then getting cancelled"
   },
   {
    "t": "List",
    "s": "I cancelled $400 a month of AI subscriptions. Here's what stayed.",
    "o": "$400/mo cancelled",
    "v": "cancellation confirmations stacking"
   },
   {
    "t": "Curiosity Gap",
    "s": "Most AI subscriptions are the same model with different fonts.",
    "o": "same model, new fonts",
    "v": "three tool UIs morphing into one"
   },
   {
    "t": "7x7 Skill · Pattern Interrupt",
    "s": "Cancel the 12 subscriptions. Three workflows do all of it.",
    "o": "12 tools → 3 workflows",
    "v": "Cancelling subscriptions on screen"
   }
  ],
  "script": "HOOK: Stop paying for 12 AI tools. These 3 workflows replace all of them. BUILD: Most AI products are one underlying model wrapped in a different interface, so the skill worth buying is workflow design, not another subscription. PAYOFF: One writing system, one research system, one automation system runs our whole 9-person company, and the stack costs less than one enterprise seat. LOOP: List your AI subscriptions right now. Cross out the duplicates.",
  "shots": [
   "0-2s: subscription list scroll, cancel clicks",
   "2-5s: workflow one on screen, fast walkthrough",
   "5-8s: workflows two and three in split screen",
   "8-11s: talking head on the cost line",
   "11-13s: notes app with crossed-out list for the loop"
  ],
  "overlay": [
   "most tools = same model",
   "buy workflows, not seats",
   "3 systems, 9 people",
   "cross out the duplicates"
  ],
  "caption": "At some point our AI stack was twelve subscriptions doing four jobs, because most AI products are the same underlying model wearing a different interface, and every one of them was billing us monthly for it. We rebuilt around three workflows, one for writing, one for research, one for automation, and that trio now runs a 9-person company for less than the cost of a single enterprise seat. The skill that saves money isn't picking tools, it's designing the workflow first and then asking what's the minimum needed to run it. Comment STACK for the exact setup.",
  "cta": "Comment STACK for the exact setup"
 },
 {
  "date": "2026-08-12",
  "name": "A day running a crypto startup from a Manila carinderia.",
  "topic": "Lifestyle",
  "mission": "Reach",
  "format": "Vlog",
  "intensity": "Medium",
  "niche": "Lifestyle / Relatable",
  "hookType": "POV/Situation",
  "framework": "POV Relatability",
  "why": "90d data: the share engine. 29.4K avg views and 9.8K shares, led by the 393K house tour and 187K Tokyo shop. PH-to-Amsterdam identity is the differentiator no competitor can copy.",
  "hooks": [
   {
    "t": "POV",
    "s": "A day running a crypto startup from a Manila carinderia.",
    "o": "HQ: carinderia",
    "v": "tray of food sliding onto table next to laptop"
   },
   {
    "t": "Curiosity Gap",
    "s": "I take investor calls from a place where lunch costs $2.",
    "o": "$2 lunch, $4.8M raised",
    "v": "call UI over carinderia backdrop"
   },
   {
    "t": "Confession",
    "s": "My best company decisions happen over carinderia food. Not in boardrooms.",
    "o": "decisions > boardrooms",
    "v": "pointing at dishes behind glass"
   },
   {
    "t": "7x7 Skill · POV Relatability",
    "s": "",
    "o": "POV: running a crypto startup from a Manila carinderia",
    "v": "Laptop next to a plate of silog"
   }
  ],
  "script": "HOOK: A day running a crypto startup from a Manila carinderia. BUILD: Morning standup with Amsterdam, product review over silog, investor follow-ups before the afternoon rush, all from a plastic chair with the best food in the barangay. PAYOFF: I started dreaming about this company eating at places like this in college, working from one now is not a downgrade, it's the point. LOOP: Where you're from is a feature, not a bug.",
  "shots": [
   "0-2s: tray lands next to laptop, snap to face",
   "2-5s: standup call screen, Amsterdam timezone visible",
   "5-8s: food close-ups intercut with work screens",
   "8-11s: quieter talking head on the college line",
   "11-13s: wide shot of the carinderia for the loop"
  ],
  "overlay": [
   "standup from a plastic chair",
   "silog + product review",
   "college dream, same table",
   "origin = feature"
  ],
  "caption": "Ran a full workday for Ryder from a Manila carinderia, morning standup with the Amsterdam side of the team, product review over silog, investor follow-ups before the lunch rush took my table. In college I used to sit in places exactly like this sketching startup ideas I couldn't afford to build, so working from one now with a real company on the other end of the laptop is not a step down from an office, it's the whole point of the story. The Philippines to Amsterdam pipeline is real and I intend to keep both ends. Comment PH if this is your route too.",
  "cta": "Comment PH if this is your route too"
 },
 {
  "date": "2026-08-13",
  "name": "Your startup doesn't have a marketing problem. It has a boring-founder problem.",
  "topic": "Growth",
  "mission": "Authority",
  "format": "Talking head",
  "intensity": "High",
  "niche": "Contrarian Take",
  "hookType": "Contrarian/Hard Truth",
  "framework": "Brutal Honesty",
  "why": "90d data: Contrarian/Hard Truth is the best hook on both axes, 7.1 saves/1K and 13.5K avg views. Market signals also flag Pattern Interrupt as CANDIDATE (3 accounts). His sharpest lane. Callout that filters for the exact ICP.",
  "hooks": [
   {
    "t": "Contrarian Take",
    "s": "Your startup doesn't have a marketing problem. It has a boring-founder problem.",
    "o": "The boring founder problem",
    "v": "Close-up of Louise speaking, serious expression"
   },
   {
    "t": "Pattern Interrupt",
    "s": "Most founders blend in, you need to stand out now.",
    "o": "Stand out now",
    "v": "Split-screen of a bland presenter versus a dynamic founder"
   },
   {
    "t": "Brutal Honesty",
    "s": "If you’re boring, growth stalls, period.",
    "o": "Growth stalls when you're dull",
    "v": "Flat growth chart with a bored founder"
   },
   {
    "t": "7x7 Skill · Brutal Honesty",
    "s": "Your product isn't boring. You are. That's fixable.",
    "o": "boring founder, not boring product",
    "v": "Talking head, tight crop"
   }
  ],
  "script": "HOOK: Your startup doesn't have a marketing problem. It has a boring-founder problem. BUILD: I built Ryder from a $5K grant to $4.8M raised, a 9-person team shipping hardware wallets from the Philippines to Amsterdam, and I learned that investors and users gravitate to founders who tell a story, not just a product. PAYOFF: Make your pitch vivid, share personal stakes, let your personality drive growth. LOOP: Keep sharpening your narrative every week.",
  "shots": [
   "0-2s: Close-up of Louise speaking, serious expression",
   "3-5s: Split-screen of a bland presenter versus a dynamic founder",
   "6-8s: Flat growth chart with a bored founder",
   "9-11s: Montage of Ryder devices being packed in the Philippines, loaded onto a plane",
   "12-15s: Louise writing notes, then addressing camera with confidence"
  ],
  "overlay": [
   "The boring founder problem",
   "Stand out now",
   "Growth stalls when you're dull",
   "Narrative drives growth"
  ],
  "caption": "I built Ryder from a $5K grant to a $4.8M raise, leading a 9‑person team that ships hardware wallets from the Philippines to Amsterdam, and I saw that a founder’s personality decides whether investors listen, so I stopped polishing slides and started sharing real stories, I stopped hiding behind features and let my own journey become the hook, I watched engagement jump when I showed vulnerability, I realized growth stalls when founders are boring, I now coach founders to inject authenticity, to speak with conviction, to let their narrative be the engine, I invite you to apply the same brutal honesty to your pitch, Visit ryer.com to sharpen your founder story.",
  "cta": "Visit ryer.com to sharpen your founder story"
 },
 {
  "date": "2026-08-14",
  "name": "How to read your Instagram data in 10 minutes a week. Steal my dashboard.",
  "topic": "Content",
  "mission": "Saves",
  "format": "Screen demo",
  "intensity": "Medium",
  "niche": "How-To / List",
  "hookType": "List/Number",
  "framework": "Demo / Unboxing",
  "why": "90d data: steady save earner at 7.0 saves/1K across 20 posts. List/Number hook runs 5.9 saves/1K. The creator vault as a teachable system. Save-and-return content.",
  "hooks": [
   {
    "t": "Demo",
    "s": "How to read your Instagram data in 10 minutes a week. Steal my dashboard.",
    "o": "10 minutes, 1 dashboard",
    "v": "dashboard opening, timer starting"
   },
   {
    "t": "List",
    "s": "The 4 numbers I check weekly. Views isn't first.",
    "o": "views isn't #1",
    "v": "metric cards flipping in order"
   },
   {
    "t": "Contrarian",
    "s": "Your Instagram analytics are lying to you. One number tells the truth.",
    "o": "one honest number",
    "v": "saves-per-1K stat circled in red"
   },
   {
    "t": "7x7 Skill · Demo / Unboxing",
    "s": "Ten minutes a week. This dashboard tells me exactly what to post.",
    "o": "10 min/week content data",
    "v": "Dashboard screen recording"
   }
  ],
  "script": "HOOK: How to read your Instagram data in 10 minutes a week. Steal my dashboard. BUILD: I check four numbers, saves per thousand views first because it measures authority, then median views for consistency, shares for reach, follower delta last. PAYOFF: Ten minutes on the right four numbers beats an hour drowning in the app's vanity charts, and the gap between what wins views and what wins saves is your whole strategy. LOOP: The dashboard template is free, grab it below.",
  "shots": [
   "0-2s: dashboard boot, on-screen timer",
   "2-5s: four metrics highlighted in order",
   "5-8s: the views-vs-saves gap chart",
   "8-11s: talking head on the strategy line",
   "11-13s: template link card for the loop"
  ],
  "overlay": [
   "saves/1K first",
   "median > average",
   "shares = reach engine",
   "the gap = your strategy"
  ],
  "caption": "My weekly Instagram review takes ten minutes because I only read four numbers, saves per thousand views first since that's the one that measures whether people file you away as worth following, then median views for consistency, shares for reach, and follower delta last. The native app buries all of this under vanity charts, so I built a one-page dashboard that pulls it straight from the API, and the most useful thing it shows is the gap between what wins views and what wins saves, because that gap is the strategy. Comment DASH and I'll send the template.",
  "cta": "Comment DASH for the free template"
 },
 {
  "date": "2026-08-15",
  "name": "Target + extras (Fundraising series 6/15)",
  "topic": "Product",
  "mission": "Authority",
  "format": "Talking head",
  "intensity": "High",
  "niche": "Crypto / Ryder",
  "hookType": "Curiosity Gap",
  "framework": "Curiosity Reveal + Numbered Listicle",
  "why": "Fundraising series 6/15, vault-sourced (pre-seed/bridge/seed retros, every number real). Replaced original slot: 'We made a hardware wallet your mom can use. That was the hard part.'. Chained loop hands off to part 7.",
  "hooks": [
   {
    "t": "Fundraising Series · Curiosity Reveal + Numbered Listicle",
    "s": "Don't raise one number. Raise two.",
    "o": "target: $210K = survive",
    "v": "Talking head, direct to camera, text overlay on beat"
   },
   {
    "t": "Pattern Interrupt",
    "s": "We made a hardware wallet your mom can use. That was the hard part.",
    "o": "mom-proof security",
    "v": "handing device to an older relative, tap"
   },
   {
    "t": "Contrarian",
    "s": "Crypto security isn't a tech problem anymore. It's a design problem.",
    "o": "design, not tech",
    "v": "seed phrase paper vs single tap side by side"
   },
   {
    "t": "Curiosity Gap",
    "s": "The scariest part of crypto has nothing to do with hackers.",
    "o": "it's not hackers",
    "v": "blurred seed phrase words on paper"
   },
   {
    "t": "7x7 Skill · Pattern Interrupt",
    "s": "We didn't build for crypto bros. We built for your mom.",
    "o": "crypto your mom can use",
    "v": "Handing the device to an actual mom"
   }
  ],
  "script": "HOOK: Don't raise one number. Raise two., BUILD: Our bridge wasn't a $400K round. It was a $210K target with $190K of extras on top. The target was survival: the manufacturing costs we could not skip. The extras were acceleration: a developer hire, six months of marketing. Investors saw a must-hit number that was believable, and everything above it was upside, not desperation., PAYOFF: We closed at $405K. Nearly double the target, slightly over the full round. The structure did the selling., LOOP: What we told our existing investors to get there is the most uncomfortable reel in this series.",
  "shots": [
   "0-2s: Hook direct to camera, overlay line 1",
   "2-15s: Build, talking head with overlay beats per claim",
   "15-22s: Payoff line, slight push-in, key overlay",
   "22-25s: Loop tease to next part, series card"
  ],
  "overlay": [
   "target: $210K = survive",
   "extras: $190K = accelerate",
   "closed: $405,841",
   "Part 6/15"
  ],
  "caption": "We didn't raise a $400K round. We raised a $210K survival target plus $190K of acceleration extras. The must-hit number was believable, everything above it read as upside instead of desperation, and it closed at $405,841. Structure does the selling. Part 6.",
  "cta": "Share this with a founder mid-raise."
 },
 {
  "date": "2026-08-16",
  "name": "The uncomfortable insider call (Fundraising series 7/15)",
  "topic": "Founder",
  "mission": "Authority",
  "format": "Talking head",
  "intensity": "High",
  "niche": "Founder Story",
  "hookType": "Contrarian/Hard Truth",
  "framework": "Brutal Honesty + Vulnerable Origin",
  "why": "Fundraising series 7/15, vault-sourced (pre-seed/bridge/seed retros, every number real). Replaced original slot: 'From Bulacan to Amsterdam to Silicon Valley. The visa story nobody posts about.'. Chained loop hands off to part 8.",
  "hooks": [
   {
    "t": "Fundraising Series · Brutal Honesty + Vulnerable Origin",
    "s": "We told our own investors: put more in, or we probably don't make it.",
    "o": "the call we dreaded",
    "v": "Talking head, direct to camera, text overlay on beat"
   },
   {
    "t": "Curiosity Gap",
    "s": "From Bulacan to Amsterdam to Silicon Valley. The visa story nobody posts about.",
    "o": "Visa journey",
    "v": "Map pins moving from Bulacan to Amsterdam to Silicon Valley"
   },
   {
    "t": "Vulnerable Origin",
    "s": "I left my family farm with just a passport and a dream, faced endless rejections.",
    "o": "Rejections",
    "v": "Close-up of stamped visa denial"
   },
   {
    "t": "Authority Credential",
    "s": "Now I run a crypto wallet startup that ships to 68 countries, raised $4.8M.",
    "o": "Ryder milestones",
    "v": "Ryder wallet on a desk with global map"
   },
   {
    "t": "7x7 Skill · Vulnerable Origin",
    "s": "Three visas, three countries, one rule: never unpack fully.",
    "o": "the visa story nobody posts",
    "v": "Passport stamps close-up"
   }
  ],
  "script": "HOOK: We told our own investors: put more in, or we probably don't make it., BUILD: Bridge round, cold market, short runway. Our play was to get on a call with every single existing investor and be completely direct. If you don't double down, the company likely dies, and the money you already put in goes to zero. Uncomfortable? Extremely. But when insiders re-upped, every new investor watching got the only signal that matters., PAYOFF: Insiders doubling down is the cleanest proof a round has. New money follows conviction, and conviction is only visible when it costs something., LOOP: The other thing that round taught us about warm intros, next.",
  "shots": [
   "0-2s: Hook direct to camera, overlay line 1",
   "2-15s: Build, talking head with overlay beats per claim",
   "15-22s: Payoff line, slight push-in, key overlay",
   "22-25s: Loop tease to next part, series card"
  ],
  "overlay": [
   "the call we dreaded",
   "\"double down or it's zero\"",
   "insiders in = round closed",
   "Part 7/15"
  ],
  "caption": "In the bridge round we called every existing investor and said the quiet part: if you don't put more in, we probably don't make it, and your money goes to zero. When they doubled down anyway, new investors got the only signal that matters. Conviction is only visible when it costs something. Part 7.",
  "cta": "Follow for the full bridge series."
 },
 {
  "date": "2026-08-17",
  "name": "My AI agent watches my competitors' Instagram every week so I don't have to.",
  "topic": "AI",
  "mission": "Saves",
  "format": "Screen demo",
  "intensity": "High",
  "niche": "AI / Tech Workflows",
  "hookType": "Curiosity Gap",
  "framework": "Demo / Unboxing",
  "why": "90d data: best niche both ways, 9.3 saves/1K and 17.8K avg views on only 13 posts. Most underposted winner. The signals scraper as content. Working demo, zero mockups.",
  "hooks": [
   {
    "t": "Curiosity Gap",
    "s": "My AI agent watches my competitors' Instagram every week so I don't have to.",
    "o": "it watches, I build",
    "v": "scraper log scrolling account names"
   },
   {
    "t": "Demo",
    "s": "Every Monday this bot tells me which hooks blew up in my niche.",
    "o": "Monday report, 0 scrolling",
    "v": "weekly report file opening"
   },
   {
    "t": "Contrarian",
    "s": "I haven't doomscrolled for research in a month. The robot does it.",
    "o": "research without scrolling",
    "v": "phone face down, terminal running behind"
   },
   {
    "t": "7x7 Skill · Demo / Unboxing",
    "s": "My agent watched 7 competitor accounts this week. I watched none.",
    "o": "AI watches. I build.",
    "v": "Signals report scrolling"
   }
  ],
  "script": "HOOK: My AI agent watches my competitors' Instagram every week so I don't have to. BUILD: It scrapes a seed list of accounts, keeps only posts beating their own baseline by 3x, and classifies every winner by hook framework. PAYOFF: I get a Monday report of what's actually rising in my niche without an hour of doomscrolling, and my content bank updates itself. LOOP: Research is a system now. Scrolling is optional.",
  "shots": [
   "0-2s: log scroll, phone placed face down",
   "2-5s: outlier filter visual, posts dropping away",
   "5-8s: framework tags landing on survivors",
   "8-11s: Monday report scroll",
   "11-13s: talking head, phone still face down"
  ],
  "overlay": [
   "seed list in",
   "3x outliers only",
   "tagged by framework",
   "Monday report out"
  ],
  "caption": "Competitor research used to mean an hour of scrolling that mostly fed the algorithm instead of me, so I built an agent that does it properly. Every week it scrapes a seed list of accounts in my niche, throws out everything that didn't beat that account's own baseline by at least three times, and tags each surviving post with the hook framework it used. What lands in my inbox on Monday is a short report of what's actually rising, not what's merely loud, and my hook bank updates itself from it. Comment AGENT for the open-source version.",
  "cta": "Comment AGENT for the open-source repo"
 },
 {
  "date": "2026-08-18",
  "name": "The Tokyo shop worked. So here's Amsterdam's weirdest shop.",
  "topic": "Lifestyle",
  "mission": "Reach",
  "format": "Vlog",
  "intensity": "Low",
  "niche": "Lifestyle / Relatable",
  "hookType": "Curiosity Gap",
  "framework": "Curiosity Reveal",
  "why": "90d data: the share engine. 29.4K avg views and 9.8K shares, led by the 393K house tour and 187K Tokyo shop. Sequel logic to the 187K Tokyo reel with 7.9 saves/1K.",
  "hooks": [
   {
    "t": "Curiosity Gap",
    "s": "The Tokyo shop worked. So here's Amsterdam's weirdest shop.",
    "o": "Tokyo part 2: Amsterdam",
    "v": "shop door opening, odd interior reveal"
   },
   {
    "t": "POV",
    "s": "POV: you find the one shop in Amsterdam tourists never see.",
    "o": "tourists walk past this",
    "v": "walking past unremarkable storefront, double take"
   },
   {
    "t": "List",
    "s": "Rating the strangest things for sale in this Amsterdam shop.",
    "o": "strangest finds, rated",
    "v": "hand picking up an unexplainable object"
   },
   {
    "t": "7x7 Skill · Curiosity Reveal",
    "s": "Tokyo had one. Amsterdam's version is weirder.",
    "o": "Amsterdam's weirdest shop",
    "v": "Shop exterior reveal, held"
   }
  ],
  "script": "HOOK: The Tokyo shop worked. So here's Amsterdam's weirdest shop. BUILD: Tucked between a canal house and a cheese tourist trap is a shop that shouldn't exist, and I'm rating the five strangest things inside. PAYOFF: Every city hides one shop that tells you more about the place than any museum, this is Amsterdam's. LOOP: Tokyo was part one. Comment a city for part three.",
  "shots": [
   "0-2s: door push, interior reveal",
   "2-5s: item one and two close-ups with ratings",
   "5-8s: items three to five, quick cuts",
   "8-11s: shopkeeper cameo or best-find moment",
   "11-13s: street exit shot, loop question to camera"
  ],
  "overlay": [
   "Amsterdam, hidden",
   "rating: 5 strange finds",
   "better than a museum",
   "part 3: your pick"
  ],
  "caption": "The Tokyo shop reel did numbers, so here's the sequel from my own city, a shop squeezed between a canal house and a cheese tourist trap that genuinely should not exist, and I rated the five strangest things inside it. My theory is every city has one shop that explains the place better than any museum, Tokyo proved it and Amsterdam just confirmed it. I'm turning this into a series as I travel for Ryder, so the next city is up to you. Comment a city for part three and follow so you don't miss it.",
  "cta": "Comment a city for part three"
 },
 {
  "date": "2026-08-19",
  "name": "Consistency is overrated. Volume on the right format beats streaks.",
  "topic": "Content",
  "mission": "Authority",
  "format": "Talking head",
  "intensity": "Medium",
  "niche": "Contrarian Take",
  "hookType": "Contrarian/Hard Truth",
  "framework": "Pattern Interrupt",
  "why": "90d data: Contrarian/Hard Truth is the best hook on both axes, 7.1 saves/1K and 13.5K avg views. Market signals also flag Pattern Interrupt as CANDIDATE (3 accounts). Data-backed heresy: his own winners cluster by format, not by streak.",
  "hooks": [
   {
    "t": "Pattern Interrupt",
    "s": "Consistency is overrated. Volume on the right format beats streaks.",
    "o": "streaks < aimed volume",
    "v": "streak counter resetting to zero, shrug"
   },
   {
    "t": "Contrarian",
    "s": "I broke my posting streak on purpose. Best decision this quarter.",
    "o": "broke it on purpose",
    "v": "calendar with deliberate gaps"
   },
   {
    "t": "Curiosity Gap",
    "s": "The posting advice everyone repeats has a hidden cost.",
    "o": "the hidden cost",
    "v": "burnout-coded desk b-roll"
   },
   {
    "t": "7x7 Skill · Pattern Interrupt",
    "s": "Consistency built my habit. Volume on one format built my account.",
    "o": "consistency ≠ growth",
    "v": "Analytics month view, one format highlighted"
   }
  ],
  "script": "HOOK: Consistency is overrated. Volume on the right format beats streaks. BUILD: My winners cluster in a few formats, and a streak forces me to fill the gaps with content that dilutes them. PAYOFF: Ten reels a month aimed at proven formats grows faster than thirty aimed at a calendar, the algorithm rewards patterns, not attendance. LOOP: Stop showing up daily. Start showing up correctly.",
  "shots": [
   "0-2s: streak counter hits zero, cut to face",
   "2-5s: format cluster chart on screen",
   "5-8s: side-by-side of aimed month vs filler month",
   "8-11s: talking head payoff",
   "11-13s: opening framing for the loop line"
  ],
  "overlay": [
   "streaks force filler",
   "winners cluster",
   "10 aimed > 30 scattered",
   "patterns, not attendance"
  ],
  "caption": "I broke my posting streak on purpose this quarter and it was the right call, because when I mapped my own results the winners clustered into a handful of formats, and the streak was forcing me to pad the calendar with posts that diluted them. The algorithm doesn't take attendance, it rewards patterns, so ten reels aimed at what already works will beat thirty aimed at a schedule every time. Consistency matters, but consistency of format beats consistency of frequency, and almost nobody says that part out loud. Comment FORMAT for how I found my clusters.",
  "cta": "Comment FORMAT for the cluster method"
 },
 {
  "date": "2026-08-20",
  "name": "3 things I'd do first at 0 followers in 2026.",
  "topic": "Growth",
  "mission": "Saves",
  "format": "Talking head + overlay",
  "intensity": "Medium",
  "niche": "How-To / List",
  "hookType": "List/Number",
  "framework": "Numbered Listicle",
  "why": "90d data: steady save earner at 7.0 saves/1K across 20 posts. List/Number hook runs 5.9 saves/1K. Evergreen beginner save play, retitled monthly if it runs.",
  "hooks": [
   {
    "t": "List",
    "s": "3 things I'd do first at 0 followers in 2026.",
    "o": "starting from 0 today",
    "v": "fresh account screen, 0 followers visible"
   },
   {
    "t": "Authority",
    "s": "13.8 million views later, here's how I'd restart from zero.",
    "o": "13.8M views of lessons",
    "v": "stats screen, then blank new profile"
   },
   {
    "t": "Curiosity Gap",
    "s": "Starting from 0 in 2026 is easier than 2023. If you skip the old advice.",
    "o": "skip the old advice",
    "v": "crossing out a cliche tips list"
   },
   {
    "t": "7x7 Skill · Numbered Listicle",
    "s": "Starting at zero followers in 2026? I'd do these 3 things first.",
    "o": "0 followers: first 3 moves",
    "v": "Blank new account on screen"
   }
  ],
  "script": "HOOK: 3 things I'd do first at 0 followers in 2026. BUILD: One, pick a niche where I have receipts, not interests. Two, study 20 outliers in that niche before posting once. Three, publish the same winning format ten times before judging anything. PAYOFF: Zero followers with a system beats ten thousand without one, the account compounds the moment the inputs stop being random. LOOP: Save this if you're starting this month.",
  "shots": [
   "0-2s: new account screen, cut to face",
   "2-5s: overlay of the three steps landing",
   "5-8s: outlier study screen recording",
   "8-11s: same-format grid mockup",
   "11-13s: save-this frame for the loop"
  ],
  "overlay": [
   "1: receipts > interests",
   "2: study 20 outliers",
   "3: one format x10",
   "systems compound"
  ],
  "caption": "If my account reset to zero tomorrow, I wouldn't panic, I'd run three moves. First, pick the niche where I have actual receipts, because audiences smell the difference between experience and interest. Second, study twenty outlier posts in that niche before publishing anything, outliers meaning posts that beat their own account's average, not just big accounts being big. Third, commit to one winning format ten times in a row before judging results, since single posts prove nothing. Thirteen million views taught me the inputs matter more than the luck. Save this if you're starting this month.",
  "cta": "Save this if you're starting from zero"
 },
 {
  "date": "2026-08-21",
  "name": "1,800 cold emails vs one intro (Fundraising series 8/15)",
  "topic": "Product",
  "mission": "Authority",
  "format": "Talking head",
  "intensity": "High",
  "niche": "Crypto / Ryder",
  "hookType": "Contrarian/Hard Truth",
  "framework": "Pattern Interrupt + Authority Credential",
  "why": "Fundraising series 8/15, vault-sourced (pre-seed/bridge/seed retros, every number real). Replaced original slot: 'The anxious holder is our biggest customer. Here's what they're anxious about.'. Chained loop hands off to part 9.",
  "hooks": [
   {
    "t": "Fundraising Series · Pattern Interrupt + Authority Credential",
    "s": "We emailed 1,800 VCs. The round was closed by warm intros.",
    "o": "1,800 cold emails",
    "v": "Talking head, direct to camera, text overlay on beat"
   },
   {
    "t": "Audience Callout",
    "s": "The anxious holder is our biggest customer. Here's what they're anxious about.",
    "o": "this is probably you",
    "v": "phone checking portfolio at 2am, screen glow"
   },
   {
    "t": "Curiosity Gap",
    "s": "Most of our customers aren't crypto bros. They're something else.",
    "o": "not who you think",
    "v": "customer persona cards flipping"
   },
   {
    "t": "Confession",
    "s": "We built Ryder for the person who's scared of their own wallet.",
    "o": "scared of your own wallet",
    "v": "hesitant finger hovering over confirm button"
   },
   {
    "t": "7x7 Skill · Conditional Hack + Audience Callout",
    "s": "If checking your exchange balance spikes your heart rate, this is for you.",
    "o": "for the anxious holders",
    "v": "Phone check reenactment, 3am lighting"
   }
  ],
  "script": "HOOK: We emailed 1,800 VCs. The round was closed by warm intros., BUILD: For our seed we did the mass outreach thing. Eighteen hundred funds. And sure, it created noise. But the checks that closed came through people vouching for us. A warm intro doesn't just raise your hit rate on a yes. It raises your hit rate on getting any answer at all. VCs answer the person who came recommended and archive the stranger., PAYOFF: Spend your outreach energy getting introduced, not getting ignored at scale., LOOP: One of those intros led to a no that became our lead investor two years later. Next reel.",
  "shots": [
   "0-2s: Hook direct to camera, overlay line 1",
   "2-15s: Build, talking head with overlay beats per claim",
   "15-22s: Payoff line, slight push-in, key overlay",
   "22-25s: Loop tease to next part, series card"
  ],
  "overlay": [
   "1,800 cold emails",
   "closed by: intros",
   "warm > volume. every time.",
   "Part 8/15"
  ],
  "caption": "We blasted 1,800 VCs for our seed. The checks that closed came through warm intros. An intro doesn't just raise your odds of a yes, it raises your odds of any answer at all. Spend the energy on getting introduced, not on getting archived at scale. Part 8.",
  "cta": "Tag a founder doing cold outreach right now."
 },
 {
  "date": "2026-08-22",
  "name": "I automated my morning routine as a founder. 90 minutes back every day.",
  "topic": "AI",
  "mission": "Saves",
  "format": "Vlog + screen",
  "intensity": "Medium",
  "niche": "AI / Tech Workflows",
  "hookType": "List/Number",
  "framework": "Demo / Unboxing",
  "why": "90d data: best niche both ways, 9.3 saves/1K and 17.8K avg views on only 13 posts. Most underposted winner. Routine content crossed with automation receipts.",
  "hooks": [
   {
    "t": "List",
    "s": "I automated my morning routine as a founder. 90 minutes back every day.",
    "o": "90 minutes reclaimed",
    "v": "alarm goes off, scripts already running on screen"
   },
   {
    "t": "Demo",
    "s": "By the time I wake up, three jobs are already done.",
    "o": "3 jobs before coffee",
    "v": "overnight logs scrolling with timestamps"
   },
   {
    "t": "Curiosity Gap",
    "s": "The most productive hour of my day happens while I'm asleep.",
    "o": "productive while asleep",
    "v": "dark room, glowing monitor running tasks"
   },
   {
    "t": "7x7 Skill · Demo / Unboxing",
    "s": "My mornings had 90 minutes of admin. Now they have zero.",
    "o": "90 minutes back, every day",
    "v": "Automation running while coffee brews"
   }
  ],
  "script": "HOOK: I automated my morning routine as a founder. 90 minutes back every day. BUILD: Before I wake up, the system has pulled overnight metrics, drafted my priority list from the calendar and inbox, and prepped the content queue. PAYOFF: I start the day deciding instead of collecting, which is the actual job of a founder, and it bought back 90 minutes I now spend on product. LOOP: Automate the collecting. Keep the deciding.",
  "shots": [
   "0-2s: alarm off, monitor already alive",
   "2-5s: metrics report opening with timestamp",
   "5-8s: priority list assembling itself",
   "8-11s: talking head with coffee, calm pace",
   "11-13s: split of old chaotic morning vs new one"
  ],
  "overlay": [
   "metrics: done",
   "priorities: drafted",
   "content queue: prepped",
   "decide, don't collect"
  ],
  "caption": "My mornings used to start with 90 minutes of collecting, checking dashboards, rereading the inbox, rebuilding a priority list from memory. Now a set of scripts does the collecting before my alarm goes off, overnight metrics pulled, priorities drafted from the calendar and inbox, content queue prepped for review. I start the day making decisions instead of gathering inputs, and that's the actual job, everything else was administration wearing a productivity costume. The 90 minutes went straight back into product work. Comment MORNING and I'll share the three automations in order of impact.",
  "cta": "Comment MORNING for the three automations"
 },
 {
  "date": "2026-08-23",
  "name": "Things in my bag as a founder who flies 40 times a year.",
  "topic": "Lifestyle",
  "mission": "Reach",
  "format": "Unboxing",
  "intensity": "Low",
  "niche": "Lifestyle / Relatable",
  "hookType": "List/Number",
  "framework": "Demo / Unboxing",
  "why": "90d data: the share engine. 29.4K avg views and 9.8K shares, led by the 393K house tour and 187K Tokyo shop. Classic share format, light production, travel-founder angle.",
  "hooks": [
   {
    "t": "List",
    "s": "Things in my bag as a founder who flies 40 times a year.",
    "o": "40 flights, 1 bag",
    "v": "bag unzipping on table, top-down"
   },
   {
    "t": "Demo",
    "s": "Everything I need to run a company fits in this bag.",
    "o": "the whole company, carried",
    "v": "items laid out in a grid"
   },
   {
    "t": "Curiosity Gap",
    "s": "One item in this bag has saved me on three continents.",
    "o": "guess the item",
    "v": "hand hovering over mystery pocket"
   },
   {
    "t": "7x7 Skill · Demo / Unboxing",
    "s": "Forty flights a year. Everything in this bag earned its place.",
    "o": "40 flights. one bag.",
    "v": "Bag dump on table, overhead"
   }
  ],
  "script": "HOOK: Things in my bag as a founder who flies 40 times a year. BUILD: The laptop, the backup battery that outlasts a delayed flight, the Ryder One I demo in every meeting, the adapter that works on three continents, and the notebook for the ideas that arrive at 30,000 feet. PAYOFF: Forty flights a year teaches you the difference between packing and preparing. LOOP: Which item surprised you? Comment it.",
  "shots": [
   "0-2s: bag unzips, top-down reveal",
   "2-5s: items placed one by one with labels",
   "5-8s: Ryder One demo moment mid-list",
   "8-11s: the surprise item close-up",
   "11-13s: everything repacked in one motion"
  ],
  "overlay": [
   "40 flights a year",
   "the demo lives in the bag",
   "3-continent adapter",
   "packing vs preparing"
  ],
  "caption": "Forty flights a year for Ryder taught me exactly what earns a place in the bag and what stays home. The laptop, obviously, a battery that outlasts any delay, the Ryder One I end up demoing in half my meetings because showing beats explaining, one adapter that has worked on three continents, and a paper notebook because the best ideas still arrive somewhere over the Atlantic with no wifi. Everything else got cut, and the cut list is longer than the keep list. Comment BAG if you want the full breakdown with links.",
  "cta": "Comment BAG for the full list"
 },
 {
  "date": "2026-08-24",
  "name": "Nobody cares about your product demo. They care about the before and after.",
  "topic": "Growth",
  "mission": "Authority",
  "format": "Talking head",
  "intensity": "Medium",
  "niche": "Contrarian Take",
  "hookType": "Contrarian/Hard Truth",
  "framework": "Pattern Interrupt",
  "why": "90d data: Contrarian/Hard Truth is the best hook on both axes, 7.1 saves/1K and 13.5K avg views. Market signals also flag Pattern Interrupt as CANDIDATE (3 accounts). Marketing lesson from Ryder's own demo data.",
  "hooks": [
   {
    "t": "Contrarian",
    "s": "Nobody cares about your product demo. They care about the before and after.",
    "o": "before + after > demo",
    "v": "skipping past a feature demo, cut to transformation shot"
   },
   {
    "t": "Brutal Honesty",
    "s": "Your demo video is a feature list with music.",
    "o": "features + music = skipped",
    "v": "generic demo playing, viewer scrolls away"
   },
   {
    "t": "Curiosity Gap",
    "s": "We changed one thing about how we show Ryder and conversions moved.",
    "o": "one change moved conversions",
    "v": "two thumbnails side by side"
   },
   {
    "t": "7x7 Skill · Pattern Interrupt",
    "s": "Kill the product demo. Show the before and after instead.",
    "o": "demo < before/after",
    "v": "Split screen: before and after"
   }
  ],
  "script": "HOOK: Nobody cares about your product demo. They care about the before and after. BUILD: We used to show features, taps, screens, specs. Then we started showing the person, anxious with a seed phrase before, calm with a tap after. PAYOFF: The product is the bridge, not the story, and the moment we filmed the transformation instead of the interface, the same product started converting. LOOP: Show the change, not the buttons.",
  "shots": [
   "0-2s: demo footage cut off mid-feature",
   "2-5s: the before, seed phrase stress vignette",
   "5-8s: the after, one tap, relief",
   "8-11s: conversion chart moment, talking head",
   "11-13s: side-by-side before-after freeze for the loop"
  ],
  "overlay": [
   "features get skipped",
   "film the person",
   "product = the bridge",
   "show the change"
  ],
  "caption": "We spent months polishing product demos for Ryder, features, taps, specs, and the honest result is that people skipped them, because a feature list with music is still a feature list. What changed conversions was flipping the camera to the person, the before where someone is hiding a seed phrase in a drawer and hoping, and the after where the same person taps a card and moves on with their life. The product is the bridge between those two states, it was never the story itself. Comment DEMO and I'll share the before-after script we use now.",
  "cta": "Comment DEMO for the before-after script"
 },
 {
  "date": "2026-08-25",
  "name": "The 15-minute weekly review that runs my content system.",
  "topic": "Content",
  "mission": "Saves",
  "format": "Screen demo",
  "intensity": "Medium",
  "niche": "How-To / List",
  "hookType": "List/Number",
  "framework": "Numbered Listicle",
  "why": "90d data: steady save earner at 7.0 saves/1K across 20 posts. List/Number hook runs 5.9 saves/1K. Systems content for operators, pairs with the dashboard reel.",
  "hooks": [
   {
    "t": "Listicle",
    "s": "The 15-minute weekly review that runs my content system.",
    "o": "15‑minute weekly review",
    "v": "Timer counts down from 15:00 on screen"
   },
   {
    "t": "Benefit",
    "s": "Watch how I cut content chaos to 7 saves per 1K views.",
    "o": "7 saves/1K",
    "v": "Graph spikes at 7 saves"
   },
   {
    "t": "Data",
    "s": "90‑day data proves this routine drives 5.9 saves per 1K.",
    "o": "5.9 saves/1K",
    "v": "Dashboard numbers scroll"
   },
   {
    "t": "7x7 Skill · Numbered Listicle",
    "s": "Fifteen minutes every Sunday runs my whole content week.",
    "o": "the 15-minute Sunday review",
    "v": "Timer running over notes app"
   }
  ],
  "script": "HOOK: The 15‑minute weekly review that runs my content system, BUILD: I open the dashboard, pull last week’s metrics, flag top‑performing posts, copy the template into the next batch, I track 90‑day data, see steady growth, and I run this while coordinating shipments from the Philippines to Amsterdam, PAYOFF: the routine consistently yields 7 saves per 1K and 5.9 saves per 1K for list posts, LOOP: repeat every Sunday, keep the pipeline full.",
  "shots": [
   "0-2s: Close‑up of Louise at desk, timer overlay 15:00 counting down",
   "2-5s: Screen capture of dashboard showing last week’s metrics, highlight top posts",
   "5-8s: Drag‑and‑drop of template into new content queue",
   "8-11s: Graph appears showing 7 saves/1K and 5.9 saves/1K trend over 90 days",
   "11-15s: Louise points to world map line from Philippines to Amsterdam, CTA overlay appears"
  ],
  "overlay": [
   "15‑minute review",
   "7 saves/1K",
   "5.9 saves/1K",
   "Repeat weekly"
  ],
  "caption": "I run a 15‑minute weekly review to keep my content system humming, I open the dashboard, pull the last seven days of data, flag the posts that hit 7 saves per 1K, I copy the proven template into the next batch, I watch the 90‑day trend rise to 5.9 saves per 1K for listicles, I do this while our team ships Ryder wallets from the Philippines to Amsterdam, the routine costs me no more than a coffee, it delivers steady growth, it frees my team of nine to focus on product, I repeat it every Sunday, it keeps the pipeline full, try the review and see the difference.",
  "cta": "Try the review and see the difference."
 },
 {
  "date": "2026-08-26",
  "name": "What actually happens when you tap Ryder One for the first time.",
  "topic": "Product",
  "mission": "Convert",
  "format": "Product demo",
  "intensity": "Medium",
  "niche": "Crypto / Ryder",
  "hookType": "Curiosity Gap",
  "framework": "Demo / Unboxing",
  "why": "90d data: 6.5 saves/1K, above account average, and it sells the product. Business slot that earns its place. Pure Demo/Unbox, a bank-proven high-EV framework for IG.",
  "hooks": [
   {
    "t": "Demo",
    "s": "What actually happens when you tap Ryder One for the first time.",
    "o": "first tap, real time",
    "v": "finger approaching device, macro shot"
   },
   {
    "t": "Curiosity Gap",
    "s": "The whole setup is shorter than this reel.",
    "o": "setup < 60 seconds",
    "v": "stopwatch starting next to device"
   },
   {
    "t": "POV",
    "s": "POV: your first minute owning your crypto for real.",
    "o": "minute one of self-custody",
    "v": "unboxing hands, first-person angle"
   },
   {
    "t": "7x7 Skill · Demo / Unboxing",
    "s": "First tap. No seed phrase. Sixty seconds. Watch.",
    "o": "60 seconds, no seed phrase",
    "v": "Unboxing and first tap, one take"
   }
  ],
  "script": "HOOK: What actually happens when you tap Ryder One for the first time. BUILD: Unbox, tap, the wallet creates itself, no 24 words to copy, no test transaction anxiety, recovery is already handled in the background. PAYOFF: The scariest minute of self-custody became the easiest one, and that single minute is what two years of engineering bought. LOOP: Watch the timer. That was the whole setup.",
  "shots": [
   "0-2s: macro of the first tap",
   "2-5s: real-time setup screens, no cuts",
   "5-8s: the no-seed-phrase moment highlighted",
   "8-11s: timer stopping under 60 seconds",
   "11-13s: device pocketed, walk away"
  ],
  "overlay": [
   "tap one",
   "no 24 words",
   "recovery: handled",
   "under 60 seconds"
  ],
  "caption": "This is the entire first-time setup of Ryder One in real time, no cuts, unbox, tap, and the wallet creates itself, no 24 words to copy onto paper, no nervous test transaction, recovery already handled before you even think to ask about it. That one minute is what two years of engineering bought, because the scariest minute in all of self-custody was always the first one, and removing the fear from minute one is what gets normal people to actually own their crypto. The timer in the corner is real. Comment ONE and I'll send the link.",
  "cta": "Comment ONE for the link"
 },
 {
  "date": "2026-08-27",
  "name": "The no that became the lead (Fundraising series 9/15)",
  "topic": "Founder",
  "mission": "Authority",
  "format": "Talking head",
  "intensity": "High",
  "niche": "Founder Story",
  "hookType": "Curiosity Gap",
  "framework": "Vulnerable Origin + Authority Credential",
  "why": "Fundraising series 9/15, vault-sourced (pre-seed/bridge/seed retros, every number real). Replaced original slot: 'I won Startup Weekend in 2015. It took 10 years for that to matter.'. Chained loop hands off to part 10.",
  "hooks": [
   {
    "t": "Fundraising Series · Vulnerable Origin + Authority Credential",
    "s": "Tim Draper said no to us. Two years later he led our round.",
    "o": "2022: no",
    "v": "Talking head, direct to camera, text overlay on beat"
   },
   {
    "t": "Authority Credential",
    "s": "I won Startup Weekend in 2015. It took 10 years for that to matter.",
    "o": "2015 win, 2025 payoff",
    "v": "old photo of the win, cut to present Louise"
   },
   {
    "t": "Curiosity Gap",
    "s": "The award that changed my life did nothing for 10 years.",
    "o": "dormant for a decade",
    "v": "trophy or certificate collecting dust"
   },
   {
    "t": "Confession",
    "s": "I peaked in 2015. Or that's what it looked like for a while.",
    "o": "the fake peak",
    "v": "timeline scrubbing from 2015 forward"
   },
   {
    "t": "7x7 Skill · Authority Credential + Vulnerable Origin",
    "s": "I won Startup Weekend in 2015. Nothing happened for ten years.",
    "o": "2015 win. 2025 payoff.",
    "v": "Old photo cut to CNBC clip"
   }
  ],
  "script": "HOOK: Tim Draper said no to us. Two years later he led our round., BUILD: First time we pitched Draper Associates, Ryder was a deck. Nothing happened. We kept building: hardware shipped, revenue, real users. When we circled back two years later, the conversation was completely different, because we weren't a deck anymore. Term sheet signed within weeks of the in-person meeting., PAYOFF: A no is almost never about you. It's about now. Treat every rejection as a pipeline entry with a future date on it., LOOP: The weird reason our biggest competitor being in his portfolio actually helped, next reel.",
  "shots": [
   "0-2s: Hook direct to camera, overlay line 1",
   "2-15s: Build, talking head with overlay beats per claim",
   "15-22s: Payoff line, slight push-in, key overlay",
   "22-25s: Loop tease to next part, series card"
  ],
  "overlay": [
   "2022: no",
   "2024: term sheet",
   "a no is a \"not yet\" with a date",
   "Part 9/15"
  ],
  "caption": "We pitched Draper when Ryder was just a deck and got nothing. Two years of shipping later, the same door opened and the round got led. A no is almost never about you, it's about now. Every rejection is a pipeline entry with a future date on it. Part 9.",
  "cta": "Save this for your next rejection."
 },
 {
  "date": "2026-08-28",
  "name": "Claude Code runs half my company's ops. Live demo, no cuts.",
  "topic": "AI",
  "mission": "Authority",
  "format": "Screen demo",
  "intensity": "High",
  "niche": "AI / Tech Workflows",
  "hookType": "Contrarian/Hard Truth",
  "framework": "Demo / Unboxing",
  "why": "90d data: best niche both ways, 9.3 saves/1K and 17.8K avg views on only 13 posts. Most underposted winner. No-cuts proof format builds trust the niche's hype content can't.",
  "hooks": [
   {
    "t": "Contrarian",
    "s": "Claude Code runs half my company's ops. Live demo, no cuts.",
    "o": "AI runs ops",
    "v": "Claude Code dashboard appears"
   },
   {
    "t": "Hard Truth",
    "s": "Most AI hype hides the real cost",
    "o": "No fluff",
    "v": "Cost vs benefit graph"
   },
   {
    "t": "Authority",
    "s": "I built Ryder from a $5K grant to $4.8M raised",
    "o": "Our track record",
    "v": "Team working together"
   },
   {
    "t": "7x7 Skill · Demo / Unboxing",
    "s": "Half my company's ops run on Claude Code. Live, no cuts.",
    "o": "live demo. no cuts.",
    "v": "Screen recording, single take"
   }
  ],
  "script": "HOOK: Claude Code runs half my company's ops. Live demo, no cuts. BUILD: I walk you through the dashboard, show how the AI automates transaction signing, inventory tracking, and shipping updates across our 9-person team, we ship from the Philippines to Amsterdam, serving 68 countries. PAYOFF: You see real-time savings, faster releases, and the confidence that comes from a $4.8M funded product. LOOP: Try the same workflow in your own stack, watch the full demo.",
  "shots": [
   "0-2s: Claude Code dashboard launches",
   "2-4s: Live automation of a transaction signing",
   "4-6s: Real-time inventory list updates",
   "6-8s: Shipping map highlights Philippines to Amsterdam",
   "8-10s: Final screen with call to action"
  ],
  "overlay": [
   "AI runs ops",
   "Zero cuts",
   "Real savings",
   "Watch now"
  ],
  "caption": "I’m Louise Ivan, co‑founder of Ryder, a crypto hardware wallet that grew from a $5K grant to $4.8M raised, built by a 9‑person team, shipping to 68 countries, moving devices from the Philippines to Amsterdam, I run Claude Code across half of our operations, in this live demo I show the dashboard, the AI automates signing, inventory and logistics, you see real‑time savings, faster releases, the same workflow you can copy, the proof is unedited, the format builds trust, our 90‑day data shows the niche saves 9.3 seconds per thousand actions and averages 17.8K views on just 13 posts, making it the most under‑posted winner, this no‑cut proof beats hype, I invite you to see how it works, watch the full demo now.",
  "cta": "Watch the full demo now."
 },
 {
  "date": "2026-08-29",
  "name": "24 hours eating only what Filipino aunties in Amsterdam recommend.",
  "topic": "Lifestyle",
  "mission": "Reach",
  "format": "Vlog",
  "intensity": "Medium",
  "niche": "Lifestyle / Relatable",
  "hookType": "Curiosity Gap",
  "framework": "Curiosity Reveal",
  "why": "90d data: the share engine. 29.4K avg views and 9.8K shares, led by the 393K house tour and 187K Tokyo shop. Culture-bridge share play, taps both PH and expat audiences.",
  "hooks": [
   {
    "t": "Curiosity Gap",
    "s": "24 hours eating only what Filipino aunties in Amsterdam recommend.",
    "o": "aunties know best",
    "v": "auntie pointing decisively at a dish"
   },
   {
    "t": "POV",
    "s": "POV: you outsource your entire food day to Filipino aunties abroad.",
    "o": "the auntie algorithm",
    "v": "first-person receiving a loaded plate"
   },
   {
    "t": "List",
    "s": "Every dish Filipino aunties in Amsterdam made me try in one day.",
    "o": "the full list, ranked",
    "v": "dishes lined up in a row"
   },
   {
    "t": "7x7 Skill · Curiosity Reveal",
    "s": "I only ate what Filipino aunties in Amsterdam told me to. 24 hours.",
    "o": "aunties know best: 24hrs",
    "v": "Market chat with an auntie"
   }
  ],
  "script": "HOOK: 24 hours eating only what Filipino aunties in Amsterdam recommend. BUILD: From a home-cooked breakfast in Zuidoost to a turo-turo lunch and a bakery I didn't know existed, every meal chosen by an auntie with strong opinions. PAYOFF: The best map of any city is its immigrant kitchens, and the aunties have never once been wrong. LOOP: Which city's titas should I trust next?",
  "shots": [
   "0-2s: auntie points, plate lands",
   "2-5s: breakfast scene with subtitles",
   "5-8s: turo-turo counter walkthrough",
   "8-11s: bakery reveal, taste reaction",
   "11-13s: street shot, loop question to camera"
  ],
  "overlay": [
   "meal 1: Zuidoost breakfast",
   "meal 2: turo-turo",
   "the secret bakery",
   "aunties: undefeated"
  ],
  "caption": "I gave Filipino aunties in Amsterdam full control of my food for 24 hours and it was the best eating day I've had in this city, a home-style breakfast in Zuidoost, a turo-turo lunch where the auntie chose for me because obviously, and a bakery I have cycled past for two years without noticing. The real map of any city is its immigrant kitchens, and the titas have strong opinions and a perfect record. This is becoming a series as I travel, so tell me which city's aunties I should trust next in the comments.",
  "cta": "Comment a city for the next auntie episode"
 },
 {
  "date": "2026-08-30",
  "name": "Your niche isn't too small. Your hooks are too polite.",
  "topic": "Content",
  "mission": "Authority",
  "format": "Talking head",
  "intensity": "Medium",
  "niche": "Contrarian Take",
  "hookType": "Contrarian/Hard Truth",
  "framework": "Brutal Honesty",
  "why": "90d data: Contrarian/Hard Truth is the best hook on both axes, 7.1 saves/1K and 13.5K avg views. Market signals also flag Pattern Interrupt as CANDIDATE (3 accounts). Creator-audience callout wrapped in his hook expertise.",
  "hooks": [
   {
    "t": "Brutal Honesty",
    "s": "Your niche isn't too small. Your hooks are too polite.",
    "o": "polite hooks die",
    "v": "bland hook text getting deleted letter by letter"
   },
   {
    "t": "Contrarian",
    "s": "Stop blaming the algorithm. Your first line is the problem.",
    "o": "line one is the problem",
    "v": "reel paused at second one, retention graph cliff"
   },
   {
    "t": "Curiosity Gap",
    "s": "I rewrote one sentence and the same video did 10x.",
    "o": "one sentence, 10x",
    "v": "two versions of the same reel side by side"
   },
   {
    "t": "7x7 Skill · Brutal Honesty",
    "s": "Polite hooks die politely.",
    "o": "your hooks are too polite",
    "v": "Talking head, hard cut in"
   }
  ],
  "script": "HOOK: Your niche isn't too small. Your hooks are too polite. BUILD: Polite means safe, expected, easy to scroll past, and I see brilliant operators burying real insight under first lines that apologize for existing. PAYOFF: The niche that looks dead wakes up the moment the first line makes a claim someone could disagree with, tension is the tax every scroll-stopper pays. LOOP: Read your last hook out loud. Would you stop for it?",
  "shots": [
   "0-2s: bland hook deleting itself, cut to face",
   "2-5s: retention graph cliff at second one",
   "5-8s: same video, rewritten hook, new graph",
   "8-11s: talking head on the tension line",
   "11-13s: mirror shot reading a hook aloud for the loop"
  ],
  "overlay": [
   "polite = invisible",
   "insight buried by line one",
   "make a claim",
   "would YOU stop?"
  ],
  "caption": "Every week someone tells me their niche is too small, and then I read their hooks and the niche is fine, the first lines are just polite, safe, expected, easy to scroll past without guilt. Real insight buried under a first sentence that apologizes for existing performs exactly like no insight at all. The accounts that wake up dead niches all do the same thing, they open with a claim a stranger could disagree with, because tension is the tax every scroll-stopper pays. Read your last hook out loud and ask if you would stop for it. Comment HOOKS for my rewrite checklist.",
  "cta": "Comment HOOKS for the rewrite checklist"
 },
 {
  "date": "2026-08-31",
  "name": "4 hooks from 340 viral reels you can copy today.",
  "topic": "Content",
  "mission": "Saves",
  "format": "Talking head + overlay",
  "intensity": "High",
  "niche": "How-To / List",
  "hookType": "List/Number",
  "framework": "Numbered Listicle",
  "why": "90d data: steady save earner at 7.0 saves/1K across 20 posts. List/Number hook runs 5.9 saves/1K. Direct giveaway from the 7x7 Bank. Highest save intent in the plan.",
  "hooks": [
   {
    "t": "List Intro",
    "s": "4 hooks from 340 viral reels you can copy today.",
    "o": "Copy proven hooks",
    "v": "Screen shows scrolling list of viral reel thumbnails"
   },
   {
    "t": "Hook Example",
    "s": "Hook #1: Start with a bold promise in 3 seconds",
    "o": "Bold promise",
    "v": "Creator appears, pointing to timer"
   },
   {
    "t": "Hook Example",
    "s": "Hook #2: Use a surprising statistic to grab attention",
    "o": "Surprising stat",
    "v": "Graph pops up with 7.0 saves/1K"
   },
   {
    "t": "7x7 Skill · Numbered Listicle + Authority Credential",
    "s": "I studied 340 viral reels. Steal these four hooks.",
    "o": "4 hooks from 340 winners",
    "v": "Spreadsheet scroll into 4 cards"
   }
  ],
  "script": "HOOK: I’m Louise Ivan, co‑founder of Ryder, and I’m showing you 4 hooks from 340 viral reels you can copy today, BUILD: each hook is broken down in a quick list, I explain why the List/Number format drives 5.9 saves per thousand, PAYOFF: you’ll walk away with ready‑to‑use scripts that boost saves, LOOP: stay till the end for the bonus giveaway from the 7x7 Bank.",
  "shots": [
   "0-2s: Opening close-up of Louise speaking, text overlay of hook",
   "2-5s: Cut to montage of viral reel thumbnails, graphic \"340 reels\"",
   "5-9s: On-screen list appears, each hook highlighted",
   "9-12s: Visual of stats chart showing 5.9 saves/1K",
   "12-15s: Call-to-action slide with 7x7 Bank logo and giveaway prompt"
  ],
  "overlay": [
   "4 hooks you can copy",
   "340 reels analyzed",
   "5.9 saves per K",
   "Bonus: 7x7 Bank giveaway"
  ],
  "caption": "I’m Louise Ivan, co‑founder of Ryder, I built a crypto hardware wallet that raised $4.8 M, our nine‑person team ships to 68 countries, today I share a proven shortcut, 4 hooks from 340 viral reels you can copy today, each hook follows a numbered list format that delivered 5.9 saves per thousand in our last 20 posts, the data shows a steady 7.0 saves per thousand across 20 posts, use these hooks to boost your content saves, the final slide includes a direct giveaway from the 7x7 Bank, copy, test, watch the numbers rise, Grab your free template now",
  "cta": "Grab your free template now"
 },
 {
  "date": "2026-09-01",
  "name": "Your competitor is your way in (Fundraising series 10/15)",
  "topic": "Product",
  "mission": "Authority",
  "format": "Talking head",
  "intensity": "High",
  "niche": "Crypto / Ryder",
  "hookType": "Curiosity Gap",
  "framework": "Curiosity Reveal + Authority Credential",
  "why": "Fundraising series 10/15, vault-sourced (pre-seed/bridge/seed retros, every number real). Replaced original slot: 'Crypto travel mistakes that cost people their funds. From real support tickets.'. Chained loop hands off to part 11.",
  "hooks": [
   {
    "t": "Fundraising Series · Curiosity Reveal + Authority Credential",
    "s": "Ledger was our lead investor's biggest position. That's why he invested in us.",
    "o": "their biggest position: our competitor",
    "v": "Talking head, direct to camera, text overlay on beat"
   },
   {
    "t": "List",
    "s": "Crypto travel mistakes that cost people their funds. From real support tickets.",
    "o": "real tickets, real losses",
    "v": "support inbox scrolling, names blurred"
   },
   {
    "t": "Curiosity Gap",
    "s": "The most expensive travel mistake in crypto happens before the flight.",
    "o": "before the flight",
    "v": "packing scene, seed phrase going into luggage"
   },
   {
    "t": "Audience Callout",
    "s": "If you travel with crypto, one of these five mistakes is probably yours.",
    "o": "one of these is yours",
    "v": "checklist appearing over airport b-roll"
   },
   {
    "t": "7x7 Skill · Curiosity Reveal",
    "s": "People lose crypto at borders in ways you wouldn't guess.",
    "o": "real support tickets, real losses",
    "v": "Airport b-roll, ticket screenshots"
   }
  ],
  "script": "HOOK: Ledger was our lead investor's biggest position. That's why he invested in us., BUILD: Sounds backwards. When we re-engaged Draper, Ledger was the largest investment in their fund. I assumed conflict, dead end. The partner saw it differently: he owned ten hardware wallets, hated the UX on all of them, and a bet on us was a hedge on the whole category. The conflict was the thesis., PAYOFF: Stop crossing out funds that backed your competitor. They're the ones who already believe in your market. You just have to be the better answer., LOOP: How we negotiated that term sheet, and the counter that doubled our valuation, next.",
  "shots": [
   "0-2s: Hook direct to camera, overlay line 1",
   "2-15s: Build, talking head with overlay beats per claim",
   "15-22s: Payoff line, slight push-in, key overlay",
   "22-25s: Loop tease to next part, series card"
  ],
  "overlay": [
   "their biggest position: our competitor",
   "10 wallets. hated all of them.",
   "conflict = thesis",
   "Part 10/15"
  ],
  "caption": "Our biggest competitor was our lead investor's largest fund position. I assumed dead end. He saw a hedge on a category whose UX he already hated. Funds that backed your competitor already believe in your market. You just have to be the better answer. Part 10.",
  "cta": "Follow for the negotiation reel."
 },
 {
  "date": "2026-09-02",
  "name": "I cloned my writing voice into an AI. My mom couldn't tell the difference.",
  "topic": "AI",
  "mission": "Saves",
  "format": "Screen demo",
  "intensity": "Medium",
  "niche": "AI / Tech Workflows",
  "hookType": "Curiosity Gap",
  "framework": "Demo / Unboxing",
  "why": "90d data: best niche both ways, 9.3 saves/1K and 17.8K avg views on only 13 posts. Most underposted winner. Voice-skill system as spectacle with a personal stake.",
  "hooks": [
   {
    "t": "Curiosity Gap",
    "s": "I cloned my writing voice into an AI. My mom couldn't tell the difference.",
    "o": "mom failed the test",
    "v": "two captions side by side, one highlighted"
   },
   {
    "t": "Demo",
    "s": "One of these captions is me. The other is my AI. Vote.",
    "o": "which one is human?",
    "v": "A and B captions on screen, poll sticker"
   },
   {
    "t": "Contrarian",
    "s": "AI writing sounds like AI because you trained it on nothing.",
    "o": "garbage in, corporate out",
    "v": "generic AI text morphing into voice-matched text"
   },
   {
    "t": "7x7 Skill · Demo / Unboxing",
    "s": "I cloned my writing voice. My mom picked the AI's version.",
    "o": "my mom couldn't tell",
    "v": "Two captions side by side"
   }
  ],
  "script": "HOOK: I cloned my writing voice into an AI. My mom couldn't tell the difference. BUILD: I fed it years of my own captions, my banned words, my rhythm, then made it rewrite drafts until reading them aloud sounded like me talking to a friend. PAYOFF: Now every draft starts at 80 percent my voice instead of zero, and I edit instead of write, which is the whole unlock. LOOP: The voice test is simple, read it out loud. If it sounds like a press release, it fails.",
  "shots": [
   "0-2s: two captions on screen, mom voice note playing",
   "2-5s: the training inputs, old captions scrolling",
   "5-8s: banned words list, rhythm rules",
   "8-11s: draft rewriting itself on screen",
   "11-13s: talking head reading aloud for the loop"
  ],
  "overlay": [
   "trained on MY captions",
   "banned words enforced",
   "80% voice on draft one",
   "read it out loud"
  ],
  "caption": "I spent a weekend cloning my writing voice into an AI system, years of my own captions as training material, a banned words list, rules about rhythm and sentence length, and then a test, every output read aloud as if I'm talking to a smart friend. When I showed my mom two captions and asked which one I wrote, she picked wrong. The point isn't replacing writing, it's that every draft now starts at 80 percent my voice instead of zero, so I edit instead of stare at blank pages. Comment CLONE and I'll share how the skill file is structured.",
  "cta": "Comment CLONE for the skill structure"
 },
 {
  "date": "2026-09-03",
  "name": "I let my team plan my entire day. Never again.",
  "topic": "Lifestyle",
  "mission": "Reach",
  "format": "Vlog",
  "intensity": "Low",
  "niche": "Lifestyle / Relatable",
  "hookType": "Cliffhanger Tease",
  "framework": "Cliffhanger Tease",
  "why": "90d data: the share engine. 29.4K avg views and 9.8K shares, led by the 393K house tour and 187K Tokyo shop. Team-cast chaos content, humanizes the operator brand.",
  "hooks": [
   {
    "t": "Cliffhanger Tease",
    "s": "I let my team plan my entire day. Never again.",
    "o": "Team takes over",
    "v": "Louise handing a planner to a teammate"
   },
   {
    "t": "Cliffhanger Tease",
    "s": "They scheduled meetings in Manila, demos in Amsterdam, I tried to keep up.",
    "o": "Schedule overload",
    "v": "Calendar filling rapidly on screen"
   },
   {
    "t": "Cliffhanger Tease",
    "s": "Watch the chaos unfold.",
    "o": "Chaos ahead",
    "v": "Louise reacting to a buzzing phone"
   },
   {
    "t": "7x7 Skill · Cliffhanger Tease",
    "s": "I gave my team full control of my day. Big mistake. Sort of.",
    "o": "they planned my entire day",
    "v": "Calendar reveal, fully packed"
   }
  ],
  "script": "HOOK: I let my team plan my entire day. Never again. BUILD: They drafted meetings in Manila, product demos in Amsterdam, I tried to keep up, I recorded every misstep, the schedule filled fast. PAYOFF: The plan collapsed, I learned where my limits lie, I showed the team’s hustle, I kept the camera rolling to capture the pressure of a nine‑person startup. LOOP: What would you do if you gave up control?",
  "shots": [
   "0-2s: Louise handing a planner to a teammate",
   "2-4s: Close‑up of a digital calendar filling with events",
   "4-6s: Louise checking her phone, looking overwhelmed",
   "6-8s: Team members coordinating in a small office",
   "8-10s: Louise speaking directly to camera, summarizing the day"
  ],
  "overlay": [
   "Team takes over",
   "Schedule overload",
   "Chaos ahead",
   "My day in chaos"
  ],
  "caption": "I handed the schedule to my team, watched them map meetings in Manila, product demos in Amsterdam, I saw the chaos unfold, I noted the 68 countries we ship to, I remembered the $5K grant that sparked our journey, I referenced the $4.8M we raised, I felt the pressure of a nine‑person crew juggling every slot, I captured the raw moments, I let the camera roll while the day spiraled, I learned that control is an illusion, I share the footage to show the human side of building a crypto wallet, Follow for more.",
  "cta": "Follow for more"
 },
 {
  "date": "2026-09-04",
  "name": "Building in public is dead. Documenting decisions is what actually converts.",
  "topic": "Growth",
  "mission": "Authority",
  "format": "Talking head",
  "intensity": "High",
  "niche": "Contrarian Take",
  "hookType": "Contrarian/Hard Truth",
  "framework": "Pattern Interrupt",
  "why": "90d data: Contrarian/Hard Truth is the best hook on both axes, 7.1 saves/1K and 13.5K avg views. Market signals also flag Pattern Interrupt as CANDIDATE (3 accounts). Meta-contrarian for the builder audience that follows him for exactly this.",
  "hooks": [
   {
    "t": "Contrarian Take",
    "s": "Building in public is dead. Documenting decisions is what actually converts.",
    "o": "The Unpopular Truth",
    "v": "A person working alone in a dimly lit room"
   },
   {
    "t": "Pattern Interrupt",
    "s": "Most advice is wrong",
    "o": "Question the Status Quo",
    "v": "A broken pattern on a screen"
   },
   {
    "t": "Hard Truth",
    "s": "Be honest with your growth strategy",
    "o": "No Sugarcoating",
    "v": "A serious‑faced speaker"
   },
   {
    "t": "7x7 Skill · Pattern Interrupt",
    "s": "Building in public died. Documenting decisions is what converts now.",
    "o": "document decisions, not vibes",
    "v": "Decision doc on screen"
   }
  ],
  "script": "HOOK: Building in public is dead. Documenting decisions is what actually converts. BUILD: I see creators posting updates but missing the metric that matters, the decision log. PAYOFF: When we record why we choose a component or a partner, the team aligns and growth spikes. LOOP: Keep a running decision journal daily and consistently, watch conversion improve for your business.",
  "shots": [
   "0-2s: Close‑up of Louise looking thoughtful",
   "3-5s: Quick cuts of social feeds filled with generic updates",
   "6-8s: Louise opening a notebook and writing a decision note",
   "9-12s: Simple chart showing conversion lift after decision logging",
   "13-15s: Louise nodding, pointing at the notebook"
  ],
  "overlay": [
   "Document decisions",
   "Skip public hype",
   "Align the team",
   "Watch growth rise"
  ],
  "caption": "I’m Louise Ivan, co‑founder of Ryder, we turned a $5K grant into a $4.8M raise, built a nine‑person team, ship hardware wallets from the Philippines to Amsterdam, now in 68 countries, I watch many founders share their journey publicly and see little traction, the hard truth is that public builds rarely convert, what actually moves the needle is documenting each decision, the data shows that clear decision logs drive growth, I apply that every week, we iterate, we record, we share the why, not just the what, start documenting your choices today.",
  "cta": "Start documenting your choices today."
 },
 {
  "date": "2026-09-05",
  "name": "7 tools our 9-person startup actually pays for.",
  "topic": "Ops",
  "mission": "Saves",
  "format": "Screen demo",
  "intensity": "Medium",
  "niche": "How-To / List",
  "hookType": "List/Number",
  "framework": "Numbered Listicle",
  "why": "90d data: steady save earner at 7.0 saves/1K across 20 posts. List/Number hook runs 5.9 saves/1K. Stack reveals reliably save. Small-team constraint is the hook.",
  "hooks": [
   {
    "t": "list intro",
    "s": "7 tools our 9-person startup actually pays for.",
    "o": "7 tools we actually use",
    "v": "Louise typing on laptop, scrolling list"
   },
   {
    "t": "tool highlight",
    "s": "Tool #1: Cloud accounting for real‑time cash flow",
    "o": "Cloud accounting",
    "v": "Dashboard view of accounting software"
   },
   {
    "t": "tool highlight",
    "s": "Tool #2: Automated invoicing saves hours",
    "o": "Automated invoicing",
    "v": "Invoice generation animation"
   },
   {
    "t": "7x7 Skill · Numbered Listicle",
    "s": "Nine people. Sixty-eight countries. Seven tools. Total.",
    "o": "the 7 tools we pay for",
    "v": "Logos appearing over team call"
   }
  ],
  "script": "HOOK: 7 tools our 9-person startup actually pays for. BUILD: I walk through each, showing the cloud accounting dashboard that updates cash flow instantly, the invoicing system that auto‑generates bills, the project‑management board that tracks tasks, the secure password manager, the remote‑desktop service, the API monitoring tool, and the low‑cost VPN that keeps our data safe, each screen demo lasting two seconds. PAYOFF: These choices cut our overhead by 30 percent, keep us agile across 68 countries. LOOP: Follow for more ops hacks.",
  "shots": [
   "0-2s: Intro title and Louise speaking to camera",
   "2-5s: Cloud accounting dashboard demo",
   "5-8s: Automated invoicing screen",
   "8-11s: Project‑management board view",
   "11-14s: Quick cuts of password manager, remote desktop, API monitor, VPN"
  ],
  "overlay": [
   "7 tools we actually use",
   "Cloud accounting",
   "Automated invoicing",
   "Project‑management board"
  ],
  "caption": "I’m Louise Ivan, co‑founder of Ryder, our 9‑person crypto‑wallet team that turned a $5K grant into $4.8M raised, we ship to 68 countries, and we keep ops lean by paying only for tools that move the needle, in this reel I list the seven services we actually subscribe to, from a cloud accounting platform that shows cash flow in real time, to an invoicing system that auto‑creates bills, a project‑management board that aligns tasks, a password vault that secures keys, a remote‑desktop service for global support, an API monitor that flags errors, and a low‑cost VPN that protects traffic, each saves us time and cuts costs, try these tools and see the impact, follow for more ops tips.",
  "cta": "Follow for more ops tips."
 },
 {
  "date": "2026-09-06",
  "name": "Always counter (Fundraising series 11/15)",
  "topic": "Product",
  "mission": "Authority",
  "format": "Talking head",
  "intensity": "High",
  "niche": "Crypto / Ryder",
  "hookType": "Contrarian/Hard Truth",
  "framework": "Authority Credential + Pattern Interrupt",
  "why": "Fundraising series 11/15, vault-sourced (pre-seed/bridge/seed retros, every number real). Replaced original slot: 'Why we're building a bank on top of a wallet. The roadmap nobody asked for.'. Chained loop hands off to part 12.",
  "hooks": [
   {
    "t": "Fundraising Series · Authority Credential + Pattern Interrupt",
    "s": "The first offer was $1M for 10%. We signed $1M at $20M post.",
    "o": "offer: $1M for 10%",
    "v": "Talking head, direct to camera, text overlay on beat"
   },
   {
    "t": "Curiosity Gap",
    "s": "Why we're building a bank on top of a wallet. The roadmap nobody asked for.",
    "o": "wallet first, bank next",
    "v": "device on table, bank UI fading in above it"
   },
   {
    "t": "Contrarian",
    "s": "Crypto doesn't need another exchange. It needs a bank that can't rug you.",
    "o": "a bank that can't rug you",
    "v": "exchange logos graying out, Ryder logo staying"
   },
   {
    "t": "Confession",
    "s": "The hardware wallet was never the end goal. Here's what is.",
    "o": "the wallet was step one",
    "v": "roadmap unrolling on screen"
   },
   {
    "t": "7x7 Skill · Curiosity Reveal",
    "s": "We're building a bank on top of a wallet. On purpose.",
    "o": "the roadmap nobody asked for",
    "v": "Whiteboard roadmap sketch"
   }
  ],
  "script": "HOOK: The first offer was $1M for 10%. We signed $1M at $20M post., BUILD: Draper's opening offer valued us at half of what we believed. We countered at 4%, argued it respected the soft commitments we already had around $30M, and anchored to our distribution targets. They came back with two options. We took $1M at $20M post-money. Lower than our original target, yes. Double their opener., PAYOFF: A term sheet's first number is an opener, not a verdict. Founders who don't counter pay for it in every future round., LOOP: One term in that deal came back to bite us anyway. That's the next reel.",
  "shots": [
   "0-2s: Hook direct to camera, overlay line 1",
   "2-15s: Build, talking head with overlay beats per claim",
   "15-22s: Payoff line, slight push-in, key overlay",
   "22-25s: Loop tease to next part, series card"
  ],
  "overlay": [
   "offer: $1M for 10%",
   "counter: 4%",
   "signed: $20M post",
   "Part 11/15"
  ],
  "caption": "The opening offer was $1M for 10% of the company. We countered at 4%, anchored to the soft commitments we already had, and signed at $20M post. Double the opener. A term sheet's first number is a starting position, not a verdict. Part 11.",
  "cta": "Save before your next term sheet."
 },
 {
  "date": "2026-09-07",
  "name": "The term that bit back (Fundraising series 12/15)",
  "topic": "Founder",
  "mission": "Authority",
  "format": "Talking head",
  "intensity": "High",
  "niche": "Founder Story",
  "hookType": "Curiosity Gap",
  "framework": "Brutal Honesty + Curiosity Reveal",
  "why": "Fundraising series 12/15, vault-sourced (pre-seed/bridge/seed retros, every number real). Replaced original slot: '9 people, 68 countries, millions secured. What a tiny team actually looks like.'. Chained loop hands off to part 13.",
  "hooks": [
   {
    "t": "Fundraising Series · Brutal Honesty + Curiosity Reveal",
    "s": "One term in our seed deal spooked every investor who came after.",
    "o": "1x warrants, 5 years",
    "v": "Talking head, direct to camera, text overlay on beat"
   },
   {
    "t": "Authority Credential",
    "s": "9 people, 68 countries, millions secured. What a tiny team actually looks like.",
    "o": "9 people. that's it.",
    "v": "team grid of nine faces appearing one by one"
   },
   {
    "t": "Curiosity Gap",
    "s": "People assume Ryder is 50 people. It's 9.",
    "o": "everyone guesses 50",
    "v": "org chart shrinking from big to nine"
   },
   {
    "t": "Confession",
    "s": "Here's everything 9 people have to cover to ship hardware worldwide.",
    "o": "the real job list",
    "v": "role labels stacking beside faces"
   },
   {
    "t": "7x7 Skill · Authority Credential",
    "s": "Nine people secure millions in crypto across 68 countries. Here's the org chart.",
    "o": "9 people. 68 countries.",
    "v": "Hand-drawn org chart on paper"
   }
  ],
  "script": "HOOK: One term in our seed deal spooked every investor who came after., BUILD: To close our lead we accepted 1x warrant coverage for five years. Felt like a fair trade at the time to get the deal done. Then follow-on VCs started diligence, and every single one flagged the warrant overhang. We eventually negotiated a cancellation, trading ordinary shares to clean it up., PAYOFF: Terms you accept today become diligence flags tomorrow. Price every clause by what the next round's investors will think of it, not just this one's., LOOP: What announcing a round does to your inbound. Genuinely strange. Next.",
  "shots": [
   "0-2s: Hook direct to camera, overlay line 1",
   "2-15s: Build, talking head with overlay beats per claim",
   "15-22s: Payoff line, slight push-in, key overlay",
   "22-25s: Loop tease to next part, series card"
  ],
  "overlay": [
   "1x warrants, 5 years",
   "every follow-on VC flagged it",
   "we paid to undo it",
   "Part 12/15"
  ],
  "caption": "We accepted 1x warrant coverage to close our lead. Every follow-on VC flagged it in diligence, and we eventually traded shares to cancel it. Terms you accept today become diligence flags tomorrow. Price every clause by the next round, not just this one. Part 12.",
  "cta": "Share with a founder reading a term sheet."
 },
 {
  "date": "2026-09-08",
  "name": "6 AI workflows that run my 9-person startup like a 30-person one.",
  "topic": "AI",
  "mission": "Saves",
  "format": "Screen demo",
  "intensity": "High",
  "niche": "AI / Tech Workflows",
  "hookType": "List/Number",
  "framework": "Numbered Listicle",
  "why": "90d data: best niche both ways, 9.3 saves/1K and 17.8K avg views on only 13 posts. Most underposted winner. Flagship save asset for the quarter, comment-gate the breakdown.",
  "hooks": [
   {
    "t": "List",
    "s": "6 AI workflows that run my 9-person startup like a 30-person one.",
    "o": "9 people, 30-person output",
    "v": "six workflow cards fanning out on screen"
   },
   {
    "t": "Authority",
    "s": "We do the output of 30 people with 9. The difference is 6 systems.",
    "o": "the 6 systems",
    "v": "output metrics next to tiny team grid"
   },
   {
    "t": "Curiosity Gap",
    "s": "Number 4 replaced an entire role we were about to hire for.",
    "o": "#4 replaced a hire",
    "v": "job posting being closed on screen"
   },
   {
    "t": "7x7 Skill · Numbered Listicle",
    "s": "Six AI workflows make nine people work like thirty.",
    "o": "9 people, 30-person output",
    "v": "Workflow diagram animating"
   }
  ],
  "script": "HOOK: 6 AI workflows that run my 9-person startup like a 30-person one. BUILD: Content pipeline, support triage, market research, investor prep, competitor monitoring, and blog automation, each one a system with an owner, not a tool with a subscription. PAYOFF: Number four killed a hire we had budgeted, and together they buy us the output of a company three times our size without the payroll. LOOP: Comment SIX and I'll break down all of them in order.",
  "shots": [
   "0-2s: six cards fan out, cut to face",
   "2-5s: workflows one to three, fast screen demos",
   "5-8s: workflow four, the closed job posting",
   "8-11s: five and six, then the output chart",
   "11-13s: talking head for the comment CTA"
  ],
  "overlay": [
   "6 systems, 6 owners",
   "not tools, workflows",
   "#4 replaced a hire",
   "30-person output"
  ],
  "caption": "Ryder is nine people shipping to 68 countries, and the honest answer for how is six AI workflows, a content pipeline, support triage, market research, investor prep, competitor monitoring, and full blog automation. The rule that makes them work is that each one is a system with a human owner, not a subscription somebody forgot about, and number four straight up replaced a role we had budgeted to hire this year. Together they buy us the output of a company three times our size without the payroll or the coordination tax. Comment SIX and I'll break all of them down in order of impact.",
  "cta": "Comment SIX for the full breakdown"
 },
 {
  "date": "2026-09-09",
  "name": "What Silicon Valley looks like when you're not from there.",
  "topic": "Lifestyle",
  "mission": "Reach",
  "format": "Vlog",
  "intensity": "Medium",
  "niche": "Lifestyle / Relatable",
  "hookType": "POV/Situation",
  "framework": "POV Relatability",
  "why": "90d data: the share engine. 29.4K avg views and 9.8K shares, led by the 393K house tour and 187K Tokyo shop. Outsider POV of SF, high share potential across two audiences.",
  "hooks": [
   {
    "t": "POV",
    "s": "What Silicon Valley looks like when you're not from there.",
    "o": "Outsider POV",
    "v": "Wide shot of SF skyline from a cramped apartment window"
   },
   {
    "t": "Relatable",
    "s": "I walk into a coworking space, eyes meet the tech elite, I feel the contrast.",
    "o": "First impressions",
    "v": "Louise entering a sleek office, glancing at high‑tech desks"
   },
   {
    "t": "Lifestyle",
    "s": "I compare my bike commute from the Mission to a Tesla glide on Market Street.",
    "o": "Commute clash",
    "v": "Side‑by‑side bike and car footage"
   },
   {
    "t": "7x7 Skill · POV Relatability",
    "s": "",
    "o": "POV: Silicon Valley when you're not from there",
    "v": "Driving past Sand Hill Road, quiet"
   }
  ],
  "script": "HOOK: What Silicon Valley looks like when you're not from there, I step out of my modest apartment onto bustling Market Street, BUILD: I navigate a coworking hub, watch polished pitches, contrast my 9‑person team’s lean setup with sprawling campuses, PAYOFF: I land a quick coffee chat that opens a partnership, LOOP: Stay tuned as I share more outsider hacks for thriving in the Valley.",
  "shots": [
   "0-2s: Wide shot of SF skyline from a cramped apartment window, Louise looks out.",
   "2-5s: Louise walks onto Market Street, camera follows, bustling traffic.",
   "5-9s: Inside coworking space, sleek desks, Louise sets up laptop, observes surrounding tech teams.",
   "9-13s: Quick coffee meeting at a minimalist cafe, handshake with a venture partner.",
   "13-15s: Closing frame of Louise back in apartment, laptop screen showing a shared screen of Ryder’s roadmap."
  ],
  "overlay": [
   "Outsider POV",
   "Silicon Valley contrast",
   "9‑person team, $4.8M raised",
   "Stay tuned"
  ],
  "caption": "I’m Louise Ivan, co‑founder of Ryder, a crypto hardware wallet that grew from a $5K grant to $4.8M raised, a 9‑person team delivering devices to 68 countries from the Philippines to Amsterdam, I’m filming my first‑hand view of Silicon Valley as someone who didn’t grow up here, I start in a tiny apartment overlooking the skyline, I walk the crowded Market Street, I step into a sleek coworking hub where polished pitches replace my lean setup, I grab a coffee with a potential partner, I show how an outsider can find traction, I also note that our recent video earned 29.4K average views and 9.8K shares, confirming the appetite for real stories, follow for more outsider insights.",
  "cta": "Follow for more outsider insights."
 },
 {
  "date": "2026-09-10",
  "name": "Your best content idea is the one you're embarrassed to post.",
  "topic": "Content",
  "mission": "Reach",
  "format": "Talking head",
  "intensity": "Low",
  "niche": "Contrarian Take",
  "hookType": "Contrarian/Hard Truth",
  "framework": "Brutal Honesty",
  "why": "90d data: Contrarian/Hard Truth is the best hook on both axes, 7.1 saves/1K and 13.5K avg views. Market signals also flag Pattern Interrupt as CANDIDATE (3 accounts). Short punchy contrarian, low lift between heavy slots.",
  "hooks": [
   {
    "t": "Contrarian Take",
    "s": "Your best content idea is the one you're embarrassed to post.",
    "o": "Embarrassed Idea",
    "v": "Louise looking at a draft on a laptop, hesitant"
   },
   {
    "t": "Hard Truth",
    "s": "If it scares you, it's probably your strongest piece.",
    "o": "Scared? Strong.",
    "v": "Louise frowning at a whiteboard, scribbles"
   },
   {
    "t": "Pattern Interrupt",
    "s": "Post it anyway, watch the audience react.",
    "o": "Post & React",
    "v": "Louise hitting the publish button, notifications pop"
   },
   {
    "t": "7x7 Skill · Brutal Honesty",
    "s": "The idea you're embarrassed to post is the one that works.",
    "o": "post the embarrassing one",
    "v": "Drafts folder scroll"
   }
  ],
  "script": "HOOK: Your best content idea is the one you're embarrassed to post, BUILD: I felt that knot in my stomach when I drafted a piece that challenged the norm, PAYOFF: I published it anyway, the engagement spiked, the conversation shifted, I saw 13.5K average views on similar posts, 7.1 saves per 1K, proof that bold beats safe, LOOP: Keep testing the edge, share the uncomfortable, watch your reach grow.",
  "shots": [
   "0-2s: Louise sitting at desk, laptop open, hesitant glance",
   "3-5s: Close‑up of draft text, red underline on bold claim",
   "6-8s: Louise pressing publish, finger on mouse",
   "9-11s: Notification icons pop, numbers rise",
   "12-15s: Louise smiling, pointing to growth chart"
  ],
  "overlay": [
   "Embarrassed Idea",
   "Scared? Strong.",
   "Post & React",
   "Growth Proof"
  ],
  "caption": "I’m Louise Ivan, co‑founder of Ryder, we turned a $5K grant into $4.8M raised, built a 9‑person team, ship wallets to 68 countries from the Philippines to Amsterdam, I’ve learned the hardest content wins, your best idea is the one you’re embarrassed to post, it triggers the knot in your stomach, I posted a contrarian piece, it earned 13.5K average views, 7.1 saves per 1K, the audience reacted, the conversation shifted, keep testing the edge, share the uncomfortable, watch your reach grow, it’s a simple formula that works, try it today, Your audience is waiting, let them hear your truth, Share your bold idea now.",
  "cta": "Share your bold idea now"
 },
 {
  "date": "2026-09-11",
  "name": "The delusion you need is scheduled, not felt. My Sunday ritual.",
  "topic": "Mindset",
  "mission": "Reach",
  "format": "Vlog",
  "intensity": "Low",
  "niche": "Motivation / Mindset",
  "hookType": "Curiosity Gap",
  "framework": "POV Relatability",
  "why": "90d data: 1.2 saves/1K. Low-effort reach filler only, one earned specific per line. Market showed delusion-framing outliers; his version is a concrete ritual.",
  "hooks": [
   {
    "t": "Curiosity Gap",
    "s": "The delusion you need is scheduled, not felt. My Sunday ritual.",
    "o": "scheduled delusion",
    "v": "calendar event titled delusion hour"
   },
   {
    "t": "POV",
    "s": "POV: it's Sunday night and you're writing down things that don't exist yet.",
    "o": "Sunday, 9pm",
    "v": "notebook open under lamp, pen moving"
   },
   {
    "t": "Confession",
    "s": "Once a week I write like the company is already 10x bigger.",
    "o": "10x on paper first",
    "v": "two versions of a plan side by side"
   },
   {
    "t": "7x7 Skill · POV Relatability",
    "s": "Delusion is a Sunday appointment in my calendar.",
    "o": "scheduled delusion: Sundays",
    "v": "Calendar event close-up"
   }
  ],
  "script": "HOOK: The delusion you need is scheduled, not felt. My Sunday ritual. BUILD: Every Sunday I write one page as if Ryder is already ten times bigger, what we ship, who we hire, what I say no to, then Monday runs on the normal plan. PAYOFF: The page keeps the ceiling high while the week stays honest, ambition as an appointment instead of a mood. LOOP: Delusion on Sunday, receipts Monday to Saturday.",
  "shots": [
   "0-2s: calendar event close-up, cut to notebook",
   "2-5s: pen writing the 10x page",
   "5-8s: Monday b-roll, normal grind",
   "8-11s: talking head on ceiling vs honesty",
   "11-13s: notebook closing for the loop line"
  ],
  "overlay": [
   "Sunday: one page",
   "write the 10x version",
   "Monday: normal plan",
   "ambition = appointment"
  ],
  "caption": "Every Sunday night I spend twenty minutes writing one page as if Ryder is already ten times bigger, the products we ship, the people we hire, the things I finally say no to, and then Monday morning runs on the completely normal plan. The page isn't a manifesto, it's maintenance, because a founder's ceiling drifts down quietly if nothing pushes it back up, and I'd rather schedule the ambition than wait to feel it. Delusion gets Sunday, receipts get the other six days, and the split has kept me sane through two startups. Try it this week and tell me what your 10x page said.",
  "cta": "Comment SUNDAY if you try the ritual"
 },
 {
  "date": "2026-09-12",
  "name": "Announce when you open, not when you close (Fundraising series 13/15)",
  "topic": "AI",
  "mission": "Authority",
  "format": "Talking head",
  "intensity": "High",
  "niche": "AI / Tech Workflows",
  "hookType": "Curiosity Gap",
  "framework": "Curiosity Reveal + Pattern Interrupt",
  "why": "Fundraising series 13/15, vault-sourced (pre-seed/bridge/seed retros, every number real). Replaced original slot: 'The $0 AI research setup I use before every investor meeting.'. Chained loop hands off to part 14.",
  "hooks": [
   {
    "t": "Fundraising Series · Curiosity Reveal + Pattern Interrupt",
    "s": "The moment you announce you're raising, more VCs show up. I can't fully explain it.",
    "o": "announce at open",
    "v": "Talking head, direct to camera, text overlay on beat"
   },
   {
    "t": "List",
    "s": "The $0 AI research setup I use before every investor meeting.",
    "o": "$0, 20 minutes",
    "v": "meeting invite on screen, research doc building"
   },
   {
    "t": "Demo",
    "s": "20 minutes before any investor call, this is what I run.",
    "o": "the pre-call ritual",
    "v": "timer starting, tabs opening in sequence"
   },
   {
    "t": "Curiosity Gap",
    "s": "I walk into investor meetings knowing things their own associates missed.",
    "o": "know more than the associate",
    "v": "dense research doc scrolling"
   },
   {
    "t": "7x7 Skill · Demo / Unboxing",
    "s": "Before every investor meeting, I run this $0 research stack.",
    "o": "$0 investor research stack",
    "v": "Research doc building itself on screen"
   }
  ],
  "script": "HOOK: The moment you announce you're raising, more VCs show up. I can't fully explain it., BUILD: Every founder waits to announce the round until it's closed. We learned to announce when we're going out for capital, because the inbound spikes the moment it's public. Investors are pattern-matchers: a round being open and moving is itself a signal. The announcement creates the momentum it reports., PAYOFF: Your raise announcement isn't a press release about the past. It's a tool for the raise itself., LOOP: What the closing announcement did for us in four days, next reel.",
  "shots": [
   "0-2s: Hook direct to camera, overlay line 1",
   "2-15s: Build, talking head with overlay beats per claim",
   "15-22s: Payoff line, slight push-in, key overlay",
   "22-25s: Loop tease to next part, series card"
  ],
  "overlay": [
   "announce at open",
   "inbound spikes",
   "the announcement IS the momentum",
   "Part 13/15"
  ],
  "caption": "Everyone announces the round after it closes. We announce when we go out for capital, because inbound spikes the moment it's public. An open, moving round is itself the signal investors pattern-match on. The announcement creates the momentum it reports. Part 13.",
  "cta": "Follow for the PR numbers."
 },
 {
  "date": "2026-09-13",
  "name": "The announcement is an asset (Fundraising series 14/15)",
  "topic": "Founder",
  "mission": "Authority",
  "format": "Talking head",
  "intensity": "High",
  "niche": "Founder Story",
  "hookType": "List/Number",
  "framework": "Authority Credential + Numbered Listicle",
  "why": "Fundraising series 14/15, vault-sourced (pre-seed/bridge/seed retros, every number real). Replaced original slot: 'I met my co-founder at my last startup. Here's how you actually find one.'. Chained loop hands off to part 15.",
  "hooks": [
   {
    "t": "Fundraising Series · Authority Credential + Numbered Listicle",
    "s": "One funding announcement: 20,000 signups in 4 days and 25 million impressions.",
    "o": "20K signups / 4 days",
    "v": "Talking head, direct to camera, text overlay on beat"
   },
   {
    "t": "Curiosity Gap",
    "s": "I met my co-founder at my last startup. Here's how you actually find one.",
    "o": "stop co-founder dating",
    "v": "old team photo, two faces circled"
   },
   {
    "t": "Contrarian",
    "s": "Co-founder matching events are backwards. You can't interview for trenches.",
    "o": "can't interview for trenches",
    "v": "networking event b-roll, cut to real work"
   },
   {
    "t": "Authority",
    "s": "Marvin and I shipped together before we ever founded together.",
    "o": "shipped first, founded second",
    "v": "early project screenshots"
   },
   {
    "t": "7x7 Skill · Vulnerable Origin + Curiosity Reveal",
    "s": "My co-founder pitched me. I said no. He came back with a prototype.",
    "o": "I said no to my co-founder first",
    "v": "Early prototype photo held to camera"
   }
  ],
  "script": "HOOK: One funding announcement: 20,000 signups in 4 days and 25 million impressions., BUILD: When our $1.2M pre-seed went public, the coverage did more for the company than the money did that week. Twenty thousand email signups in four days. Twenty-five million impressions. A 1,230% jump in reach. We didn't get lucky. We treated the announcement like a product launch: embargo, press list, story angle, founder narrative., PAYOFF: Budget the PR moment as part of the round. The capital funds the company. The announcement funds the pipeline: customers, hires, and your next investors., LOOP: The instrument we raised that round on, and when it stops working, is the last reel in this series.",
  "shots": [
   "0-2s: Hook direct to camera, overlay line 1",
   "2-15s: Build, talking head with overlay beats per claim",
   "15-22s: Payoff line, slight push-in, key overlay",
   "22-25s: Loop tease to next part, series card"
  ],
  "overlay": [
   "20K signups / 4 days",
   "25M impressions",
   "announcement = product launch",
   "Part 14/15"
  ],
  "caption": "Our $1.2M pre-seed announcement drove 20,000 email signups in four days and 25 million impressions. Not luck: embargo, press list, story angle, treated like a product launch. The capital funds the company. The announcement funds the pipeline. Part 14.",
  "cta": "Save this for your close."
 },
 {
  "date": "2026-09-14",
  "name": "Crypto marketing playbooks don't work. We grew Ryder with normie content.",
  "topic": "Growth",
  "mission": "Authority",
  "format": "Talking head + screen",
  "intensity": "High",
  "niche": "Contrarian Take",
  "hookType": "Contrarian/Hard Truth",
  "framework": "Pattern Interrupt",
  "why": "90d data: Contrarian/Hard Truth is the best hook on both axes, 7.1 saves/1K and 13.5K avg views. Market signals also flag Pattern Interrupt as CANDIDATE (3 accounts). Category heresy with his own account as the receipt.",
  "hooks": [
   {
    "t": "Pattern Interrupt",
    "s": "Crypto marketing playbooks don't work. We grew Ryder with normie content.",
    "o": "normie content won",
    "v": "crypto jargon post dissolving into a plain reel"
   },
   {
    "t": "Authority",
    "s": "Our best-performing content never mentions the blockchain.",
    "o": "0 blockchain mentions",
    "v": "top reels grid, none look like crypto"
   },
   {
    "t": "Curiosity Gap",
    "s": "The crypto audience everyone fights over isn't the one that buys.",
    "o": "the buyers are elsewhere",
    "v": "two audience circles, the bigger one highlighted"
   },
   {
    "t": "7x7 Skill · Pattern Interrupt",
    "s": "We ignored every crypto marketing playbook. Normies grew us instead.",
    "o": "normie content grew a crypto brand",
    "v": "Feed scroll: zero jargon posts"
   }
  ],
  "script": "HOOK: Crypto marketing playbooks don't work. We grew Ryder with normie content. BUILD: The standard playbook fights over the same crypto-native audience with jargon and giveaways, but our buyers are anxious holders and travelers who scroll normal content. PAYOFF: Reels about fear, travel, and family outperform anything with chain vocabulary, because we meet people where they scroll, not where the industry talks to itself. LOOP: Market the feeling, not the protocol.",
  "shots": [
   "0-2s: jargon post dissolving, cut to face",
   "2-5s: top-performing reels grid, zero crypto aesthetics",
   "5-8s: audience circles visual",
   "8-11s: talking head on the feeling line",
   "11-13s: product cameo, subtle, for the loop"
  ],
  "overlay": [
   "jargon = talking to yourself",
   "buyers scroll normal feeds",
   "fear, travel, family",
   "feeling > protocol"
  ],
  "caption": "Every crypto marketing playbook fights over the same crypto-native audience with jargon, giveaways, and chain vocabulary, and we grew Ryder by mostly ignoring it. Our actual buyers are anxious holders and people who travel with their savings, and they scroll the same feeds as everyone else, so our best content is about fear, family, and travel, and some of the top reels never say blockchain once. The industry talks to itself, we'd rather talk to the person hiding a seed phrase in a drawer. Market the feeling, not the protocol. Comment NORMIE for the content framework we use.",
  "cta": "Comment NORMIE for the framework"
 },
 {
  "date": "2026-09-15",
  "name": "The exact caption structure I use on every reel. Steal it.",
  "topic": "Content",
  "mission": "Saves",
  "format": "Screen demo",
  "intensity": "Medium",
  "niche": "How-To / List",
  "hookType": "List/Number",
  "framework": "Numbered Listicle",
  "why": "90d data: steady save earner at 7.0 saves/1K across 20 posts. List/Number hook runs 5.9 saves/1K. Template giveaway, comment-gated, feeds the results log.",
  "hooks": [
   {
    "t": "List/Number",
    "s": "The exact caption structure I use on every reel. Steal it.",
    "o": "Steal my caption template",
    "v": "Text overlay 'Steal my template' appears"
   },
   {
    "t": "Curiosity",
    "s": "Want to see a proven caption that drives saves?",
    "o": "Proven caption demo",
    "v": "Screen zoom on a caption example"
   },
   {
    "t": "Value",
    "s": "Grab the free template and start posting better captions today",
    "o": "Free template inside",
    "v": "Gift icon pops up"
   },
   {
    "t": "7x7 Skill · Numbered Listicle",
    "s": "Every caption I write uses the same skeleton. Take it.",
    "o": "the caption skeleton",
    "v": "Caption anatomy annotated on screen"
   }
  ],
  "script": "HOOK: The exact caption structure I use on every reel. Steal it. BUILD: I break down the caption into hook, numbered steps, concrete metric, and a single call to action, all in a compressed style that fits my brand. PAYOFF: You get a ready‑to‑use template that saves drafting time and improves saves per thousand. LOOP: Apply it now, comment below for the template.",
  "shots": [
   "0-2s: Title screen with text \"The exact caption structure I use on every reel. Steal it.\"",
   "2-4s: Screen capture of a caption template outline, bullet points appear",
   "4-6s: Highlight of numbered list steps, numbers animate",
   "6-8s: Show concrete metric example \"7.0 saves per 1K\"",
   "8-10s: Call to action overlay \"Comment below for the template\""
  ],
  "overlay": [
   "Hook",
   "Numbered steps",
   "Concrete metric",
   "Call to action"
  ],
  "caption": "I'm Louise Ivan, co‑founder of Ryder, a crypto hardware wallet that grew from a $5K grant to $4.8M raised, runs with a 9‑person team, ships from the Philippines to Amsterdam and 68 countries, I keep my captions direct, compressed, specific, I start with a clear hook, follow with a numbered list that shows the exact steps, I include a concrete result like our 7.0 saves per 1K metric, I end with a single call to action, the format saves you time and boosts engagement, try the template and see the difference, and start posting better captions today, comment below for the template.",
  "cta": "Comment below for the template"
 },
 {
  "date": "2026-09-16",
  "name": "You don't need to learn prompting. You need to learn delegation. Different skill.",
  "topic": "AI",
  "mission": "Authority",
  "format": "Talking head",
  "intensity": "High",
  "niche": "AI / Tech Workflows",
  "hookType": "Contrarian/Hard Truth",
  "framework": "Pattern Interrupt",
  "why": "90d data: best niche both ways, 9.3 saves/1K and 17.8K avg views on only 13 posts. Most underposted winner. Reframe the whole niche argues about. Contrarian meets AI, his two best lanes.",
  "hooks": [
   {
    "t": "Pattern Interrupt",
    "s": "You don't need to learn prompting. You need to learn delegation. Different skill.",
    "o": "delegation > prompting",
    "v": "prompt guide closing, org-chart style diagram opening"
   },
   {
    "t": "Contrarian",
    "s": "Prompt engineering is a management problem wearing a tech costume.",
    "o": "management, not magic",
    "v": "prompt text morphing into a job brief"
   },
   {
    "t": "Curiosity Gap",
    "s": "The people best at AI were good at something else first.",
    "o": "the hidden prerequisite",
    "v": "manager briefing scene next to AI chat"
   },
   {
    "t": "7x7 Skill · Pattern Interrupt",
    "s": "Stop learning prompting. Start learning delegation. Different skill.",
    "o": "prompting ≠ delegation",
    "v": "Task board handing off to agents"
   }
  ],
  "script": "HOOK: You don't need to learn prompting. You need to learn delegation. Different skill. BUILD: A good prompt is just a good brief, context, constraints, definition of done, exactly what you'd give a new hire, and vague managers get vague output from both. PAYOFF: The founders winning with AI were already good at handing off work, the model just exposed everyone else's briefing skills. LOOP: Write your next prompt like a job brief. Watch what changes.",
  "shots": [
   "0-2s: prompt guide closes, cut to face",
   "2-5s: side-by-side, vague prompt vs real brief",
   "5-8s: the three brief elements landing as overlays",
   "8-11s: talking head on the exposure line",
   "11-13s: typing a brief-style prompt for the loop"
  ],
  "overlay": [
   "prompt = brief",
   "context, constraints, done",
   "vague manager, vague output",
   "brief your AI"
  ],
  "caption": "Everyone's buying prompt courses and the actual skill is one founders were supposed to have already, delegation. A good prompt is a good brief, context, constraints, and a clear definition of done, exactly what you'd hand a new hire on day one, and managers who can't brief a human get identically vague output from a model. The people quietly winning with AI at scale were good at handing off work before the tools existed, the models just exposed everyone else. Write your next prompt like a job brief and watch the difference. Comment BRIEF for the template I give my team.",
  "cta": "Comment BRIEF for the delegation template"
 },
 {
  "date": "2026-09-17",
  "name": "Marketing team of one when the CEO says let's go viral.",
  "topic": "Humor",
  "mission": "Reach",
  "format": "Skit",
  "intensity": "Low",
  "niche": "Meme / Humor",
  "hookType": "POV/Situation",
  "framework": "POV Relatability",
  "why": "90d data: 0.7 saves/1K. Pure reach play, low intensity, founder-life humor only. Relatable operator humor, final light slot.",
  "hooks": [
   {
    "t": "POV",
    "s": "Marketing team of one when the CEO says let's go viral.",
    "o": "Marketing team of one",
    "v": "Louise at a cluttered desk, laptop open, coffee mug"
   },
   {
    "t": "Situational",
    "s": "The CEO bursts in, demands a viral post by noon",
    "o": "CEO demands viral post",
    "v": "CEO entering office, arms wide"
   },
   {
    "t": "Humorous",
    "s": "I scramble, pull memes, pray for shares",
    "o": "Scrambling for memes",
    "v": "Louise frantically scrolling on phone"
   },
   {
    "t": "7x7 Skill · POV Relatability",
    "s": "",
    "o": "POV: the CEO said 'let's go viral' and you're the whole marketing team",
    "v": "One person, five hats, chaotic cuts"
   }
  ],
  "script": "HOOK: Marketing team of one when the CEO says let's go viral, BUILD: I stare at the screen, pull up our crypto wallet stats, remember the $5K grant that sparked our $4.8M raise, note our 9‑person crew shipping to 68 countries from the Philippines to Amsterdam, I draft a meme about that journey, PAYOFF: the post gets a handful of saves, a smile, and a reminder that even small teams can punch above their weight, LOOP: I repeat the hustle, ready for the next ask",
  "shots": [
   "0-2s: Louise at a cluttered desk, laptop open, coffee mug",
   "2-4s: CEO bursts in, arms wide, demanding a viral post",
   "4-6s: Louise scrolling frantic, pulling up Ryder stats on screen",
   "6-8s: Quick cut to meme draft, cartoon of a wallet traveling from Philippines to Amsterdam",
   "8-10s: Phone buzzes, modest save count appears, Louise smiles, nods"
  ],
  "overlay": [
   "Marketing team of one",
   "CEO demands viral post",
   "Scrambling for memes",
   "Small team, big reach"
  ],
  "caption": "As Louise Ivan, co‑founder of Ryder, I run a nine‑person operation that turned a $5K grant into a $4.8M raise, we ship our crypto hardware wallet to 68 countries, from the Philippines to Amsterdam, when the CEO says let's go viral I sit at a single desk, pull up our stats, draft a meme about our journey, the post garners modest saves, it reminds our audience that a tiny team can still make noise, our product protects private keys, our design survived five security audits, our community follows us across time zones, I juggle content, support, and strategy, each meme reflects real data, each share validates our mission, Learn more about Ryder.",
  "cta": "Learn more about Ryder"
 },
 {
  "date": "2026-09-18",
  "name": "Uncapped vs capped, in one round each (Fundraising series 15/15)",
  "topic": "Founder",
  "mission": "Authority",
  "format": "Talking head",
  "intensity": "High",
  "niche": "Founder Story",
  "hookType": "Contrarian/Hard Truth",
  "framework": "Authority Credential + Curiosity Reveal",
  "why": "Fundraising series 15/15, vault-sourced (pre-seed/bridge/seed retros, every number real). Replaced original slot: 'The worst month of my founder life happened right before the best one.'. Chained loop hands off to part 1.",
  "hooks": [
   {
    "t": "Fundraising Series · Authority Credential + Curiosity Reveal",
    "s": "We raised on uncapped notes in 2022. The same structure nearly killed our 2023 round.",
    "o": "2022: uncapped = closed fast",
    "v": "Talking head, direct to camera, text overlay on beat"
   },
   {
    "t": "Cliffhanger",
    "s": "The worst month of my founder life happened right before the best one.",
    "o": "The worst month of my founder life happened right before the best one.",
    "v": "Close-up of me looking reflective"
   },
   {
    "t": "Vulnerable Origin",
    "s": "I watched cash dry up, shipments stopped, fear set in.",
    "o": "Cash freeze, halted shipments",
    "v": "Desk with empty boxes"
   },
   {
    "t": "Authority Reveal",
    "s": "A $5K grant sparked a $4.8M raise, we expanded to 68 countries.",
    "o": "Grant to massive raise",
    "v": "World map pins lighting up"
   },
   {
    "t": "7x7 Skill · Vulnerable Origin",
    "s": "The worst month of my founder life ended 30 days before the best one.",
    "o": "$42K in the bank. no founder salaries.",
    "v": "Black screen cut to award footage"
   }
  ],
  "script": "HOOK: We raised on uncapped notes in 2022. The same structure nearly killed our 2023 round., BUILD: Uncapped note means no valuation ceiling: investors ride whatever the next round prices at. Founder-friendly, and in a bull market people took it, because they were betting on us, not a spreadsheet. Then 2023. Same structure, frozen round. Months of nothing until we reworked it into a capped note at $12M post. It closed almost double its target., PAYOFF: The instrument isn't right or wrong. It's priced by the market you're raising in. Uncapped is a bull-market instrument. Caps are what conviction looks like when money is scared., LOOP: Start of this series is pinned: the $250K DM that started everything.",
  "shots": [
   "0-2s: Hook direct to camera, overlay line 1",
   "2-15s: Build, talking head with overlay beats per claim",
   "15-22s: Payoff line, slight push-in, key overlay",
   "22-25s: Loop tease to next part, series card"
  ],
  "overlay": [
   "2022: uncapped = closed fast",
   "2023: uncapped = frozen",
   "recut at $12M cap: 1.93x target",
   "Part 15/15"
  ],
  "caption": "We raised our pre-seed on uncapped notes and it flew. The same structure froze our bridge in the 2023 market until we recut it as a capped note at $12M post, and it closed at almost double target. Instruments aren't right or wrong, they're priced by the market you raise in. Part 15, series ends here. Part 1 is pinned.",
  "cta": "Follow @louise.ivan for the full fundraising series."
 }
];
