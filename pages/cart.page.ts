import { expect, type Locator, type Page } from '@playwright/test';
export class CartPage {
    readonly page: Page;
    readonly btnCheckout: Locator;
    readonly cartItemName: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btnCheckout = page.locator('.checkout_button');
        this.cartItemName = page.locator("(//div[@class='inventory_item_name'])[1]");
    }

    async clickCheckout() {
        await this.btnCheckout.click();
    }

    async verifyItemVisible() {
        await expect(this.cartItemName).toBeVisible();
    }
}