import type { Metadata } from 'next'
import { BLOG_POSTS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Blog — Cleaning Tips & Advice',
  description: 'Expert cleaning advice from the thefamgroup team.',
}

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#f5f5f0] py-14 text-center">
        <div className="container-wide">
          <h1 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold text-gray-900 mb-3">
            Cleaning Tips &amp; Advice
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Expert advice from the FAM team — making your home and workspace cleaner, healthier, and easier to maintain.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all cursor-pointer group">
                <div className="h-44 bg-brand-50 flex items-center justify-center text-5xl group-hover:bg-brand-100 transition-colors">
                  {post.emoji}
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-brand-500 mb-2">{post.category}</p>
                  <h2 className="font-display font-bold text-base text-gray-900 mb-2 leading-snug group-hover:text-brand-500 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{post.excerpt}</p>
                  <p className="text-xs text-gray-300">{post.date} · {post.readTime} read</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
