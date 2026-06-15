import Link from 'next/link'
import {
  Check, Phone, ChevronRight, Star,
  Shield, FileText, BadgeCheck, Calendar, Tag, Clock, MapPin, Mail,
  Flame, Snowflake, AppWindow, WashingMachine, Sofa, Layers,
  Home, Building2, Key, RefreshCw, Sparkles,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { EstimateWidget } from '@/components/sections/EstimateWidget'
import { BookingForm } from '@/components/sections/BookingForm'
import { TESTIMONIALS, ADDON_CARDS, CONTACT } from '@/lib/data'

// ── Icon helpers ─────────────────────────────────────────────────────

function TrustBadge({ Icon, text }: { Icon: LucideIcon; text: string }) {
  return (
    <div className="flex items-center gap-3 text-white">
      <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
        <Icon size={16} className="text-white" />
      </div>
      <span className="text-sm font-medium text-white/90 leading-snug">{text}</span>
    </div>
  )
}

const ADDON_ICON_MAP: Record<string, LucideIcon> = {
  oven:        Flame,
  fridge:      Snowflake,
  windows:     AppWindow,
  laundry:     WashingMachine,
  upholstery:  Sofa,
  carpet:      Layers,
}

// ── SVG illustrations ────────────────────────────────────────────────

function HouseIllustration() {
  return (
    <svg width="130" height="110" viewBox="0 0 130 110" fill="none" aria-hidden="true">
      {/* Roof */}
      <path d="M65 6L6 52h16v52h86V52h16L65 6z" fill="white" fillOpacity="0.12" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
      {/* Door */}
      <rect x="51" y="72" width="28" height="32" rx="3" fill="white" fillOpacity="0.22"/>
      <circle cx="73" cy="88" r="2.5" fill="white" fillOpacity="0.5"/>
      {/* Windows */}
      <rect x="18" y="62" width="20" height="20" rx="2" fill="white" fillOpacity="0.35"/>
      <line x1="28" y1="62" x2="28" y2="82" stroke="white" strokeOpacity="0.3" strokeWidth="1"/>
      <line x1="18" y1="72" x2="38" y2="72" stroke="white" strokeOpacity="0.3" strokeWidth="1"/>
      <rect x="92" y="62" width="20" height="20" rx="2" fill="white" fillOpacity="0.35"/>
      <line x1="102" y1="62" x2="102" y2="82" stroke="white" strokeOpacity="0.3" strokeWidth="1"/>
      <line x1="92" y1="72" x2="112" y2="72" stroke="white" strokeOpacity="0.3" strokeWidth="1"/>
      {/* Chimney */}
      <rect x="82" y="14" width="10" height="22" rx="1" fill="white" fillOpacity="0.2"/>
    </svg>
  )
}

function SparkleIllustration() {
  return (
    <svg width="96" height="96" viewBox="0 0 96 96" fill="none" aria-hidden="true">
      <circle cx="48" cy="48" r="44" fill="white" fillOpacity="0.08"/>
      <path d="M48 12 L52 40 L80 44 L52 48 L48 76 L44 48 L16 44 L44 40 Z" fill="white" fillOpacity="0.4" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M20 20 L22 28 L30 30 L22 32 L20 40 L18 32 L10 30 L18 28 Z" fill="white" fillOpacity="0.25" stroke="white" strokeWidth="1" strokeLinejoin="round"/>
      <path d="M76 56 L77.5 62 L84 63.5 L77.5 65 L76 71 L74.5 65 L68 63.5 L74.5 62 Z" fill="white" fillOpacity="0.25" stroke="white" strokeWidth="1" strokeLinejoin="round"/>
    </svg>
  )
}

// ── Testimonial card ─────────────────────────────────────────────────

function TestimonialCard({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-card flex flex-col">
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
        ))}
      </div>
      <p className="text-gray-700 text-sm leading-relaxed mb-5 italic flex-1">
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

// ── Page ─────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative bg-[#f5f5f0] overflow-hidden min-h-[640px] flex items-center">
        <div
          className="absolute inset-y-0 right-0 w-5/12 bg-brand-50 hidden lg:block"
          style={{ clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0% 100%)' }}
          aria-hidden="true"
        />
        <div className="container-wide relative z-10 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
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
                <Link href="/quote" className="btn-primary text-base px-8 py-4">Get a Free Estimate</Link>
                <Link href="/services" className="btn-outline text-base px-8 py-4">Our Services</Link>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex" aria-label="Client avatars">
                  {['SK', 'TE', 'JO', '+'].map((init, i) => (
                    <div
                      key={init}
                      className="w-9 h-9 rounded-full bg-brand-500 border-2 border-white flex items-center justify-center text-white text-[11px] font-bold"
                      style={{ marginLeft: i === 0 ? 0 : '-8px' }}
                      aria-hidden="true"
                    >{init}</div>
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  <strong className="text-gray-900">500+ cleans completed</strong>
                  <br />Trusted by families &amp; businesses
                </p>
              </div>
            </div>
            <div><EstimateWidget /></div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ───────────────────────────────────────── */}
      <div className="bg-brand-500 py-5">
        <div className="container-wide grid grid-cols-2 lg:grid-cols-4 gap-4">
          <TrustBadge Icon={BadgeCheck} text="DBS-checked cleaners" />
          <TrustBadge Icon={Shield}     text="£5M public liability insurance" />
          <TrustBadge Icon={FileText}   text="No lock-in contracts" />
          <TrustBadge Icon={Star}       text="Satisfaction guaranteed or we return free" />
        </div>
      </div>

      {/* ── POPULAR SERVICES ──────────────────────────────────── */}
      <section className="py-12 md:py-20">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Large feature card — house illustration */}
            <div className="bg-brand-500 rounded-3xl p-8 flex flex-col justify-between min-h-[320px] relative overflow-hidden">
              <div className="absolute top-4 left-4">
                <span className="bg-white text-brand-600 text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
              {/* Decorative circle */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/5" aria-hidden="true" />
              <div className="self-end relative z-10">
                <HouseIllustration />
              </div>
              <div className="relative z-10">
                <h3 className="font-display font-bold text-2xl text-white mb-2">Residential Cleaning</h3>
                <p className="text-brand-100/80 text-sm mb-4">
                  From regular home cleans to deep cleans, end of tenancy, and Airbnb resets.
                </p>
                <Link href="/services" className="inline-flex items-center gap-1.5 text-white font-semibold text-sm border border-white/30 rounded-full px-4 py-2 hover:bg-white hover:text-brand-600 transition-all">
                  Learn More <ChevronRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right — stacked cards */}
            <div className="flex flex-col gap-5">
              <div className="bg-gray-50 rounded-3xl p-6 flex items-center justify-between min-h-[140px] hover:bg-brand-50 transition-colors group">
                <div>
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-1.5 group-hover:text-brand-600 transition-colors">Commercial Cleaning</h3>
                  <p className="text-gray-500 text-sm mb-3">Offices, retail, healthcare, schools, and managed properties.</p>
                  <Link href="/services" className="inline-flex items-center gap-1.5 text-brand-500 font-semibold text-sm hover:gap-3 transition-all">
                    Learn More <ChevronRight size={14} />
                  </Link>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-brand-50 group-hover:bg-white flex items-center justify-center ml-4 flex-shrink-0 transition-colors">
                  <Building2 size={32} className="text-brand-500" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                {[
                  { id: 'eot',       title: 'End of Tenancy', Icon: Key,       desc: 'Deposit-back guarantee' },
                  { id: 'recurring', title: 'Recurring Cleans', Icon: RefreshCw, desc: 'Weekly or fortnightly' },
                ].map(({ id, title, Icon, desc }) => (
                  <Link
                    key={id}
                    href="/services"
                    className="bg-gray-50 rounded-3xl p-5 flex flex-col justify-between min-h-[140px] hover:bg-brand-50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-brand-500 flex items-center justify-center transition-colors">
                      <Icon size={22} className="text-brand-500 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-gray-900 mb-0.5 group-hover:text-brand-600 transition-colors">{title}</h3>
                      <p className="text-xs text-gray-400">{desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADD-ONS ───────────────────────────────────────────── */}
      <section className="py-12 md:py-20 bg-[#f5f5f0]">
        <div className="container-wide">
          <span className="section-tag">Personalise Your Clean</span>
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-bold">Add-On Services</h2>
            <Link href="/quote" className="btn-outline text-sm px-5 py-2.5">Add to Quote →</Link>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {ADDON_CARDS.map((addon) => {
              const AddonIcon = ADDON_ICON_MAP[addon.id] ?? Sparkles
              return (
                <div
                  key={addon.id}
                  className="text-center py-6 px-3 bg-white rounded-2xl border border-gray-100 hover:border-brand-300 hover:bg-brand-50 transition-all duration-150 cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-50 group-hover:bg-brand-500 flex items-center justify-center mx-auto mb-3 transition-colors">
                    <AddonIcon size={22} className="text-brand-500 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-[13px] font-semibold text-gray-900 mb-1">{addon.title}</h4>
                  <p className="text-[11px] text-gray-400">{addon.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────── */}
      <section className="py-12 md:py-20">
        <div className="container-wide">
          <span className="section-tag">Testimonials</span>
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-bold mb-12">What Our Clients Think</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────── */}
      <section className="py-12 md:py-20 bg-[#f5f5f0]">
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
                {([
                  { Icon: BadgeCheck, title: 'DBS-Checked Team',      desc: 'Every cleaner vetted & background checked' },
                  { Icon: Calendar,   title: 'Last-Minute Bookings',  desc: 'Flexible slots around your schedule' },
                  { Icon: FileText,   title: 'No Contracts',          desc: 'Book once or weekly — no lock-in' },
                  { Icon: Tag,        title: 'Regular Discounts',     desc: 'Up to 20% off for recurring clients' },
                ] as { Icon: LucideIcon; title: string; desc: string }[]).map(({ Icon, title, desc }) => (
                  <div key={title} className="flex gap-3 items-start">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-brand-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900 mb-0.5">{title}</h4>
                      <p className="text-xs text-gray-400">{desc}</p>
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

            {/* Illustration panel — hidden on mobile */}
            <div className="hidden lg:flex bg-brand-500 rounded-3xl min-h-[460px] items-center justify-center relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/5" aria-hidden="true" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-black/8" aria-hidden="true" />
              <SparkleIllustration />
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
            ['20%', 'Off Weekly Visits',       '*Recurring clients'],
            ['15%', 'Off Fortnightly Visits',  '*Recurring clients'],
            ['10%', 'Off Monthly Visits',      '*Recurring clients'],
            ['85%', 'Clients Rebook Monthly',  ''],
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
      <section className="py-12 md:py-20">
        <div className="container-wide">
          <span className="section-tag">Offers &amp; Pricing</span>
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-bold">Cleaning Services Price Guide</h2>
            <Link href="/prices" className="btn-outline text-sm px-5 py-2.5">Full Price List →</Link>
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
                  ['Standard Clean',    'Dusting, vacuuming, kitchen &amp; bathroom',       '£60'],
                  ['Deep Clean',        'Standard + behind appliances, inside cupboards',   '£140'],
                  ['End of Tenancy',    'Full letting agent standard. Certificate provided.','£149'],
                  ['Office Clean',      'Desks, floors, kitchen, toilets. Recurring.',      '£95/visit'],
                  ['Post-Construction', 'Dust, paint marks, debris. All rooms.',            '£180'],
                ].map(([name, inc, price], i) => (
                  <tr key={name} className={`border-b border-gray-50 last:border-0 ${i % 2 === 1 ? 'bg-gray-50/50' : 'bg-white'}`}>
                    <td className="px-6 py-4"><span className="font-semibold text-sm text-gray-900">{name}</span></td>
                    <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell" dangerouslySetInnerHTML={{ __html: inc }} />
                    <td className="px-6 py-4 text-right font-bold text-brand-500">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-center">
            <Link href="/quote" className="btn-primary text-base px-8 py-4">Get a Personalised Quote →</Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────── */}
      <section className="py-12 md:py-20 bg-[#f5f5f0]">
        <div className="container-wide text-center">
          <span className="section-tag">Book in 60 Seconds</span>
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-bold mb-12">Quick &amp; Easy Booking Process</h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto relative">
            {/* Connecting line */}
            <div className="hidden sm:block absolute top-7 left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-px bg-brand-200" aria-hidden="true" />
            {[
              ['1', 'Tell Us About Your Space',  'Select your service type, property size, and preferred date. Takes under 60 seconds.'],
              ['2', 'Get Your Estimate',          'We provide an instant price estimate. If it doesn\'t feel right, negotiate directly with us.'],
              ['3', 'We Clean, You Relax',        'Our vetted FAM team arrives on time with everything needed and leaves your space spotless.'],
            ].map(([num, title, desc]) => (
              <div key={num} className="flex flex-col items-center relative z-10">
                <div className="w-14 h-14 rounded-full bg-brand-500 text-white font-display font-extrabold text-xl flex items-center justify-center mb-5 shadow-md">
                  {num}
                </div>
                <h3 className="font-display font-bold text-base text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <Link href="/quote" className="btn-primary text-base px-8 py-4 mt-10 inline-flex">Get Started →</Link>
        </div>
      </section>

      {/* ── BOOKING FORM ──────────────────────────────────────── */}
      <section className="py-12 md:py-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <BookingForm />
            <div className="pt-4">
              <span className="section-tag">Get In Touch</span>
              <h2 className="font-display font-bold text-3xl text-gray-900 mb-4">
                Let&apos;s Talk About Your Cleaning Needs
              </h2>
              <p className="text-gray-400 mb-8">
                Whether you need a one-off clean, a recurring contract, or just want to chat through your options — we&apos;re here for you.
              </p>
              <div className="grid gap-4">
                {([
                  { Icon: Phone,  title: 'Call or WhatsApp', value: CONTACT.phone, href: CONTACT.phoneTel },
                  { Icon: Mail,   title: 'Email Us',         value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                  { Icon: MapPin, title: 'Areas We Cover',   value: 'Manchester, Crewe & surrounding areas', href: undefined },
                  { Icon: Clock,  title: 'Response Time',    value: 'We reply within 2 hours, Mon–Sat', href: undefined },
                ] as { Icon: LucideIcon; title: string; value: string; href: string | undefined }[]).map((item) => (
                  <div key={item.title} className="flex items-center gap-4 p-4 bg-[#f5f5f0] rounded-2xl">
                    <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
                      <item.Icon size={18} className="text-brand-500" />
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

      {/* ── LOCATIONS ─────────────────────────────────────────── */}
      <section className="py-12 md:py-20 bg-[#f5f5f0]">
        <div className="container-wide">
          <span className="section-tag">Our Locations</span>
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-bold mb-10">Areas We Serve</h2>
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
            {[
              { city: 'Manchester', desc: 'Covering central Manchester, Salford, Trafford, Didsbury, Chorlton and surrounding areas.' },
              { city: 'Crewe',      desc: 'Covering Crewe, Nantwich, Sandbach, Middlewich and surrounding Cheshire areas.' },
            ].map((loc) => (
              <div key={loc.city} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:border-brand-300 hover:shadow-card-hover transition-all">
                <span className="inline-block bg-brand-500 text-white text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">Active</span>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{loc.city}</h3>
                <p className="text-sm text-gray-400 mb-4">{loc.desc}</p>
                <a href={CONTACT.phoneTel} className="text-sm font-semibold text-brand-500 hover:underline">{CONTACT.phone}</a>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Not in these areas?{' '}
            <Link href="/contact" className="text-brand-500 font-semibold hover:underline">Contact us — we&apos;re expanding.</Link>
          </p>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="bg-brand-500 py-12 md:py-20 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/5" aria-hidden="true" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-black/8" aria-hidden="true" />
        <div className="container-wide text-center relative z-10">
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-bold text-white mb-4">
            Ready for a Sparkling Clean Space?
          </h2>
          <p className="text-brand-100 text-lg mb-8 max-w-xl mx-auto">
            Get your personalised quote in under 2 minutes. No obligation, no pressure.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/quote" className="btn-white text-base px-8 py-4">Get a Free Quote →</Link>
            <a href={CONTACT.phoneTel} className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold text-base hover:bg-white/10 transition-colors">
              <Phone size={16} /> {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
