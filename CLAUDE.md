# thefamgroup Website — Claude Code Instructions

## Project
**thefamgroup** — Professional cleaning services website for Manchester and Crewe.
Built in **Next.js 15 App Router + TypeScript + Tailwind CSS**.

## Stack
| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS + custom tokens in globals.css |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |
| Unit tests | Jest + React Testing Library |
| E2E tests | Playwright |

## Commands
```bash
npm run dev          # dev server → localhost:3000
npm run build        # production build
npm run test         # Jest unit tests
npm run test:e2e     # Playwright E2E (requires dev server running)
npm run lint         # ESLint
```

## Project Structure
```
app/                 # Next.js App Router pages
├── page.tsx         # Home page
├── about/           # About us
├── services/        # Services (residential + commercial)
├── prices/          # Full price tables
├── quote/           # Interactive quote calculator
├── contact/         # Contact form + FAQ
├── blog/            # Blog posts
├── careers/         # Job openings
├── layout.tsx       # Root layout (Navbar + Footer)
└── globals.css      # Design tokens + Tailwind base

components/
├── layout/          # Navbar, Footer
├── sections/        # EstimateWidget, ContactForm, FaqAccordion
└── quote/           # QuoteCalculator (5-step interactive)

lib/
├── data.ts          # ALL site content (services, prices, testimonials, blog)
├── utils.ts         # cn(), calculateQuote(), buildWhatsAppUrl()

types/index.ts       # All TypeScript interfaces
__tests__/           # Jest unit + component tests
e2e/                 # Playwright E2E tests
```

## Brand & Design
- **Primary colour:** `#3a7d44` (brand-500) — Qleen-matched forest green
- **Background:** `#f5f5f0` (cream off-white)
- **Fonts:** Hanken Grotesk (display headings) + DM Sans (body)
- **Border radius:** rounded-2xl (cards), rounded-3xl (hero cards), rounded-full (pills/buttons)
- **Buttons:** `.btn-primary`, `.btn-outline`, `.btn-white` (defined in globals.css)
- DO NOT use hard-coded hex values — always use Tailwind classes (`brand-500`, `brand-50` etc.)

## Contact Details (never change without instruction)
- Phone: `07769 240 184` | `tel:07769240184`
- Email: `thefamgrouphq@gmail.com`
- Website: `www.thefamgroup.co.uk`
- Locations: Manchester & Crewe
- Tagline: Family. Community. Care.

## Content Rules
- **NO PRICING on services documents** — pricing only on `/prices` page and quote calculator
- Quote flow: estimate shown → customer requests quote OR negotiates → team confirms
- All content data lives in `lib/data.ts` — edit there, not in page files

## Key Patterns

### Adding a new page
```tsx
// app/new-page/page.tsx
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Page Name', description: '...' }
export default function NewPage() { return <></> }
```

### Adding a new section with interactivity
```tsx
'use client'  // only add if using useState/useEffect
import { useState } from 'react'
```

### Quote calculator logic
Located in `lib/utils.ts` → `calculateQuote()`. Uses multipliers from `lib/data.ts`.
To change prices, edit `BASE_PRICES`, `SIZE_MULT`, `FREQ_MULT`, `COND_MULT` in `lib/data.ts`.

### Adding a new service
In `lib/data.ts`, add to `RESIDENTIAL_SERVICES` or `COMMERCIAL_SERVICES` array.

## Testing Rules (from QA skill)
- Unit tests: `__tests__/*.test.ts` — test utils and business logic, mock everything else
- Component tests: `__tests__/*.test.tsx` — test behaviour, not implementation
- E2E tests: `e2e/*.spec.ts` — test critical user journeys only (home, quote, contact)
- Run tests before every commit: `npm test`

## Deployment (Vercel — recommended)
1. Push to GitHub
2. Connect repo to Vercel at vercel.com
3. Vercel auto-detects Next.js — no config needed
4. Set environment variables in Vercel dashboard if needed

## What NOT to Do
- Never use `<img>` — use `next/image` for all content images
- Never hardcode colours — use Tailwind classes
- Never put business logic in page files — put it in `lib/`
- Never edit files in `components/ui/` if shadcn is added later
- Never use `any` type in TypeScript
- Never commit without running `npm test` first
