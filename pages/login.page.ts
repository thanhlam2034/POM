import { expect } from "@playwright/test";
import { Locator, Page } from "playwright";

export class LoginPage {
    readonly page: Page;
    readonly usernameTxt: Locator;
    readonly passwordTxt: Locator;
    readonly loginBtn: Locator;
    readonly errorLbl: Locator;
    constructor(page: Page) {
        this.page = page;
        this.usernameTxt = page.locator('[data-test="username"]');
        this.passwordTxt = page.locator('[data-test="password"]');
        this.loginBtn = page.locator('[data-test="login-button"]');
        this.errorLbl = page.locator('[data-test="error"]');
    }

    // Go to page
    async gotoUrl() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    // input username and password
    async inputUsernameAndPassword(username: string, password: string) {
        await this.usernameTxt.fill(username);
        await this.passwordTxt.fill(password);
    }

    // click on Login button
    async clickLoginBtn() {
        await this.loginBtn.click();
    }

    async getContenntErrorLbl() {
        var error = this.errorLbl;
        var content = error.textContent();
        return content;
    }

    async verifyErrorMessage() {
        await expect(this.errorLbl).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    }
}