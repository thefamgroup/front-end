import type { Metadata } from 'next'
import Link from 'next/link'
import { CONTACT } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Cookie Policy — thefamgroup',
  description: 'How thefamgroup uses cookies on our website.',
}

export default function CookiesPage() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs font-bold tracking-[0.15em] uppercase text-brand-500 mb-3 block">Legal</span>
          <h1 className="font-display text-4xl font-extrabold text-gray-900 mb-3">Cookie Policy</h1>
          <p className="text-sm text-gray-400">Last updated: June 2026</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">What Are Cookies?</h2>
            <p>Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences and improve your experience. This policy explains what cookies we use and why.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">Cookies We Use</h2>
            <div className="overflow-hidden rounded-xl border border-gray-100 mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left px-4 py-3 font-bold text-gray-700">Cookie</th>
                    <th className="text-left px-4 py-3 font-bold text-gray-700">Purpose</th>
                    <th className="text-left px-4 py-3 font-bold text-gray-700">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900">Essential</td>
                    <td className="px-4 py-3 text-gray-500">Required for the website to function (e.g. form submissions)</td>
                    <td className="px-4 py-3 text-gray-500">Session</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-4 py-3 font-medium text-gray-900">Analytics</td>
                    <td className="px-4 py-3 text-gray-500">Anonymous data to understand how visitors use the site</td>
                    <td className="px-4 py-3 text-gray-500">12 months</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900">Preferences</td>
                    <td className="px-4 py-3 text-gray-500">Remembers your settings and choices</td>
                    <td className="px-4 py-3 text-gray-500">6 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">Managing Cookies</h2>
            <p>You can control and delete cookies through your browser settings. Disabling cookies may affect some features of our website. Most browsers allow you to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>View what cookies are stored</li>
              <li>Delete all cookies or cookies from specific sites</li>
              <li>Block cookies from specific sites or all sites</li>
            </ul>
            <p className="mt-3">For more information on managing cookies, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">aboutcookies.org</a>.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">Contact Us</h2>
            <div className="mt-3 p-4 bg-gray-50 rounded-xl text-sm">
              <strong className="text-gray-900">thefamgroup</strong><br />
              Email: <a href={`mailto:${CONTACT.email}`} className="text-brand-500 hover:underline">{CONTACT.email}</a><br />
              Phone: <a href={CONTACT.phoneTel} className="text-brand-500 hover:underline">{CONTACT.phone}</a>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex gap-6 text-sm">
          <Link href="/privacy-policy" className="text-brand-500 hover:underline">Privacy Policy</Link>
          <Link href="/terms-of-service" className="text-brand-500 hover:underline">Terms of Service</Link>
          <Link href="/" className="text-gray-400 hover:text-gray-600">← Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
