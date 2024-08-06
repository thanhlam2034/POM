import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { CartPage } from '../pages/cart.page';
import { InventoryPage } from '../pages/inventory.page';
import { CheckoutPage } from '../pages/checkout.page';
import { ConfirmationPage } from '../pages/confirmation.page';

test.beforeEach('Go to page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await test.step('Go to URL', async () => {
    await loginPage.gotoUrl();
  })
})

test('TC001 - Verify error message appear when login with invalid user', async ({ page }) => {
  let loginPage = new LoginPage(page);

  await test.step('Login with valid username/ password', async () => {
    await loginPage.inputUsernameAndPassword('locked_out_user', 'secret_sauce');
    await loginPage.clickLoginBtn();
  })

  await test.step('Verify error message is displayed', async () => {
    await loginPage.verifyErrorMessage();
  })
})

test('TC002 - Verify user can order product successfully', async ({ page }) => {
  let loginPage = new LoginPage(page);
  let inventoryPage = new InventoryPage(page);
  let cartPage = new CartPage(page);
  let checkoutPage = new CheckoutPage(page);
  let confirmationPage = new ConfirmationPage(page);
  let firstName = 'Lam'
  let lastName = 'Nguyen'
  let zipCode = '70000'


  await test.step('Login with valid username/ password', async () => {

    await loginPage.inputUsernameAndPassword('standard_user', 'secret_sauce');
    await loginPage.clickLoginBtn();
  })

  await test.step('In inveroty page, add item to cart', async () => {
    await inventoryPage.verifyProductsTitle();
    await inventoryPage.addFirstItemToCart();
    await inventoryPage.verifyItemInCart();
    await inventoryPage.clickShoppingCart();
  })

  await test.step('In cart page, verify pre-added item is visible', async () => {
    await cartPage.verifyItemVisible();
    await cartPage.clickCheckout();
  })

  await test.step('In checkout page, input all required fields', async () => {
    await checkoutPage.inputData(firstName, lastName, zipCode);
    await checkoutPage.verifyValuesInputted(firstName, lastName, zipCode);
    await checkoutPage.clickContinueButton();
    await checkoutPage.clickFinishButton();
  })

  await test.step('Validate thank you message is displayed', async () => {
    await confirmationPage.verifyThankYouMessage();
  })
});

