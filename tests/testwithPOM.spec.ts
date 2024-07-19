import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';

test('test with POM', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await loginPage.gotoUrl();
    await loginPage.inputUsernameAndPassword('practice', 'SuperSecretPassword!');
    await loginPage.clickLoginBtn();
    const contentLoggerLbl = await homePage.getLoggerLabelContent();
    await page.waitForTimeout(3000);
    expect(contentLoggerLbl).toEqual('You logged into a secure area!');
})