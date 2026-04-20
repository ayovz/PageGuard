# 🛡️ PageGuard — Automated Website Health Checker

![Playwright](https://img.shields.io/badge/Playwright-1.42-45ba4b?logo=playwright)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?logo=typescript)
![CI](https://github.com/ayovz/PageGuard/actions/workflows/health-check.yml/badge.svg)
![License](https://img.shields.io/badge/license-MIT-blue)

> An automated E2E health monitoring suite built with **Playwright** and **TypeScript**,
> verifying website availability, page titles, DOM rendering, and load performance
> across multiple live targets — with daily automated runs via GitHub Actions.

---

## 📸 Test Results Preview

```
Running 21 tests using 2 workers

  ✅ [chromium] › TypeScript › Page loads successfully
  ✅ [chromium] › TypeScript › Page title matches expected pattern
  ✅ [chromium] › TypeScript › Critical UI element is visible
  ✅ [chromium] › TypeScript › Page has no broken console errors
  ✅ [chromium] › Wikipedia › Page loads successfully
  ✅ [chromium] › Wikipedia › Page title matches expected pattern
  ✅ [chromium] › Wikipedia › Critical UI element is visible
  ✅ [chromium] › Wikipedia › Page has no broken console errors
  ... (21 tests total across 2 browsers)

═══════════════════════════════════════
  PageGuard Health Report
═══════════════════════════════════════
✅ TypeScript           ⚡ 1243ms  HTTP 200
✅ Wikipedia            ⚡ 843ms   HTTP 200
✅ npm Registry         🟡 2341ms  HTTP 200
✅ MDN Web Docs         ⚡ 967ms   HTTP 200
✅ Playwright Docs      ⚡ 721ms   HTTP 200
═══════════════════════════════════════

  21 passed (45.2s)
```

---

## 🎯 What This Project Tests

| Test | Description | Pass Criteria |
|------|-------------|---------------|
| **Page Availability** | HTTP response status | Status 200 |
| **Load Performance** | Time to DOM content loaded | < 5000ms |
| **Title Validation** | Page title matches expected pattern | Regex match |
| **DOM Rendering** | Critical navigation element visible | Element visible |
| **Console Errors** | JavaScript errors on page load | Logged & flagged |
| **Summary Report** | Aggregated health across all sites | All 200 OK |

---

## 🌐 Sites Monitored

| Site | URL | Critical Element |
|------|-----|-----------------|
| TypeScript | typescriptlang.org | `nav` |
| Wikipedia | wikipedia.org | `#www-wikipedia-org` |
| npm Registry | npmjs.com | `header` |
| MDN Web Docs | developer.mozilla.org | `nav` |
| Playwright Docs | playwright.dev | `nav` |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ayovz/PageGuard.git
cd PageGuard

# 2. Install dependencies
npm install

# 3. Install Playwright browsers
npm run test:browsers
```

### Running Tests

```bash
# Run all tests (headless)
npm test

# Run with browser visible
npm run test:headed

# Run on Chromium only
npm run test:chromium

# Run on Firefox only
npm run test:firefox

# Open HTML report after run
npm run test:report

# Debug mode (step through tests)
npm run test:debug
```

---

## 📁 Project Structure

```
📦 PageGuard
 ┣ 📂 tests
 ┃ ┗ 📄 health-check.spec.ts    ← Main test suite
 ┣ 📂 .github
 ┃ ┗ 📂 workflows
 ┃   ┗ 📄 health-check.yml      ← GitHub Actions CI
 ┣ 📂 screenshots                ← Test screenshots (gitignored)
 ┣ 📂 test-results               ← JSON results (gitignored)
 ┣ 📄 playwright.config.ts       ← Playwright configuration
 ┣ 📄 package.json
 ┣ 📄 tsconfig.json
 ┗ 📄 README.md
```

---

## ⚙️ Configuration

Edit the `SITES` array in `tests/health-check.spec.ts` to monitor any website:

```typescript
const SITES: SiteConfig[] = [
  {
    name: 'Your Site',
    url: 'https://yoursite.com',
    expectedTitlePattern: /your site name/i,
    criticalSelector: 'header',   // CSS selector for key element
    maxLoadTimeMs: 8000,          // Fail if slower than this
  },
];
```

Adjust thresholds in `playwright.config.ts`:
```typescript
timeout: 30000,   // Per-test timeout
retries: 1,       // Retry failed tests once
workers: 2,       // Parallel test workers
```

---

## 🤖 Automated Daily Runs (GitHub Actions)

This project runs automatically:

| Trigger | When |
|---------|------|
| **Push to main** | Every code change |
| **Pull Request** | Before merge |
| **Scheduled** | Daily at 8:00 AM UTC |
| **Manual** | Trigger from GitHub Actions tab |

Test reports and failure screenshots are uploaded as
GitHub Actions artifacts and retained for 30 days.

---

## 📊 Sample HTML Report

After running `npm test`, open the HTML report:

```bash
npm run test:report
```

This opens a detailed interactive report showing:
- Pass/fail status per test
- Load time measurements
- Failure screenshots
- Trace viewer for debugging

---

## 🧠 What I Learned Building This

**Testing concepts applied:**
- **E2E test design** — testing real user-facing behaviour not mocked data
- **Test configuration** — multi-browser, parallel execution, retry logic
- **Performance testing** — load time thresholds as acceptance criteria
- **CI/CD integration** — automated test runs on every push
- **Test reporting** — HTML reports, JSON output, artifact storage

**Playwright-specific skills:**
- `page.goto()` with `waitUntil` options
- `expect(page).toHaveTitle()` assertions
- `page.locator().first()` DOM element selection
- `page.on('console')` event monitoring
- `defineConfig()` with multi-project browser setup

---

## 🔧 Extending PageGuard

Ideas for expanding this project:

- [ ] Add response time trending over multiple runs
- [ ] Add SSL certificate expiry checking
- [ ] Add broken link detection per page
- [ ] Add mobile viewport testing
- [ ] Add Slack/email alerting on failure
- [ ] Add custom threshold configuration per site

---

## 👤 Author

**Ayomal Weerasinghe**
Final-year IT Undergraduate, SLIIT

📧 pasinduayomal2001@gmail.com
🔗 [LinkedIn](https://linkedin.com/in/ayomalwee)
💻 [GitHub](https://github.com/ayovz)

---

## 📄 License

MIT — free to use, modify, and distribute.

---

*Part of my QA Automation Portfolio —
[github.com/ayovz/testing-portfolio](https://github.com/ayovz/testing-portfolio)*
