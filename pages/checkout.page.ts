
import { expect, type Locator, type Page } from '@playwright/test';
export class CheckoutPage {
    readonly page: Page;
    readonly txtFirstName: Locator;
    readonly txtLastName: Locator;
    readonly txtZipCode: Locator;
    readonly btnContinue: Locator;
    readonly btnFinish: Locator;

    constructor(page: Page) {
        this.page = page;
        this.txtFirstName = page.locator('#first-name');
        this.txtLastName = page.locator('#last-name');
        this.txtZipCode = page.locator('#postal-code');
        this.btnContinue = page.locator('.cart_button');
        this.btnFinish = page.locator('.btn_action.cart_button');

    }
    async inputData(firstName, lastName, zipCode) {
        await this.txtFirstName.fill(firstName);
        await this.txtLastName.fill(lastName);
        await this.txtZipCode.fill(zipCode);
    }
    async verifyValuesInputted(firstName, lastName, zipCode) {
        await expect(this.txtFirstName).toHaveValue(firstName);
        await expect(this.txtLastName).toHaveValue(lastName);
        await expect(this.txtZipCode).toHaveValue(zipCode);

    }
    async clickContinueButton() {
        await this.btnContinue.click();
    }
    async clickFinishButton() {
        await this.btnFinish.click();
    }
}
