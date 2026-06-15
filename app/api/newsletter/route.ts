import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const TO = 'thefamgrouphq@gmail.com'

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log('[newsletter signup]', { email })
    return NextResponse.json({ ok: true })
  }

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from: 'thefamgroup Website <onboarding@resend.dev>',
    to: TO,
    subject: `New Newsletter Signup: ${email}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
        <div style="background:#3a7d44;padding:24px 32px;border-radius:12px 12px 0 0">
          <h1 style="color:white;margin:0;font-size:20px">New Newsletter Signup</h1>
        </div>
        <div style="background:#f9f9f9;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e5e5e5;border-top:none">
          <p style="margin:0 0 8px;font-weight:600;color:#555">Email address:</p>
          <p style="background:white;padding:12px 16px;border-radius:8px;border:1px solid #e5e5e5;margin:0">
            <a href="mailto:${email}" style="color:#3a7d44">${email}</a>
          </p>
          <p style="margin:24px 0 0;font-size:12px;color:#999">Signed up via thefamgroup.co.uk footer newsletter form</p>
        </div>
      </div>
    `,
  })

  if (error) {
    console.error('[newsletter] resend error:', error)
    return NextResponse.json({ error: 'Failed to process signup' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
