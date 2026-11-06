// ── Service Types ─────────────────────────────────────────────────

export type ServiceType =
  | 'regular'
  | 'deep'
  | 'eot'
  | 'moveout'
  | 'office'
  | 'postconstruction'
  | 'airbnb'

export type PropertySize = 'studio' | '1bed' | '2bed' | '3bed' | '4bed'

export type Frequency = 'one-off' | 'weekly' | 'fortnightly' | 'monthly'

export type Condition = 'light' | 'average' | 'heavy' | 'very-heavy'

export interface AddOn {
  id: string
  label: string
  price: number
  icon: string
}

export interface QuoteState {
  serviceType: ServiceType
  propertySize: PropertySize
  frequency: Frequency
  condition: Condition
  addons: AddOn[]
}

// ── Pricing Config (from admin backend) ───────────────────────────

export interface PricingConfig {
  BASE_PRICES: Record<string, number>
  SIZE_MULT: Record<string, number>
  FREQ_MULT: Record<string, number>
  COND_MULT: Record<string, number>
  ADDON_PRICES: Record<string, number>
}

// ── Pricing ──────────────────────────────────────────────────────

export interface PriceItem {
  name: string
  description?: string
  includes: string
  size?: string
  price: string
  note?: string
}

// ── Contact / Forms ───────────────────────────────────────────────

export interface BookingFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  serviceType: string
  bedrooms: string
  bathrooms: string
  message?: string
}

export interface QuoteFormData {
  name: string
  phone: string
  email: string
  message: string
  estimatedTotal: number
}

export interface NegotiateFormData {
  name: string
  phone: string
  budget: string
  message: string
}

// ── Content ───────────────────────────────────────────────────────

export interface Testimonial {
  id: string
  quote: string
  name: string
  location: string
  initials: string
  rating: number
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  metaTitle?: string       // shorter override for the <title> tag; falls back to title if unset
  excerpt: string
  metaDescription: string
  category: string
  date: string
  readTime: string
  emoji: string
  illustration: string      // name of an exported component in components/icons/ServiceIllustrations
  content: string[]        // paragraphs; a string starting with "## " renders as an H2
  relatedHref?: string     // internal link to a relevant service/location page
  relatedLabel?: string
}

export interface ServiceCard {
  id: string
  title: string
  description: string
  emoji: string
  href: string
}

export interface AddOnCard {
  id: string
  title: string
  description: string
  emoji: string
}
