// app/api/indexnow/route.ts
// Call this from your Vercel deployment hook to ping Bing IndexNow
// POST /api/indexnow — no body needed, pings all 480 pages automatically

import { NextResponse } from 'next/server'
import { getAllPageParams, SERVICES, CONTACT } from '@/lib/seo-data'

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'YOUR_INDEXNOW_KEY'
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'

export async function POST() {
  const params = getAllPageParams()

  const urls = [
    CONTACT.siteUrl + '/',
    ...SERVICES.map(s => `${CONTACT.siteUrl}/cleaning/${s.slug}/`),
    ...params.map(({ service, location }) =>
      `${CONTACT.siteUrl}/cleaning/${service}/${location}/`
    ),
  ]

  const body = {
    host: new URL(CONTACT.siteUrl).host,
    key: INDEXNOW_KEY,
    keyLocation: `${CONTACT.siteUrl}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  }

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  return NextResponse.json({
    success: res.ok,
    urlCount: urls.length,
    status: res.status,
    message: res.ok
      ? `Successfully submitted ${urls.length} URLs to IndexNow (Bing)`
      : `IndexNow submission failed: ${res.statusText}`,
  })
}

export async function GET() {
  return NextResponse.json({
    message: 'POST to this endpoint to trigger IndexNow submission',
    urlCount: getAllPageParams().length + SERVICES.length + 1,
  })
}
