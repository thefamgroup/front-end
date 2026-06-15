'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Check } from 'lucide-react'

const schema = z.object({
  firstName: z.string().min(1, 'Required'),
  lastName:  z.string().min(1, 'Required'),
  email:     z.string().email('Valid email required'),
  phone:     z.string().min(10, 'Valid phone required'),
  enquiry:   z.string().min(1, 'Please select an enquiry type'),
  message:   z.string().min(10, 'Please write at least 10 characters'),
})

type FormData = z.infer<typeof schema>

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 800))
    setSent(true)
  }

  if (sent) {
    return (
      <div className="bg-white rounded-3xl p-10 shadow-card border border-gray-100 text-center">
        <div className="w-14 h-14 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check size={28} className="text-brand-500" />
        </div>
        <h3 className="font-display font-bold text-xl text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-400 text-sm">We'll be in touch within 2 hours. Thank you for reaching out.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100">
      <h2 className="font-display font-bold text-2xl text-gray-900 mb-1">Send Us a Message</h2>
      <p className="text-gray-400 text-sm mb-7">We'll get back to you within 2 hours during business hours.</p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">First Name</label>
            <input id="firstName" {...register('firstName')} className="input-field" placeholder="First name" autoComplete="given-name" />
            {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName.message}</p>}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Last Name</label>
            <input id="lastName" {...register('lastName')} className="input-field" placeholder="Last name" autoComplete="family-name" />
            {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName.message}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Email</label>
          <input id="email" type="email" {...register('email')} className="input-field" placeholder="your@email.com" autoComplete="email" />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Phone / WhatsApp</label>
          <input id="phone" type="tel" {...register('phone')} className="input-field" placeholder="07000 000 000" autoComplete="tel" />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="enquiry" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Enquiry Type</label>
          <select id="enquiry" {...register('enquiry')} className="input-field">
            <option value="">Select enquiry type...</option>
            <option>Get a Quote</option>
            <option>Book a Clean</option>
            <option>Commercial Contract</option>
            <option>Complaint / Feedback</option>
            <option>Join Our Team</option>
            <option>Other</option>
          </select>
          {errors.enquiry && <p className="text-xs text-red-500 mt-1">{errors.enquiry.message}</p>}
        </div>
        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Message</label>
          <textarea id="message" {...register('message')} className="input-field resize-none h-32" placeholder="Tell us what you need, your location, and any other details..." />
          {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
        </div>
        <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60">
          {isSubmitting ? 'Sending...' : 'Send Message →'}
        </button>
      </form>
    </div>
  )
}
