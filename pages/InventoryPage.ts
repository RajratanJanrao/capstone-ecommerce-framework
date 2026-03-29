import { Page, expect } from '@playwright/test';

// Page Object Model for Inventory (Products) Page
// Handles product interactions like adding items and navigating to cart
export class InventoryPage {

    // Initialize Playwright page instance
    constructor(private page: Page) {}

    // Add first available product (Backpack) to cart
    // Uses role-based selector for stability instead of CSS classes
    async addBackpackToCart() {
        await this.page
            .getByRole('button', { name: 'Add to cart' })
            .first() // Selects first product's button (Backpack in this case)
            .click();
    }

    // Verify cart badge count reflects number of items added
    // Ensures cart state is correctly updated
    async verifyCartBadgeCount(count: string) {
        await expect(this.page.locator('.shopping_cart_badge')).toHaveText(count);
    }

    // Navigate to cart page
    // Uses stable cart icon selector
    async openCart() {
        await this.page.locator('.shopping_cart_link').click();
    }
}