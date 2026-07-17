import { NextResponse } from 'next/server'

const ADMIN_API = process.env.ADMIN_API_URL || 'https://tfg-admin-api.onrender.com/api'

const DEFAULTS = {
  BASE_PRICES: { regular: 60, deep: 140, eot: 149, moveout: 155, office: 95, postconstruction: 200, airbnb: 75 },
  SIZE_MULT: { studio: 1, '1bed': 1.1, '2bed': 1.35, '3bed': 1.65, '4bed': 2.1 },
  FREQ_MULT: { 'one-off': 1, weekly: 0.80, fortnightly: 0.85, monthly: 0.90 },
  COND_MULT: { light: 0.90, average: 1.0, heavy: 1.28, 'very-heavy': 1.55 },
  ADDON_PRICES: { oven: 45, fridge: 25, windows: 30, carpet: 40, upholstery: 55, laundry: 20, cupboards: 35, sameday: 25 },
}

// Force this route to always run on the server — never static, never CDN cached
export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  try {
    const res = await fetch(`${ADMIN_API}/settings/pricing-config`, {
      cache: 'no-store',
      headers: { 'Accept': 'application/json' },
    })
    if (res.ok) {
      const data = await res.json()
      return NextResponse.json(data, {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate',
          'Pragma': 'no-cache',
        },
      })
    }
  } catch {
    // admin backend unreachable — return hardcoded defaults
  }

  return NextResponse.json(DEFAULTS, {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'Pragma': 'no-cache',
    },
  })
}
