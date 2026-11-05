import type {
  ServiceCard, AddOnCard, Testimonial, BlogPost, PriceItem, AddOn
} from '@/types'

// ── Contact ──────────────────────────────────────────────────────
export const CONTACT = {
  phone: '07351 282 131',
  phoneTel: 'tel:07351282131',
  whatsapp: 'https://wa.me/447767759013?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20cleaning%20services',
  email: 'info@thefamgroup.uk',
  website: 'thefamgroup.uk',
  locations: ['Manchester', 'Liverpool', 'Crewe', 'Cheshire', 'Stoke-on-Trent', 'Carlisle'],
  tagline: 'Family. Community. Care.',
}

// ── Quote Pricing Logic ───────────────────────────────────────────
export const BASE_PRICES: Record<string, number> = {
  regular: 60, deep: 140, eot: 149, moveout: 155,
  office: 95, postconstruction: 200, airbnb: 75,
}
export const SIZE_MULT: Record<string, number> = {
  studio: 1, '1bed': 1.1, '2bed': 1.35, '3bed': 1.65, '4bed': 2.1,
}
export const FREQ_MULT: Record<string, number> = {
  'one-off': 1, weekly: 0.80, fortnightly: 0.85, monthly: 0.90,
}
export const COND_MULT: Record<string, number> = {
  light: 0.90, average: 1.0, heavy: 1.28, 'very-heavy': 1.55,
}
export const FREQ_SAVINGS: Record<string, string> = {
  weekly: 'Save 20%', fortnightly: 'Save 15%', monthly: 'Save 10%', 'one-off': '',
}

// ── Add-ons ───────────────────────────────────────────────────────
export const ADDONS: AddOn[] = [
  { id: 'oven',       label: 'Oven Clean',         price: 45, icon: '🍳' },
  { id: 'fridge',     label: 'Fridge/Freezer',      price: 25, icon: '🧊' },
  { id: 'windows',    label: 'Interior Windows',    price: 30, icon: '🪟' },
  { id: 'carpet',     label: 'Carpet/Room',         price: 40, icon: '🧹' },
  { id: 'upholstery', label: 'Upholstery',          price: 55, icon: '🛋️' },
  { id: 'laundry',    label: 'Laundry & Ironing',   price: 20, icon: '👕' },
  { id: 'cupboards',  label: 'Inside Cupboards',    price: 35, icon: '🗃️' },
  { id: 'sameday',    label: 'Same-Day Priority',   price: 25, icon: '⚡' },
]

// ── Residential Services ──────────────────────────────────────────
export const RESIDENTIAL_SERVICES: ServiceCard[] = [
  { id: 'regular',           title: 'Regular Home Clean',          description: 'Weekly, fortnightly, or monthly maintenance. Same cleaner every visit.', emoji: '🏠', href: '/services#regular' },
  { id: 'deep',              title: 'Deep Clean',                  description: 'Top-to-bottom intensive clean including behind appliances and inside cupboards.', emoji: '🌊', href: '/services#deep' },
  { id: 'eot',               title: 'End of Tenancy Clean',        description: 'Letting agent approved. Certificate of clean provided. Full deposit return supported.', emoji: '🔑', href: '/services#eot' },
  { id: 'moveout',           title: 'Move In / Move Out',          description: 'Get your new home fresh or leave your old one in perfect condition.', emoji: '📦', href: '/services#moveout' },
  { id: 'spring',            title: 'One-Off / Spring Clean',      description: 'Single visit, no commitment. Perfect for seasonal refresh or special occasions.', emoji: '🌸', href: '/services#spring' },
  { id: 'postconstruction',  title: 'Post-Renovation Clean',       description: 'Remove all dust, plaster, paint marks, and debris after building work.', emoji: '🏗️', href: '/services#postconstruction' },
]

// ── Commercial Services ───────────────────────────────────────────
export const COMMERCIAL_SERVICES: ServiceCard[] = [
  { id: 'office',       title: 'Office & Workplace',            description: 'Daily, weekly, or out-of-hours cleaning for offices and co-working spaces.', emoji: '🏢', href: '/services#office' },
  { id: 'retail',       title: 'Retail & Showroom',             description: 'Flexible to trading hours. Early mornings and evenings available.', emoji: '🛍️', href: '/services#retail' },
  { id: 'healthcare',   title: 'Healthcare & Medical',          description: 'NHS colour-coded. COSHH compliant. DBS-checked operatives as standard.', emoji: '🏥', href: '/services#healthcare' },
  { id: 'education',    title: 'Education',                     description: 'Schools, colleges, and nurseries. Enhanced DBS staff. Child-safe products.', emoji: '🎓', href: '/services#education' },
  { id: 'managed',      title: 'Managed Properties',           description: 'Communal areas, stairwells, lobbies, bin stores for letting agents and HAs.', emoji: '🏘️', href: '/services#managed' },
  { id: 'industrial',   title: 'Industrial & Warehouse',        description: 'Large-format cleaning, welfare facilities, floor scrubbing. Risk assessed.', emoji: '🏭', href: '/services#industrial' },
]

// ── Add-on Cards (services page) ─────────────────────────────────
export const ADDON_CARDS: AddOnCard[] = [
  { id: 'oven',       title: 'Oven Clean',             description: 'Deep soaked & polished', emoji: '🍳' },
  { id: 'fridge',     title: 'Fridge/Freezer Clean',   description: 'Inside & sanitised',     emoji: '🧊' },
  { id: 'windows',    title: 'Interior Windows',       description: 'Streak-free results',    emoji: '🪟' },
  { id: 'laundry',    title: 'Laundry & Ironing',      description: 'Wash, dry & fold',       emoji: '👕' },
  { id: 'upholstery', title: 'Upholstery',             description: 'Sofa & fabric clean',    emoji: '🛋️' },
  { id: 'carpet',     title: 'Carpet Cleaning',        description: 'Deep extraction',        emoji: '🧹' },
]

// ── Testimonials ──────────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  { id: '1', quote: 'Great response time, the team arrived on time and got the job done quickly. Our office has never looked this clean — we\'re now on a monthly contract.', name: 'Sarah R.', location: 'Office Manager, Manchester', initials: 'SR', rating: 5 },
  { id: '2', quote: 'They did our end of tenancy clean and we got the full deposit back. Absolutely brilliant service. The FAM team were thorough and so professional.', name: 'James A.', location: 'Tenant, Crewe', initials: 'JA', rating: 5 },
  { id: '3', quote: 'I was really impressed with how careful they were around my kids\' rooms. They used eco-friendly products without me even asking. Will definitely rebook.', name: 'Priya O.', location: 'Homeowner, Manchester', initials: 'PO', rating: 5 },
  { id: '4', quote: 'I\'m truly impressed — my place has never looked this clean. A spotless transformation. It\'s like magic in every corner!', name: 'Pete G.', location: 'Manchester', initials: 'PG', rating: 5 },
]

// ── Blog Posts ────────────────────────────────────────────────────
export const BLOG_POSTS: BlogPost[] = [
  {
    id: '7', slug: 'how-to-remove-blood-stains-from-carpet', emoji: '🩸', illustration: 'IllustrationDeepClean',
    title: 'How to Remove Blood Stains From Carpet (Without Ruining It)',
    excerpt: 'Blood is one of the few stains that gets harder to remove the longer you wait — and hot water makes it permanent. Here\'s the method that actually works, and the chemistry behind why.',
    metaDescription: 'How to remove blood stains from carpet step by step — the cold-water method that works on fresh and dried-in stains, the mistake that sets blood permanently, and when to call a professional.',
    category: 'Carpet Cleaning', date: '3 Nov 2026', readTime: '8 min',
    relatedHref: '/cleaning/carpet-cleaning/', relatedLabel: 'Professional Carpet Cleaning',
    content: [
      'Blood is a protein-based stain, which puts it in the same family as egg, dairy, and sweat — and protein stains behave completely differently to the dirt, grease, or wine stains most carpet-cleaning advice is written for. Get the method wrong and you can set a blood stain permanently into the fibres in seconds, often without realising what you did until the stain is already locked in.',
      '## Why cold water isn\'t a myth — it\'s basic protein chemistry',
      'Heat denatures protein. That\'s not a cleaning slogan, it\'s the same chemical process that turns a raw egg white from clear and liquid to opaque and solid the moment it hits a hot pan. Blood contains haemoglobin and other proteins that undergo the same change under heat: the protein structure unfolds and then re-binds, this time locking onto the carpet fibres themselves rather than sitting loosely on top of them. Once that bond forms, no amount of scrubbing reverses it — you\'re no longer lifting a stain off the carpet, you\'ve chemically welded it on. Cold water avoids triggering that reaction in the first place, which is why every credible source on stain removal is unanimous on this single point even when they disagree on everything else. The same rule applies to tumble dryers: running a blood-stained item through a hot dryer cycle has the same heat-setting effect, so if you\'re dealing with removable fabric rather than carpet, air-dry it until the stain is fully gone.',
      '## What\'s actually happening when hydrogen peroxide fizzes on a stain',
      'The fizzing reaction people associate with hydrogen peroxide on blood isn\'t the stain "dissolving" — it\'s a specific enzyme in blood called catalase breaking the peroxide down into water and oxygen gas, and the bubbles are that oxygen escaping. That reaction alone doesn\'t remove colour. The actual lightening comes from a separate process: hydrogen peroxide is an oxidiser, and it attacks the iron-containing haem group at the centre of the haemoglobin molecule — that haem group is what gives blood its red colour, so oxidising it is what makes the stain fade. This matters practically because it tells you peroxide is doing real chemical work, not just agitating the surface, which is also exactly why it can lighten carpet dye along with the stain. Always test on a hidden corner first, and avoid it altogether on dark or boldly coloured carpet where any lightening would be obvious.',
      '## Step-by-step: fresh blood stains',
      'Blot — never rub — the stain with a clean cloth to lift as much blood as possible before it dries; rubbing just drives it deeper into the pile and spreads the affected area. Mix a teaspoon of mild dish soap with a cup of cold water, apply with a clean cloth, and blot from the outside of the stain inward so you\'re not pushing it outward as you work. Rinse by blotting with a cloth dampened in plain cold water, then repeat the soap step if any colour remains. Dry with a towel and let the carpet air dry fully before anyone walks on it, since a damp patch will re-attract dirt and make the area look dull even once the stain itself is gone.',
      '## Step-by-step: dried-in or old blood stains',
      'Dried stains need an enzyme-based approach, because by this point the protein has already bonded to the fibre and soap alone has nothing to work on. Protease enzymes — the same category of enzyme found in biological laundry detergents, and in saliva, which is why dabbing an old stain with saliva is a genuinely real if slightly strange trick — digest protein chains at a molecular level rather than just lifting surface residue. For carpet, the more practical version of the same principle is an enzyme-based pet-stain remover, widely sold and gentler on dye than peroxide. Apply, leave for the time stated on the product, then blot with a cold damp cloth. For any trace that remains after the enzyme treatment, finish with a small amount of 3% hydrogen peroxide (standard pharmacy strength), leave for a few minutes while it fizzes, then blot clean. The recommended sequence from most reliable sources is consistent: cold water first, enzyme treatment next, peroxide last and only on what\'s left.',
      '## What not to do',
      'Don\'t use hot water, don\'t rub, don\'t use bleach — it doesn\'t target protein the way an enzyme or peroxide does, and it carries a much higher risk of discolouring the carpet for no real cleaning benefit — and don\'t leave the stain once you\'ve noticed it. The window where cold water alone is enough closes fast, especially on synthetic carpet, where blood can begin setting within 30–60 minutes at room temperature.',
      '## When to call a professional instead of DIY-ing it',
      'Large stains, stains on wool or other natural fibre (far less forgiving of home remedies than synthetic carpet), stains that have already been sat on for days, or stains on light carpet where any peroxide lightening would stand out are all situations where professional hot water extraction with a correct protein pre-treatment gets a materially better result than a DIY attempt — without the risk of making it worse in the process. Our team carries dedicated protein-stain pre-treatment on every carpet clean as standard, not as a paid extra, specifically because stains like this come up often enough to prepare for every time.',
    ],
  },
  {
    id: '8', slug: 'how-often-should-you-clean-your-wheelie-bin', emoji: '🗑️', illustration: 'IllustrationHouseClean',
    title: 'How Often Should You Clean Your Wheelie Bin? A Bolton Household\'s Guide',
    excerpt: 'Bolton Council empties your bin — it doesn\'t clean it. Here\'s what actually builds up between collections, how fast it happens, and how often a proper clean is worth it.',
    metaDescription: 'How often to clean your wheelie bin in Bolton, how fast fly eggs hatch in warm weather, what builds up between Bolton Council collections, DIY methods, and when a professional four-weekly clean is worth it.',
    category: 'Bin Cleaning', date: '5 Nov 2026', readTime: '7 min',
    relatedHref: '/cleaning/bolton/', relatedLabel: 'Cleaning Services in Bolton',
    content: [
      'Bolton Council collects general waste weekly and recycling fortnightly — but collection day only moves the rubbish out. It does nothing about what\'s left behind: the liquid residue, food particles, and bacteria that cling to the inside walls and base of the bin after every single collection. One widely cited UK survey of more than 3,000 households found that 87% never clean their wheelie bins at all — which says less about hygiene standards and more about how easy it is to simply not think about a problem that sits outside, out of sight.',
      '## How fast this actually becomes a problem',
      'Several UK councils publish near-identical guidance on how quickly fly eggs hatch into maggots in warm weather, and the numbers are faster than most people assume: North Lincolnshire Council puts it at 8–20 hours in summer conditions, Wealden District Council says 8–12 hours, and West Berkshire Council confirms maggots can develop from fly eggs in as little as 8 hours in high temperatures. That\'s not a gradual build-up over weeks — it\'s a same-day problem once a fly has had access to food waste in a bin. Pest control professionals note that a full fly life cycle, from egg to breeding adult, can complete in as little as 3–4 weeks under ideal warm conditions, which is how a single missed bin can turn into a recurring seasonal problem rather than a one-off.',
      '## What actually builds up between collections',
      'Food waste leaks juices that seep into the plastic and keep feeding bacteria long after the bag itself is gone — this is the residue flies are drawn to, and warmer weather speeds up both the decomposition that attracts them and their own breeding cycle. The smell that hits you every time you open the lid isn\'t really the current week\'s rubbish; it\'s weeks of residue baked into the plastic by sun exposure, especially on bins that sit against a south-facing wall for much of the day in Astley Bridge, Heaton, and similar higher-ground parts of the borough.',
      '## So how often should you actually clean it',
      'There\'s no single official council-mandated interval — responsibility for cleaning the bin itself sits with the householder, not the council, and commercial guidance genuinely varies from monthly to once every three months to after every single collection. In practice, every four weeks is the interval that holds up best for most households: frequent enough that residue never gets the chance to build into a real smell or pest problem, infrequent enough to stay a forgettable routine rather than a chore. Larger families, households with young children in nappies, or anyone who has already had a maggot problem once (they\'ll often return to the same bin if residue isn\'t fully removed) should consider fortnightly instead, timed to land right after a collection so the bin is already empty.',
      '## DIY cleaning: what works and its limits',
      'A hosepipe and a scrubbing brush with hot water and washing-up liquid will shift visible debris, and a kettle of boiling water poured in followed by a cap of bleach or disinfectant left to sit for 10 minutes will knock back odour and kill surface bacteria and any eggs already laid. The limit of DIY is reach and consistency — the base and lower walls of a 240-litre bin are genuinely hard to scrub properly without fully tipping it over, and most people stop at "looks clean" rather than "actually sanitised," which is exactly why the smell always comes back faster than expected even for households that do make the effort.',
      '## Why Bolton households are switching to a professional service',
      'A proper bin clean uses a dedicated hot-water pressure system that reaches the full interior — base, walls, lid, and wheels — in a way a garden hose simply can\'t, combined with a biodegradable sanitiser rather than just household disinfectant. It\'s done kerbside right after your Bolton Council collection, so there\'s no need to be home and no mess for you to deal with. At under £7 a clean on a four-weekly plan, it\'s a small, forgettable monthly cost that quietly solves a problem the 87%-never-clean statistic suggests most households have simply learned to live with instead.',
    ],
  },
  { id: '1', slug: 'things-cleaners-always-notice', title: '10 Things Cleaners Always Notice (That You Probably Don\'t)', excerpt: 'Our team has seen it all. Here are the spots homeowners almost always miss, why they get missed, and how to tackle each one properly.', metaDescription: 'The spots professional cleaners always find dirty that homeowners miss — skirting boards, light switches, door handles, extractor fans, under furniture — and how to clean each one properly.', category: 'Home Cleaning', date: '5 Jun 2026', readTime: '6 min', emoji: '🏠', illustration: 'IllustrationStar',
    relatedHref: '/cleaning/regular-house-cleaning/', relatedLabel: 'Regular House Cleaning',
    content: [
      'After thousands of cleans across Manchester, Crewe, and beyond, our team sees the same overlooked spots in almost every home — not because people are careless, but because these areas simply aren\'t part of the normal cleaning line of sight. Most of them share one trait: they\'re either below knee height, above eye level, or hidden behind something, which is exactly why a regular tidy-up skips them even in an otherwise spotless home.',
      '## Skirting boards and door frames',
      'Dust settles here constantly but it\'s below eye level and easy to forget entirely. Left long enough, it stops being loose dust and becomes a grey, slightly sticky film that bonds to the paintwork — genuinely harder to remove with every extra week it\'s left. A damp microfibre cloth run along the top edge weekly stops it ever reaching that stage, and takes under a minute per room.',
      '## Light switches and door handles',
      'These are the most-touched surfaces in any home — every person who enters a room touches both, multiple times a day — and they\'re almost never wiped during a normal clean, since they don\'t look visibly dirty the way a floor or worktop does. A quick pass with an antibacterial wipe during your normal routine takes seconds and matters more for hygiene than most of the visible cleaning people prioritise instead.',
      '## Underneath and behind furniture',
      'Sofas, beds, and wardrobes trap dust and debris that only gets properly dealt with during a deep clean, if ever. Pulling furniture out every few weeks for a quick vacuum pass — even just the parts within reach — stops it accumulating into the kind of job that needs two people and an afternoon to tackle properly.',
      '## Extractor fans and vents',
      'Kitchen and bathroom extractor covers collect a genuinely surprising amount of grease and dust, and most people only notice once the cover has visibly discoloured or the fan starts sounding laboured. A monthly wipe-down — removing the cover if it clips off, which most do — keeps airflow working properly and prevents the stale smell that builds up in grease-clogged units over time.',
      '## The tops of doors, picture frames, and skirting board corners',
      'Anything above eye level or tucked into a corner gets missed by habit rather than neglect — it\'s simply not where your eyes land during a normal tidy-up. A deliberate check with a cloth or duster every month catches what weeks of otherwise thorough cleaning will consistently walk straight past.',
      '## Washing machine seals and detergent drawers',
      'The rubber seal around a front-loading washing machine door traps moisture and detergent residue, which is exactly the environment mould needs — it\'s one of the most common sources of a "clean laundry that still smells slightly off" problem. Wiping the seal dry after each wash and leaving the door ajar between cycles prevents most of it; the detergent drawer itself benefits from a monthly rinse to clear built-up powder residue.',
      '## Why this is where professional cleans earn their value',
      'A one-off deep clean catches all of this in a single pass, but the real value of a regular cleaning schedule is that these areas never get the chance to build up to "deep clean required" in the first place — which is the difference between a quick weekly maintenance visit and an intensive, multi-hour reset every few months.',
    ],
  },
  { id: '2', slug: 'tenant-deposit-cleaning-checklist', title: 'How to Get Your Full Deposit Back: A Tenant\'s Cleaning Checklist', excerpt: 'A complete room-by-room guide to passing your check-out inspection and getting every penny back, based on what inventory clerks actually check against.', metaDescription: 'A room-by-room end of tenancy cleaning checklist covering the exact standard letting agents and inventory clerks check for, so you get your full deposit back.', category: 'End of Tenancy', date: '28 May 2026', readTime: '8 min', emoji: '🔑', illustration: 'IllustrationKeyClean',
    relatedHref: '/cleaning/end-of-tenancy-cleaning/', relatedLabel: 'End of Tenancy Cleaning',
    content: [
      'Deposit disputes almost always come down to the same handful of areas, because inventory clerks work from a checklist rather than a general impression — they\'re comparing specific points against your check-in report, room by room. Knowing exactly what they\'re looking at means you can focus your limited time on what actually decides whether you get your deposit back, rather than spreading effort evenly across a flat that doesn\'t need it everywhere.',
      '## Kitchen: the oven and inside appliances',
      'The oven is the single most disputed item in any end of tenancy inspection, consistently. It needs to be genuinely degreased inside — racks, trays, the glass on the inside of the door, and the grooves around the base — not just wiped with a cloth, since baked-on grease doesn\'t respond to anything less than a proper degreasing product left to work. The fridge and freezer need defrosting, emptying, and wiping inside with every shelf and door rack removed and cleaned separately, since crumbs and spills collect in the grooves a cloth can\'t reach while they\'re still installed.',
      '## Bathroom: limescale and grout',
      'Clerks check grout lines and the area immediately around taps specifically for limescale and mould, not just general surface cleanliness — these are the two things that photograph clearly in a comparison and are hardest to dispute. A limescale remover left to sit for several minutes before scrubbing does far more than a quick wipe with a standard spray, particularly around the base of taps and inside the toilet rim.',
      '## Windows, sills, and skirting',
      'Internal windows, frames, and sills get checked room by room against the original check-in photos, so consistency matters more than any single room being perfect while others are overlooked. Skirting boards should be free of the dust and light scuff marks that build up over the course of a tenancy, particularly in hallways and near doorways.',
      '## Carpets',
      'Most tenancy agreements explicitly require carpets to be professionally cleaned at the end of the tenancy, with a receipt as proof — a thorough DIY vacuum alone usually won\'t satisfy this clause even if the carpet looks clean to the eye, since the requirement is about the cleaning method, not just the visible result. If you\'re dealing with a specific mark rather than general wear, treat it before the clean rather than after — our separate guide on removing blood and other stains covers the method for the most common disputed marks.',
      '## Walls, skirting, and marks from furniture or picture hooks',
      'Scuffs from moved furniture and small nail or hook holes are usually covered under fair wear and tear, but larger marks, unapproved paint changes, or damage beyond normal use are not — if in doubt, check your tenancy agreement\'s specific wording rather than assuming either way, since this is one of the more commonly misunderstood areas in deposit disputes.',
      '## Get a certificate of clean',
      'Whatever company you use for the final clean, ask for a certificate or receipt that confirms the work carried out and the date — most letting agents and inventory clerks accept this as evidence, and it removes any ambiguity if a dispute does come up later. Book the clean for the day before key return rather than the morning of, so there\'s time for a touch-up if the inspection flags anything minor before keys actually change hands.',
    ],
  },
  { id: '3', slug: 'clean-office-productivity', title: 'Why a Clean Office Increases Productivity (The Research Behind It)', excerpt: 'The real studies behind office cleanliness and productivity — fewer sick days, less time lost to clutter, and why the effect is bigger than most businesses assume.', metaDescription: 'The research behind office cleanliness and productivity — sick day reduction studies, desk bacteria counts, and how a professional contract cleaning routine pays for itself.', category: 'Commercial', date: '18 May 2026', readTime: '6 min', emoji: '🏢', illustration: 'IllustrationOfficeBuild',
    relatedHref: '/cleaning/office-commercial-cleaning/', relatedLabel: 'Office & Commercial Cleaning',
    content: [
      'Workplace studies consistently link office cleanliness to measurable productivity differences — not because a tidy desk is inspiring in some abstract sense, but because of specific, practical mechanisms: fewer sick days, less time lost to searching for things in clutter, and a knock-on effect on how staff and visiting clients perceive the business.',
      '## The sick-day evidence',
      'A controlled study examining the effect of increased office cleaning quality found a 12.5% decrease in staff sick days alongside a reported increase in productivity — a single study, so it shouldn\'t be treated as a universal law, but the mechanism behind it is well understood independently: shared surfaces carry far more bacteria than most people assume. The typical office desk has been measured at over 10 million bacteria — reportedly around 400 times more than a toilet seat, which sounds alarmist until you consider that toilet seats are cleaned far more routinely than desks ever are. A separate large-scale study of 43,021 respondents across 351 office buildings found cleanliness was correlated with employee satisfaction, though correlation isn\'t the same as proof of cause, so treat it as supporting context rather than a standalone statistic.',
      '## Open-plan offices specifically',
      'Workers in open-plan office layouts have been found to have a 62% higher incidence of sickness absence than those in private or shared cellular offices — a striking figure, and one that makes sense given how much more surface area and shared air an open layout involves. For businesses in open-plan spaces, this makes the case for regular high-touch-point disinfection (desks, shared equipment, door handles, kitchen areas) considerably stronger than for a traditional cellular office layout.',
      '## Less time lost to disorganisation',
      'Clutter isn\'t just visual noise. Staff lose genuine working time searching for misplaced documents or equipment in a disorganised space, and a consistently tidy environment removes that friction without anyone having to consciously think about it — the time saved doesn\'t show up as a single dramatic event, it accumulates in small amounts across every working day.',
      '## The client-facing effect',
      'A clean, well-maintained office signals that a business takes standards seriously — which affects how both staff and visiting clients perceive the company, independent of the actual cleanliness itself. This matters most for client-facing spaces (reception, meeting rooms) where the impression forms in the first few seconds of a visit, long before any conversation happens.',
      '## Making it sustainable',
      'The offices that stay cleanest aren\'t the ones with the biggest one-off deep clean — they\'re the ones on a consistent contract cleaning schedule, so the standard never has the chance to slip in the first place. A quarterly deep clean on top of a regular schedule catches what daily cleaning can\'t reach, but it\'s the regular schedule doing most of the actual work.',
    ],
  },
  { id: '4', slug: 'best-eco-friendly-cleaning-products-uk', title: 'Eco-Friendly Cleaning Products: What Actually Works vs. Marketing', excerpt: 'Biodegradable cleaning products have a reputation for being weaker than conventional ones. Here\'s where that\'s genuinely true, and where it isn\'t.', metaDescription: 'A practical guide to eco-friendly, biodegradable cleaning products — where they genuinely match conventional cleaners, where they don\'t, and why safety matters beyond the environmental case.', category: 'Eco Cleaning', date: '10 May 2026', readTime: '6 min', emoji: '🌿', illustration: 'IllustrationLeaf',
    relatedHref: '/services/', relatedLabel: 'Our Services',
    content: [
      'Eco-friendly cleaning products have a reputation for being less effective than conventional ones — true for some tasks, not for others. The honest answer depends entirely on what you\'re cleaning, not on a blanket rule in either direction, and treating it as one or the other leads to either wasted money on the wrong product or a job that takes three times longer than it should.',
      '## Where biodegradable products genuinely match conventional ones',
      'General surface cleaning, glass, and most routine bathroom cleaning are handled just as well by plant-based, biodegradable formulas as by conventional chemical cleaners for day-to-day maintenance. The performance gap that used to be real has narrowed significantly as the formulations have improved, and for the majority of a normal clean, there\'s no practical difference in the result.',
      '## Where conventional products still win',
      'Heavy limescale, set-in grease, and genuinely tough, aged stains still respond faster to stronger conventional formulas. Eco alternatives often get there eventually, but need a longer dwell time on the surface or a repeat application rather than the single pass a stronger conventional product manages — useful to know so you\'re not disappointed by a product that simply needed more time rather than being the wrong choice entirely.',
      '## The safety case, beyond the environment',
      'Biodegradable, non-toxic products matter most in homes with young children, pets, or anyone with respiratory sensitivities — not having strong chemical residue or fumes left behind on surfaces, floors, or in the air is a real, practical benefit that exists independent of any environmental consideration. This is often the more persuasive reason for a household to switch, even for people who aren\'t especially motivated by the environmental angle on its own.',
      '## What to actually look for on a label',
      'Biodegradability claims vary in how meaningful they are — "biodegradable" alone is a weaker claim than one that specifies a timeframe or references a recognised standard. Products that list their active ingredients plainly, rather than hiding behind "proprietary formula" language, are generally the more trustworthy signal, since there\'s nothing to hide if the formula is genuinely plant-based and non-toxic.',
      '## Our approach',
      'We offer a 100% biodegradable, non-toxic product upgrade on any clean for exactly this reason — most households don\'t need it for every single task, since a lot of general cleaning performs identically either way, but for homes with babies, pets, or allergy sufferers, it removes a genuine concern without anyone needing to compromise on the actual result.',
    ],
  },
  { id: '5', slug: 'how-to-clean-a-fridge-properly', title: 'The Right Way to Clean a Fridge (Most People Get This Wrong)', excerpt: 'Step-by-step guide to a properly sanitised fridge — from shelf runners to the door seal most people never think to check.', metaDescription: 'How to clean a fridge properly, including the door seal and shelf runners most people skip, with the right products to use and avoid, and why drying matters as much as washing.', category: 'Tips & Tricks', date: '2 May 2026', readTime: '5 min', emoji: '🧊', illustration: 'IllustrationSpringFlower',
    relatedHref: '/prices/', relatedLabel: 'Add-On Pricing',
    content: [
      'Most fridge cleans stop at wiping the visible shelves, which is also the part of the job that was never really the problem — it misses the two areas that actually cause most fridge odour and bacteria issues, both of which are easy to deal with once you know to look for them.',
      '## Remove everything, including shelves and racks',
      'Shelves and door racks should come out entirely and be washed separately in warm soapy water — crumbs and spilled liquid collect in the runners and grooves underneath that a cloth simply can\'t reach while they\'re still installed. This is also the point to check use-by dates and clear out anything that\'s been quietly sitting at the back for longer than it should.',
      '## The door seal is the most skipped step',
      'The rubber door seal traps food debris and moisture in its folds, and it\'s the single most common source of fridge odour that cleaning the interior alone never actually fixes — people clean the fridge repeatedly and wonder why the smell keeps coming back, when the source was the seal the whole time. Wipe along the full length of the seal, including into the folds, with a cloth dampened in a mild vinegar-water solution.',
      '## What to use, and what to avoid',
      'A mix of warm water and bicarbonate of soda cleans effectively without leaving a chemical smell that can transfer to food stored afterward — this matters more in a fridge than almost anywhere else in the home, since food absorbs odours from its immediate environment. Avoid strong-scented or bleach-based products for exactly that reason, even though they might seem like the more thorough choice.',
      '## Don\'t forget the top and the condenser coils',
      'Dust accumulates on top of the fridge and, for most models, around the coils at the back or underneath — this isn\'t a hygiene issue in the same way as the interior, but a dust-coated condenser makes the compressor work harder and less efficiently, so a periodic clean here is as much about the appliance\'s running cost as cleanliness.',
      '## Drying matters as much as cleaning',
      'Leaving any surface damp before putting food back encourages exactly the bacteria growth you just cleaned away, since a fridge\'s cool, humid interior is already a favourable environment for bacteria without adding standing moisture on top. A final dry wipe with a clean cloth before restocking is what actually makes the rest of the job worth doing properly.',
    ],
  },
  { id: '6', slug: 'how-often-to-deep-clean-your-home', title: 'How Often Should You Deep Clean Your Home? The Room-by-Room Guide', excerpt: 'Different rooms get dirty at different rates. Here\'s the realistic, room-by-room schedule rather than a generic "once a year" rule that doesn\'t hold up in practice.', metaDescription: 'How often to deep clean each room of your home — kitchen, bathroom, living areas, and carpets — with realistic room-by-room frequencies rather than one generic rule.', category: 'Deep Clean', date: '22 Apr 2026', readTime: '6 min', emoji: '🛋️', illustration: 'IllustrationHouses',
    relatedHref: '/cleaning/deep-cleaning/', relatedLabel: 'Deep Cleaning',
    content: [
      'A single "deep clean once a year" rule doesn\'t reflect how differently rooms actually get dirty, or why. Grease, limescale, and dust all build up at genuinely different rates depending on the room, which is why most professional guidance settles on a room-by-room schedule rather than one blanket interval for the whole house.',
      '## Kitchen: every 2–4 months',
      'Grease builds up on surfaces you don\'t touch daily — above cabinets, behind appliances, inside the oven and extractor — fast enough that leaving it a full year turns a manageable job into a genuinely difficult one. Most guidance converges on a window of two to four months for a proper kitchen deep clean, with the shorter end of that range making sense for households that cook often or fry regularly, since that\'s what actually drives the grease buildup rather than the room itself.',
      '## Bathroom: every 2–3 months',
      'Limescale, grout discolouration, and extractor fan buildup all progress steadily regardless of how often you do a normal surface wipe, which is why bathrooms need deeper attention more often than bedrooms or living rooms despite often being the smaller room. Hard water areas should lean toward the shorter end of that interval, since limescale accumulates faster wherever water hardness is higher.',
      '## Bedrooms and living rooms: every 2–3 months for a light deep clean, every 6 months for a full one',
      'Carpets, upholstery, and curtains accumulate dust and allergens gradually, which is part of why they\'re so easy to underestimate — nothing about a living room usually looks obviously dirty the way a kitchen hob does. A lighter pass (skirting, behind furniture, light fixtures) every couple of months with a fuller deep clean twice a year is a realistic balance for most households, more frequent if anyone in the home has allergies or there are pets shedding into soft furnishings.',
      '## Carpets specifically: once or twice a year',
      'Even with regular vacuuming, professional hot water extraction removes embedded dirt, dust mites, and allergens that vacuuming physically can\'t reach, since a vacuum only ever lifts from the surface down a few millimetres. Once a year is the realistic minimum for most households; twice a year is worth it for homes with pets, children, or allergy sufferers, where the carpet is doing more work absorbing everyday mess than in a typical household.',
      '## Mattresses: the room most people forget entirely',
      'Mattresses rarely make anyone\'s cleaning list, since washing the sheets feels like it covers it — but dust mites live in the mattress itself regardless of how often the bedding on top is washed, and a mattress accumulates dead skin cells and moisture over months of nightly use. A proper mattress clean once or twice a year, alongside the usual bedroom deep clean, closes a gap that even otherwise thorough households tend to miss completely.',
    ],
  },
]

// ── Pricing Tables ────────────────────────────────────────────────
export const RESIDENTIAL_PRICES: PriceItem[] = [
  { name: 'Standard Clean', description: 'Regular maintenance', includes: 'Dusting, vacuuming, kitchen & bathroom', size: 'Studio / 1-bed', price: '£45' },
  { name: '', includes: '', size: '2-bed', price: '£60' },
  { name: '', includes: '', size: '3-bed', price: '£80' },
  { name: '', includes: '', size: '4-bed+', price: '£100' },
  { name: 'Deep Clean', description: 'Intensive refresh', includes: 'Standard + inside cupboards, behind appliances', size: '1-bed', price: '£120' },
  { name: '', includes: '', size: '2-bed', price: '£160' },
  { name: '', includes: '', size: '3-bed', price: '£220' },
  { name: 'End of Tenancy', description: 'Certificate provided', includes: 'Full letting agent standard. Oven, fridge, all rooms.', size: 'Studio / 1-bed', price: '£149' },
  { name: '', includes: '', size: '2-bed', price: '£229' },
  { name: '', includes: '', size: '3-bed', price: '£299' },
  { name: '', includes: '', size: '4-bed+', price: '£379' },
  { name: 'Post-Renovation', includes: 'Dust, plaster, paint marks, debris removal', size: '2-bed', price: '£180' },
  { name: 'Airbnb Reset', includes: 'Full clean + linen change + restock', size: 'Studio', price: '£75' },
]

export const COMMERCIAL_PRICES: PriceItem[] = [
  { name: 'Regular Office Clean', includes: 'Desks, floors, kitchen, toilets. Recurring contract.', price: '£95/visit' },
  { name: 'Office Deep Clean', includes: 'Full intensive including carpets and windows', price: '£280' },
  { name: 'Retail / Showroom', includes: 'Flexible to trading hours. Morning, evening, weekend.', price: '£85/visit' },
  { name: 'Healthcare Clean', description: 'NHS colour-coded', includes: 'GP surgeries, clinics, dental, care homes. DBS staff.', price: 'POA' },
  { name: 'Education', includes: 'Schools, colleges, nurseries. Enhanced DBS required.', price: 'POA' },
  { name: 'Managed Property', includes: 'Communal areas, stairwells, lobbies, bin stores', price: '£60/visit' },
  { name: 'Industrial / Warehouse', includes: 'Large format, welfare facilities, floor scrubbing', price: '£350/session' },
  { name: 'Post-Construction (Commercial)', includes: 'Final sparkle clean. Debris, dust, paint residue.', price: '£400+' },
]

export const ADDON_PRICES: PriceItem[] = [
  { name: 'Oven Clean',                  includes: 'Single oven — racks, trays, door glass, deep soaked', price: '£45' },
  { name: 'Double Oven / Range',          includes: 'Full deep clean of double oven or range cooker', price: '£75' },
  { name: 'Fridge / Freezer',            includes: 'Inside clean, shelves removed and sanitised', price: '£25' },
  { name: 'Interior Windows',            includes: 'All windows, frames, sills — streak free', price: '£30' },
  { name: 'Carpet Cleaning',             includes: 'Professional extraction per room', price: '£40/room' },
  { name: 'Full House Carpets',          includes: 'All carpeted rooms in one visit', price: '£150' },
  { name: 'Upholstery (Sofa)',           includes: '2-seater sofa extraction clean', price: '£55' },
  { name: 'Laundry & Ironing',           includes: 'Wash, dry, fold and iron', price: '£20' },
  { name: 'Inside Cupboards',            includes: 'All kitchen/bedroom cupboards emptied and wiped', price: '£35' },
  { name: 'Balcony / Patio Tidy',        includes: 'Sweep, wipe furniture, remove debris', price: '£20' },
  { name: 'Eco-Friendly Upgrade',        includes: '100% biodegradable, non-toxic products throughout', price: '+£10/visit' },
  { name: 'Same-Day / Priority Booking', includes: 'Next available slot, subject to availability', price: '+£25' },
]
