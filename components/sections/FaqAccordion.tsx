'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

const FAQS = [
  { q: 'How do I get a quote?', a: 'Use our online calculator on the Get a Quote page for an instant estimate. Then request a formal quote or give us a call and we\'ll confirm everything before any booking is made.' },
  { q: 'Are your cleaners DBS checked?', a: 'Yes. Every member of the FAM team is DBS (Disclosure and Barring Service) checked, reference verified, and fully trained before they work on any client property.' },
  { q: 'Do I need to be home during the clean?', a: 'Not at all. Many of our clients provide access via a key or key safe. We\'re fully insured and trustworthy — you can be out and return to a clean home.' },
  { q: 'What if I\'m not happy with the clean?', a: 'Contact us within 24 hours and we\'ll return and put it right completely free of charge. Your satisfaction is guaranteed — that\'s the FAM promise.' },
  { q: 'Do you bring your own cleaning supplies?', a: 'Yes, we bring all standard cleaning supplies. If you\'d prefer eco-friendly, non-toxic products, just add the Eco-Friendly Upgrade to your booking for a small additional charge.' },
  { q: 'Can I get a discount for regular bookings?', a: 'Absolutely. Weekly clients save 20%, fortnightly clients save 15%, and monthly clients save 10% compared to our one-off rates. Discounts are applied automatically.' },
  { q: 'Do you cover my area?', a: 'We currently cover Manchester and Crewe and their surrounding areas. We\'re expanding — if you\'re not sure, give us a call on 07767 759 013 or drop us a message.' },
]

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="divide-y divide-gray-100">
      {FAQS.map((faq, i) => (
        <div key={i} className="py-5">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg"
            aria-expanded={open === i}
          >
            <span className="font-semibold text-sm text-gray-900">{faq.q}</span>
            <div className={cn(
              'w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200',
              open === i ? 'bg-brand-500 text-white rotate-45' : 'bg-gray-100 text-gray-500'
            )}>
              <Plus size={14} />
            </div>
          </button>
          {open === i && (
            <p className="mt-3 text-sm text-gray-400 leading-relaxed pr-10">{faq.a}</p>
          )}
        </div>
      ))}
    </div>
  )
}
