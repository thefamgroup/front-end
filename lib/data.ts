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
    metaTitle: 'Remove Blood Stains From Carpet Properly',
    excerpt: 'Blood is one of the few stains that gets harder to remove the longer you wait — and hot water makes it permanent. Here\'s the method that actually works, and the chemistry behind why.',
    metaDescription: 'How to remove blood stains from carpet: the cold-water method, the mistake that sets blood permanently, and when to call a professional.',
    category: 'Carpet Cleaning', date: '3 Nov 2026', readTime: '8 min',
    relatedHref: '/cleaning/carpet-cleaning/', relatedLabel: 'Professional Carpet Cleaning',
    content: [
      'Blood is a protein stain. That puts it in the same category as egg, dairy and sweat, and it behaves nothing like the dirt or wine stains most cleaning advice is written for. Get the method wrong and the stain can set permanently in under a minute. You usually won\'t realise until it\'s too late to fix, which matters most if you\'re cleaning ahead of an [end of tenancy inspection](/blog/tenant-deposit-cleaning-checklist/) rather than just tidying up.',
      '## Cold water, not hot. Here\'s why.',
      'Heat cooks protein. Think of an egg white going from clear liquid to solid white the moment it hits a hot pan, that\'s the same reaction happening to the proteins in blood. Once heat unfolds those proteins, they bind to the carpet fibres instead of sitting loosely on top of them. Scrub all you like after that. It\'s not coming out. Cold water simply never triggers the reaction in the first place, which [every genuine source on stain removal agrees on](https://www.cleanipedia.com/gb/laundry-washing/hot-water-or-cold-water-for-stains-which-is-best). Same goes for a tumble dryer. If you\'re dealing with fabric rather than carpet, don\'t run it through a hot cycle until the stain is completely gone, or you\'ll set it for good.',
      '## Why hydrogen peroxide fizzes on a stain',
      'That fizzing isn\'t the stain dissolving. Blood contains an enzyme called catalase, and catalase breaks hydrogen peroxide down into water and oxygen gas. The bubbles are the oxygen escaping. On its own, that reaction doesn\'t actually lift colour. What fades the stain is a separate process: peroxide oxidises the haem group at the centre of the haemoglobin molecule, and haem is what gives blood its red colour. So peroxide is doing real chemical work, not just sitting on the surface, which is also exactly why it can lighten carpet dye along with the stain. Test it on a hidden patch first. Skip it entirely on dark or strongly coloured carpet.',
      '## Fresh stains: what to actually do',
      'Blot, don\'t rub. Rubbing pushes blood deeper into the pile and spreads it wider than it started. Mix a teaspoon of mild dish soap into a cup of cold water, apply with a clean cloth, and work from the outside of the stain inward. Rinse with a cloth dampened in plain cold water. Repeat the soap step if colour\'s still there. Let it dry fully before anyone walks on it, a damp patch just attracts more dirt and leaves the spot looking dull anyway.',
      '## Dried-in stains need a different approach',
      'Once a stain\'s dried, soap has nothing left to work on, because the protein\'s already bonded to the fibre. You need an enzyme. Protease enzymes digest protein chains at a molecular level, which is why biological detergents use them, and it\'s also why dabbing an old stain with saliva genuinely does something (saliva carries protease too, oddly enough). For carpet, the practical version is an enzyme-based pet stain remover. Leave it for the time stated on the bottle, then blot with a cold damp cloth. Whatever trace is left after that, finish with a small amount of 3% hydrogen peroxide, let it fizz for a few minutes, then blot clean. Cold water first. Enzyme second. Peroxide last. In that order, not mixed up.',
      '## What not to do',
      'Hot water. Rubbing. Bleach, which doesn\'t touch protein and is more likely to damage your carpet\'s colour than the stain. And don\'t leave it sitting. Blood can start setting into synthetic carpet within half an hour at room temperature, so the clock is already running from the moment it happens.',
      '## When it\'s worth calling someone in',
      'A large stain, a stain on wool, something that\'s been there for days, or a mark on pale carpet where peroxide lightening would be obvious. These are all cases where DIY risks making things worse, not better. Professional hot water extraction with the right protein pre-treatment handles it properly the first time. We carry that pre-treatment on every carpet clean as standard, not as an add-on, because stains like this come up often enough that it isn\'t worth treating as optional.',
    ],
  },
  {
    id: '8', slug: 'how-often-should-you-clean-your-wheelie-bin', emoji: '🗑️', illustration: 'IllustrationHouseClean',
    title: 'How Often Should You Clean Your Wheelie Bin? A Bolton Household\'s Guide',
    metaTitle: 'How Often to Clean Your Wheelie Bin',
    excerpt: 'Bolton Council empties your bin — it doesn\'t clean it. Here\'s what actually builds up between collections, how fast it happens, and how often a proper clean is worth it.',
    metaDescription: 'How often to clean a wheelie bin, how fast fly eggs hatch in warm weather, what builds up between collections, and when a professional clean is worth it.',
    category: 'Bin Cleaning', date: '5 Nov 2026', readTime: '7 min',
    relatedHref: '/cleaning/bolton/', relatedLabel: 'Cleaning Services in Bolton',
    content: [
      'Bolton Council empties your bin weekly for general waste and fortnightly for recycling. That\'s it, though. Collection day moves the rubbish out, but it does nothing about what\'s left behind inside: the liquid residue, food particles and bacteria clinging to the walls and base after every single pickup. A UK survey of more than 3,000 households found 87% never clean their wheelie bins at all. That\'s not really a hygiene failure. It\'s just a problem that lives outside, out of sight, and is easy to forget about entirely.',
      '## How fast this actually becomes a problem',
      'Faster than you\'d think. [North Lincolnshire Council\'s own guidance](https://www.northlincs.gov.uk/wp-content/uploads/2020/02/How-to-Prevent-Maggots-2020-a.pdf) says fly eggs can hatch into maggots in 8 to 20 hours during summer. Wealden District Council puts it at 8 to 12 hours. West Berkshire says as little as 8 hours in high heat. Three different councils, roughly the same answer: this isn\'t a slow build-up over weeks, it\'s a same-day problem once a fly gets access to food waste sitting in a bin. And once maggots are established, a full fly life cycle can run its course in 3 to 4 weeks under warm conditions, which is exactly how one missed bin turns into a recurring summer problem instead of a one-off.',
      '## What actually builds up between collections',
      'Food waste leaks juice that soaks into the plastic and keeps feeding bacteria long after the bag itself is gone. That\'s what draws flies in, and warm weather speeds up both the rotting that attracts them and how fast they breed once they\'re there. The smell you get every time you lift the lid usually isn\'t this week\'s rubbish. It\'s weeks of residue baked into the plastic, especially on bins that sit in direct sun for most of the day, which describes a lot of gardens in Astley Bridge, Heaton, and the higher parts of the borough.',
      '## So how often should you actually clean it',
      'There\'s no single official council rule here. Cleaning the bin itself is down to the householder, not the council, and the advice out there genuinely ranges from monthly to every three months to after every collection. Every four weeks is the interval that actually holds up for most households in practice. Often enough that residue never gets the chance to turn into a smell or a pest problem, rare enough that it stays a routine rather than a chore. Bigger families, anyone with young kids still in nappies, or a household that\'s already had one maggot scare (bins that get infested once tend to attract flies again if the residue isn\'t properly removed) should go fortnightly instead, timed just after collection day so the bin\'s already empty.',
      '## DIY cleaning: what works and what doesn\'t',
      'A hose, a scrubbing brush, hot water and washing-up liquid will shift the visible mess. Pour in a kettle of boiling water, add a cap of bleach or disinfectant, leave it ten minutes, and you\'ll knock back the smell and kill most surface bacteria and eggs. Where DIY falls short is reach. The base and lower walls of a 240-litre bin are genuinely difficult to scrub without tipping the whole thing over, and most people stop once it "looks clean" rather than actually sanitised. That\'s why the smell comes back faster than expected, even for the households that do bother.',
      '## Why Bolton households are switching to a professional service',
      'A proper clean uses a hot-water pressure system that gets into the base, walls, lid and wheels in a way a garden hose just can\'t, paired with a biodegradable sanitiser rather than whatever\'s under the sink. It happens kerbside right after your Bolton Council collection, so you don\'t need to be home and there\'s no mess for you to deal with. We run the same [wheelie bin cleaning service](/cleaning/bin-cleaning/) across every area we cover, not just Bolton. On a four-weekly plan it works out under £7 a clean, a small, easy-to-forget monthly cost that quietly fixes a problem the 87% figure suggests most households have simply stopped noticing.',
    ],
  },
  { id: '1', slug: 'things-cleaners-always-notice', title: '10 Things Cleaners Always Notice (That You Probably Don\'t)', metaTitle: '10 Things Cleaners Always Notice', excerpt: 'Our team has seen it all. Here are the spots homeowners almost always miss, why they get missed, and how to tackle each one properly.', metaDescription: 'The spots professional cleaners always find dirty that homeowners miss, and how to clean each one properly.', category: 'Home Cleaning', date: '5 Jun 2026', readTime: '6 min', emoji: '🏠', illustration: 'IllustrationStar',
    relatedHref: '/cleaning/regular-house-cleaning/', relatedLabel: 'Regular House Cleaning',
    content: [
      'After thousands of cleans across Manchester, Crewe and beyond, our team keeps spotting the same handful of overlooked spots. It\'s not that people are careless. These areas just sit outside the normal line of sight, usually below knee height, above eye level, or tucked behind something.',
      '## Skirting boards and door frames',
      'Dust collects here constantly, and because it\'s below eye level, nobody notices for weeks at a time. Leave it long enough and it stops being loose dust. It turns into a grey, slightly sticky film that actually bonds to the paintwork, and gets harder to shift every week you leave it. A damp microfibre cloth along the top edge, once a week, takes under a minute per room and stops it ever getting that far.',
      '## Light switches and door handles',
      'Think about how many times a day someone touches a light switch or door handle. Now ask yourself when you last wiped one. They don\'t look dirty the way a worktop does, so they get skipped almost every time. A quick pass with an antibacterial wipe during your normal routine takes seconds, and arguably matters more than half the visible cleaning most people prioritise instead.',
      '## Underneath and behind furniture',
      'Sofas, beds and wardrobes quietly collect dust and debris that nobody deals with until a proper deep clean forces the issue, if it ever does. Pull furniture out every few weeks, even just far enough to vacuum behind it, and you avoid the job turning into something that needs two people and a whole afternoon.',
      '## Extractor fans and vents',
      'Kitchen and bathroom extractor covers pick up a genuinely surprising amount of grease and dust. Most people only notice once the cover\'s visibly discoloured or the fan starts sounding strained. A monthly wipe-down, popping the cover off if it clips free (most do), keeps airflow working properly and stops the stale smell that builds up in a clogged unit.',
      '## Tops of doors, picture frames, and skirting corners',
      'Nothing above eye level or tucked into a corner gets cleaned by habit. It\'s simply not where your eyes land during a normal tidy. A deliberate once-a-month check with a duster catches what weeks of otherwise thorough cleaning walks straight past without anyone noticing.',
      '## Washing machine seals and detergent drawers',
      'The rubber seal around a front-loading washing machine traps moisture and detergent residue, which is exactly what mould needs to get started. It\'s one of the most common reasons laundry comes out "clean" but still smells slightly off. Wipe the seal dry after each wash, leave the door ajar between loads, and give the detergent drawer a rinse once a month to clear the built-up residue.',
      '## Why this is where regular cleans earn their value',
      'A one-off [deep clean](/cleaning/deep-cleaning/) sorts all of this in a single visit. But the real point of a regular schedule is that none of it ever gets the chance to build up to "deep clean required" in the first place. That\'s the whole difference between a quick weekly visit and an intensive multi-hour reset every few months.',
    ],
  },
  { id: '2', slug: 'tenant-deposit-cleaning-checklist', title: 'How to Get Your Full Deposit Back: A Tenant\'s Cleaning Checklist', metaTitle: 'Get Your Full Deposit Back: Cleaning Guide', excerpt: 'A complete room-by-room guide to passing your check-out inspection and getting every penny back, based on what inventory clerks actually check against.', metaDescription: 'A room-by-room end of tenancy cleaning checklist covering what letting agents and inventory clerks actually check, so you get your full deposit back.', category: 'End of Tenancy', date: '28 May 2026', readTime: '8 min', emoji: '🔑', illustration: 'IllustrationKeyClean',
    relatedHref: '/cleaning/end-of-tenancy-cleaning/', relatedLabel: 'End of Tenancy Cleaning',
    content: [
      'Deposit disputes come down to the same handful of areas, over and over. Inventory clerks work from a checklist, not a general impression. They\'re comparing specific points against your check-in report, room by room, which means you can focus your time on what actually decides the outcome rather than spreading effort evenly across a flat that doesn\'t need it everywhere.',
      '## Kitchen: the oven and inside appliances',
      'The oven is the single most disputed item in almost any end of tenancy inspection. It needs to be properly degreased inside, racks, trays, the inside of the door glass, the grooves around the base, not just wiped over with a cloth. Baked-on grease doesn\'t shift for anything less than a proper degreasing product left to sit. The fridge and freezer need defrosting, emptying and wiping inside with every shelf and rack pulled out and cleaned separately, because crumbs and spills collect in the grooves a cloth can\'t reach while they\'re still in place.',
      '## Bathroom: limescale and grout',
      'Clerks specifically check grout lines and the area around taps for limescale and mould, not just general surface shine. These are the two things that show up clearly in a photo comparison and are hardest to argue against. A limescale remover left to sit for a few minutes before scrubbing does far more than a quick spray and wipe, especially round the base of taps and inside the toilet rim.',
      '## Windows, sills, and skirting',
      'Windows, frames and sills get checked room by room against the original check-in photos, so being consistent across every room matters more than one room being spotless while others get ignored. Skirting should be free of the dust and light scuffs that build up over a tenancy, particularly near doorways and hallways where there\'s the most traffic.',
      '## Carpets',
      'Most tenancy agreements require carpets to be professionally cleaned, with a receipt as proof. A thorough DIY vacuum won\'t satisfy that clause even if the carpet looks fine, because the requirement is about the method used, not just the end result. If you\'re dealing with a specific mark rather than general wear, deal with it before the professional clean rather than after. Our separate guide on [removing blood stains from carpet](/blog/how-to-remove-blood-stains-from-carpet/) covers one of the more common disputed marks.',
      '## Walls and marks from furniture or picture hooks',
      'Scuffs from moved furniture and small nail holes are usually covered under fair wear and tear. Larger marks, unapproved paint changes or damage beyond normal use generally aren\'t. If you\'re not sure which side of that line something falls on, check your actual tenancy agreement rather than guessing. This is one of the most commonly misunderstood areas in deposit disputes.',
      '## Get a certificate of clean',
      'Whatever company does the final clean, ask for a certificate or receipt confirming the work and the date. Most letting agents and inventory clerks accept it as evidence, and it removes any ambiguity if a dispute comes up later. Book it for the day before key return, not the morning of. That leaves time for a touch-up if the inspection flags something minor before keys change hands.',
    ],
  },
  { id: '3', slug: 'clean-office-productivity', title: 'Why a Clean Office Increases Productivity (The Research Behind It)', metaTitle: 'Why a Clean Office Boosts Productivity', excerpt: 'The real studies behind office cleanliness and productivity — fewer sick days, less time lost to clutter, and why the effect is bigger than most businesses assume.', metaDescription: 'The research behind office cleanliness and productivity: sick-day studies, desk bacteria counts, and why contract cleaning pays for itself.', category: 'Commercial', date: '18 May 2026', readTime: '6 min', emoji: '🏢', illustration: 'IllustrationOfficeBuild',
    relatedHref: '/cleaning/office-commercial-cleaning/', relatedLabel: 'Office & Commercial Cleaning',
    content: [
      'Workplace studies keep linking office cleanliness to measurable productivity differences, and not because a tidy desk is somehow inspiring. The real mechanisms are more mundane than that: fewer sick days, less time wasted hunting through clutter, and how staff and visiting clients read the business without even thinking about it.',
      '## The sick-day evidence',
      'One [controlled study looking at the effect of better office cleaning](https://theconversation.com/our-workplaces-are-filthy-and-its-costing-us-all-100892) found a 12.5% drop in staff sick days, plus a reported productivity increase. That\'s a single study, so treat the exact number with some caution, but the underlying mechanism checks out on its own: shared surfaces carry far more bacteria than most people assume. A typical office desk has been measured at over 10 million bacteria, something like 400 times more than a toilet seat. Sounds alarmist until you remember toilet seats actually get cleaned regularly and desks almost never do. A separate, much larger study of over 43,000 respondents across 351 office buildings found cleanliness correlated with employee satisfaction. Correlation, not proof of cause, but it\'s consistent with everything else here.',
      '## Open-plan offices specifically',
      'Workers in open-plan layouts have been found to have 62% higher sickness absence than those in private or shared cellular offices. That\'s a big gap, and it tracks: more shared surface area, more shared air. If your office is open-plan, the case for regularly disinfecting desks, shared equipment, door handles and the kitchen is considerably stronger than it would be in a traditional cellular layout.',
      '## Less time lost to disorganisation',
      'Clutter isn\'t just visual noise. Staff genuinely lose working time hunting for misplaced documents or equipment in a disorganised space. A tidy environment removes that friction without anyone consciously noticing it\'s gone. It doesn\'t show up as one dramatic saving, it just quietly adds up across every working day.',
      '## The client-facing effect',
      'A clean, well-kept office tells people a business takes its standards seriously, and that colours how both staff and visiting clients see the company, separate from the cleanliness itself. This matters most in reception areas and meeting rooms, where the impression forms in the first few seconds of a visit, well before anyone\'s said a word.',
      '## Making it sustainable',
      'The offices that stay cleanest aren\'t the ones that do one enormous [deep clean](/cleaning/deep-cleaning/) a year. They\'re the ones on a consistent contract cleaning schedule, so the standard never gets the chance to slip in the first place. A quarterly deep clean on top still catches what daily cleaning can\'t reach, but the regular schedule is doing most of the actual work.',
    ],
  },
  { id: '4', slug: 'best-eco-friendly-cleaning-products-uk', title: 'Eco-Friendly Cleaning Products: What Actually Works vs. Marketing', metaTitle: 'Eco-Friendly Cleaning Products That Work', excerpt: 'Biodegradable cleaning products have a reputation for being weaker than conventional ones. Here\'s where that\'s genuinely true, and where it isn\'t.', metaDescription: 'Where eco-friendly cleaning products genuinely match conventional cleaners, where they don\'t, and why safety matters beyond the environment.', category: 'Eco Cleaning', date: '10 May 2026', readTime: '6 min', emoji: '🌿', illustration: 'IllustrationLeaf',
    relatedHref: '/services/', relatedLabel: 'Our Services',
    content: [
      'Eco-friendly cleaning products have a reputation for being weaker than conventional ones. That\'s true for some jobs and not others, and the honest answer depends on what you\'re actually cleaning, not on picking a side and sticking with it. Get it wrong and you either waste money on the wrong product or end up on a job that takes three times longer than it needed to.',
      '## Where biodegradable products genuinely hold up',
      'General surface cleaning, glass, most routine bathroom cleaning, these are handled just as well by plant-based formulas as by conventional ones for everyday maintenance. The gap that used to be real has closed a lot as the formulations improved. For most of a normal clean, there\'s simply no difference you\'d notice.',
      '## Where conventional products still win',
      'Heavy limescale, set-in grease, stains that have had months to settle in. Conventional formulas still shift these faster. Eco alternatives usually get there in the end, just with a longer dwell time or a second application instead of one quick pass. Worth knowing so you don\'t write off a product as useless when it just needed more time.',
      '## The safety case, beyond the environment',
      'Biodegradable, non-toxic products matter most in homes with young kids, pets, or anyone with respiratory sensitivities. Not leaving chemical residue or fumes behind on surfaces or in the air is a real, practical benefit on its own, completely separate from any environmental argument. Honestly, this is usually the reason that actually persuades people to switch, more than the eco angle does by itself.',
      '## What to actually look for on a label',
      '"Biodegradable" by itself is a weak claim. One that names a specific timeframe, or points to a recognised standard, means more. Products that list their active ingredients plainly, rather than hiding behind "proprietary formula," are generally the ones telling the truth, since there\'s nothing to hide if the formula really is plant-based.',
      '## Our approach',
      'We offer a 100% biodegradable, non-toxic upgrade on any [regular house cleaning](/cleaning/regular-house-cleaning/) visit. Most households don\'t need it for every single task, a lot of general cleaning performs identically either way, but for homes with babies, pets or allergy sufferers it removes a genuine concern without anyone having to accept a worse result.',
    ],
  },
  { id: '5', slug: 'how-to-clean-a-fridge-properly', title: 'The Right Way to Clean a Fridge (Most People Get This Wrong)', metaTitle: 'The Right Way to Clean a Fridge', excerpt: 'Step-by-step guide to a properly sanitised fridge — from shelf runners to the door seal most people never think to check.', metaDescription: 'How to clean a fridge properly: the door seal and shelf runners most people skip, and why drying matters as much as washing.', category: 'Tips & Tricks', date: '2 May 2026', readTime: '5 min', emoji: '🧊', illustration: 'IllustrationSpringFlower',
    relatedHref: '/prices/', relatedLabel: 'Add-On Pricing',
    content: [
      'Most fridge cleans stop at wiping the visible shelves. Which is a shame, because that was never really the part causing the problem. Two areas actually drive most fridge odour and bacteria issues, and both are easy to fix once you know to look. If the rest of the kitchen needs the same attention, that\'s exactly what a [deep clean](/cleaning/deep-cleaning/) covers.',
      '## Take everything out, including shelves and racks',
      'Shelves and door racks should come out completely and get washed separately in warm soapy water. Crumbs and spilled liquid collect in the runners and grooves underneath, somewhere a cloth can\'t reach while they\'re still installed. While you\'re at it, check use-by dates and clear out anything that\'s been quietly lurking at the back for longer than it should.',
      '## The door seal is the step almost everyone skips',
      'The rubber seal traps food debris and moisture in its folds, and it\'s the single most common source of fridge odour that cleaning the inside never fixes. People clean their fridge over and over and can\'t work out why the smell keeps coming back. It was the seal the whole time. Wipe along the full length of it, right into the folds, with a cloth dampened in a mild vinegar-water solution.',
      '## What to use, and what to avoid',
      'Warm water with a bit of bicarbonate of soda cleans effectively without leaving a chemical smell behind that food will absorb. That matters more in a fridge than almost anywhere else in the house, since food picks up odours from whatever\'s around it. Skip strong-scented or bleach-based products, even if they feel like the more serious option.',
      '## Don\'t forget the top and the condenser coils',
      'Dust settles on top of the fridge and, on most models, around the coils at the back or underneath. Not a hygiene issue in the same way as the interior, but a dust-coated condenser makes the compressor work harder than it needs to. A periodic clean here is as much about running costs as cleanliness.',
      '## Drying matters as much as the cleaning itself',
      'A damp surface before you put food back just encourages the bacteria growth you only just cleaned away. A fridge\'s cool, humid interior already favours bacteria without adding standing moisture on top of it. A final dry wipe before restocking is what actually makes the rest of the job worth doing.',
    ],
  },
  { id: '6', slug: 'how-often-to-deep-clean-your-home', title: 'How Often Should You Deep Clean Your Home? The Room-by-Room Guide', metaTitle: 'How Often to Deep Clean Your Home', excerpt: 'Different rooms get dirty at different rates. Here\'s the realistic, room-by-room schedule rather than a generic "once a year" rule that doesn\'t hold up in practice.', metaDescription: 'How often to deep clean each room: kitchen, bathroom, living areas and carpets, with realistic frequencies rather than one generic "once a year" rule.', category: 'Deep Clean', date: '22 Apr 2026', readTime: '6 min', emoji: '🛋️', illustration: 'IllustrationHouses',
    relatedHref: '/cleaning/deep-cleaning/', relatedLabel: 'Deep Cleaning',
    content: [
      '"[Deep clean once a year](https://www.tidy.com/blog/how-often-should-you-deep-clean-your-house)" doesn\'t really hold up once you look at how differently each room actually gets dirty. Grease, limescale and dust build up at genuinely different speeds depending on the room, which is why most professional guidance ends up being room-specific rather than one blanket rule for the whole house.',
      '## Kitchen: every 2 to 4 months',
      'Grease builds up on surfaces you don\'t touch daily, above the cabinets, behind appliances, inside the oven and extractor, fast enough that leaving it a full year turns a manageable job into a genuinely unpleasant one. Most guidance lands on two to four months for a proper kitchen deep clean. The shorter end makes sense if you cook often or fry regularly, since that\'s what actually drives the grease, not the room itself.',
      '## Bathroom: every 2 to 3 months',
      'Limescale, grout discolouration and extractor buildup all creep up steadily no matter how often you do a normal wipe-down, which is why bathrooms need more frequent deep attention than most other rooms despite usually being the smallest. If you\'re in a hard water area, lean toward the shorter end. Limescale builds faster wherever the water\'s harder.',
      '## Bedrooms and living rooms: a light pass every 2 to 3 months, a full one twice a year',
      'Carpets, upholstery and curtains pick up dust and allergens slowly, which is exactly why they\'re so easy to underestimate. A living room rarely looks obviously dirty the way a kitchen hob does. A lighter pass, skirting, behind furniture, light fixtures, every couple of months, plus a proper deep clean twice a year, is realistic for most households. More often if anyone has allergies or there\'s a pet shedding onto the sofa.',
      '## Carpets specifically: once or twice a year',
      'Vacuuming only ever lifts dirt from the top few millimetres. Professional [hot water extraction](/cleaning/carpet-cleaning/) gets embedded dirt, dust mites and allergens that a vacuum physically can\'t reach, no matter how often you run it. Once a year is the realistic minimum. Twice a year earns its keep in homes with pets, kids, or allergy sufferers, where the carpet\'s absorbing a lot more than the average household\'s.',
      '## Mattresses: the one almost everyone forgets',
      'Nobody puts the mattress on their cleaning list, because washing the sheets feels like it covers it. It doesn\'t. Dust mites live in the mattress itself regardless of how often the bedding gets washed, and months of nightly use leave behind dead skin cells and moisture that the sheets never touch. A proper mattress clean once or twice a year, alongside the usual bedroom deep clean, closes a gap that even genuinely thorough households tend to miss completely.',
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
