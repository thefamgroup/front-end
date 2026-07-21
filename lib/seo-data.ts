// lib/seo-data.ts
// 8 services × 229 locations = 1,832 unique indexable pages

import { LOCATIONS_EXPANDED, type LocationData } from './locations-expanded'
export type { LocationData } from './locations-expanded'
export const LOCATIONS = LOCATIONS_EXPANDED

export interface ServiceData {
  slug: string
  name: string
  shortName: string
  tagline: string
  metaDescription: string
  h1Template: string        // {location} replaced dynamically
  intro: string             // {location}, {postcode} replaced
  included: string[]
  addons: string[]
  prices: { label: string; price: string }[]
  faqs: { q: string; a: string }[]
  cta: string
  schema: string            // schema.org @type for this service
}

// ─────────────────────────────────────────────
// 8 SERVICES
// ─────────────────────────────────────────────

export const SERVICES: ServiceData[] = [
  {
    slug: 'end-of-tenancy-cleaning',
    name: 'End of Tenancy Cleaning',
    shortName: 'End of Tenancy',
    tagline: 'Get your full deposit back — guaranteed.',
    metaDescription: 'Professional end of tenancy cleaning in {location} from £110. Letting agent approved standard. DBS-checked team, certificate of clean provided. Call 07767 759 013.',
    h1Template: 'End of Tenancy Cleaning in {location}',
    intro: 'Moving out of a property in {location}? Our end of tenancy cleaning service is fully approved to letting agent and inventory clerk standards. We clean every room to inspection level, provide a certificate of clean, and back it with our deposit-return guarantee. Our DBS-checked team covers {postcode} and the surrounding area — weekdays, weekends, and short notice available.',
    included: [
      'Full kitchen deep clean including oven, extractor, and hob',
      'Bathroom and en-suite scrubbed to inspection standard',
      'All floors vacuumed and mopped',
      'Skirting boards, door frames, and light switches wiped',
      'Inside all cupboards and drawers',
      'Limescale removed from tiles, taps, and shower screens',
      'Interior windows and window sills cleaned',
      'Certificate of clean provided on request',
    ],
    addons: ['Carpet extraction cleaning', 'Exterior windows', 'Garage or outbuilding', 'Garden tidying'],
    prices: [
      { label: 'Studio / 1-Bed', price: '£110' },
      { label: '2-Bed Property', price: '£155' },
      { label: '3-Bed Property', price: '£200' },
      { label: '4-Bed Property', price: '£260' },
      { label: '5-Bed Property', price: 'POA' },
    ],
    faqs: [
      { q: 'Do you guarantee the deposit back?', a: 'Yes. If your letting agent or landlord raises a cleaning issue we covered, we return and re-clean the relevant areas at no extra charge. Most clients get their full deposit returned after our clean.' },
      { q: 'How long does an end of tenancy clean take?', a: 'A 1-bed flat typically takes 3–4 hours. A 3-bed house takes 5–7 hours. We work until the property meets inspection standard, not until a timer runs out.' },
      { q: 'Do I need to be present during the clean?', a: 'No. Most clients arrange key collection via a lockbox or leave keys with us. We\'re fully insured and DBS-checked — your property is safe in our hands.' },
      { q: 'How much notice do you need for an end of tenancy clean?', a: 'We ask for at least 48 hours where possible, but we regularly take last-minute bookings. Call 07767 759 013 to check availability for your move-out date.' },
    ],
    cta: 'Book Your End of Tenancy Clean',
    schema: 'HouseCleaner',
  },
  {
    slug: 'deep-cleaning',
    name: 'Deep Cleaning',
    shortName: 'Deep Clean',
    tagline: 'Top to bottom. Every detail, every corner.',
    metaDescription: 'Professional deep cleaning in {location} from £75. One-off intensive clean covering every room, appliance, and surface. DBS-checked, fully insured. Call 07767 759 013.',
    h1Template: 'Deep Cleaning Service in {location}',
    intro: 'Our deep cleaning service in {location} goes far beyond a standard clean. Every surface, appliance, and hidden corner is tackled by our trained team — ideal for a seasonal refresh, before moving in, after building work, or simply when your home needs a proper reset. We cover the full {postcode} area and can usually book within 3–5 days.',
    included: [
      'Kitchen: oven, hob, extractor, fridge, microwave deep cleaned',
      'Bathrooms and en-suites: limescale removal, grout scrubbing',
      'Skirting boards, door frames, light switches, and plug sockets wiped',
      'Inside all wardrobes, cupboards, and drawers',
      'All floors vacuumed and mopped, including under furniture',
      'Window sills, frames, and interior glass cleaned',
      'Cobweb removal throughout',
      'Balcony or patio swept if accessible',
    ],
    addons: ['Carpet extraction', 'Upholstery cleaning', 'Inside oven only', 'Garage included'],
    prices: [
      { label: 'Studio / 1-Bed', price: '£75' },
      { label: '2-Bed Property', price: '£100' },
      { label: '3-Bed Property', price: '£130' },
      { label: '4-Bed Property', price: '£170' },
    ],
    faqs: [
      { q: 'What is the difference between a regular clean and a deep clean?', a: 'A regular clean maintains your home week to week. A deep clean starts from scratch — inside appliances, behind furniture, inside cupboards, grout lines, limescale — areas a standard clean doesn\'t reach.' },
      { q: 'How often should I get a deep clean?', a: 'Most households book a deep clean every 3–6 months to complement regular maintenance cleaning. It\'s also common before hosting events, after illness, or after building work.' },
      { q: 'Do I need to prepare anything before the deep clean?', a: 'Just clear any personal items you\'d prefer we don\'t move, and ensure hot water and power are available. We bring all our own professional cleaning supplies.' },
      { q: 'Can I get a same-week deep clean?', a: 'In most cases yes. We aim to accommodate bookings within 3–5 days. Call 07767 759 013 or WhatsApp us for the quickest availability.' },
    ],
    cta: 'Book Your Deep Clean',
    schema: 'HouseCleaner',
  },
  {
    slug: 'regular-house-cleaning',
    name: 'Regular Home Cleaning',
    shortName: 'Regular Clean',
    tagline: 'Your cleaner, every week. Same person, same standard.',
    metaDescription: 'Regular house cleaning in {location} from £35. Weekly, fortnightly, or monthly. Same DBS-checked cleaner every visit. No contracts. Call 07767 759 013.',
    h1Template: 'Regular House Cleaning in {location}',
    intro: 'Life is busy enough. Our regular cleaning service gives {location} homes a consistent, professional clean without the hassle — weekly, fortnightly, or monthly, always from the same trusted cleaner. No contracts, no lock-in, and always the same face at your door. We serve {postcode} and the surrounding area.',
    included: [
      'Kitchen: worktops, hob, appliance exteriors, sink, cupboard fronts',
      'Bathrooms: toilet, sink, bath/shower, mirrors, tiles',
      'Dusting of all surfaces and furniture throughout',
      'Vacuuming all carpets and upholstered furniture',
      'Mopping all hard floors',
      'Bins emptied and relined',
      'Beds made and changed (linen provided by client)',
    ],
    addons: ['Inside fridge clean', 'Inside oven clean', 'Interior windows', 'Laundry and ironing'],
    prices: [
      { label: '1-Bed (weekly)', price: '£35' },
      { label: '2-Bed (weekly)', price: '£50' },
      { label: '3-Bed (weekly)', price: '£65' },
      { label: '4-Bed (weekly)', price: '£80' },
    ],
    faqs: [
      { q: 'Will I always have the same cleaner?', a: 'Yes. We match you with one of our team and aim to send the same person every visit. In cases of illness or holiday, we will always give you advance notice and offer a replacement of equal standard.' },
      { q: 'Do I need to be home during the clean?', a: 'Not at all. Most regular clients provide a key or code. We\'re DBS-checked, fully insured, and trusted to clean homes unsupervised across {location} and the surrounding area.' },
      { q: 'Is there a minimum contract?', a: 'No. We operate on a no-contract basis. You can pause, reduce frequency, or cancel at any time with 48 hours notice. We\'d rather earn your business every visit than lock you in.' },
      { q: 'Do you bring cleaning supplies?', a: 'Yes. We bring all professional-grade products. If you have allergies or prefer eco-friendly products, just let us know when you book — we carry non-toxic alternatives at no extra charge.' },
    ],
    cta: 'Set Up Your Regular Clean',
    schema: 'HouseCleaner',
  },
  {
    slug: 'move-in-move-out-cleaning',
    name: 'Move In / Move Out Cleaning',
    shortName: 'Move In / Move Out',
    tagline: 'Fresh start in your new home. Perfect finish when you leave.',
    metaDescription: 'Move in and move out cleaning in {location} from £110. Clean your new home before you unpack or leave your old one spotless. DBS-checked, fully insured. 07767 759 013.',
    h1Template: 'Move In & Move Out Cleaning in {location}',
    intro: 'Moving home in {location}? Whether you\'re arriving at a new property and want it properly cleaned before you unpack, or you\'re leaving and need to hand it back in perfect condition, our move in/move out service covers you completely. We cover {postcode} and operate 7 days a week to fit around completion and moving dates.',
    included: [
      'Full kitchen clean including all appliances inside and out',
      'Bathroom and toilet cleaned and sanitised',
      'All rooms dusted, vacuumed, and mopped',
      'Inside all built-in cupboards and wardrobes',
      'Skirting boards, doors, and frames wiped',
      'Interior windows cleaned',
      'Any marks or scuffs removed from walls where possible',
      'Garden or patio swept if required',
    ],
    addons: ['Carpet cleaning', 'External window cleaning', 'Garage clean', 'Garden tidy'],
    prices: [
      { label: 'Studio / 1-Bed', price: '£110' },
      { label: '2-Bed Property', price: '£150' },
      { label: '3-Bed Property', price: '£195' },
      { label: '4-Bed Property', price: '£250' },
    ],
    faqs: [
      { q: 'What is the difference between move in and end of tenancy cleaning?', a: 'End of tenancy cleaning is for renters and must meet letting agent standards. Move in cleaning is typically for buyers or renters who want their new home cleaned to their own personal standard before they move in — often more detailed around specific areas they care about most.' },
      { q: 'Can you clean the property before our furniture arrives?', a: 'Yes — in fact this is the ideal scenario. An empty property allows us to clean more thoroughly, particularly floors, skirting boards, and built-in storage.' },
      { q: 'Can you accommodate completion day timings?', a: 'Yes. We know completion and handover times can shift. We offer flexible morning or afternoon slots and will do our best to work around your estate agent or removal company schedule.' },
      { q: 'Do you cover properties across {location}?', a: 'Yes. We operate across {postcode} and all surrounding areas. Contact us with your property address and we\'ll confirm availability and pricing.' },
    ],
    cta: 'Book Your Move Clean',
    schema: 'HouseCleaner',
  },
  {
    slug: 'carpet-cleaning',
    name: 'Carpet & Upholstery Cleaning',
    shortName: 'Carpet Cleaning',
    tagline: 'Deep extraction. Fresh results. Per room or whole house.',
    metaDescription: 'Professional carpet cleaning in {location} from £25/room. Hot water extraction removes deep stains, odours, and allergens. DBS-checked team. Call 07767 759 013.',
    h1Template: 'Carpet & Upholstery Cleaning in {location}',
    intro: 'Our carpet cleaning service uses professional hot water extraction to remove deep-set dirt, stains, pet odours, and allergens from carpets and upholstery across {location}. Unlike surface-only methods, hot water extraction cleans deep into the pile, leaving carpets genuinely fresh — not just damp. We cover {postcode} and the surrounding area, with results visible within hours of drying.',
    included: [
      'Pre-inspection and stain pre-treatment',
      'Professional hot water extraction (not dry cleaning)',
      'Deodorising treatment included',
      'Pet odour and hair treatment available',
      'Furniture moved where safe to do so',
      'Fast-dry technique — walkable in 2–4 hours',
    ],
    addons: ['Upholstery (2-seat sofa)', 'Stair runners', 'Mattress cleaning', 'Area rug cleaning'],
    prices: [
      { label: 'Per bedroom', price: '£25' },
      { label: 'Stairs', price: '£20' },
      { label: 'Large living room', price: '£30' },
      { label: '3-bed full house', price: '£120' },
      { label: '2-seat sofa (upholstery)', price: '£55' },
    ],
    faqs: [
      { q: 'How long do carpets take to dry after cleaning?', a: 'With our fast-dry extraction method, most carpets are walkable within 2–4 hours. Full drying typically takes 6–8 hours depending on the thickness of the carpet and ventilation in the room.' },
      { q: 'Can you remove pet stains and odours?', a: 'Yes. We use specialist enzyme-based treatments for pet urine, fur, and odours that break down the source of the smell rather than masking it. Heavily saturated areas may need more than one treatment for full results.' },
      { q: 'Are your products safe for children and pets?', a: 'Yes. We use products that are safe once dry. We recommend keeping children and pets off the carpet until it is fully dry, usually 4–6 hours after cleaning.' },
      { q: 'Do you clean upholstery and sofas as well as carpets?', a: 'Yes. We clean sofas, chairs, headboards, and other fabric upholstery using the same hot water extraction method. Prices start from £55 for a 2-seat sofa.' },
    ],
    cta: 'Book Carpet Cleaning',
    schema: 'HouseCleaner',
  },
  {
    slug: 'office-commercial-cleaning',
    name: 'Office & Commercial Cleaning',
    shortName: 'Office Cleaning',
    tagline: 'Reliable contract cleaning built around your business hours.',
    metaDescription: 'Office and commercial cleaning in {location} from £65/visit. Daily, weekly, or out-of-hours. DBS-checked staff, £5M insured. Contract or flexible. Call 07767 759 013.',
    h1Template: 'Office & Commercial Cleaning in {location}',
    intro: 'A clean workplace isn\'t just presentable — it improves staff wellbeing, reduces sick days, and makes the right impression on clients. thefamgroup provides reliable office and commercial cleaning for businesses across {location}, from small offices to larger commercial spaces. We work around your hours — early mornings, evenings, weekends — and provide fully vetted, insured operatives every visit. We cover {postcode} and the surrounding commercial areas.',
    included: [
      'All workstations, desks, and office equipment wiped and sanitised',
      'Kitchen and breakout area fully cleaned',
      'All toilets and washrooms sanitised',
      'Reception and common areas vacuumed and mopped',
      'Bins emptied and relined throughout',
      'Glass partitions and entry doors cleaned',
      'Door handles and high-touch surfaces disinfected',
    ],
    addons: ['Deep office clean (quarterly)', 'Carpet extraction', 'External window cleaning', 'Washroom supplies replenishment'],
    prices: [
      { label: 'Small office (up to 10 desks)', price: '£65/visit' },
      { label: 'Medium office (10–30 desks)', price: '£95/visit' },
      { label: 'Large office (30+ desks)', price: '£140/visit' },
      { label: 'Retail / showroom', price: '£85/visit' },
    ],
    faqs: [
      { q: 'Do you offer out-of-hours office cleaning?', a: 'Yes. Most of our commercial clients prefer cleaning outside business hours — before 8am or after 6pm. We accommodate early morning, evening, and weekend slots across {location}.' },
      { q: 'Are your staff DBS-checked for office access?', a: 'Yes. All thefamgroup operatives are DBS-checked, reference-verified, and carry public liability insurance. We understand the sensitivity of unsupervised access to business premises.' },
      { q: 'Do you offer flexible contracts or is there a minimum term?', a: 'Both options are available. We offer rolling monthly agreements with no lock-in, or discounted longer-term contracts if you prefer commitment in exchange for a lower rate.' },
      { q: 'Can you provide a cleaning schedule and log?', a: 'Yes. We provide a job completion log for every visit. For larger contracts, we also offer a monthly report and dedicated account manager contact.' },
    ],
    cta: 'Request a Commercial Quote',
    schema: 'LocalBusiness',
  },
  {
    slug: 'post-construction-cleaning',
    name: 'Post-Construction & Builders Clean',
    shortName: 'Builders Clean',
    tagline: 'Remove the dust. Reveal the finish.',
    metaDescription: 'Post-construction and builders clean in {location} from £180. Remove plaster dust, paint marks, and debris after building work. DBS-checked, fully insured. Call 07767 759 013.',
    h1Template: 'Post-Construction Cleaning in {location}',
    intro: 'After building work, renovation, or refurbishment, your property needs a clean that goes beyond standard domestic cleaning. Our post-construction cleaning team in {location} removes plaster dust, paint splatter, adhesive residue, grout film, and building debris — leaving your property ready to move into or hand over. We cover {postcode} and work around your contractor\'s schedule.',
    included: [
      'Fine plaster dust removal from all surfaces and crevices',
      'Paint marks and splatter removed from glass, sills, and floors',
      'Adhesive residue and grout haze removed',
      'All rooms vacuumed (HEPA-filter equipment for fine dust)',
      'Hard floors scrubbed and polished',
      'Sanitaryware and kitchen units cleaned and polished',
      'All windows cleaned inside and out (ground floor)',
      'Removal of packaging, off-cuts, and builder debris (bagged)',
    ],
    addons: ['External window cleaning (upper floors)', 'Carpet protection removal and vacuuming', 'Deep oven clean for new kitchens', 'Handover sparkle clean on completion day'],
    prices: [
      { label: '1-Bed / flat', price: '£150' },
      { label: '2-Bed property', price: '£200' },
      { label: '3-Bed property', price: '£280' },
      { label: 'Commercial (per sq ft)', price: 'POA' },
    ],
    faqs: [
      { q: 'When should we schedule the builders clean?', a: 'Ideally after all trades have finished and before any furniture is installed. A sparkle clean (lighter second pass) is then done just before handover or move-in day.' },
      { q: 'What equipment do you use for construction dust?', a: 'We use HEPA-filter vacuum equipment rated for fine particles. Standard domestic vacuums recirculate fine plaster dust into the air — ours capture it.' },
      { q: 'Can you work around contractors still on site?', a: 'Yes. We often do a first-fix clean while other trades are completing. We co-ordinate with your site manager and are experienced in working safely alongside other contractors.' },
      { q: 'Do you take away building waste?', a: 'We bag and remove small amounts of debris included in the standard service. For larger quantities of rubble or materials, a skip is more appropriate. We can advise on this when we quote.' },
    ],
    cta: 'Get a Post-Build Clean Quote',
    schema: 'LocalBusiness',
  },
  {
    slug: 'airbnb-holiday-let-cleaning',
    name: 'Airbnb & Holiday Let Cleaning',
    shortName: 'Airbnb Clean',
    tagline: '5-star standards. Fast turnaround. Every single time.',
    metaDescription: 'Airbnb and holiday let cleaning in {location} from £75. Fast turnaround between guests, linen change, restock, and inspection-standard finish. Call 07767 759 013.',
    h1Template: 'Airbnb & Holiday Let Cleaning in {location}',
    intro: 'Maintaining 5-star guest reviews depends on a consistently immaculate property between every booking. Our Airbnb and holiday let cleaning service in {location} is built around fast turnarounds, reliable scheduling, and an inspection-standard finish every time — regardless of what the previous guests left behind. We cover {postcode} with flexible same-day availability between checkouts and check-ins.',
    included: [
      'Full property cleaned and reset to hotel standard',
      'All beds stripped, fresh linen fitted (linen provided by owner)',
      'Bathrooms sanitised and restocked with supplies',
      'Kitchen wiped down, appliances cleaned, dishes washed',
      'All bins emptied and relined',
      'Guest welcome items arranged as directed',
      'Damage and inventory check reported to owner',
      'Photo confirmation sent on completion',
    ],
    addons: ['Linen laundry and press', 'Restock shopping (supplies provided by owner)', 'Deep clean between long stays', 'Window cleaning'],
    prices: [
      { label: 'Studio / 1-Bed', price: '£75' },
      { label: '2-Bed property', price: '£100' },
      { label: '3-Bed property', price: '£135' },
      { label: '4-Bed / large', price: '£170' },
    ],
    faqs: [
      { q: 'Can you handle same-day turnarounds between guests?', a: 'Yes — this is our speciality. We work to your check-out and check-in times and are set up to complete fast, thorough turnarounds even on the same day.' },
      { q: 'What happens if a guest leaves the property in poor condition?', a: 'We photograph the condition on arrival and on completion and notify you immediately. Any significant extra cleaning required beyond the standard service is quoted before we proceed.' },
      { q: 'Can you manage the cleaning schedule automatically?', a: 'Yes. Share your booking calendar with us (Airbnb, VRBO, or direct) and we\'ll schedule and confirm each clean automatically without you needing to contact us for each booking.' },
      { q: 'Do you cover multiple Airbnb properties?', a: 'Yes. We manage multi-property portfolios for several hosts across {location}. We offer volume pricing for hosts with two or more properties.' },
    ],
    cta: 'Set Up Airbnb Cleaning',
    schema: 'HouseCleaner',
  },
]

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

export function getService(slug: string): ServiceData | undefined {
  return SERVICES.find(s => s.slug === slug)
}

export function getLocation(slug: string): LocationData | undefined {
  return LOCATIONS.find(l => l.slug === slug)
}

export function getAllPageParams() {
  return SERVICES.flatMap(service =>
    LOCATIONS.map(location => ({
      service: service.slug,
      location: location.slug,
    }))
  )
}

export function interpolate(template: string, location: LocationData): string {
  return template
    .replace(/\{location\}/g, location.name)
    .replace(/\{postcode\}/g, location.postcode)
}

// Contact details — single source of truth
export const CONTACT = {
  phone: '07767 759 013',
  phoneTel: 'tel:07767759013',
  whatsapp: 'https://wa.me/447767759013',
  email: 'info@thefamgroup.uk',
  website: 'thefamgroup.uk',
  siteUrl: 'https://www.thefamgroup.uk',
  businessName: 'thefamgroup',
  address: 'Manchester & Crewe, UK',
}
