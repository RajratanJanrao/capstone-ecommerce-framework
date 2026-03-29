import { Page, expect } from '@playwright/test';

// Page Object Model for Checkout Page
// Encapsulates all interactions related to checkout flow
export class CheckoutPage {

    // Initialize Playwright page instance
    constructor(private page: Page) {}

    // Fill customer information form and proceed to next step
    // Uses semantic selectors for better stability
    async fillCustomerInfo(first: string, last: string, zip: string) {
        await this.page.getByPlaceholder('First Name').fill(first);
        await this.page.getByPlaceholder('Last Name').fill(last);
        await this.page.getByPlaceholder('Zip/Postal Code').fill(zip);

        // Continue to overview step
        await this.page.getByRole('button', { name: 'Continue' }).click();
    }

    // Complete the order by clicking Finish button
    async finishOrder() {
        await this.page.getByRole('button', { name: 'Finish' }).click();
    }

    // Verify successful order confirmation message
    // Ensures user has reached final success page
    async verifyOrderSuccess() {
        await expect(this.page.getByText('Thank you for your order!')).toBeVisible();
    }

    // Perform visual regression check on checkout success section
    // Tolerance is used to avoid false failures due to minor CI rendering differences
    async visualCheckOrderSuccess() {
        await expect(this.page.locator('#checkout_complete_container'))
            .toHaveScreenshot('checkout-success.png', {
                maxDiffPixelRatio: 0.02 // Allows small visual differences across environments
            });
    }
}