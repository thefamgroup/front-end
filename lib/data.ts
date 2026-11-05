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
    id: '7', slug: 'how-to-remove-blood-stains-from-carpet', emoji: '🩸',
    title: 'How to Remove Blood Stains From Carpet (Without Ruining It)',
    excerpt: 'Blood is one of the few stains that gets harder to remove the longer you wait — and hot water makes it permanent. Here\'s the method that actually works.',
    metaDescription: 'How to remove blood stains from carpet step by step — the cold-water method that works on fresh and dried-in stains, the mistake that sets blood permanently, and when to call a professional.',
    category: 'Carpet Cleaning', date: '3 Nov 2026', readTime: '5 min',
    relatedHref: '/cleaning/carpet-cleaning/', relatedLabel: 'Professional Carpet Cleaning',
    content: [
      'Blood is a protein-based stain, which puts it in the same family as egg, dairy, and sweat — and protein stains behave completely differently to the dirt, grease, or wine stains most carpet-cleaning advice is written for. Get the method wrong and you can set a blood stain permanently into the fibres in seconds.',
      '## The one rule that matters most: never use hot water',
      'Heat cooks protein. The same way a fried egg goes from liquid to solid white in a pan, hot water causes the proteins in blood to bind to carpet fibres and coagulate — turning a stain you could have lifted out into one that\'s chemically fused to the carpet. If you remember nothing else from this guide, remember this: cold water only, every time, no exceptions.',
      '## Step-by-step: fresh blood stains',
      'Blot — never rub — the stain with a clean cloth to lift as much blood as possible before it dries. Rubbing just pushes it deeper into the pile. Mix a teaspoon of mild dish soap with a cup of cold water, apply with a clean cloth, and blot from the outside of the stain inward so you don\'t spread it. Rinse by blotting with a cloth dampened in plain cold water, then repeat the soap step if any colour remains. Dry with a towel and let the carpet air dry fully before walking on it.',
      '## Step-by-step: dried-in or old blood stains',
      'Dried stains need an enzyme-based approach, because by this point the protein has already bonded to the fibre and soap alone won\'t break that bond. A solution of 3% hydrogen peroxide (the standard brown-bottle pharmacy strength) poured directly onto the stain will usually start fizzing — that reaction is the peroxide breaking down the protein. Leave it for a few minutes, blot with a cold, damp cloth, and repeat as needed. Always test on a hidden corner of carpet first, since peroxide can lighten some dyes. An enzyme-based stain remover (sold for pet stains) works on the same principle and is gentler on colour.',
      '## What not to do',
      'Don\'t use hot water, don\'t rub, don\'t use bleach (it can discolour carpet and doesn\'t target protein stains effectively), and don\'t let the stain sit once you\'ve noticed it — the window where cold water alone works shrinks fast, especially on synthetic carpet where blood can set within 30–60 minutes.',
      '## When to call a professional instead of DIY-ing it',
      'Large stains, stains on wool or other natural-fibre carpet (which are far less forgiving of home remedies), stains that have been sat on for days, or stains on light-coloured carpet where any lightening from peroxide would be obvious are all situations where professional hot water extraction with the correct protein pre-treatment gets a materially better result than a DIY attempt — and without the risk of making it worse. Our team carries dedicated protein-stain pre-treatment on every carpet clean as standard, not as a paid extra, specifically because stains like this come up often enough to prepare for every time.',
    ],
  },
  {
    id: '8', slug: 'how-often-should-you-clean-your-wheelie-bin', emoji: '🗑️',
    title: 'How Often Should You Clean Your Wheelie Bin? A Bolton Household\'s Guide',
    excerpt: 'Bolton Council empties your bin — it doesn\'t clean it. Here\'s what actually builds up between collections, and how often a proper clean is worth it.',
    metaDescription: 'How often to clean your wheelie bin in Bolton, what builds up between Bolton Council collections, DIY cleaning methods, and when a professional four-weekly bin clean is worth it.',
    category: 'Bin Cleaning', date: '5 Nov 2026', readTime: '4 min',
    relatedHref: '/cleaning/bolton/', relatedLabel: 'Cleaning Services in Bolton',
    content: [
      'Bolton Council collects general waste weekly and recycling fortnightly — but collection day only moves the rubbish out. It does nothing about what\'s left behind: the liquid residue, food particles, and bacteria that cling to the inside walls and base of the bin after every single collection.',
      '## What actually builds up between collections',
      'Food waste leaks juices that seep into the plastic and keep feeding bacteria long after the bag is gone. In warmer months this is where maggots start — fly eggs laid on residue hatch within days, not weeks. The smell that hits you every time you open the lid isn\'t really the current week\'s rubbish; it\'s weeks of residue baked into the plastic by weekly sun exposure, especially on bins that sit against a south-facing wall for much of the day in Astley Bridge, Heaton, and similar higher-ground parts of the borough.',
      '## So how often should you actually clean it',
      'For most households, every four weeks keeps a bin genuinely clean without being excessive — frequent enough that residue never gets the chance to build into a real smell or pest problem, infrequent enough to stay affordable as a regular routine rather than a one-off emergency job. Larger families, households with young children in nappies, or anyone dealing with a recent infestation should consider fortnightly instead.',
      '## DIY cleaning: what works and its limits',
      'A hosepipe and a scrubbing brush with hot water and washing-up liquid will shift visible debris, and a kettle of boiling water poured in followed by a cap of bleach or disinfectant left to sit for 10 minutes will knock back odour for a week or two. The limit of DIY is reach — the base and lower walls of a 240-litre bin are hard to scrub properly without fully tipping it, and most people stop at "looks clean" rather than "actually sanitised," which is why the smell always comes back faster than expected.',
      '## Why Bolton households are switching to a professional service',
      'A proper bin clean uses a dedicated hot-water pressure system that reaches the full interior — base, walls, lid, and wheels — in a way a garden hose can\'t, combined with a biodegradable sanitiser rather than just disinfectant. It\'s done kerbside right after your Bolton Council collection, so there\'s no need to be home and no mess to deal with yourself. At under £7 a clean on a four-weekly plan, it\'s a small, forgettable monthly cost that quietly solves a problem most households just get used to living with.',
    ],
  },
  { id: '1', slug: 'things-cleaners-always-notice', title: '10 Things Cleaners Always Notice (That You Probably Don\'t)', excerpt: 'Our team has seen it all. Here are the spots homeowners almost always miss — and how to tackle them.', metaDescription: 'The spots professional cleaners always find dirty that homeowners miss — skirting boards, light switches, door handles, under furniture — and how to clean each one properly.', category: 'Home Cleaning', date: '5 Jun 2026', readTime: '4 min', emoji: '🏠',
    relatedHref: '/cleaning/regular-house-cleaning/', relatedLabel: 'Regular House Cleaning',
    content: [
      'After thousands of cleans, our team sees the same overlooked spots in almost every home — not because people are careless, but because these areas simply aren\'t part of the normal cleaning line of sight.',
      '## Skirting boards and door frames',
      'Dust settles here constantly but it\'s below eye level and easy to forget. A damp microfibre cloth run along the top edge weekly stops it building into the grey fuzz that\'s genuinely hard to shift once it\'s a few months old.',
      '## Light switches and door handles',
      'The most-touched surfaces in any home, and almost never wiped. A quick pass with an antibacterial wipe during your normal clean takes seconds and matters more for hygiene than most of the visible cleaning people focus on instead.',
      '## Underneath and behind furniture',
      'Sofas, beds, and wardrobes trap dust bunnies that only get dealt with during a deep clean — but pulling furniture out every few weeks for a quick vacuum pass keeps it from accumulating into a job you dread.',
      '## Extractor fans and vents',
      'Kitchen and bathroom extractor covers collect a surprising amount of grease and dust and are rarely cleaned until they visibly discolour. A monthly wipe-down keeps them working properly and stops the smell that builds up in grease-clogged units.',
      '## The tops of doors and picture frames',
      'Anything above eye level gets missed by habit, not neglect — it\'s simply not where your eyes land during a normal tidy-up, so it\'s worth a deliberate check every month or so.',
    ],
  },
  { id: '2', slug: 'tenant-deposit-cleaning-checklist', title: 'How to Get Your Full Deposit Back: A Tenant\'s Cleaning Checklist', excerpt: 'A complete room-by-room guide to passing your check-out inspection and getting every penny back.', metaDescription: 'A room-by-room end of tenancy cleaning checklist covering the exact standard letting agents and inventory clerks check for, so you get your full deposit back.', category: 'End of Tenancy', date: '28 May 2026', readTime: '6 min', emoji: '🔑',
    relatedHref: '/cleaning/end-of-tenancy-cleaning/', relatedLabel: 'End of Tenancy Cleaning',
    content: [
      'Deposit disputes almost always come down to the same handful of areas. Inventory clerks are trained to check these specific spots against your check-in report, so this is where to focus your time.',
      '## Kitchen: the oven and inside appliances',
      'The oven is the single most disputed item in any end of tenancy inspection. It needs to be genuinely degreased inside — racks, trays, and door glass included — not just wiped. Fridge and freezer need defrosting, emptying, and wiping inside with all shelves removed and cleaned separately.',
      '## Bathroom: limescale and grout',
      'Clerks check grout lines and around taps specifically for limescale and mould, not just surface cleanliness. A limescale remover left to sit for several minutes before scrubbing does far more than a quick wipe with standard spray.',
      '## Windows, sills, and skirting',
      'Internal windows, frames, and sills are checked room by room against the check-in photos. Skirting boards should be free of the dust and scuff marks that accumulate over a tenancy.',
      '## Carpets',
      'Most tenancy agreements require carpets to be professionally cleaned, with a receipt as proof — a DIY vacuum alone usually won\'t satisfy this clause even if the carpet looks clean. See our separate guide on blood and stain removal if you\'re dealing with a specific mark before booking a full clean.',
      '## Get a certificate of clean',
      'Whatever company you use for the final clean, ask for a certificate or receipt that confirms the work and date — most letting agents and inventory clerks accept this as evidence, and it removes any ambiguity if a dispute does come up.',
    ],
  },
  { id: '3', slug: 'clean-office-productivity', title: 'Why a Clean Office Increases Productivity by Up to 15%', excerpt: 'The science behind a tidy workspace and why investing in commercial cleaning pays for itself.', metaDescription: 'Why office cleanliness measurably affects staff productivity and sick days, and how a professional contract cleaning routine pays for itself.', category: 'Commercial', date: '18 May 2026', readTime: '5 min', emoji: '🏢',
    relatedHref: '/cleaning/office-commercial-cleaning/', relatedLabel: 'Office & Commercial Cleaning',
    content: [
      'Workplace studies consistently link office cleanliness to measurable productivity differences — not because a tidy desk is inspiring, but because of two very practical mechanisms: fewer sick days and less time lost to clutter.',
      '## Fewer sick days',
      'Shared surfaces — keyboards, door handles, kitchen areas — carry far more bacteria than most people assume, and regular disinfection of high-touch points is one of the few office interventions with a direct, measurable effect on staff illness and absence rates.',
      '## Less time lost to disorganisation',
      'Clutter isn\'t just visual noise. Staff lose real working time searching for misplaced documents or equipment in a disorganised space, and a consistently tidy environment removes that friction without anyone having to think about it.',
      '## The psychological effect',
      'A clean, well-maintained office signals that a business takes standards seriously — which affects how both staff and visiting clients perceive the company, independent of the actual cleanliness itself.',
      '## Making it sustainable',
      'The offices that stay cleanest aren\'t the ones with the biggest one-off deep clean — they\'re the ones on a consistent contract cleaning schedule, so the standard never has the chance to slip in the first place.',
    ],
  },
  { id: '4', slug: 'best-eco-friendly-cleaning-products-uk', title: 'The Best Eco-Friendly Cleaning Products for UK Homes in 2026', excerpt: 'We tested dozens of biodegradable products. Here are the ones that actually work.', metaDescription: 'A practical guide to eco-friendly, biodegradable cleaning products that actually work as well as conventional ones, from a professional cleaning team\'s perspective.', category: 'Eco Cleaning', date: '10 May 2026', readTime: '7 min', emoji: '🌿',
    relatedHref: '/services/', relatedLabel: 'Our Services',
    content: [
      'Eco-friendly cleaning products have a reputation for being less effective than conventional ones — true of some, but not all. Here\'s what actually holds up to professional use.',
      '## Where biodegradable products genuinely match conventional ones',
      'General surface cleaning, glass, and most bathroom cleaning tasks are handled just as well by plant-based, biodegradable formulas as by conventional chemical cleaners. The gap has narrowed significantly in the past few years.',
      '## Where conventional products still win',
      'Heavy limescale, set-in grease, and genuinely tough stains still respond faster to stronger conventional formulas. Eco alternatives often need a longer dwell time or repeat application rather than one pass.',
      '## The safety case, beyond the environment',
      'Biodegradable, non-toxic products matter most in homes with young children, pets, or anyone with respiratory sensitivities — not having strong chemical residue or fumes left behind is a real, practical benefit independent of any environmental consideration.',
      '## Our approach',
      'We offer a 100% biodegradable, non-toxic product upgrade on any clean for exactly this reason — most households don\'t need it for every task, but for homes with babies, pets, or allergies, it removes a genuine concern.',
    ],
  },
  { id: '5', slug: 'how-to-clean-a-fridge-properly', title: 'The Right Way to Clean a Fridge (Most People Get This Wrong)', excerpt: 'Step-by-step guide to a properly sanitised fridge — from shelves to the door seal.', metaDescription: 'How to clean a fridge properly, including the door seal and shelf runners most people skip, with the right products to use and avoid.', category: 'Tips & Tricks', date: '2 May 2026', readTime: '3 min', emoji: '🧊',
    relatedHref: '/prices/', relatedLabel: 'Add-On Pricing',
    content: [
      'Most fridge cleans stop at wiping the visible shelves — which misses the two areas that actually cause most fridge odour and bacteria problems.',
      '## Remove everything, including shelves',
      'Shelves and door racks should come out and be washed separately in warm soapy water — crumbs and spilled liquid collect in the runners and grooves that a cloth can\'t reach while they\'re still installed.',
      '## The door seal is the most skipped step',
      'The rubber door seal traps food debris and moisture in its folds, and it\'s the single most common source of fridge odour that cleaning the interior alone never fixes. Wipe along the full seal with a cloth dampened in a mild vinegar-water solution.',
      '## What to use, and what to avoid',
      'A mix of warm water and bicarbonate of soda cleans effectively without leaving a chemical smell that can transfer to food — avoid strong-scented or bleach-based products for exactly that reason.',
      '## Drying matters as much as cleaning',
      'Leaving any surface damp before putting food back encourages the bacteria growth you just cleaned away. A final dry wipe with a clean cloth before restocking the fridge makes the whole job worth doing properly.',
    ],
  },
  { id: '6', slug: 'how-often-to-deep-clean-your-home', title: 'How Often Should You Deep Clean Your Home? The Definitive Guide', excerpt: 'Different rooms need different frequencies. Here\'s the schedule professional cleaners actually follow.', metaDescription: 'How often to deep clean each room of your home, with the schedule professional cleaners actually use rather than generic one-size-fits-all advice.', category: 'Deep Clean', date: '22 Apr 2026', readTime: '5 min', emoji: '🛋️',
    relatedHref: '/cleaning/deep-cleaning/', relatedLabel: 'Deep Cleaning',
    content: [
      'A single "deep clean once a year" rule doesn\'t reflect how differently rooms actually get dirty. Here\'s the room-by-room frequency that holds up in practice.',
      '## Kitchen: every 3 months',
      'Grease builds up on surfaces you don\'t touch daily — above cabinets, behind appliances, inside the oven — fast enough that a quarterly deep clean keeps it from becoming a multi-hour job.',
      '## Bathroom: every 2–3 months',
      'Limescale, grout discolouration, and extractor fan buildup all progress steadily regardless of how often you do a normal surface clean, which is why bathrooms need deep attention more often than most other rooms.',
      '## Bedrooms and living rooms: every 6 months',
      'Carpets, upholstery, and curtains accumulate dust and allergens gradually enough that twice a year is usually sufficient for most households, more often if anyone has allergies or there are pets.',
      '## Carpets specifically: once a year minimum',
      'Even with regular vacuuming, professional hot water extraction removes embedded dirt and allergens vacuuming physically can\'t reach — annually at minimum, more often in high-traffic homes or homes with pets.',
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
