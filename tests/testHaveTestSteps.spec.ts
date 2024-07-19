import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';

test('test have test steps', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await test.step('Login with valid username/ password', async () => {
        await loginPage.gotoUrl();
        await loginPage.inputUsernameAndPassword('practice', 'SuperSecretPassword!');
        await loginPage.clickLoginBtn();
    })

    await test.step('Verify You logged into a secure area! is displayed', async () => {
        const contentLoggerLbl = await homePage.getLoggerLabelContent();
        expect(contentLoggerLbl).toEqual('You logged into a secure area!');
    })

})