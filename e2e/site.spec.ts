import { test, expect } from '@playwright/test'

const BASE = 'http://localhost:3000'

// ── Navigation ────────────────────────────────────────────────────

test.describe('Navigation', () => {
  test('home page loads and shows hero headline', async ({ page }) => {
    await page.goto(BASE)
    await expect(page.getByRole('heading', { name: /Trusted Cleaners/i })).toBeVisible()
  })

  test('nav links are all present', async ({ page }) => {
    await page.goto(BASE)
    const mobileMenuBtn = page.getByRole('button', { name: /open menu/i })
    if (await mobileMenuBtn.isVisible()) {
      await mobileMenuBtn.click()
    }
    for (const label of ['About', 'Services', 'Prices', 'Blog', 'Contact']) {
      await expect(page.getByRole('link', { name: label, exact: true })).toBeVisible()
    }
  })

  test('Get a Quote CTA navigates to quote page', async ({ page }) => {
    await page.goto(BASE)
    const mobileMenuBtn = page.getByRole('button', { name: /open menu/i })
    if (await mobileMenuBtn.isVisible()) {
      await mobileMenuBtn.click()
    }
    await page.getByRole('link', { name: 'Get a Quote' }).first().click()
    await expect(page).toHaveURL(`${BASE}/quote`)
    await expect(page.getByRole('heading', { name: /Personalised Quote/i })).toBeVisible()
  })

  test('services page loads', async ({ page }) => {
    await page.goto(`${BASE}/services`)
    await expect(page.getByText('Residential', { exact: true })).toBeVisible()
    await expect(page.getByText('Commercial', { exact: true })).toBeVisible()
  })

  test('prices page loads with all 3 sections', async ({ page }) => {
    await page.goto(`${BASE}/prices`)
    await expect(page.getByText('Residential', { exact: true })).toBeVisible()
    await expect(page.getByText('Commercial', { exact: true })).toBeVisible()
    await expect(page.getByText('Add-Ons', { exact: true })).toBeVisible()
  })
})

// ── Estimate Widget ───────────────────────────────────────────────

test.describe('Estimate Widget', () => {
  test('shows an estimated price on hero', async ({ page }) => {
    await page.goto(BASE)
    await expect(page.getByText('Estimated Total')).toBeVisible()
    const amount = page.locator('#est-amount, [data-testid="est-amount"]').first()
    // Amount should be a number > 0
    const text = await amount.textContent()
    expect(Number(text)).toBeGreaterThan(0)
  })

  test('changing service type updates estimate', async ({ page }) => {
    await page.goto(BASE)
    const before = await page.locator('text=Estimated Total').locator('..').textContent()
    await page.selectOption('select#est-service', 'eot')
    const after = await page.locator('text=Estimated Total').locator('..').textContent()
    // EOT is more expensive than regular — values should differ
    expect(before).not.toBe(after)
  })
})

// ── Quote Calculator ──────────────────────────────────────────────

test.describe('Quote Calculator', () => {
  test('loads all 5 steps', async ({ page }) => {
    await page.goto(`${BASE}/quote`)
    await expect(page.getByText('What type of cleaning?')).toBeVisible()
    await expect(page.getByText('Property size')).toBeVisible()
    await expect(page.getByText('How often?')).toBeVisible()
    await expect(page.getByText('Current condition')).toBeVisible()
    await expect(page.getByText(/Add-ons/i)).toBeVisible()
  })

  test('calculate button shows result', async ({ page }) => {
    await page.goto(`${BASE}/quote`)
    await page.getByRole('button', { name: /Calculate My Estimate/i }).click()
    await expect(page.getByText('Your Estimated Price')).toBeVisible()
  })

  test('selecting add-ons increases the estimate', async ({ page }) => {
    await page.goto(`${BASE}/quote`)
    await page.getByRole('button', { name: /Calculate My Estimate/i }).click()
    const before = await page.locator('text=Your Estimated Price').locator('..').textContent()

    // Go back, add an addon, recalculate
    await page.goto(`${BASE}/quote`)
    await page.getByRole('button', { name: /Oven Clean/i }).click()
    await page.getByRole('button', { name: /Calculate My Estimate/i }).click()
    const after = await page.locator('text=Your Estimated Price').locator('..').textContent()

    expect(before).not.toBe(after)
  })

  test('Request This Quote shows success screen', async ({ page }) => {
    await page.goto(`${BASE}/quote`)
    await page.getByRole('button', { name: /Calculate My Estimate/i }).click()
    await page.getByRole('button', { name: /Request This Quote/i }).click()
    await expect(page.getByText(/Request Sent/i)).toBeVisible()
  })

  test('negotiate button shows negotiate box', async ({ page }) => {
    await page.goto(`${BASE}/quote`)
    await page.getByRole('button', { name: /Calculate My Estimate/i }).click()
    await page.getByRole('button', { name: /Negotiate with Us/i }).click()
    await expect(page.getByText(/Talk About Your Budget/i)).toBeVisible()
  })
})

// ── Contact Form ──────────────────────────────────────────────────

test.describe('Contact Form', () => {
  test('shows validation errors on empty submit', async ({ page }) => {
    await page.goto(`${BASE}/contact`)
    await page.getByRole('button', { name: /Send Message/i }).click()
    await expect(page.getByText(/Required/i).first()).toBeVisible()
  })

  test('successful form submission shows confirmation', async ({ page }) => {
    await page.goto(`${BASE}/contact`)
    await page.fill('input[id="firstName"]', 'Test')
    await page.fill('input[id="lastName"]', 'User')
    await page.fill('input[id="email"]', 'test@test.com')
    await page.fill('input[id="phone"]', '07700000000')
    await page.selectOption('select[id="enquiry"]', 'Get a Quote')
    await page.fill('textarea[id="message"]', 'I would like a quote for a 2 bed end of tenancy clean.')
    await page.getByRole('button', { name: /Send Message/i }).click()
    await expect(page.getByText(/Message Sent/i)).toBeVisible()
  })
})

// ── Accessibility ─────────────────────────────────────────────────

test.describe('Accessibility', () => {
  test('home page has correct page title', async ({ page }) => {
    await page.goto(BASE)
    await expect(page).toHaveTitle(/thefamgroup/)
  })

  test('all nav links are keyboard accessible', async ({ page }) => {
    await page.goto(BASE)
    await page.keyboard.press('Tab')
    // First focusable element should be visible
    const focused = await page.evaluate(() => document.activeElement?.tagName)
    expect(['A', 'BUTTON', 'INPUT']).toContain(focused)
  })

  test('images have alt text', async ({ page }) => {
    await page.goto(BASE)
    const images = page.locator('img')
    const count = await images.count()
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt')
      expect(alt).not.toBeNull()
    }
  })
})
