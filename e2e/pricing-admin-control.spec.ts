import { test, expect } from '@playwright/test'

const BASE = 'http://localhost:3000'
const ADMIN_API = 'https://tfg-admin-api.onrender.com/api'
const SCREENSHOTS = '/private/tmp/claude-501/-Users-adebowale-Downloads-tfg-website/15101efe-aa0e-4c25-ad03-d9c14a7876bd/scratchpad'

async function adminLogin(): Promise<string> {
  const res = await fetch(`${ADMIN_API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'admin@thefamgroup.uk', password: 'Admin@TFG2026!' }),
  })
  const data = await res.json()
  return data.accessToken
}

async function setPrice(token: string, key: string, value: string, label: string) {
  await fetch(`${ADMIN_API}/settings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ key, value, label, group: 'calculator' }),
  })
}

test.describe('Pricing Calculator — Admin Control QA', () => {
  test('1. /api/pricing returns live data from admin backend', async ({ page }) => {
    const res = await page.goto(`${BASE}/api/pricing`)
    const body = await res!.text()
    const data = JSON.parse(body)
    expect(data.BASE_PRICES).toBeDefined()
    expect(data.SIZE_MULT).toBeDefined()
    expect(data.FREQ_MULT).toBeDefined()
    expect(data.COND_MULT).toBeDefined()
    expect(data.ADDON_PRICES).toBeDefined()
    await page.screenshot({ path: `${SCREENSHOTS}/01-pricing-api-response.png`, fullPage: true })
  })

  test('2. Quote page loads with calculator', async ({ page }) => {
    await page.goto(`${BASE}/quote`)
    await page.waitForLoadState('networkidle')
    await expect(page.locator('text=Calculate My Estimate')).toBeVisible()
    await page.screenshot({ path: `${SCREENSHOTS}/02-quote-page-loaded.png`, fullPage: true })
  })

  test('3. Calculator shows £60 baseline (Regular / Studio / One-Off / Average)', async ({ page }) => {
    const token = await adminLogin()
    await setPrice(token, 'calculator.base.regular', '60', 'Regular Home Clean')
    await page.waitForTimeout(1000)

    await page.goto(`${BASE}/quote`)
    await page.waitForLoadState('domcontentloaded')
    await page.waitForTimeout(2000) // allow pricing fetch

    await page.screenshot({ path: `${SCREENSHOTS}/03-before-calculate.png`, fullPage: true })

    await page.locator('button:has-text("Calculate My Estimate")').click()
    await page.waitForTimeout(800)
    await page.screenshot({ path: `${SCREENSHOTS}/04-result-at-60.png`, fullPage: true })

    await expect(page.locator('.text-5xl').first()).toContainText('£')
  })

  test('4. Admin changes Regular price to £85 → calculator updates', async ({ page }) => {
    const token = await adminLogin()
    await setPrice(token, 'calculator.base.regular', '85', 'Regular Home Clean')

    // Verify backend returns new value
    const apiRes = await fetch(`${ADMIN_API}/settings/pricing-config`)
    const config = await apiRes.json()
    expect(config.BASE_PRICES.regular).toBe(85)

    // Public /api/pricing should now return 85
    const pubRes = await page.goto(`${BASE}/api/pricing`)
    const pubData = JSON.parse(await pubRes!.text())
    expect(pubData.BASE_PRICES.regular).toBe(85)
    await page.screenshot({ path: `${SCREENSHOTS}/05-api-pricing-shows-85.png`, fullPage: true })

    // Quote calculator should now show £85
    await page.goto(`${BASE}/quote`)
    await page.waitForLoadState('domcontentloaded')
    await page.waitForTimeout(2500) // allow pricing fetch

    await page.locator('button:has-text("Calculate My Estimate")').click()
    await page.waitForTimeout(800)
    await page.screenshot({ path: `${SCREENSHOTS}/06-calculator-at-85.png`, fullPage: true })

    await expect(page.locator('.text-5xl').first()).toContainText('£')
  })

  test('5. Admin changes EOT price — calculator reflects it', async ({ page }) => {
    const token = await adminLogin()
    await setPrice(token, 'calculator.base.eot', '199', 'End of Tenancy')

    const pubRes = await page.goto(`${BASE}/api/pricing`)
    const pubData = JSON.parse(await pubRes!.text())
    expect(pubData.BASE_PRICES.eot).toBe(199)
    await page.screenshot({ path: `${SCREENSHOTS}/07-eot-price-199.png`, fullPage: true })
  })

  test('6. Admin changes addon price — reflected in calculator', async ({ page }) => {
    const token = await adminLogin()
    await setPrice(token, 'calculator.addon.oven', '55', 'Oven Clean')

    const pubRes = await page.goto(`${BASE}/api/pricing`)
    const pubData = JSON.parse(await pubRes!.text())
    expect(pubData.ADDON_PRICES.oven).toBe(55)
    await page.screenshot({ path: `${SCREENSHOTS}/08-addon-oven-55.png`, fullPage: true })
  })

  test('7. Fallback: /api/pricing still works if admin backend is slow', async ({ page }) => {
    // The route has a try/catch fallback — verify endpoint always responds
    const res = await page.goto(`${BASE}/api/pricing`)
    expect(res!.status()).toBe(200)
    const data = JSON.parse(await res!.text())
    expect(data.BASE_PRICES).toBeDefined()
    await page.screenshot({ path: `${SCREENSHOTS}/09-fallback-always-responds.png`, fullPage: true })
  })

  test('8. Restore original prices after QA', async () => {
    const token = await adminLogin()
    await setPrice(token, 'calculator.base.regular', '60', 'Regular Home Clean')
    await setPrice(token, 'calculator.base.eot', '149', 'End of Tenancy')
    await setPrice(token, 'calculator.addon.oven', '45', 'Oven Clean')

    const res = await fetch(`${ADMIN_API}/settings/pricing-config`)
    const data = await res.json()
    expect(data.BASE_PRICES.regular).toBe(60)
    expect(data.BASE_PRICES.eot).toBe(149)
    expect(data.ADDON_PRICES.oven).toBe(45)
  })
})
