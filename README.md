# 🧪 Playwright E-Commerce Automation Framework

## 📌 Overview
This project is a production-grade end-to-end test automation framework built using Playwright and TypeScript. It validates critical e-commerce user flows such as login, add-to-cart, and checkout.

The framework is designed to be scalable, maintainable, and CI/CD-ready, following industry best practices.

---

## 🚀 Features

- ✅ Page Object Model (POM) architecture
- ✅ Parallel test execution
- ✅ Visual regression testing (with tolerance handling)
- ✅ Retry mechanism for flaky tests
- ✅ CI/CD integration using GitHub Actions
- ✅ HTML reports with screenshots, traces, and diffs
- ✅ Cross-browser support (Chromium)

---

## 🧱 Project Structure
tests/
login/
cart/
checkout/

pages/
fixtures/
utils/

.github/workflows/

playwright.config.ts
README.md


---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone <your-repo-url>
cd capstone-ecommerce-framework
2. Install Dependencies
npm install
3. Install Browsers
npx playwright install
▶️ Running Tests
Run all tests
npx playwright test
Run in headed mode
npx playwright test --headed
Debug mode
npx playwright test --debug
📊 Test Reports

After execution, open HTML report:

npx playwright show-report

In CI (GitHub Actions), reports are available as downloadable artifacts.

🖼️ Visual Testing
Implemented using toHaveScreenshot()
Includes tolerance (maxDiffPixelRatio) to handle CI rendering differences
Helps detect UI regressions such as layout shifts and missing elements
⚡ CI/CD Integration

This project uses GitHub Actions to:

Run tests on every push and pull request
Execute tests in parallel
Upload HTML reports, screenshots, and traces as artifacts
🧠 Key Learnings
Handling cross-platform snapshot issues (Windows vs Linux)
Managing visual test flakiness using tolerance
Debugging CI failures and updating deprecated actions
Building scalable automation frameworks using Playwright
🔮 Future Improvements
Docker-based test execution
Multi-role authentication testing
API testing using Playwright request
Integration with visual testing tools (Percy/Applitools)
👨‍💻 Author

Developed as part of a Playwright automation capstone project.
