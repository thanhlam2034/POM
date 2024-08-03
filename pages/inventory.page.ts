import { expect, type Locator, type Page } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly txtTitle: Locator;
    readonly btnCartBadge: Locator;
    readonly btnShopingCartLink: Locator;
    readonly btnAddToCart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.txtTitle = page.locator('span.title');
        this.btnAddToCart = page.locator(`//div[@class="inventory_item"][1]//button`);
        this.btnCartBadge = page.locator('.shopping_cart_badge');
        this.btnShopingCartLink = page.locator('.shopping_cart_link');
    }

    async verifyProductsTitle() {
        await expect(this.txtTitle).toHaveText('Products');
    }

    async addFirstItemToCart() {
        await this.btnAddToCart.click();
    }

    async verifyItemInCart() {
        await expect(this.btnCartBadge).toHaveText('1');
    }
    async clickShoppingCart() {
        await this.btnShopingCartLink.click();
    }
}