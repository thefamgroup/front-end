import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'thefamgroup — Family. Community. Care.',
    template: '%s | thefamgroup',
  },
  description: 'Professional residential and commercial cleaning services in Manchester and Crewe. DBS-checked, fully insured, satisfaction guaranteed.',
  keywords: ['cleaning services Manchester', 'cleaning services Crewe', 'end of tenancy clean', 'commercial cleaning', 'deep clean'],
  openGraph: {
    title: 'thefamgroup — Professional Cleaning Services',
    description: 'Trusted, vetted cleaning services for homes and businesses in Manchester and Crewe.',
    url: 'https://www.thefamgroup.co.uk',
    siteName: 'thefamgroup',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className="antialiased">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
