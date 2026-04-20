# 🚀 PageGuard — Complete Build Workflow
## Step-by-Step From Zero to GitHub

---

## PHASE 1 — LOCAL SETUP (30 minutes)

### Step 1: Create the project folder
```bash
mkdir PageGuard
cd PageGuard
```

### Step 2: Initialise npm
```bash
npm init -y
```

### Step 3: Install Playwright
```bash
npm install -D @playwright/test typescript @types/node
```

### Step 4: Install Playwright browsers
```bash
npx playwright install
```
⏳ This downloads Chromium and Firefox (~200MB). Let it run.

### Step 5: Create the folder structure
```bash
mkdir tests
mkdir screenshots
mkdir -p .github/workflows
```

### Step 6: Create all project files
Copy in these files exactly as provided:
- tests/health-check.spec.ts
- playwright.config.ts
- tsconfig.json
- .github/workflows/health-check.yml
- .gitignore
- README.md

---

## PHASE 2 — RUN LOCALLY (15 minutes)

### Step 7: Run tests for the first time
```bash
npm test
```

Expected output:
```
Running 21 tests using 2 workers
✓ GitHub › Page loads successfully
✓ GitHub › Title matches
...
21 passed (18.3s)
```

### Step 8: Fix any failures

Common issues and fixes:

**Issue: Selector not found**
```
Error: locator('#header') strict mode violation
```
Fix: Change criticalSelector to a broader selector like 'nav' or 'header'

**Issue: Timeout**
```
Error: Timeout 5000ms exceeded
```
Fix: Increase maxLoadTimeMs to 8000 for slow sites

**Issue: Title mismatch**
```
Error: Page title "Stack Overflow - Where Developers Learn"
       did not match /stack overflow/i
```
Fix: Your regex is fine — this usually means the page didn't load.
     Increase the timeout in playwright.config.ts to 60000

### Step 9: Open and review the HTML report
```bash
npm run test:report
```
This opens a browser with a full interactive report.
Take your screenshots here.

### Step 10: Run in headed mode to watch tests execute
```bash
npm run test:headed
```
Watch Chromium open and visit each site.
Good for understanding what Playwright is doing.

---

## PHASE 3 — PUSH TO GITHUB (15 minutes)

### Step 11: Create a new GitHub repository
1. Go to github.com/new
2. Repository name: `PageGuard`
3. Description: `Automated website health monitoring suite using Playwright E2E testing`
4. Set to Public
5. Do NOT initialise with README (you have your own)
6. Click Create repository

### Step 12: Initialise git locally
```bash
git init
git add .
git commit -m "feat: initial PageGuard health check suite

- 5 website targets monitored
- 4 test types per site: availability, title, DOM, console
- Summary health report with load times
- Multi-browser: Chromium + Firefox
- GitHub Actions CI with daily scheduled runs"
```

### Step 13: Push to GitHub
```bash
git remote add origin https://github.com/ayovz/PageGuard.git
git branch -M main
git push -u origin main
```

### Step 14: Watch GitHub Actions run
1. Go to your repo on GitHub
2. Click the Actions tab
3. You should see "PageGuard Health Check" running
4. Wait 5-10 minutes for it to complete
5. Should show a green checkmark ✅
6. Take your screenshot here

### Step 15: Add screenshots to the README
1. Run tests locally
2. Take screenshots following SCREENSHOT-GUIDE.md
3. Add screenshots/ folder to your repo
4. Update README.md with actual screenshot images
5. Commit and push:

```bash
git add screenshots/
git add README.md
git commit -m "docs: add test result screenshots to README"
git push
```

---

## PHASE 4 — POLISH (15 minutes)

### Step 16: Pin the repo on your GitHub profile
1. Go to your GitHub profile (github.com/ayovz)
2. Click "Customize your pins"
3. Select PageGuard
4. Save

### Step 17: Add a repository topic/tag
In your repo → Settings → Topics, add:
- playwright
- e2e-testing
- typescript
- qa-automation
- website-monitoring

### Step 18: Update your testing-portfolio README
Link to PageGuard from your main testing-portfolio repo.

---

## TOTAL TIME ESTIMATE

| Phase | Time |
|-------|------|
| Local setup | 30 min |
| Run & debug | 15 min |
| Push to GitHub | 15 min |
| Polish | 15 min |
| **Total** | **~75 minutes** |

---

## COMMON ERRORS & FIXES

| Error | Cause | Fix |
|-------|-------|-----|
| `Cannot find module '@playwright/test'` | npm install not run | Run `npm install` |
| `browserType.launch: Executable doesn't exist` | Browsers not installed | Run `npx playwright install` |
| `Timeout 30000ms exceeded` | Site too slow | Increase timeout in config |
| `strict mode violation` | Multiple elements match selector | Use `.first()` or more specific selector |
| `net::ERR_CONNECTION_REFUSED` | Site is down or blocked | Check site manually, update SITES array |
