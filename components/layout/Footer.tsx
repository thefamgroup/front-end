'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Globe } from 'lucide-react'
import { CONTACT } from '@/lib/data'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="container-wide py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-display font-extrabold text-2xl text-brand-400 tracking-tight block mb-4">
              the<span className="text-white">fam</span>group
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              At thefamgroup, we treat every space like it's our own. Whether it's your home, office, or move-in clean, we tailor our services to fit your lifestyle and expectations.
            </p>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3">
              Family. Community. Care.
            </p>
            <div className="flex gap-2">
              {[
                { label: 'Facebook',  href: '#', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
                { label: 'Instagram', href: '#', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M6.5 2h11A4.5 4.5 0 0 1 22 6.5v11a4.5 4.5 0 0 1-4.5 4.5h-11A4.5 4.5 0 0 1 2 17.5v-11A4.5 4.5 0 0 1 6.5 2z' },
                { label: 'X / Twitter', href: '#', path: 'M4 4l16 16M4 20L20 4' },
                { label: 'LinkedIn', href: '#', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
              ].map(({ label, href, path }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-brand-500 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                Stay in the loop
              </p>
              <form className="flex gap-0" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3.5 py-2.5 bg-gray-800 border border-gray-700 rounded-l-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-400"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-r-lg transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">Services</h3>
            <ul className="space-y-2.5">
              {[
                ['Regular Home Clean', '/services'],
                ['End of Tenancy', '/services'],
                ['Office Cleaning', '/services'],
                ['Deep Clean', '/services'],
                ['Post-Construction', '/services'],
                ['Airbnb Reset', '/services'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">Info</h3>
            <ul className="space-y-2.5">
              {[
                ['About Us',      '/about'],
                ['Pricing',       '/prices'],
                ['Blog',          '/blog'],
                ['Careers',       '/careers'],
                ['Free Estimate', '/quote'],
                ['Contact',       '/contact'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href={CONTACT.phoneTel} className="flex items-start gap-2.5 text-sm text-gray-400 hover:text-white transition-colors">
                  <Phone size={15} className="mt-0.5 shrink-0 text-brand-400" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-2.5 text-sm text-gray-400 hover:text-white transition-colors break-all">
                  <Mail size={15} className="mt-0.5 shrink-0 text-brand-400" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin size={15} className="mt-0.5 shrink-0 text-brand-400" />
                Manchester & Crewe, UK
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <Globe size={15} className="mt-0.5 shrink-0 text-brand-400" />
                {CONTACT.website}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Partner Companies */}
      <div className="border-t border-gray-800">
        <div className="container-wide py-8">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5 text-center">
            Family of Companies
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {[
              {
                name: 'Harsimiyou Solution Limited',
                href: 'https://harsimiyuogroup.uk',
                initials: 'HS',
                accent: 'from-emerald-700 to-emerald-900',
              },
              {
                name: 'Chrisbukem Limited',
                href: 'https://chrisbukemlimited.com',
                initials: 'CB',
                accent: 'from-slate-600 to-slate-800',
              },
            ].map(({ name, href, initials, accent }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-brand-500/40 transition-all duration-200"
              >
                <span className={`w-9 h-9 rounded-lg bg-gradient-to-br ${accent} flex items-center justify-center text-white text-xs font-extrabold tracking-wide shrink-0`}>
                  {initials}
                </span>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {name}
                </span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 group-hover:text-brand-400 transition-colors ml-1" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-wide py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © 2026 thefamgroup. All rights reserved. Family. Community. Care.
          </p>
          <div className="flex gap-5">
            {[
              { label: 'Privacy Policy',   href: '/privacy-policy' },
              { label: 'Terms of Service', href: '/terms-of-service' },
              { label: 'Cookie Settings',  href: '/cookies' },
            ].map(({ label, href }) => (
              <Link key={label} href={href} className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
