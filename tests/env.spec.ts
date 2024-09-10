import { test } from '@playwright/test';


test('TC001 - Verify error message appear when login with invalid user', async ({ page }) => {
    await page.goto(process.env.BASE_URL!); 
})