import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const TO = 'info@thefamgroup.uk'

export async function POST(req: NextRequest) {
  const { type, name, email, phone, service, size, frequency, condition, addons, total, breakdown, message } = await req.json()

  if (!type || !service || !name || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const isNegotiate = type === 'negotiate'
  const subject = isNegotiate
    ? `Quote Negotiation: £${total} ${service} — ${name}`
    : `New Quote Request: £${total} ${service} — ${name}`

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log('[quote form]', { type, name, email, phone, service, size, frequency, condition, addons, total, message })
    return NextResponse.json({ ok: true })
  }

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from: 'thefamgroup Website <onboarding@resend.dev>',
    to: TO,
    replyTo: email,
    subject,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
        <div style="background:${isNegotiate ? '#1a2e1e' : '#3a7d44'};padding:24px 32px;border-radius:12px 12px 0 0">
          <h1 style="color:white;margin:0;font-size:20px">${isNegotiate ? 'Quote Negotiation Request' : 'New Quote Request'}</h1>
        </div>
        <div style="background:#f9f9f9;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e5e5e5;border-top:none">

          <p style="font-weight:700;color:#333;margin:0 0 12px;font-size:15px">Customer Details</p>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
            <tr><td style="padding:8px 0;font-weight:600;color:#555;width:140px">Name</td><td style="padding:8px 0">${name}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;color:#555">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#3a7d44">${email}</a></td></tr>
            <tr><td style="padding:8px 0;font-weight:600;color:#555">Phone</td><td style="padding:8px 0"><a href="tel:${phone}" style="color:#3a7d44">${phone}</a></td></tr>
          </table>

          <div style="background:#3a7d44;border-radius:10px;padding:20px 24px;margin-bottom:24px;color:white">
            <p style="margin:0 0 4px;font-size:13px;opacity:.8">Estimated Price</p>
            <p style="margin:0;font-size:36px;font-weight:800">£${total}</p>
          </div>

          <p style="font-weight:700;color:#333;margin:0 0 12px;font-size:15px">Quote Details</p>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;font-weight:600;color:#555;width:140px">Service</td><td style="padding:8px 0">${service}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;color:#555">Property Size</td><td style="padding:8px 0">${size}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;color:#555">Frequency</td><td style="padding:8px 0">${frequency}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;color:#555">Condition</td><td style="padding:8px 0">${condition}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;color:#555">Add-ons</td><td style="padding:8px 0">${addons || 'None'}</td></tr>
            ${breakdown ? `<tr><td style="padding:8px 0;font-weight:600;color:#555">Breakdown</td><td style="padding:8px 0;font-size:13px;color:#666">${breakdown}</td></tr>` : ''}
          </table>

          ${isNegotiate && message ? `
          <hr style="border:none;border-top:1px solid #e5e5e5;margin:20px 0"/>
          <p style="font-weight:600;color:#555;margin:0 0 8px">Customer's Message</p>
          <p style="background:white;padding:16px;border-radius:8px;border:1px solid #e5e5e5;margin:0;line-height:1.6">${message.replace(/\n/g, '<br/>')}</p>
          ` : ''}

          <p style="margin:24px 0 0;font-size:12px;color:#999">Sent from thefamgroup.uk quote calculator</p>
        </div>
      </div>
    `,
  })

  if (error) {
    console.error('[quote] resend error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }

  // Also write to admin inbox
  const adminApi = process.env.ADMIN_API_URL || 'https://tfg-admin-api.onrender.com/api'
  const internalKey = process.env.INTERNAL_API_KEY
  if (internalKey) {
    fetch(`${adminApi}/inbox/public`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': internalKey },
      body: JSON.stringify({
        senderName: name,
        senderEmail: email,
        senderPhone: phone || undefined,
        source: 'web',
        subject,
        body: `Service: ${service}\nSize: ${size}\nFrequency: ${frequency}\nCondition: ${condition}\nAdd-ons: ${addons || 'None'}\nEstimate: £${total}\n${breakdown ? `\nBreakdown: ${breakdown}` : ''}${isNegotiate && message ? `\n\nCustomer message:\n${message}` : ''}`,
      }),
    }).catch(() => {})
  }

  return NextResponse.json({ ok: true })
}
