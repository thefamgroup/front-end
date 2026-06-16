import type { Metadata } from 'next'
import Link from 'next/link'
import { ContactForm } from '@/components/sections/ContactForm'
import { FaqAccordion } from '@/components/sections/FaqAccordion'
import { CONTACT } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with thefamgroup. Call, WhatsApp, or email — we respond within 2 hours.',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#f5f5f0] py-14">
        <div className="container-wide">
          <span className="section-tag">Get In Touch</span>
          <h1 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold text-gray-900 mb-3">
            We'd Love to Hear From You
          </h1>
          <p className="text-gray-500 text-lg max-w-xl">
            Whether you need a quote, have a question, or want to negotiate on a price — we're here. We respond within 2 hours.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <ContactForm />

            <div>
              <h2 className="font-display font-bold text-2xl text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-4 mb-8">
                {[
                  { icon: '📞', title: 'Phone', value: CONTACT.phone, href: CONTACT.phoneTel, sub: 'Mon – Sat, 8am – 7pm' },
                  { icon: '💬', title: 'WhatsApp', value: 'Message us on WhatsApp', href: CONTACT.whatsapp, sub: 'Fastest way to reach us' },
                  { icon: '✉️', title: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}`, sub: 'We respond within 2 hours' },
                  { icon: '📍', title: 'Areas We Cover', value: 'Manchester, Crewe & surrounding areas', href: undefined, sub: 'Expanding soon' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-4 bg-[#f5f5f0] rounded-2xl">
                    <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-xl flex-shrink-0 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">{item.title}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-semibold text-brand-500 hover:underline block">{item.value}</a>
                      ) : (
                        <p className="text-sm font-semibold text-gray-700">{item.value}</p>
                      )}
                      {item.sub && <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-brand-500 rounded-2xl p-6 text-center">
                <p className="text-sm text-brand-100 mb-2">Prefer to speak to someone right now?</p>
                <a href={CONTACT.phoneTel} className="font-display text-3xl font-extrabold text-white hover:text-brand-100 transition-colors">
                  {CONTACT.phone}
                </a>
                <p className="text-xs text-brand-200 mt-2">WhatsApp or call — we're here to help</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#f5f5f0]">
        <div className="container-wide max-w-3xl mx-auto">
          <span className="section-tag text-center block">FAQ</span>
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-10 text-center">Common Questions</h2>
          <FaqAccordion />
        </div>
      </section>
    </>
  )
}
