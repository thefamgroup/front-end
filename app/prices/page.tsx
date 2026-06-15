import type { Metadata } from 'next'
import Link from 'next/link'
import { RESIDENTIAL_PRICES, COMMERCIAL_PRICES, ADDON_PRICES } from '@/lib/data'
import type { PriceItem } from '@/types'

export const metadata: Metadata = {
  title: 'Prices',
  description: 'Transparent cleaning service prices for Manchester and Crewe. No hidden fees.',
}

function PriceTable({ items, cols }: { items: PriceItem[]; cols: string[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-card">
      <table className="w-full" role="table">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-100">
            {cols.map((c) => (
              <th key={c} className="text-left text-xs font-bold uppercase tracking-widest text-gray-400 px-5 py-3.5 first:rounded-tl-2xl last:rounded-tr-2xl">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {items.map((item, i) => (
            <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
              <td className="px-5 py-4">
                {item.name && <div className="font-semibold text-sm text-gray-900">{item.name}</div>}
                {item.description && <div className="text-xs text-gray-400">{item.description}</div>}
              </td>
              {item.includes !== undefined && (
                <td className="px-5 py-4 text-sm text-gray-400 hidden sm:table-cell">{item.includes}</td>
              )}
              {item.size !== undefined && (
                <td className="px-5 py-4 text-sm text-gray-500">{item.size}</td>
              )}
              <td className="px-5 py-4 text-right font-bold text-brand-500 whitespace-nowrap">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function PricesPage() {
  return (
    <>
      <section className="bg-[#f5f5f0] py-14 text-center">
        <div className="container-wide">
          <h1 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold text-gray-900 mb-3">
            Transparent Pricing
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Clear, competitive prices with no hidden fees. All prices are guides — get a personalised quote for your exact requirements.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide space-y-14">
          <div>
            <span className="section-tag">Residential</span>
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Home Cleaning Prices</h2>
            <PriceTable items={RESIDENTIAL_PRICES} cols={['Service', 'Includes', 'Size', 'Price']} />
          </div>
          <div>
            <span className="section-tag">Commercial</span>
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Business Cleaning Prices</h2>
            <PriceTable items={COMMERCIAL_PRICES} cols={['Service', 'Details', 'Price']} />
          </div>
          <div>
            <span className="section-tag">Add-Ons</span>
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Optional Add-On Prices</h2>
            <PriceTable items={ADDON_PRICES} cols={['Add-On', 'Details', 'Price']} />
          </div>
          <div className="bg-brand-50 rounded-2xl p-5 border border-brand-100 text-sm text-gray-500">
            💡 All prices are guide rates. Final prices depend on property size, condition, and location. A confirmed quote is always provided before booking.{' '}
            <Link href="/quote" className="text-brand-500 font-semibold hover:underline">Get your personalised quote →</Link>
          </div>
        </div>
      </section>

      <section className="bg-brand-500 py-16 text-center">
        <div className="container-wide">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-brand-100 mb-6">Use our calculator to get an instant estimate — then request or negotiate.</p>
          <Link href="/quote" className="btn-white text-base px-8 py-4">Open Quote Calculator →</Link>
        </div>
      </section>
    </>
  )
}
