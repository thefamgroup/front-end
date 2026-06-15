'use client'

import { useState } from 'react'
import { Check, Phone, MessageCircle } from 'lucide-react'
import { ADDONS, FREQ_SAVINGS } from '@/lib/data'
import { calculateQuote, buildWhatsAppUrl } from '@/lib/utils'
import { cn } from '@/lib/utils'
import { CONTACT } from '@/lib/data'
import type { ServiceType, PropertySize, Frequency, Condition, AddOn, QuoteState } from '@/types'

type Step = { id: number; label: string }
const STEPS: Step[] = [
  { id: 1, label: 'Service Type' },
  { id: 2, label: 'Property Size' },
  { id: 3, label: 'Frequency' },
  { id: 4, label: 'Condition' },
  { id: 5, label: 'Add-Ons' },
]

export function QuoteCalculator() {
  const [state, setState] = useState<QuoteState>({
    serviceType: 'regular',
    propertySize: 'studio',
    frequency: 'one-off',
    condition: 'average',
    addons: [],
  })
  const [step, setStep] = useState<'form' | 'result' | 'negotiate' | 'success'>('form')
  const [negotiateMsg, setNegotiateMsg] = useState('')
  const [negotiatePhone, setNegotiatePhone] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const quotePayload = () => ({
    service: state.serviceType,
    size: state.propertySize,
    frequency: state.frequency,
    condition: state.condition,
    addons: state.addons.map((a) => a.label).join(', ') || 'None',
    total: result.total,
    breakdown: result.breakdown,
  })

  const submitQuote = async (type: 'quote' | 'negotiate') => {
    setSubmitting(true)
    await fetch('/api/quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type,
        ...quotePayload(),
        message: negotiateMsg,
        phone: negotiatePhone,
      }),
    }).catch(() => {})
    setSubmitting(false)
    setStep('success')
  }

  const result = calculateQuote(state)

  const toggleAddon = (addon: AddOn) => {
    setState((prev) => ({
      ...prev,
      addons: prev.addons.find((a) => a.id === addon.id)
        ? prev.addons.filter((a) => a.id !== addon.id)
        : [...prev.addons, addon],
    }))
  }

  const isAddonSelected = (id: string) => state.addons.some((a) => a.id === id)

  const waUrl = buildWhatsAppUrl(
    CONTACT.phone,
    `Hi thefamgroup! I'd like to request a quote.\n\nService: ${state.serviceType}\nProperty: ${state.propertySize}\nFrequency: ${state.frequency}\nEstimate: £${result.total}\n\nPlease confirm availability.`
  )

  if (step === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check size={32} className="text-brand-500" />
        </div>
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">Request Sent!</h2>
        <p className="text-gray-500 mb-6 max-w-sm mx-auto">
          We'll be in touch within 2 hours to confirm your booking. For urgent requests:
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={CONTACT.phoneTel} className="btn-primary">
            <Phone size={16} /> Call {CONTACT.phone}
          </a>
          <button onClick={() => { setState({ serviceType: 'regular', propertySize: 'studio', frequency: 'one-off', condition: 'average', addons: [] }); setStep('form') }} className="btn-outline">
            Start New Quote
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-3xl shadow-card p-6 sm:p-8">

      {/* Progress */}
      <div className="flex gap-1 mb-8 overflow-x-auto pb-1">
        {STEPS.map((s, i) => (
          <div key={s.id} className="flex items-center gap-1 flex-shrink-0">
            <div className={cn(
              'w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors',
              step === 'form' && i < 5 ? 'bg-brand-500 text-white' : 'bg-gray-100 text-gray-400'
            )}>
              {s.id}
            </div>
            {i < STEPS.length - 1 && <div className="w-8 h-px bg-gray-200" />}
          </div>
        ))}
      </div>

      {/* Step 1: Service */}
      <div className="mb-8">
        <h3 className="font-display font-bold text-lg text-gray-900 mb-1">What type of cleaning?</h3>
        <p className="text-sm text-gray-500 mb-4">Select the service that best matches your needs.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {([
            ['regular',          'Regular Home', 'Weekly / Fortnightly', '🏠'],
            ['deep',             'Deep Clean',   'One-off intensive',    '🌊'],
            ['eot',              'End of Tenancy','Deposit-back clean',  '🔑'],
            ['moveout',          'Move In/Out',  'Property handover',    '📦'],
            ['office',           'Office Clean', 'Commercial spaces',    '🏢'],
            ['postconstruction', 'Post-Build',   'Builders clean',       '🏗️'],
          ] as [ServiceType, string, string, string][]).map(([value, label, note, emoji]) => (
            <button
              key={value}
              type="button"
              onClick={() => setState((p) => ({ ...p, serviceType: value }))}
              className={cn(
                'flex flex-col items-center text-center p-4 rounded-2xl border-2 transition-all duration-150 cursor-pointer',
                state.serviceType === value
                  ? 'border-brand-500 bg-brand-50'
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              )}
              aria-pressed={state.serviceType === value}
            >
              <span className="text-2xl mb-2">{emoji}</span>
              <span className="text-sm font-semibold text-gray-900">{label}</span>
              <span className="text-xs text-gray-400 mt-0.5">{note}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Property Size */}
      <div className="mb-8">
        <h3 className="font-display font-bold text-lg text-gray-900 mb-4">Property size</h3>
        <div className="grid grid-cols-5 gap-2">
          {([
            ['studio', 'Studio'],
            ['1bed',   '1 Bed'],
            ['2bed',   '2 Bed'],
            ['3bed',   '3 Bed'],
            ['4bed',   '4 Bed+'],
          ] as [PropertySize, string][]).map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setState((p) => ({ ...p, propertySize: value }))}
              className={cn(
                'py-3 text-sm font-semibold rounded-xl border-2 transition-all duration-150',
                state.propertySize === value
                  ? 'border-brand-500 bg-brand-50 text-brand-600'
                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
              )}
              aria-pressed={state.propertySize === value}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Step 3: Frequency */}
      <div className="mb-8">
        <h3 className="font-display font-bold text-lg text-gray-900 mb-4">How often?</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {([
            ['one-off',     'One-Off'],
            ['weekly',      'Weekly'],
            ['fortnightly', 'Fortnightly'],
            ['monthly',     'Monthly'],
          ] as [Frequency, string][]).map(([value, label]) => {
            const saving = FREQ_SAVINGS[value]
            return (
              <button
                key={value}
                type="button"
                onClick={() => setState((p) => ({ ...p, frequency: value }))}
                className={cn(
                  'py-3.5 text-sm font-semibold rounded-xl border-2 transition-all duration-150 flex flex-col items-center gap-0.5',
                  state.frequency === value
                    ? 'border-brand-500 bg-brand-50 text-brand-600'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                )}
                aria-pressed={state.frequency === value}
              >
                {label}
                {saving && (
                  <span className="text-[11px] font-bold text-brand-500">{saving}</span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Step 4: Condition */}
      <div className="mb-8">
        <h3 className="font-display font-bold text-lg text-gray-900 mb-4">Current condition</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {([
            ['light',      'Light',      'Well maintained'],
            ['average',    'Average',    'Normal condition'],
            ['heavy',      'Heavy',      'Needs extra work'],
            ['very-heavy', 'Very Heavy', 'Significant build-up'],
          ] as [Condition, string, string][]).map(([value, label, note]) => (
            <button
              key={value}
              type="button"
              onClick={() => setState((p) => ({ ...p, condition: value }))}
              className={cn(
                'py-3.5 px-2 text-sm font-semibold rounded-xl border-2 transition-all duration-150 flex flex-col items-center gap-0.5',
                state.condition === value
                  ? 'border-brand-500 bg-brand-50 text-brand-600'
                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
              )}
              aria-pressed={state.condition === value}
            >
              {label}
              <span className="text-[11px] font-normal text-gray-400">{note}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Step 5: Add-ons */}
      <div className="mb-8">
        <h3 className="font-display font-bold text-lg text-gray-900 mb-1">Add-ons <span className="text-sm font-normal text-gray-400">(optional)</span></h3>
        <p className="text-sm text-gray-500 mb-4">Select any extras to include in your estimate.</p>
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-2.5">
          {ADDONS.map((addon) => (
            <button
              key={addon.id}
              type="button"
              onClick={() => toggleAddon(addon)}
              className={cn(
                'p-3 rounded-xl border-2 transition-all duration-150 text-center',
                isAddonSelected(addon.id)
                  ? 'border-brand-500 bg-brand-50'
                  : 'border-gray-200 hover:border-gray-300'
              )}
              aria-pressed={isAddonSelected(addon.id)}
            >
              <div className="text-xl mb-1">{addon.icon}</div>
              <div className="text-[11px] font-semibold text-gray-900 leading-tight">{addon.label}</div>
              <div className="text-[11px] text-gray-400 mt-0.5">+£{addon.price}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Calculate */}
      <button
        type="button"
        onClick={() => setStep('result')}
        className="btn-primary w-full justify-center text-base py-4"
      >
        Calculate My Estimate →
      </button>

      {/* Result */}
      {(step === 'result' || step === 'negotiate') && (
        <div className="mt-6">
          <div className="bg-brand-500 rounded-2xl p-6">
            <p className="text-brand-200 text-sm mb-1">Your Estimated Price</p>
            <div className="text-5xl font-extrabold text-white font-display mb-1">
              £{result.total}
            </div>
            <p className="text-brand-200 text-sm mb-4">Estimate only · Final confirmed before booking · No obligation</p>
            <div className="bg-white/15 rounded-xl px-4 py-3 text-sm text-white/90 mb-5">
              {result.breakdown}
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => submitQuote('quote')}
                disabled={submitting}
                className="btn-white text-sm px-5 py-2.5 disabled:opacity-60"
              >
                <Check size={15} /> {submitting ? 'Sending…' : 'Request This Quote'}
              </button>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 border border-white/30 text-white text-sm font-semibold hover:bg-white/30 transition-colors"
              >
                <MessageCircle size={15} /> WhatsApp Us
              </a>
              <button
                type="button"
                onClick={() => setStep('negotiate')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 border border-white/30 text-white text-sm font-semibold hover:bg-white/30 transition-colors"
              >
                💬 Negotiate with Us
              </button>
              <a
                href={CONTACT.phoneTel}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 border border-white/30 text-white text-sm font-semibold hover:bg-white/25 transition-colors"
              >
                <Phone size={15} /> Call Us
              </a>
            </div>
          </div>

          {/* Negotiate box */}
          {step === 'negotiate' && (
            <div className="mt-4 bg-gray-50 rounded-2xl p-5 border border-gray-200">
              <h4 className="font-display font-bold text-gray-900 mb-1">Let's Talk About Your Budget</h4>
              <p className="text-sm text-gray-500 mb-4">
                Not happy with the estimate? Tell us your budget and priorities — we'll do our best to find a solution that works for both of us.
              </p>
              <textarea
                value={negotiateMsg}
                onChange={(e) => setNegotiateMsg(e.target.value)}
                placeholder="e.g. My budget is around £120. The kitchen and bathrooms are most important. Can we work something out?"
                className="input-field resize-none h-24 mb-3"
                aria-label="Negotiation message"
              />
              <div className="flex gap-2">
                <input
                  type="tel"
                  value={negotiatePhone}
                  onChange={(e) => setNegotiatePhone(e.target.value)}
                  placeholder="Your phone number"
                  className="input-field flex-1"
                  aria-label="Phone number for callback"
                />
                <button
                  type="button"
                  onClick={() => submitQuote('negotiate')}
                  disabled={submitting}
                  className="btn-primary px-5 whitespace-nowrap disabled:opacity-60"
                >
                  {submitting ? 'Sending…' : 'Send →'}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
