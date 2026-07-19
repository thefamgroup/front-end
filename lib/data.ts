import type {
  ServiceCard, AddOnCard, Testimonial, BlogPost, PriceItem, AddOn
} from '@/types'

// ── Contact ──────────────────────────────────────────────────────
export const CONTACT = {
  phone: '07767 759 013',
  phoneTel: 'tel:07767759013',
  whatsapp: 'https://wa.me/447767759013?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20cleaning%20services',
  email: 'info@thefamgroup.uk',
  website: 'thefamgroup.uk',
  locations: ['Manchester', 'Crewe'],
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
  { id: '1', title: '10 Things Cleaners Always Notice (That You Probably Don\'t)', excerpt: 'Our team has seen it all. Here are the spots homeowners almost always miss — and how to tackle them.', category: 'Home Cleaning', date: '5 Jun 2026', readTime: '4 min', emoji: '🏠' },
  { id: '2', title: 'How to Get Your Full Deposit Back: A Tenant\'s Cleaning Checklist', excerpt: 'A complete room-by-room guide to passing your check-out inspection and getting every penny back.', category: 'End of Tenancy', date: '28 May 2026', readTime: '6 min', emoji: '🔑' },
  { id: '3', title: 'Why a Clean Office Increases Productivity by Up to 15%', excerpt: 'The science behind a tidy workspace and why investing in commercial cleaning pays for itself.', category: 'Commercial', date: '18 May 2026', readTime: '5 min', emoji: '🏢' },
  { id: '4', title: 'The Best Eco-Friendly Cleaning Products for UK Homes in 2026', excerpt: 'We tested dozens of biodegradable products. Here are the ones that actually work.', category: 'Eco Cleaning', date: '10 May 2026', readTime: '7 min', emoji: '🌿' },
  { id: '5', title: 'The Right Way to Clean a Fridge (Most People Get This Wrong)', excerpt: 'Step-by-step guide to a properly sanitised fridge — from shelves to the door seal.', category: 'Tips & Tricks', date: '2 May 2026', readTime: '3 min', emoji: '🧊' },
  { id: '6', title: 'How Often Should You Deep Clean Your Home? The Definitive Guide', excerpt: 'Different rooms need different frequencies. Here\'s the schedule professional cleaners actually follow.', category: 'Deep Clean', date: '22 Apr 2026', readTime: '5 min', emoji: '🛋️' },
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
