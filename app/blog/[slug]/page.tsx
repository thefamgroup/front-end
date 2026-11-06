import type { Metadata } from 'next'
import type React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Phone, ArrowRight } from 'lucide-react'
import { BLOG_POSTS, CONTACT } from '@/lib/data'
import * as Illustrations from '@/components/icons/ServiceIllustrations'

// Parses simple [label](url) markdown links within a paragraph of plain text,
// so body copy can carry real contextual internal/external links rather than
// relying only on the single CTA block at the end of the post.
function renderInlineLinks(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g)
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (!match) return part
    const [, label, href] = match
    if (href.startsWith('http')) {
      return (
        <a key={i} href={href} target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 underline hover:text-brand-700">
          {label}
        </a>
      )
    }
    return (
      <Link key={i} href={href} className="text-brand-600 underline hover:text-brand-700">
        {label}
      </Link>
    )
  })
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find(p => p.slug === slug)
  if (!post) return { title: 'Not Found' }

  const canonical = `https://www.${CONTACT.website}/blog/${post.slug}/`
  const title = post.metaTitle ?? post.title

  return {
    title,
    description: post.metaDescription,
    alternates: { canonical },
    openGraph: {
      title,
      description: post.metaDescription,
      url: canonical,
      siteName: 'thefamgroup',
      locale: 'en_GB',
      type: 'article',
      publishedTime: post.date,
    },
    twitter: { card: 'summary', title, description: post.metaDescription },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = BLOG_POSTS.find(p => p.slug === slug)
  if (!post) notFound()

  const canonical = `https://www.${CONTACT.website}/blog/${post.slug}/`
  const Illustration = (Illustrations as unknown as Record<string, React.ComponentType<{ className?: string }>>)[post.illustration]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'thefamgroup' },
    publisher: { '@type': 'Organization', name: 'thefamgroup', url: `https://www.${CONTACT.website}` },
    mainEntityOfPage: canonical,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-[#f5f5f0] py-16">
        <div className="container-wide max-w-3xl">
          <Link href="/blog/" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand-600 mb-6">
            <ArrowLeft size={14} /> Back to blog
          </Link>

          <div className="w-20 h-20 mb-5">
            {Illustration ? <Illustration className="w-full h-full" /> : <span className="text-5xl">{post.emoji}</span>}
          </div>
          <span className="text-xs font-semibold text-brand-600 uppercase tracking-wide">{post.category}</span>
          <h1 className="font-display text-[clamp(28px,3.5vw,44px)] font-extrabold text-gray-900 mt-2 mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-gray-400 text-sm mb-10">{post.date} · {post.readTime} read</p>

          <div className="prose-content space-y-5">
            {post.content.map((block, i) =>
              block.startsWith('## ') ? (
                <h2 key={i} className="font-display font-bold text-xl text-gray-900 pt-2">
                  {block.replace('## ', '')}
                </h2>
              ) : (
                <p key={i} className="text-gray-600 leading-relaxed">{renderInlineLinks(block)}</p>
              )
            )}
          </div>

          {post.relatedHref && (
            <div className="mt-12 bg-white rounded-2xl p-6 border border-gray-200 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Need this done properly?</p>
                <p className="font-display font-bold text-gray-900">We can take care of it.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href={post.relatedHref} className="btn-primary text-sm">
                  {post.relatedLabel} <ArrowRight size={15} />
                </Link>
                <a href={CONTACT.phoneTel} className="btn-outline text-sm">
                  <Phone size={15} /> {CONTACT.phone}
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
