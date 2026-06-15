import type { Metadata } from 'next'
import Link from 'next/link'
import { CONTACT } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Privacy Policy — thefamgroup',
  description: 'How thefamgroup collects, uses, and protects your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs font-bold tracking-[0.15em] uppercase text-brand-500 mb-3 block">Legal</span>
          <h1 className="font-display text-4xl font-extrabold text-gray-900 mb-3">Privacy Policy</h1>
          <p className="text-sm text-gray-400">Last updated: June 2026</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">1. Who We Are</h2>
            <p>thefamgroup (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) provides professional cleaning services across Manchester and Crewe. Our website is <strong>www.thefamgroup.co.uk</strong>. For any privacy-related queries, contact us at <a href={`mailto:${CONTACT.email}`} className="text-brand-500 hover:underline">{CONTACT.email}</a>.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
            <p>We collect information you provide directly when:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Submitting a quote or booking enquiry (name, email, phone, address, service details)</li>
              <li>Contacting us via email, phone, or our contact form</li>
              <li>Signing up to our newsletter</li>
            </ul>
            <p className="mt-3">We also collect basic analytics data (pages visited, browser type) to improve our website. We do not sell or share your data with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To respond to your enquiries and provide our cleaning services</li>
              <li>To send booking confirmations and service updates</li>
              <li>To send marketing emails (only with your consent — unsubscribe any time)</li>
              <li>To improve our website and customer experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">4. Data Retention</h2>
            <p>We retain your personal data for as long as necessary to provide our services or as required by law. Customer records are kept for up to 7 years for accounting and legal compliance. You may request deletion of your data at any time.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">5. Your Rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict how we process your data</li>
              <li>Data portability</li>
              <li>Lodge a complaint with the ICO (ico.org.uk)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">6. Contact Us</h2>
            <p>To exercise any of your rights or ask about this policy, please contact:</p>
            <div className="mt-3 p-4 bg-gray-50 rounded-xl text-sm">
              <strong className="text-gray-900">thefamgroup</strong><br />
              Email: <a href={`mailto:${CONTACT.email}`} className="text-brand-500 hover:underline">{CONTACT.email}</a><br />
              Phone: <a href={CONTACT.phoneTel} className="text-brand-500 hover:underline">{CONTACT.phone}</a>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex gap-6 text-sm">
          <Link href="/terms-of-service" className="text-brand-500 hover:underline">Terms of Service</Link>
          <Link href="/cookies" className="text-brand-500 hover:underline">Cookie Policy</Link>
          <Link href="/" className="text-gray-400 hover:text-gray-600">← Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
