import {Page, expect} from '@playwright/test';

export class CartPage{

    constructor (private page: Page){}

    async verifyItemInCart(itemName: string){
        await expect(this.page.getByText(itemName)).toBeVisible();
    }

    async visualCheckCartSummary(){
        await expect(this.page.locator('.cart_list'))
            .toHaveScreenshot('cart-summary.png', {
                maxDiffPixelRatio: 0.02
            });
    }

    async proceedToCheckout(){
        await this.page.getByRole('button', {name: 'Checkout'}).click();
    }
}