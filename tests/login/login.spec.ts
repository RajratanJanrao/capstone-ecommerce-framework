import {test} from '@playwright/test';
import { LoginPage} from '../../pages/LoginPage';

test('valid user can login succesfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.verifyLoginSuccess();
});