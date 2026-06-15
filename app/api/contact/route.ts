import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const TO = 'thefamgrouphq@gmail.com'

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, phone, enquiry, message } = await req.json()

  if (!firstName || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log('[contact form]', { firstName, lastName, email, phone, enquiry, message })
    return NextResponse.json({ ok: true })
  }

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from: 'thefamgroup Website <onboarding@resend.dev>',
    to: TO,
    replyTo: email,
    subject: `New Enquiry: ${enquiry} — ${firstName} ${lastName}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
        <div style="background:#3a7d44;padding:24px 32px;border-radius:12px 12px 0 0">
          <h1 style="color:white;margin:0;font-size:20px">New Contact Enquiry</h1>
        </div>
        <div style="background:#f9f9f9;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e5e5e5;border-top:none">
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;font-weight:600;color:#555;width:140px">Name</td><td style="padding:8px 0">${firstName} ${lastName}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;color:#555">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#3a7d44">${email}</a></td></tr>
            <tr><td style="padding:8px 0;font-weight:600;color:#555">Phone</td><td style="padding:8px 0"><a href="tel:${phone}" style="color:#3a7d44">${phone}</a></td></tr>
            <tr><td style="padding:8px 0;font-weight:600;color:#555">Enquiry Type</td><td style="padding:8px 0">${enquiry}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e5e5e5;margin:20px 0"/>
          <p style="font-weight:600;color:#555;margin:0 0 8px">Message</p>
          <p style="background:white;padding:16px;border-radius:8px;border:1px solid #e5e5e5;margin:0;line-height:1.6">${message.replace(/\n/g, '<br/>')}</p>
          <p style="margin:24px 0 0;font-size:12px;color:#999">Sent from thefamgroup.co.uk contact form</p>
        </div>
      </div>
    `,
  })

  if (error) {
    console.error('[contact] resend error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
