import {Page, expect} from '@playwright/test';

export class CheckoutPage{
    constructor(private page: Page){}

    async fillCusomerInfo(first: string, last: string, zip: string){
        await this.page.getByPlaceholder('First Name').fill(first);
        await this.page.getByPlaceholder('Last Name').fill(last);
        await this.page.getByPlaceholder('Zip/Postal Code').fill(zip);

        await this.page.getByRole('button', {name: 'Continue'}).click();
    }

    async finishOrder(){
        await this.page.getByRole('button', {name: 'Finish'}).click();
    }

    async verifyOrderSuccess(){
        await expect(this.page.getByText('Thank you for your order')).toBeVisible();
    }

    async visualCheckOrderSuccess(){
        await expect(this.page.locator('#checkout_complete_container'))
            .toHaveScreenshot('checkout-success.png');
    }
}