import { test, expect } from '@playwright/test';

test('Print url & username & password base on env', async ({ page }) => {
    console.log("URL: " + process.env.BASE_URL);
    console.log("Username: " + process.env.USERNAME);
    console.log("Password: " + process.env.PASSWORD);
});

test('Go to page base on env', async ({ page }) => {
    await page.goto(process.env.BASE_URL!);
    await page.waitForTimeout(3000);
})