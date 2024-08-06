import { expect, type Locator, type Page } from '@playwright/test';
export class ConfirmationPage {
    readonly page: Page;
    readonly txtComplete: Locator;
    readonly completeHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.completeHeader = page.locator('.complete-header');
        this.txtComplete = page.locator('.complete-text');
    }

    async verifyThankYouMessage() {
        await expect(this.completeHeader).toHaveText('Thank you for your order!');
        await expect(this.txtComplete).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    }
}