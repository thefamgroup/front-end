import { NextResponse } from 'next/server'

// Default pricing — used as fallback if admin backend is unreachable
const DEFAULTS = {
  BASE_PRICES: { regular: 60, deep: 140, eot: 149, moveout: 155, office: 95, postconstruction: 200, airbnb: 75 },
  SIZE_MULT: { studio: 1, '1bed': 1.1, '2bed': 1.35, '3bed': 1.65, '4bed': 2.1 },
  FREQ_MULT: { 'one-off': 1, weekly: 0.80, fortnightly: 0.85, monthly: 0.90 },
  COND_MULT: { light: 0.90, average: 1.0, heavy: 1.28, 'very-heavy': 1.55 },
  ADDON_PRICES: { oven: 45, fridge: 25, windows: 30, carpet: 40, upholstery: 55, laundry: 20, cupboards: 35, sameday: 25 },
}

export async function GET() {
  const adminUrl = process.env.NEXT_PUBLIC_API_URL || process.env.ADMIN_API_URL
  if (adminUrl) {
    try {
      const res = await fetch(`${adminUrl}/settings/pricing-config`, {
        next: { revalidate: 300 }, // cache for 5 minutes
      })
      if (res.ok) {
        const data = await res.json()
        return NextResponse.json(data, {
          headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60' },
        })
      }
    } catch {
      // fall through to defaults
    }
  }

  return NextResponse.json(DEFAULTS, {
    headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60' },
  })
}
