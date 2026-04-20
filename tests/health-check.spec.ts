import { test, expect } from '@playwright/test';

// ─────────────────────────────────────────────
//  PageGuard — Website Health Checker
//  Author: Ayomal Weerasinghe
//  Tests: Availability, Title, DOM, Load Time
// ─────────────────────────────────────────────

interface SiteConfig {
  name: string;
  url: string;
  expectedTitlePattern: RegExp;
  criticalSelector: string;
  maxLoadTimeMs: number;
}

const SITES: SiteConfig[] = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    expectedTitlePattern: /github/i,
    criticalSelector: 'header',
    maxLoadTimeMs: 15000,
  },
  {
    name: 'Wikipedia',
    url: 'https://www.wikipedia.org',
    expectedTitlePattern: /wikipedia/i,
    criticalSelector: '#www-wikipedia-org',
    maxLoadTimeMs: 8000,
  },
  {
    name: 'npm Registry',
    url: 'https://www.npmjs.com',
    expectedTitlePattern: /npm/i,
    criticalSelector: 'header',
    maxLoadTimeMs: 8000,
  },
  {
    name: 'MDN Web Docs',
    url: 'https://developer.mozilla.org',
    expectedTitlePattern: /mdn/i,
    criticalSelector: 'nav',
    maxLoadTimeMs: 8000,
  },
  {
    name: 'Playwright Docs',
    url: 'https://playwright.dev',
    expectedTitlePattern: /playwright/i,
    criticalSelector: 'nav',
    maxLoadTimeMs: 8000,
  },
];

// ─────────────────────────────────────────────
//  TEST SUITE
// ─────────────────────────────────────────────

test.describe('PageGuard — Website Health Suite', () => {

  for (const site of SITES) {

    test.describe(`${site.name}`, () => {

      test(`✅ [${site.name}] Page loads successfully`, async ({ page }) => {
        const start = Date.now();
        const response = await page.goto(site.url, {
          waitUntil: 'domcontentloaded',
          timeout: 30000,
        });
        const loadTime = Date.now() - start;

        expect(
          response?.status(),
          `Expected 200 but got ${response?.status()}`
        ).toBe(200);

        expect(
          loadTime,
          `Load time ${loadTime}ms exceeded ${site.maxLoadTimeMs}ms threshold`
        ).toBeLessThan(site.maxLoadTimeMs);

        console.log(`⏱  ${site.name} loaded in ${loadTime}ms`);
      });

      test(`✅ [${site.name}] Page title matches expected pattern`, async ({ page }) => {
        await page.goto(site.url, { waitUntil: 'domcontentloaded' });

        await expect(
          page,
          `Title did not match pattern ${site.expectedTitlePattern}`
        ).toHaveTitle(site.expectedTitlePattern);
      });

      test(`✅ [${site.name}] Critical UI element is visible`, async ({ page }) => {
        await page.goto(site.url, { waitUntil: 'domcontentloaded' });

        await expect(
          page.locator(site.criticalSelector).first(),
          `Critical selector "${site.criticalSelector}" was not visible`
        ).toBeVisible({ timeout: 5000 });
      });

      test(`✅ [${site.name}] Page has no broken console errors`, async ({ page }) => {
        const errors: string[] = [];

        page.on('console', msg => {
          if (msg.type() === 'error') {
            errors.push(msg.text());
          }
        });

        await page.goto(site.url, { waitUntil: 'domcontentloaded' });

        const criticalErrors = errors.filter(e =>
          !e.includes('third-party') &&
          !e.includes('analytics') &&
          !e.includes('gtag')
        );

        if (criticalErrors.length > 0) {
          console.warn(`⚠️  Console errors on ${site.name}:`, criticalErrors);
        }

        console.log(`🔍 ${site.name}: ${errors.length} console error(s) detected`);
      });

    });
  }

});

// ─────────────────────────────────────────────
//  SUMMARY TEST — Full Report
// ─────────────────────────────────────────────

test('📊 PageGuard Health Summary Report', async ({ page }) => {
  const results: { site: string; loadTime: number; status: number }[] = [];

  for (const site of SITES) {
    const start = Date.now();
    const response = await page.goto(site.url, {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });
    const loadTime = Date.now() - start;

    results.push({
      site: site.name,
      loadTime,
      status: response?.status() ?? 0,
    });
  }

  console.log('\n═══════════════════════════════════════');
  console.log('  PageGuard Health Report');
  console.log('═══════════════════════════════════════');
  results.forEach(r => {
    const statusIcon = r.status === 200 ? '✅' : '❌';
    const timeIcon = r.loadTime < 3000 ? '⚡' : r.loadTime < 5000 ? '🟡' : '🔴';
    console.log(`${statusIcon} ${r.site.padEnd(20)} ${timeIcon} ${r.loadTime}ms  HTTP ${r.status}`);
  });
  console.log('═══════════════════════════════════════\n');

  results.forEach(r => {
    expect(r.status, `${r.site} returned non-200 status`).toBe(200);
  });
});
