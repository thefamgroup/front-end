import { test, expect } from '@playwright/test'

const BASE = 'http://localhost:3000'

// Critical journey: a visitor lands on a location hub (via Google, in practice) and
// navigates through to a real service page. This is the core path the entire
// programmatic SEO engine exists to serve, and had zero E2E coverage before this.

test.describe('SEO engine — Bolton hub to service page journey', () => {
  test('Bolton hub loads, lists areas, and links through to a real, populated service page', async ({ page }) => {
    await page.goto(`${BASE}/cleaning/bolton/`)
    await expect(page.getByRole('heading', { name: /Cleaning Services in Bolton/i })).toBeVisible()

    // Follow a real link from the hub rather than hardcoding a destination URL,
    // so this test breaks if the hub ever stops linking out correctly.
    const firstServiceLink = page.locator('a[href*="/cleaning/"][href*="/astley-bridge"]').first()
    await expect(firstServiceLink).toBeVisible()
    await firstServiceLink.click()

    // Landed on a real Engine 1 page with actual interpolated content, not a 404.
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Astley Bridge/i)
    await expect(page.getByText(/07351 282 131|07351282131/).first()).toBeVisible()
  })

  test('bin-cleaning hub links through to a real bin-cleaning location page', async ({ page }) => {
    await page.goto(`${BASE}/cleaning/bin-cleaning/`)
    const firstArea = page.locator('a[href^="/cleaning/bin-cleaning/"][href*="-bin"]').first()
    await expect(firstArea).toBeVisible()
    await firstArea.click()
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    await expect(page).not.toHaveURL(/404/)
  })

  test('a blog post renders and links back to its related service page', async ({ page }) => {
    await page.goto(`${BASE}/blog/how-to-remove-blood-stains-from-carpet/`)
    await expect(page.getByRole('heading', { name: /Blood Stains From Carpet/i })).toBeVisible()
    const relatedLink = page.getByRole('link', { name: /Carpet Cleaning/i })
    await expect(relatedLink).toBeVisible()
    await relatedLink.click()
    await expect(page).toHaveURL(/\/cleaning\/carpet-cleaning\/?$/)
  })
})
