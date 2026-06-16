import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // Explicitly welcome AI crawlers
      { userAgent: 'GPTBot',         allow: '/' },
      { userAgent: 'ChatGPT-User',   allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'anthropic-ai',   allow: '/' },
      { userAgent: 'Claude-Web',     allow: '/' },
      { userAgent: 'PerplexityBot',  allow: '/' },
      { userAgent: 'cohere-ai',      allow: '/' },
      { userAgent: 'CCBot',          allow: '/' },
      { userAgent: 'Bytespider',     allow: '/' },
    ],
    sitemap: 'https://thefamgroup.uk/sitemap.xml',
  }
}
