// app/api/indexnow/route.ts
// POST /api/indexnow — submits all site URLs to Bing/IndexNow for fast crawling
// Covers: main service pages, carpet, office, bin cleaning (1,381 pages total)

import { NextResponse } from 'next/server'
import { getAllPageParams, SERVICES, CONTACT } from '@/lib/seo-data'
import { CARPET_LOCATIONS } from '@/lib/carpet-locations'
import { OFFICE_LOCATIONS } from '@/lib/office-locations'
import { BIN_LOCATIONS } from '@/lib/bin-locations'

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || ''
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'
const BASE = CONTACT.siteUrl

function buildAllUrls(): string[] {
  const params = getAllPageParams()
  return [
    // Static pages
    `${BASE}/`,
    `${BASE}/cleaning/`,
    `${BASE}/services/`,
    `${BASE}/prices/`,
    `${BASE}/quote/`,
    `${BASE}/contact/`,
    `${BASE}/about/`,
    `${BASE}/careers/`,
    `${BASE}/service-areas/`,
    // Engine 1: main services × locations
    ...SERVICES.map(s => `${BASE}/cleaning/${s.slug}/`),
    ...params.map(({ service, location }) => `${BASE}/cleaning/${service}/${location}/`),
    // Engine 2: carpet cleaning
    `${BASE}/cleaning/carpet-cleaning/`,
    ...CARPET_LOCATIONS.map(l => `${BASE}/cleaning/carpet-cleaning/${l.slug}/`),
    // Engine 3: office cleaning
    `${BASE}/cleaning/office-commercial-cleaning/`,
    ...OFFICE_LOCATIONS.map(l => `${BASE}/cleaning/office-commercial-cleaning/${l.slug}/`),
    // Engine 4: bin cleaning
    `${BASE}/cleaning/bin-cleaning/`,
    ...BIN_LOCATIONS.map(l => `${BASE}/cleaning/bin-cleaning/${l.slug}/`),
  ]
}

// IndexNow accepts max 10,000 URLs per request — batch if needed
async function submitBatch(urls: string[], key: string): Promise<{ ok: boolean; status: number }> {
  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      host: new URL(BASE).host,
      key,
      keyLocation: `${BASE}/${key}.txt`,
      urlList: urls,
    }),
  })
  return { ok: res.ok, status: res.status }
}

export async function POST() {
  if (!INDEXNOW_KEY) {
    return NextResponse.json({ success: false, message: 'INDEXNOW_KEY env var not set' }, { status: 400 })
  }

  const urls = buildAllUrls()

  // Batch into chunks of 10,000
  const CHUNK = 10_000
  const batches: string[][] = []
  for (let i = 0; i < urls.length; i += CHUNK) batches.push(urls.slice(i, i + CHUNK))

  const results = await Promise.all(batches.map(batch => submitBatch(batch, INDEXNOW_KEY)))
  const allOk = results.every(r => r.ok)

  return NextResponse.json({
    success: allOk,
    urlCount: urls.length,
    batches: results.length,
    statuses: results.map(r => r.status),
    message: allOk
      ? `Submitted ${urls.length} URLs to Bing IndexNow across ${results.length} batch(es)`
      : `Partial failure — check statuses: ${results.map(r => r.status).join(', ')}`,
  })
}

export async function GET() {
  const urls = buildAllUrls()
  return NextResponse.json({
    message: 'POST to this endpoint to submit all URLs to Bing IndexNow',
    urlCount: urls.length,
    breakdown: {
      staticPages: 9,
      mainServicePages: getAllPageParams().length + SERVICES.length,
      carpetPages: CARPET_LOCATIONS.length + 1,
      officePages: OFFICE_LOCATIONS.length + 1,
      binPages: BIN_LOCATIONS.length + 1,
    },
    note: 'Set INDEXNOW_KEY env var in Vercel before calling POST',
  })
}
