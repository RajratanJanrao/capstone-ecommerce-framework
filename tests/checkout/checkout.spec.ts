import {test} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { log } from 'node:console';

test('user can successfull checkout an iteam', async({ page }) =>{

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();

    await cartPage.proceedToCheckout();

    await checkoutPage.fillCusomerInfo('Raj', 'QA', '411001');
    await checkoutPage.finishOrder();

    await checkoutPage.verifyOrderSuccess();

    //visual assertion on succcess page
    await checkoutPage.visualCheckOrderSuccess();

});