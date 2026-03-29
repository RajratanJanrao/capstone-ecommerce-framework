import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

// Test: Verify that a valid user can login successfully
test('valid user can login successfully', async ({ page }) => {

    // Initialize Page Object
    const loginPage = new LoginPage(page);

    // Step 1: Navigate to application
    await loginPage.goto();

    // Step 2: Perform login
    await loginPage.login('standard_user', 'secret_sauce');

    // Step 3: Verify login success
    await loginPage.verifyLoginSuccess();
});