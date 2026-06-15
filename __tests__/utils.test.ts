import { calculateQuote, buildWhatsAppUrl } from '@/lib/utils'
import { BASE_PRICES, SIZE_MULT, FREQ_MULT, COND_MULT, ADDONS } from '@/lib/data'
import type { QuoteState } from '@/types'

// ── calculateQuote ─────────────────────────────────────────────────

describe('calculateQuote', () => {
  const base: QuoteState = {
    serviceType: 'regular',
    propertySize: 'studio',
    frequency: 'one-off',
    condition: 'average',
    addons: [],
  }

  it('returns correct base for regular / studio / one-off / average', () => {
    const result = calculateQuote(base)
    // BASE_PRICES.regular=60, SIZE_MULT.studio=1, FREQ_MULT.one-off=1, COND_MULT.average=1
    expect(result.base).toBe(60)
    expect(result.total).toBe(60)
    expect(result.addonsTotal).toBe(0)
  })

  it('applies size multiplier correctly for 3-bed', () => {
    const result = calculateQuote({ ...base, propertySize: '3bed' })
    // 60 * 1.65 = 99
    expect(result.base).toBe(99)
  })

  it('applies frequency discount for weekly', () => {
    const result = calculateQuote({ ...base, frequency: 'weekly' })
    // 60 * 0.80 = 48
    expect(result.base).toBe(48)
  })

  it('applies heavy condition multiplier', () => {
    const result = calculateQuote({ ...base, condition: 'heavy' })
    // 60 * 1.28 = 76.8 → rounded = 77
    expect(result.base).toBe(77)
  })

  it('adds addon prices to total', () => {
    const ovenAddon = ADDONS.find((a) => a.id === 'oven')!
    const result = calculateQuote({ ...base, addons: [ovenAddon] })
    expect(result.addonsTotal).toBe(45)
    expect(result.total).toBe(60 + 45)
  })

  it('sums multiple addons correctly', () => {
    const oven = ADDONS.find((a) => a.id === 'oven')!    // 45
    const fridge = ADDONS.find((a) => a.id === 'fridge')! // 25
    const result = calculateQuote({ ...base, addons: [oven, fridge] })
    expect(result.addonsTotal).toBe(70)
    expect(result.total).toBe(60 + 70)
  })

  it('handles EOT with 2-bed correctly', () => {
    // BASE_PRICES.eot=149, SIZE_MULT.2bed=1.35
    const result = calculateQuote({ ...base, serviceType: 'eot', propertySize: '2bed' })
    expect(result.base).toBe(Math.round(149 * 1.35))
  })

  it('includes breakdown string', () => {
    const result = calculateQuote(base)
    expect(result.breakdown).toContain('Base service: £60')
  })

  it('includes recurring discount note in breakdown when freq is weekly', () => {
    const result = calculateQuote({ ...base, frequency: 'weekly' })
    expect(result.breakdown).toContain('Recurring discount applied')
  })

  it('returns total equal to base when no addons', () => {
    const result = calculateQuote(base)
    expect(result.total).toBe(result.base)
  })
})

// ── buildWhatsAppUrl ──────────────────────────────────────────────

describe('buildWhatsAppUrl', () => {
  it('builds correct wa.me URL', () => {
    const url = buildWhatsAppUrl('07769 240 184', 'Hello there')
    expect(url).toContain('wa.me/07769240184')
    expect(url).toContain('Hello%20there')
  })

  it('strips non-numeric characters from phone', () => {
    const url = buildWhatsAppUrl('+44 (0) 7769-240-184', 'Test')
    expect(url).toContain('wa.me/4407769240184')
  })
})

// ── Data integrity ────────────────────────────────────────────────

describe('lib/data', () => {
  it('all BASE_PRICES are positive numbers', () => {
    Object.values(BASE_PRICES).forEach((price) => {
      expect(price).toBeGreaterThan(0)
    })
  })

  it('all SIZE_MULT values are between 0.5 and 3', () => {
    Object.values(SIZE_MULT).forEach((mult) => {
      expect(mult).toBeGreaterThan(0.5)
      expect(mult).toBeLessThan(3)
    })
  })

  it('all FREQ_MULT values are <= 1 (discounts or no change)', () => {
    Object.values(FREQ_MULT).forEach((mult) => {
      expect(mult).toBeLessThanOrEqual(1)
      expect(mult).toBeGreaterThan(0)
    })
  })

  it('all COND_MULT values are positive', () => {
    Object.values(COND_MULT).forEach((mult) => {
      expect(mult).toBeGreaterThan(0)
    })
  })

  it('all addons have required fields', () => {
    ADDONS.forEach((addon) => {
      expect(addon.id).toBeTruthy()
      expect(addon.label).toBeTruthy()
      expect(addon.price).toBeGreaterThan(0)
      expect(addon.icon).toBeTruthy()
    })
  })

  it('ADDONS has 8 items', () => {
    expect(ADDONS).toHaveLength(8)
  })
})
