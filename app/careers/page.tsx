import type { Metadata } from 'next'
import Link from 'next/link'
import { CONTACT } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Careers — Join the FAM Team',
  description: 'Join thefamgroup. Flexible hours, competitive pay, supportive team.',
}

const JOBS = [
  { type: 'Residential', title: 'Residential Cleaner', desc: 'Manchester & Crewe areas. Flexible hours, competitive pay.', tags: ['Part-Time', 'Full-Time', 'Self-Employed'] },
  { type: 'Commercial', title: 'Commercial Cleaner', desc: 'Office, retail, and healthcare cleaning. DBS required.', tags: ['Full-Time', 'Manchester'] },
  { type: 'Specialist', title: 'End of Tenancy Specialist', desc: 'High-attention detail work. Experience preferred but training provided.', tags: ['Flexible', 'Both Areas'] },
]

const PERKS = [
  { icon: '💷', title: 'Competitive Pay', desc: 'Above National Minimum Wage. Paid weekly, on time, every time.' },
  { icon: '📅', title: 'Flexible Hours', desc: 'Work around your schedule. Full-time, part-time, and self-employed options.' },
  { icon: '🌱', title: 'Training Provided', desc: 'Full induction, health & safety, COSHH, and specialist training provided.' },
  { icon: '🤝', title: 'Supportive Team', desc: 'You\'re family here. We look after our people.' },
]

export default function CareersPage() {
  return (
    <>
      <section className="bg-[#f5f5f0] py-14">
        <div className="container-wide text-center">
          <h1 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold text-gray-900 mb-3">
            Join the FAM Team
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            We're always looking for dedicated, trustworthy people to join our growing family.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-14">
            <div>
              <span className="section-tag">Open Positions</span>
              <h2 className="font-display font-bold text-2xl text-gray-900 mb-6">Current Openings</h2>
              <div className="space-y-4">
                {JOBS.map((job) => (
                  <div key={job.title} className="flex items-center justify-between gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-card hover:border-brand-300 hover:shadow-card-hover transition-all">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-brand-500 mb-1">{job.type}</p>
                      <h3 className="font-display font-bold text-base text-gray-900 mb-1">{job.title}</h3>
                      <p className="text-sm text-gray-400 mb-2">{job.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag) => (
                          <span key={tag} className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-500">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a href={`mailto:${CONTACT.email}?subject=Application: ${job.title}`} className="btn-primary text-sm px-5 py-2.5 flex-shrink-0">
                      Apply →
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="section-tag">Why Join Us</span>
              <h2 className="font-display font-bold text-2xl text-gray-900 mb-6">What We Offer</h2>
              <div className="space-y-4 mb-8">
                {PERKS.map((perk) => (
                  <div key={perk.title} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center text-xl flex-shrink-0">
                      {perk.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900 mb-0.5">{perk.title}</h4>
                      <p className="text-sm text-gray-400">{perk.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-brand-50 rounded-2xl p-5 border border-brand-100">
                <h4 className="font-semibold text-brand-600 mb-2">Ready to Apply?</h4>
                <p className="text-sm text-gray-500 mb-3">Send your name, experience, and preferred working hours to:</p>
                <a href={`mailto:${CONTACT.email}`} className="text-sm font-bold text-brand-500 block hover:underline">{CONTACT.email}</a>
                <a href={CONTACT.phoneTel} className="text-sm font-bold text-brand-500 block mt-1 hover:underline">{CONTACT.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
