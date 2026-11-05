import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BLOG_POSTS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Cleaning Tips & Advice Blog',
  description: 'Expert cleaning advice from thefamgroup team — carpet stain removal, bin cleaning, end of tenancy checklists, and more for Manchester, Crewe, Liverpool, Stoke and Carlisle.',
}

export default function BlogPage() {
  return (
    <section className="bg-[#f5f5f0] py-16">
      <div className="container-wide">
        <span className="section-tag">Blog</span>
        <h1 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold text-gray-900 mb-5">
          Cleaning Tips &amp; Advice
        </h1>
        <p className="text-gray-500 text-lg mb-12 max-w-2xl">
          Practical, no-nonsense cleaning advice from a team that cleans hundreds of homes and offices across the North West every month.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map(post => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}/`}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col"
            >
              <div className="text-4xl mb-4">{post.emoji}</div>
              <span className="text-xs font-semibold text-brand-600 uppercase tracking-wide mb-2">{post.category}</span>
              <h2 className="font-display font-bold text-lg text-gray-900 mb-2 leading-snug">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-4 flex-1">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-gray-400 mt-auto">
                <span>{post.date} · {post.readTime} read</span>
                <ArrowRight size={16} className="text-brand-600" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
