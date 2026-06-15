'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CONTACT } from '@/lib/data'

const NAV_LINKS = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/prices',   label: 'Prices' },
  { href: '/contact',  label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header>
      {/* Topbar — matches Qleen's green strip */}
      <div className="bg-brand-500 text-white py-2 hidden sm:block">
        <div className="container-wide flex justify-end items-center gap-6 text-sm">
          <a href={CONTACT.phoneTel} className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
            <Phone size={13} />
            {CONTACT.phone}
          </a>
          <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
            <Mail size={13} />
            {CONTACT.email}
          </a>
          <Link href="/careers" className="opacity-90 hover:opacity-100 transition-opacity">
            Join Our Team
          </Link>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-[0_1px_12px_rgba(0,0,0,0.06)]"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-wide flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/" className="font-display font-extrabold text-xl tracking-tight text-brand-500" aria-label="thefamgroup home">
            the<span className="text-gray-900">fam</span>group
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1 list-none" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'text-sm font-medium px-3.5 py-2 rounded-lg transition-all duration-150',
                    pathname === link.href
                      ? 'bg-brand-50 text-brand-500'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  )}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/quote" className="btn-primary ml-2 text-sm px-5 py-2.5">
                Get a Quote
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-500"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            id="mobile-menu"
            className="lg:hidden border-t border-gray-100 bg-white px-4 py-3 shadow-lg"
          >
            <ul className="flex flex-col gap-1 list-none mb-3" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block text-sm font-medium px-3 py-2.5 rounded-lg transition-all',
                      pathname === link.href
                        ? 'bg-brand-50 text-brand-500'
                        : 'text-gray-600 hover:bg-gray-50'
                    )}
                    onClick={() => setOpen(false)}
                    aria-current={pathname === link.href ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 pt-3 border-t border-gray-100">
              <Link href="/quote" className="btn-primary justify-center text-sm" onClick={() => setOpen(false)}>
                Get a Quote
              </Link>
              <a href={CONTACT.phoneTel} className="btn-outline justify-center text-sm">
                {CONTACT.phone}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
