import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { BASE_PRICES, SIZE_MULT, FREQ_MULT, COND_MULT } from './data'
import type { QuoteState } from '@/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateQuote(state: QuoteState): {
  base: number
  addonsTotal: number
  total: number
  breakdown: string
} {
  const base = BASE_PRICES[state.serviceType] ?? 80
  const sizeM = SIZE_MULT[state.propertySize] ?? 1
  const freqM = FREQ_MULT[state.frequency] ?? 1
  const condM = COND_MULT[state.condition] ?? 1
  const subtotal = Math.round(base * sizeM * condM * freqM)
  const addonsTotal = state.addons.reduce((sum, a) => sum + a.price, 0)
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
