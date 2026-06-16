import type { Metadata } from 'next'
import Link from 'next/link'
import { Star, Phone } from 'lucide-react'
import { TESTIMONIALS, CONTACT } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Meet thefamgroup — Manchester and Crewe\'s trusted family cleaning team. DBS-checked, fully insured, with 500+ cleans completed. Family values, professional results.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f5f5f0] py-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-tag">About Us</span>
              <h1 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold text-gray-900 mb-5">
                We Make More Time For Your Favourite Things
              </h1>
              <p className="text-gray-500 text-lg mb-4 leading-relaxed">
                At thefamgroup, we believe a clean space is more than just appearance — it's about comfort, clarity, and care. We're a family-built team that treats every client and every home as our own.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Our team is made up of trained, vetted professionals who take pride in what they do. We pay attention to the small details others overlook, using safe products and proven techniques to ensure your space isn't just clean — it's FAM clean.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/quote" className="btn-primary">Book Now</Link>
                <a href={CONTACT.phoneTel} className="btn-outline"><Phone size={15} /> {CONTACT.phone}</a>
              </div>
            </div>
            <div className="bg-brand-50 rounded-3xl min-h-[380px] flex items-center justify-center text-[80px]">
              🤝
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12 max-w-lg">
            {[
              ['500+', 'Cleans Completed'],
              ['98%', 'Satisfaction Rate'],
              ['85%', 'Clients Rebook'],
            ].map(([num, label]) => (
              <div key={label} className="bg-white rounded-2xl p-5 text-center border border-gray-100 shadow-card">
                <div className="font-display text-3xl font-extrabold text-brand-500">{num}</div>
                <div className="text-xs text-gray-400 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container-wide">
          <span className="section-tag">Our Values</span>
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-10">What Makes Us Different</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '🛡', title: 'Safety First', desc: 'Fully insured with £5M public liability. DBS-checked team. Your home and office are always safe with us.' },
              { icon: '🤝', title: 'Trusted Cleaners', desc: 'Every FAM team member is vetted, reference-checked, and trained before they work on any client property.' },
              { icon: '⭐', title: 'Satisfaction Guarantee', desc: 'Not happy? Contact us within 24 hours and we\'ll return and put it right — completely free of charge.' },
              { icon: '💷', title: 'Fair Prices', desc: 'We tailor every service to your needs and budget. You\'ll never pay for more than you need. Transparent always.' },
              { icon: '🌿', title: 'Eco-Friendly Options', desc: 'We offer 100% biodegradable, non-toxic product upgrades. Safe for your family, pets, and the environment.' },
              { icon: '💬', title: 'Responsive Care', desc: 'Reach us by WhatsApp, phone, or email. We respond within 2 hours during business hours, Mon–Saturday.' },
            ].map((v) => (
              <div key={v.title} className="bg-[#f5f5f0] rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-display font-bold text-base text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#f5f5f0]">
        <div className="container-wide">
          <span className="section-tag">Reviews</span>
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-10">What Our Clients Think</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 italic leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-500 flex items-center justify-center text-white text-xs font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-500 py-16 text-center">
        <div className="container-wide">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Enjoy a Sparkling Clean Space Today</h2>
          <p className="text-brand-100 mb-6">Contact us for a detailed plan tailored to your home or business.</p>
          <Link href="/quote" className="btn-white text-base px-8 py-4">Book Now →</Link>
        </div>
      </section>
    </>
  )
}
