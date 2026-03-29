import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';

// Test: Verify user can add item to cart and validate cart summary
test('user can add item to cart and verify cart summary', async ({ page }) => {

    // Initialize Page Objects
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    // Step 1: Navigate and login
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    // Validate login success (important for test reliability)
    await loginPage.verifyLoginSuccess();

    // Step 2: Add product to cart
    await inventoryPage.addBackpackToCart();

    // Verify cart badge updates correctly
    await inventoryPage.verifyCartBadgeCount('1');

    // Step 3: Navigate to cart
    await inventoryPage.openCart();

    // Verify correct item is present in cart
    await cartPage.verifyItemInCart('Sauce Labs Backpack');

    // Step 4: Perform visual regression check on cart summary
    await cartPage.visualCheckCartSummary();
});