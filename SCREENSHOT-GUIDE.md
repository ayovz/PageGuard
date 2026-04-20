# 📸 PageGuard — Screenshot Guide
## Exactly What to Capture and How

This guide tells you the exact screenshots to take,
in what order, for maximum portfolio impact.

---

## SCREENSHOT 1 — Project Structure in VS Code
**What:** Your VS Code editor showing the full file tree open
**Why:** Proves you set up a real project, not a single file

Steps:
1. Open the PageGuard folder in VS Code
2. Expand ALL folders in the file explorer panel
3. Open health-check.spec.ts in the editor
4. Make sure the SITES array is visible in the code
5. Take screenshot of the full VS Code window

Filename: `01-project-structure.png`

---

## SCREENSHOT 2 — Terminal: npm install running
**What:** Terminal showing Playwright installing
**Why:** Shows real setup process

Steps:
1. Open terminal in VS Code (Ctrl + `)
2. Run: npm install
3. Screenshot while it's downloading packages
4. Should show progress bars or package names installing

Filename: `02-npm-install.png`

---

## SCREENSHOT 3 — Terminal: Playwright browser install
**What:** Terminal showing browser download
**Why:** Shows Playwright-specific setup

Steps:
1. Run: npx playwright install
2. Screenshot showing "Downloading Chromium" or similar
3. The progress percentage makes a great screenshot

Filename: `03-playwright-install.png`

---

## SCREENSHOT 4 — Tests RUNNING in terminal
**What:** Terminal mid-run showing tests executing
**Why:** The most important screenshot — proves tests actually run

Steps:
1. Run: npm test
2. Screenshot while tests are actively running
3. You want to capture the green checkmarks appearing
4. Show at least 5-6 passing tests visible

What good output looks like:
```
Running 21 tests using 2 workers

  ✓ [chromium] PageGuard › GitHub › Page loads (1.2s)
  ✓ [chromium] PageGuard › GitHub › Title matches (0.8s)
  ✓ [firefox]  PageGuard › Stack Overflow › Loads (1.4s)
  ...
```

Filename: `04-tests-running.png`

---

## SCREENSHOT 5 — Full Test Results (Pass)
**What:** Complete terminal output showing all tests passed
**Why:** The proof — all green, all passing

Steps:
1. Wait for full test run to complete
2. Scroll up to show the full summary
3. You want to see "X passed" at the bottom
4. Capture the Health Report table if visible

What to capture:
```
═══════════════════════════════════════
  PageGuard Health Report
═══════════════════════════════════════
✅ GitHub               ⚡ 843ms   HTTP 200
✅ Stack Overflow       ⚡ 1204ms  HTTP 200
...

  21 passed (18.3s)
```

Filename: `05-all-tests-passed.png`

---

## SCREENSHOT 6 — HTML Report
**What:** The Playwright HTML report in browser
**Why:** Professional test reporting — shows you know real QA tools

Steps:
1. Run: npm run test:report
2. Browser opens automatically with the report
3. Screenshot the overview page showing all tests
4. Click on one passing test to show the detail view
5. Take a second screenshot of the detail view

Filename: `06-html-report-overview.png`
Filename: `06b-html-report-detail.png`

---

## SCREENSHOT 7 — GitHub Actions (Most Impressive)
**What:** Your GitHub Actions tab showing green workflow run
**Why:** Proves CI/CD integration — this is senior-level thinking

Steps:
1. Push your code to GitHub
2. Go to your repo → Actions tab
3. Wait for the workflow to complete (5-10 minutes)
4. Screenshot the green checkmark on the workflow run
5. Click into the run and screenshot the job details

Filename: `07-github-actions-green.png`

---

## SCREENSHOT 8 — Code Highlight (Optional but Good)
**What:** Close-up of your most impressive code section
**Why:** Shows you can write clean, typed TypeScript

Best section to screenshot:
The SiteConfig interface + SITES array at the top of the file.
This shows TypeScript typing which is impressive for an intern.

Steps:
1. In VS Code, highlight lines 1-45 of health-check.spec.ts
2. Make font size larger (Ctrl + = twice)
3. Screenshot just the code panel

Filename: `08-typed-code.png`

---

## HOW TO ADD SCREENSHOTS TO README

After taking screenshots, add them to your README like this:

```markdown
## 📸 Test Results

### Running in Terminal
![Tests Running](screenshots/04-tests-running.png)

### All Tests Passing
![All Passed](screenshots/05-all-tests-passed.png)

### HTML Report
![HTML Report](screenshots/06-html-report-overview.png)

### GitHub Actions CI
![CI Green](screenshots/07-github-actions-green.png)
```

---

## PRIORITY ORDER

If you only have time for 3 screenshots, take these:

1. Screenshot 5 — All tests passed (terminal)
2. Screenshot 7 — GitHub Actions green
3. Screenshot 6 — HTML report

These three together = compelling portfolio evidence.
