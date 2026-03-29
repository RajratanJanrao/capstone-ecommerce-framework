import { Page, expect } from '@playwright/test';

// Page Object Model for Login Page
// Handles navigation, authentication, and login validations
export class LoginPage {

    // Initialize Playwright page instance
    constructor(private page: Page) {}

    // Navigate to application base URL
    async goto() {
        await this.page.goto('/');
    }

    // Perform login using provided credentials
    // Uses semantic selectors for better stability and readability
    async login(username: string, password: string) {
        await this.page.getByPlaceholder('Username').fill(username);
        await this.page.getByPlaceholder('Password').fill(password);
        await this.page.getByRole('button', { name: 'Login' }).click();
    }

    // Verify successful login by checking URL and page content
    // Ensures user is redirected to inventory/dashboard page
    async verifyLoginSuccess() {
        await expect(this.page).toHaveURL(/inventory/);
        await expect(this.page.getByText('Products')).toBeVisible();
    }
}