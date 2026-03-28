import {test} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';

test('user can add item to the cart and verify cart summary', async ({page}) =>{

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.addBackpackToCart();
    await inventoryPage.verifyCartBadgeCount('1');

    await inventoryPage.openCart();

    await cartPage.verifyItemInCart('Sauce Labs Backpack');

    //visual regression baseline
    await cartPage.visualCheckCartSummary();
});
