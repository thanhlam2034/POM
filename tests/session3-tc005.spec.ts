import { test, expect } from '@playwright/test'

//Test case 5
test.skip('TC005 - Verify Upload file using hard code path file', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', { name: 'File Upload' }).click();
    await expect(page.getByRole('heading', { name: 'File Uploader' })).toBeVisible();

    // Path file: form hard code path file
    await page.locator('#file-upload').setInputFiles('/Users/lamtn/Documents/1.jpg');


    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByText('1.jpg')).toBeVisible();
})


//Test case 5
test('TC005 - Verify Upload file using file store in project', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', { name: 'File Upload' }).click();
    await expect(page.getByRole('heading', { name: 'File Uploader' })).toBeVisible();

    // Path file: from project
    await page.locator('#file-upload').setInputFiles('./data/1.jpg');

    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByText('1.jpg')).toBeVisible();
})


