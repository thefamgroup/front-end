'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { BASE_PRICES, COND_MULT } from '@/lib/data'
import { cn } from '@/lib/utils'

type ServiceOption = { value: string; label: string }
type ComplexityOption = { value: string; label: string; mult: number }

const SERVICES: ServiceOption[] = [
  { value: 'regular',          label: 'Regular Home Clean' },
  { value: 'deep',             label: 'Deep Clean' },
  { value: 'eot',              label: 'End of Tenancy' },
  { value: 'moveout',          label: 'Move In / Move Out' },
  { value: 'office',           label: 'Office Cleaning' },
  { value: 'postconstruction', label: 'Post-Construction' },
]

const COMPLEXITY: ComplexityOption[] = [
  { value: 'light',   label: 'Light — Well maintained', mult: 0.9 },
  { value: 'average', label: 'Average — Normal condition', mult: 1.0 },
  { value: 'heavy',   label: 'Heavy — Needs extra attention', mult: 1.3 },
]

export function EstimateWidget() {
  const [service, setService] = useState('regular')
  const [complexity, setComplexity] = useState('average')
  const [sqft, setSqft] = useState(800)

  const calculate = useCallback(() => {
    const base = BASE_PRICES[service] ?? 80
    const condM = COMPLEXITY.find(c => c.value === complexity)?.mult ?? 1
    const sizeM = 1 + Math.max(0, (sqft - 500) * 0.00008)
    const est = Math.round(base * condM * Math.max(0.7, sizeM))
    return { est, min: Math.round(est * 0.9), max: Math.round(est * 1.25) }
  }, [service, complexity, sqft])

  const { est, min, max } = calculate()

  return (
    <div className="bg-white rounded-3xl p-7 shadow-widget">
      <h3 className="font-display font-bold text-lg text-gray-900 mb-1">Get a Quick Estimate</h3>
      <p className="text-sm text-gray-500 mb-5">
        For a detailed quote, use our{' '}
        <Link href="/quote" className="text-brand-500 font-semibold hover:underline">
          full calculator →
        </Link>
      </p>

      {/* Service type */}
      <div className="mb-4">
        <label htmlFor="est-service" className="block text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-1.5">
          Type of Cleaning
        </label>
        <select
          id="est-service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="input-field"
        >
          {SERVICES.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>

      {/* Complexity */}
      <div className="mb-4">
        <label htmlFor="est-complexity" className="block text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-1.5">
          Complexity
        </label>
        <select
          id="est-complexity"
          value={complexity}
          onChange={(e) => setComplexity(e.target.value)}
          className="input-field"
        >
          {COMPLEXITY.map((c) => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </select>
      </div>

      {/* Square footage */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-1.5">
          <label htmlFor="est-sqft" className="text-[11px] font-bold tracking-widest uppercase text-gray-400">
            Approx. Square Footage
          </label>
          <span className="text-2xl font-bold text-brand-500 font-display">{sqft}</span>
        </div>
        <input
          id="est-sqft"
          type="range"
          min={200}
          max={3000}
          step={50}
          value={sqft}
          onChange={(e) => setSqft(Number(e.target.value))}
          className="w-full accent-brand-500 cursor-pointer"
          aria-label={`Square footage: ${sqft}`}
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>200 sq ft</span>
          <span>3,000 sq ft</span>
        </div>
      </div>

      {/* Result */}
      <div className="bg-brand-500 rounded-2xl p-5">
        <div className="flex items-start justify-between mb-1">
          <div>
            <p className="text-xs text-brand-200 font-medium mb-1">Estimated Total</p>
            <p className="text-4xl font-extrabold text-white font-display">
              £<span id="est-amount" data-testid="est-amount">{est}</span>
            </p>
            <p className="text-xs text-brand-200 mt-1">Starting from · excl. add-ons</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-brand-200 mb-1">Price range</p>
            <p className="text-base font-bold text-white">£{min} – £{max}</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-2.5 mt-3">
        <Link href="/quote" className="btn-primary text-sm px-4 py-2.5 justify-center">
          Request Quote
        </Link>
        <Link href="/contact" className="btn-outline text-sm px-4 py-2.5 justify-center">
          Negotiate with Us
        </Link>
      </div>
    </div>
  )
}
