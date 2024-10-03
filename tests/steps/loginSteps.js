const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { expect } = require('@playwright/test'); // Importa expect para las aserciones
const { LoginPage } = require('../pageobjects/LoginPage');
const { ProductsPage } = require('../pageobjects/ProductsPage');
const { CartPage } = require('../pageobjects/CartPage');
const { CheckoutInfoPage } = require('../pageobjects/CheckoutInfoPage');
const { CheckoutOverviewPage } = require('../pageobjects/CheckoutOverviewPage');
const { CheckoutCompletePage } = require('../pageobjects/CheckoutCompletePage');

Given('I am on the SauceDemo login page', async function () {
    this.browser = await chromium.launch({ headless: false });
    this.page = await this.browser.newPage();
    this.loginPage = new LoginPage(this.page);
    await this.page.goto('https://saucedemo.com/');
});

When('I login with valid credentials', async function () {
    await this.loginPage.loginWithCredentials('standard_user', 'secret_sauce');
});

When('I select a random item to purchase', async function () {
    this.productsPage = new ProductsPage(this.page);
    await this.productsPage.addRandomItemToCart();
});

When('I proceed to checkout', async function () {
    await this.productsPage.goToCart();
    this.cartPage = new CartPage(this.page);
    await this.cartPage.proceedToCheckout();

    this.checkoutInfoPage = new CheckoutInfoPage(this.page);
    await this.checkoutInfoPage.fillCheckoutInfo('Esteban', 'Huarcaya Curo', '5001');

    this.checkoutOverviewPage = new CheckoutOverviewPage(this.page);
    await this.checkoutOverviewPage.clickFinish();
});

Then('I should see the confirmation message', async function () {
    this.checkoutCompletePage = new CheckoutCompletePage(this.page);
    const message = await this.checkoutCompletePage.getConfirmationMessage();
    expect(message).toContain('Thank you for your order!'); // Usa expect para la verificación
    await this.browser.close();
});
