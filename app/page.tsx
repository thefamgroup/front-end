import Link from 'next/link'
import { Check, Phone, ChevronRight, Star } from 'lucide-react'
import { EstimateWidget } from '@/components/sections/EstimateWidget'
import { BookingForm } from '@/components/sections/BookingForm'
import { TESTIMONIALS, ADDON_CARDS, CONTACT } from '@/lib/data'

function TrustBadge({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-3 text-white">
      <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-base flex-shrink-0">
        {icon}
      </div>
      <span className="text-sm font-medium text-white/90 leading-snug">{text}</span>
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-card">
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
        ))}
      </div>
      <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
          {testimonial.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
          <p className="text-xs text-gray-400">{testimonial.location}</p>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-[#f5f5f0] overflow-hidden min-h-[640px] flex items-center">
        {/* Right panel green tint — Qleen style */}
        <div
          className="absolute inset-y-0 right-0 w-5/12 bg-brand-50 hidden lg:block"
          style={{ clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0% 100%)' }}
          aria-hidden="true"
        />

        <div className="container-wide relative z-10 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <div>
              {/* Trust pill */}
              <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full pl-1.5 pr-4 py-1.5 mb-6">
                <span className="w-5 h-5 rounded-full bg-brand-500 flex-shrink-0" aria-hidden="true" />
                <span className="text-xs font-semibold text-gray-500">Trusted across Manchester &amp; Crewe</span>
              </div>

              <h1 className="font-display text-[clamp(38px,5vw,64px)] font-extrabold leading-[1.08] tracking-tight text-gray-900 mb-5">
                Trusted Cleaners,{' '}
                <span className="text-brand-500">Sparkling Results</span>
              </h1>
              <p className="text-lg text-gray-500 mb-8 max-w-[480px] leading-relaxed">
                Professional residential and commercial cleaning services for busy people. Flexible, reliable, and carried out by a team you can trust.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/quote" className="btn-primary text-base px-8 py-4">
                  Get a Free Estimate
                </Link>
                <Link href="/services" className="btn-outline text-base px-8 py-4">
                  Our Services
                </Link>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-4">
                <div className="flex" aria-label="Client avatars">
                  {['SK', 'TE', 'JO', '+'].map((init, i) => (
                    <div
                      key={init}
                      className="w-9 h-9 rounded-full bg-brand-500 border-2 border-white flex items-center justify-center text-white text-[11px] font-bold"
                      style={{ marginLeft: i === 0 ? 0 : '-8px' }}
                      aria-hidden="true"
                    >
                      {init}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  <strong className="text-gray-900">500+ cleans completed</strong>
                  <br />Trusted by families &amp; businesses
                </p>
              </div>
            </div>

            {/* Right — estimate widget */}
            <div>
              <EstimateWidget />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ──────────────────────────────────────── */}
      <div className="bg-brand-500 py-5">
        <div className="container-wide grid grid-cols-2 lg:grid-cols-4 gap-4">
          <TrustBadge icon="✓" text="DBS-checked cleaners" />
          <TrustBadge icon="🛡" text="£5M public liability insurance" />
          <TrustBadge icon="📋" text="No lock-in contracts" />
          <TrustBadge icon="⭐" text="Satisfaction guaranteed or we return free" />
        </div>
      </div>

      {/* ── POPULAR SERVICES ─────────────────────────────────── */}
      <section className="py-20">
        <div className="container-wide">
          <span className="section-tag">What We Offer</span>
          <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
            <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-bold">
              Popular Services<br />By thefamgroup
            </h2>
            <div className="flex flex-col items-start gap-2 text-sm text-gray-500">
              <div className="flex items-center gap-2"><Check size={14} className="text-brand-500" /> DBS-checked cleaners</div>
              <div className="flex items-center gap-2"><Check size={14} className="text-brand-500" /> £5M insurance coverage</div>
              <div className="flex items-center gap-2"><Check size={14} className="text-brand-500" /> No contracts or commitments</div>
            </div>
          </div>

          {/* Qleen-style asymmetric grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Left — large feature card */}
            <div className="bg-brand-50 rounded-3xl p-8 flex flex-col justify-between min-h-[320px] relative overflow-hidden">
              <div className="absolute top-4 left-4">
                <span className="bg-brand-500 text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
              <div className="text-8xl self-end">🏠</div>
              <div>
                <h3 className="font-display font-bold text-2xl text-gray-900 mb-2">Residential Cleaning</h3>
                <p className="text-gray-500 text-sm mb-4">
                  From regular home cleans to deep cleans, end of tenancy, and Airbnb resets.
                </p>
                <Link href="/services" className="inline-flex items-center gap-1.5 text-brand-500 font-semibold text-sm hover:gap-3 transition-all">
                  Learn More <ChevronRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right — stacked cards */}
            <div className="flex flex-col gap-5">
              <div className="bg-gray-50 rounded-3xl p-6 flex items-center justify-between min-h-[140px]">
                <div>
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-1.5">Commercial Cleaning</h3>
                  <p className="text-gray-500 text-sm mb-3">Offices, retail, healthcare, schools, and managed properties.</p>
                  <Link href="/services" className="inline-flex items-center gap-1.5 text-brand-500 font-semibold text-sm hover:gap-3 transition-all">
                    Learn More <ChevronRight size={14} />
                  </Link>
                </div>
                <div className="text-5xl ml-4">🏢</div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                {[
                  { title: 'End of Tenancy', emoji: '🔑', href: '/services' },
                  { title: 'Recurring Cleans', emoji: '🔄', href: '/services' },
                ].map((card) => (
                  <Link
                    key={card.title}
                    href={card.href}
                    className="bg-gray-50 rounded-3xl p-5 flex flex-col justify-between min-h-[140px] hover:bg-brand-50 transition-colors group"
                  >
                    <div className="text-4xl">{card.emoji}</div>
                    <div>
                      <h3 className="font-display font-bold text-base text-gray-900 mb-1 group-hover:text-brand-500 transition-colors">
                        {card.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADD-ONS ───────────────────────────────────────────── */}
      <section className="py-20 bg-[#f5f5f0]">
        <div className="container-wide">
          <span className="section-tag">Personalise Your Clean</span>
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-bold">
              Add-On Services
            </h2>
            <Link href="/quote" className="btn-outline text-sm px-5 py-2.5">
              Add to Quote →
            </Link>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {ADDON_CARDS.map((addon) => (
              <div
                key={addon.id}
                className="text-center py-6 px-3 bg-white rounded-2xl border border-gray-100 hover:border-brand-300 hover:bg-brand-50 transition-all duration-150 cursor-pointer"
              >
                <div className="text-3xl mb-2.5">{addon.emoji}</div>
                <h4 className="text-[13px] font-semibold text-gray-900 mb-1">{addon.title}</h4>
                <p className="text-[11px] text-gray-400">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-20">
        <div className="container-wide">
          <span className="section-tag">Testimonials</span>
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-bold mb-12">
            What Our Clients Think
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────── */}
      <section className="py-20 bg-[#f5f5f0]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-tag">Why Choose Us</span>
              <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-bold mb-4">
                Cleaning You Can Count On, Without the Fuss.
              </h2>
              <p className="text-gray-500 mb-6">
                Providing a reliable and trustworthy service built on family values. Every clean is personal to us.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: '✓', title: 'DBS-Checked Team', desc: 'Every cleaner vetted & background checked' },
                  { icon: '📅', title: 'Last-Minute Bookings', desc: 'Flexible slots around your schedule' },
                  { icon: '📋', title: 'No Contracts', desc: 'Book once or weekly — no lock-in' },
                  { icon: '💷', title: 'Regular Discounts', desc: 'Up to 20% off for recurring clients' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 items-start">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-lg flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900 mb-0.5">{item.title}</h4>
                      <p className="text-xs text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/quote" className="btn-primary">Book Online</Link>
                <a href={CONTACT.phoneTel} className="btn-outline">
                  <Phone size={15} /> {CONTACT.phone}
                </a>
              </div>
            </div>
            {/* Image placeholder */}
            <div className="bg-brand-50 rounded-3xl min-h-[460px] flex items-center justify-center relative">
              <span className="text-[100px]" aria-hidden="true">🧹</span>
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-5 py-4 shadow-card">
                <div className="font-display text-3xl font-extrabold text-brand-500">500+</div>
                <div className="text-xs text-gray-400 mt-0.5">Cleans completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DISCOUNT STRIP ────────────────────────────────────── */}
      <div className="bg-gray-900 py-8">
        <div className="container-wide flex flex-wrap justify-center gap-12">
          {[
            ['20%', 'Off Weekly Visits', '*Recurring clients'],
            ['15%', 'Off Fortnightly Visits', '*Recurring clients'],
            ['10%', 'Off Monthly Visits', '*Recurring clients'],
            ['85%', 'Clients Rebook Monthly', ''],
          ].map(([pct, label, note]) => (
            <div key={label} className="text-center">
              <div className="font-display text-4xl font-extrabold text-brand-400">{pct}</div>
              <div className="text-sm text-white/80 mt-1">{label}</div>
              {note && <div className="text-xs text-white/40 mt-0.5">{note}</div>}
            </div>
          ))}
        </div>
      </div>

      {/* ── PRICING PREVIEW ───────────────────────────────────── */}
      <section className="py-20">
        <div className="container-wide">
          <span className="section-tag">Offers &amp; Pricing</span>
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-bold">
              Cleaning Services Price Guide
            </h2>
            <Link href="/prices" className="btn-outline text-sm px-5 py-2.5">
              Full Price List →
            </Link>
          </div>
          <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-card">
            <table className="w-full" role="table">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left text-xs font-bold uppercase tracking-widest text-gray-400 px-6 py-4">Service</th>
                  <th className="text-left text-xs font-bold uppercase tracking-widest text-gray-400 px-6 py-4 hidden sm:table-cell">What&apos;s Included</th>
                  <th className="text-right text-xs font-bold uppercase tracking-widest text-gray-400 px-6 py-4">From</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Standard Clean',     'Dusting, vacuuming, kitchen &amp; bathroom',        '£60'],
                  ['Deep Clean',         'Standard + behind appliances, inside cupboards',     '£140'],
                  ['End of Tenancy',     'Full letting agent standard. Certificate provided.',  '£149'],
                  ['Office Clean',       'Desks, floors, kitchen, toilets. Recurring.',        '£95/visit'],
                  ['Post-Construction',  'Dust, paint marks, debris. All rooms.',              '£180'],
                ].map(([name, inc, price], i) => (
                  <tr key={name} className={`border-b border-gray-50 last:border-0 ${i % 2 === 1 ? 'bg-gray-50/50' : 'bg-white'}`}>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-sm text-gray-900">{name}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell" dangerouslySetInnerHTML={{ __html: inc }} />
                    <td className="px-6 py-4 text-right font-bold text-brand-500">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-center">
            <Link href="/quote" className="btn-primary text-base px-8 py-4">
              Get a Personalised Quote →
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────── */}
      <section className="py-20 bg-[#f5f5f0]">
        <div className="container-wide text-center">
          <span className="section-tag">Book in 60 Seconds</span>
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-bold mb-12">
            Quick &amp; Easy Booking Process
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              ['1', 'Tell Us About Your Space',  'Select your service type, property size, and preferred date. Takes under 60 seconds.'],
              ['2', 'Get Your Estimate',          'We provide an instant price estimate. If it doesn\'t feel right, negotiate directly with us.'],
              ['3', 'We Clean, You Relax',        'Our vetted FAM team arrives on time with everything needed and leaves your space spotless.'],
            ].map(([num, title, desc]) => (
              <div key={num} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-brand-500 text-white font-display font-extrabold text-xl flex items-center justify-center mb-5">
                  {num}
                </div>
                <h3 className="font-display font-bold text-base text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <Link href="/quote" className="btn-primary text-base px-8 py-4 mt-10 inline-flex">
            Get Started →
          </Link>
        </div>
      </section>

      {/* ── BOOKING FORM ──────────────────────────────────────── */}
      <section className="py-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <BookingForm />

            {/* Contact info */}
            <div className="pt-4">
              <span className="section-tag">Get In Touch</span>
              <h2 className="font-display font-bold text-3xl text-gray-900 mb-4">
                Let&apos;s Talk About Your Cleaning Needs
              </h2>
              <p className="text-gray-400 mb-8">
                Whether you need a one-off clean, a recurring contract, or just want to chat through your options — we&apos;re here for you.
              </p>
              <div className="grid gap-4">
                {[
                  { icon: '📞', title: 'Call or WhatsApp', value: CONTACT.phone, href: CONTACT.phoneTel },
                  { icon: '✉️', title: 'Email Us',         value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                  { icon: '📍', title: 'Areas We Cover',  value: 'Manchester, Crewe & surrounding areas', href: undefined },
                  { icon: '⏰', title: 'Response Time',   value: 'We reply within 2 hours, Mon–Sat', href: undefined },
                ].map((item) => (
                  <div key={item.title} className="flex items-center gap-4 p-4 bg-[#f5f5f0] rounded-2xl">
                    <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center text-xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">{item.title}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-semibold text-brand-500 hover:underline">{item.value}</a>
                      ) : (
                        <p className="text-sm text-gray-600">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATIONS ────────────────────────────────────────── */}
      <section className="py-20 bg-[#f5f5f0]">
        <div className="container-wide">
          <span className="section-tag">Our Locations</span>
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-bold mb-10">
            Areas We Serve
          </h2>
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
            {[
              { city: 'Manchester', desc: 'Covering central Manchester, Salford, Trafford, Didsbury, Chorlton and surrounding areas.' },
              { city: 'Crewe',      desc: 'Covering Crewe, Nantwich, Sandbach, Middlewich and surrounding Cheshire areas.' },
            ].map((loc) => (
              <div key={loc.city} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:border-brand-300 hover:shadow-card-hover transition-all">
                <span className="inline-block bg-brand-500 text-white text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
                  Active
                </span>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{loc.city}</h3>
                <p className="text-sm text-gray-400 mb-4">{loc.desc}</p>
                <a href={CONTACT.phoneTel} className="text-sm font-semibold text-brand-500 hover:underline">{CONTACT.phone}</a>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Not in these areas?{' '}
            <Link href="/contact" className="text-brand-500 font-semibold hover:underline">
              Contact us — we&apos;re expanding.
            </Link>
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-brand-500 py-20">
        <div className="container-wide text-center">
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-bold text-white mb-4">
            Ready for a Sparkling Clean Space?
          </h2>
          <p className="text-brand-100 text-lg mb-8 max-w-xl mx-auto">
            Get your personalised quote in under 2 minutes. No obligation, no pressure.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/quote" className="btn-white text-base px-8 py-4">
              Get a Free Quote →
            </Link>
            <a href={CONTACT.phoneTel} className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold text-base hover:bg-white/10 transition-colors">
              <Phone size={16} /> {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
