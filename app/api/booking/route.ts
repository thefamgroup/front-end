import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const TO = 'thefamgrouphq@gmail.com'

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, phone, serviceType, bedrooms, message } = await req.json()

  if (!firstName || !email || !serviceType) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log('[booking form]', { firstName, lastName, email, phone, serviceType, bedrooms, message })
    return NextResponse.json({ ok: true })
  }

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from: 'thefamgroup Website <onboarding@resend.dev>',
    to: TO,
    replyTo: email,
    subject: `New Booking Enquiry: ${serviceType} — ${firstName} ${lastName}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
        <div style="background:#3a7d44;padding:24px 32px;border-radius:12px 12px 0 0">
          <h1 style="color:white;margin:0;font-size:20px">New Booking Enquiry</h1>
        </div>
        <div style="background:#f9f9f9;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e5e5e5;border-top:none">
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;font-weight:600;color:#555;width:140px">Name</td><td style="padding:8px 0">${firstName} ${lastName}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;color:#555">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#3a7d44">${email}</a></td></tr>
            <tr><td style="padding:8px 0;font-weight:600;color:#555">Phone</td><td style="padding:8px 0"><a href="tel:${phone}" style="color:#3a7d44">${phone}</a></td></tr>
            <tr><td style="padding:8px 0;font-weight:600;color:#555">Service</td><td style="padding:8px 0">${serviceType}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;color:#555">Bedrooms</td><td style="padding:8px 0">${bedrooms}</td></tr>
            ${message ? `<tr><td style="padding:8px 0;font-weight:600;color:#555">Notes</td><td style="padding:8px 0">${message}</td></tr>` : ''}
          </table>
          <p style="margin:24px 0 0;font-size:12px;color:#999">Sent from thefamgroup.uk booking form</p>
        </div>
      </div>
    `,
  })

  if (error) {
    console.error('[booking] resend error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
