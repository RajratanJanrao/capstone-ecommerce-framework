import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

// Test: Verify user can complete checkout successfully
test('user can successfully checkout an item', async ({ page }) => {

    // Initialize Page Objects
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Step 1: Navigate and login
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    // Validate login success (prevents cascading failures)
    await loginPage.verifyLoginSuccess();

    // Step 2: Add item to cart
    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();

    // Step 3: Proceed to checkout
    await cartPage.proceedToCheckout();

    // Step 4: Fill customer details and complete order
    await checkoutPage.fillCustomerInfo('Raj', 'QA', '411001');
    await checkoutPage.finishOrder();

    // Step 5: Verify order success
    await checkoutPage.verifyOrderSuccess();

    // Step 6: Visual regression check on success page
    await checkoutPage.visualCheckOrderSuccess();
});