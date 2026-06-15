import type { Metadata } from 'next'
import { QuoteCalculator } from '@/components/quote/QuoteCalculator'

export const metadata: Metadata = {
  title: 'Get a Quote',
  description: 'Get an instant estimate for your cleaning service. Request a quote or negotiate directly with our team.',
}

export default function QuotePage() {
  return (
    <>
      <section className="bg-brand-500 py-16 text-center">
        <div className="container-wide">
          <h1 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold text-white mb-3">
            Get Your Personalised Quote
          </h1>
          <p className="text-brand-100 text-lg max-w-xl mx-auto">
            Answer a few quick questions for an instant estimate. Then request a quote or negotiate directly with our team.
          </p>
        </div>
      </section>
      <section className="py-16 bg-[#f5f5f0]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <QuoteCalculator />
        </div>
      </section>
    </>
  )
}
