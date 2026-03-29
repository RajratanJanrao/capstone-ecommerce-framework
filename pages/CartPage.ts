import { Page, expect } from '@playwright/test';

// Page Object Model for Cart Page
export class CartPage {

    // Constructor initializes Playwright page instance
    constructor(private page: Page) {}

    // Verify that a specific item is visible in the cart
    async verifyItemInCart(itemName: string) {
        await expect(this.page.getByText(itemName)).toBeVisible();
    }

    // Perform visual regression check on cart summary section
    // Uses tolerance to handle minor rendering differences in CI environments
    async visualCheckCartSummary() {
        await expect(this.page.locator('.cart_list'))
            .toHaveScreenshot('cart-summary.png', {
                maxDiffPixelRatio: 0.02 // Allow small visual differences (cross-platform stability)
            });
    }

    // Click on Checkout button to proceed to next step
    async proceedToCheckout() {
        await this.page.getByRole('button', { name: 'Checkout' }).click();
    }
}