'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Globe, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
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
                { icon: Facebook, label: 'Facebook',  href: '#' },
                { icon: Instagram, label: 'Instagram', href: '#' },
                { icon: Twitter,   label: 'Twitter',   href: '#' },
                { icon: Linkedin,  label: 'LinkedIn',  href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-brand-500 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                >
                  <Icon size={16} />
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

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-wide py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © 2026 thefamgroup. All rights reserved. Family. Community. Care.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((label) => (
              <Link key={label} href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
