import type { Metadata } from 'next'
import Link from 'next/link'
import { CONTACT } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Terms of Service — thefamgroup',
  description: 'Terms and conditions for using thefamgroup cleaning services.',
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs font-bold tracking-[0.15em] uppercase text-brand-500 mb-3 block">Legal</span>
          <h1 className="font-display text-4xl font-extrabold text-gray-900 mb-3">Terms of Service</h1>
          <p className="text-sm text-gray-400">Last updated: June 2026</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">1. Agreement</h2>
            <p>By booking or using our services, you agree to these Terms of Service. thefamgroup provides residential and commercial cleaning services across Manchester and Crewe. Please read these terms carefully before placing a booking.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">2. Bookings & Cancellations</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Bookings are confirmed by email or phone upon receipt of a deposit or agreed arrangement.</li>
              <li>Cancellations made with less than 24 hours&apos; notice may incur a cancellation fee of up to 50% of the agreed service cost.</li>
              <li>We reserve the right to reschedule in the event of staff illness, extreme weather, or other unforeseen circumstances.</li>
              <li>No-access at the time of appointment will be charged at 100% of the service cost.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">3. Service Standards</h2>
            <p>We commit to delivering a high-quality clean in line with your agreed service specification. If you are not satisfied with any aspect of our service, please notify us within 24 hours and we will return to re-clean the affected area at no additional charge.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">4. Access & Safety</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>You agree to provide safe access to the property at the agreed time.</li>
              <li>Please inform us of any hazards, fragile items, pets, or areas that should not be cleaned.</li>
              <li>Our team reserves the right to refuse to clean any area that presents a health or safety risk.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">5. Liability</h2>
            <p>thefamgroup holds £5 million public liability insurance. In the event of accidental damage caused by our team, claims must be reported within 24 hours of the clean. We cannot accept liability for pre-existing damage or damage resulting from failure to follow our pre-clean guidelines.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">6. Payment</h2>
            <p>Payment is due on completion of service unless otherwise agreed in writing. For recurring contracts, invoices are issued monthly. Late payments may incur an administration charge of £10 per week.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">7. Contact</h2>
            <div className="mt-3 p-4 bg-gray-50 rounded-xl text-sm">
              <strong className="text-gray-900">thefamgroup</strong><br />
              Email: <a href={`mailto:${CONTACT.email}`} className="text-brand-500 hover:underline">{CONTACT.email}</a><br />
              Phone: <a href={CONTACT.phoneTel} className="text-brand-500 hover:underline">{CONTACT.phone}</a>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex gap-6 text-sm">
          <Link href="/privacy-policy" className="text-brand-500 hover:underline">Privacy Policy</Link>
          <Link href="/cookies" className="text-brand-500 hover:underline">Cookie Policy</Link>
          <Link href="/" className="text-gray-400 hover:text-gray-600">← Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
