import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { BASE_PRICES, SIZE_MULT, FREQ_MULT, COND_MULT } from './data'
import type { QuoteState, PricingConfig } from '@/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateQuote(
  state: QuoteState,
  pricing?: PricingConfig,
): {
  base: number
  addonsTotal: number
  total: number
  breakdown: string
} {
  const basePrices = pricing?.BASE_PRICES ?? BASE_PRICES
  const sizeMult   = pricing?.SIZE_MULT   ?? SIZE_MULT
  const freqMult   = pricing?.FREQ_MULT   ?? FREQ_MULT
  const condMult   = pricing?.COND_MULT   ?? COND_MULT
  const addonPrices = pricing?.ADDON_PRICES

  const base   = basePrices[state.serviceType] ?? 80
  const sizeM  = sizeMult[state.propertySize]  ?? 1
  const freqM  = freqMult[state.frequency]     ?? 1
  const condM  = condMult[state.condition]     ?? 1
  const subtotal = Math.round(base * sizeM * condM * freqM)

  const addonsTotal = state.addons.reduce((sum, a) => {
    const price = addonPrices?.[a.id] ?? a.price
    return sum + price
  }, 0)
  const total = subtotal + addonsTotal

  const parts: string[] = [`Base service: £${subtotal}`]
  if (addonsTotal > 0) parts.push(`Add-ons: £${addonsTotal}`)
  if (freqM < 1) parts.push(`Recurring discount applied`)

  return { base: subtotal, addonsTotal, total, breakdown: parts.join(' · ') }
}

export function formatPhone(phone: string): string {
  return phone.replace(/\D/g, '')
}

export function buildWhatsAppUrl(phone: string, message: string): string {
  return `https://wa.me/${formatPhone(phone)}?text=${encodeURIComponent(message)}`
}
