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
  serviceType: z.string().min(1, 'Required'),
  bedrooms:  z.string().min(1, 'Required'),
  message:   z.string().optional(),
})

type FormData = z.infer<typeof schema>

export function BookingForm() {
  const [sent, setSent] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      serviceType: 'Home Cleaning',
      bedrooms: '2 Bedrooms',
    }
  })

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 800))
    setSent(true)
  }

  if (sent) {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100 text-center py-12">
        <div className="w-14 h-14 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check size={28} className="text-brand-500" />
        </div>
        <h3 className="font-display font-bold text-xl text-gray-900 mb-2">Enquiry Sent!</h3>
        <p className="text-gray-400 text-sm">We'll be in touch within 2 hours. Thank you for reaching out.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100">
      <h2 className="font-display font-bold text-2xl text-gray-900 mb-1">Book Your Clean Today</h2>
      <p className="text-gray-400 text-sm mb-7">Fill in your details and we'll be in touch within 2 hours.</p>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="bk-first" className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5">First Name</label>
            <input id="bk-first" {...register('firstName')} className="input-field" placeholder="Your first name" autoComplete="given-name" />
            {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName.message}</p>}
          </div>
          <div>
            <label htmlFor="bk-last" className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Last Name</label>
            <input id="bk-last" {...register('lastName')} className="input-field" placeholder="Your last name" autoComplete="family-name" />
            {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName.message}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="bk-email" className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Email</label>
          <input id="bk-email" type="email" {...register('email')} className="input-field" placeholder="your@email.com" autoComplete="email" />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="bk-phone" className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Phone / WhatsApp</label>
          <input id="bk-phone" type="tel" {...register('phone')} className="input-field" placeholder="07000 000 000" autoComplete="tel" />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="bk-service" className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Type of Service</label>
            <select id="bk-service" {...register('serviceType')} className="input-field">
              <option>Home Cleaning</option>
              <option>Office Cleaning</option>
              <option>End of Tenancy</option>
              <option>Move In/Out</option>
              <option>Post-Construction</option>
              <option>Deep Clean</option>
            </select>
            {errors.serviceType && <p className="text-xs text-red-500 mt-1">{errors.serviceType.message}</p>}
          </div>
          <div>
            <label htmlFor="bk-bed" className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Bedrooms</label>
            <select id="bk-bed" {...register('bedrooms')} className="input-field">
              <option>Studio</option>
              <option>1 Bedroom</option>
              <option>2 Bedrooms</option>
              <option>3 Bedrooms</option>
              <option>4+ Bedrooms</option>
            </select>
            {errors.bedrooms && <p className="text-xs text-red-500 mt-1">{errors.bedrooms.message}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="bk-notes" className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Additional Notes</label>
          <textarea id="bk-notes" {...register('message')} className="input-field resize-none h-24" placeholder="Anything we should know? Pets, access instructions, specific areas..." />
        </div>
        <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60">
          {isSubmitting ? 'Sending...' : 'Send Enquiry →'}
        </button>
      </form>
    </div>
  )
}
