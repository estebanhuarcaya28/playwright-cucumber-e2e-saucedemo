const { expect } = require("@playwright/test");

class CartPage {
    constructor(page) {
        this.page = page; // Guardamos la instancia de Page
        this.checkoutButton = this.page.getByRole('button', { name: 'Checkout' });
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }

    async verifyCartContainsItem(expectedName) {
        const actualName = await this.page.locator('.inventory_item_name').innerText();
        expect(actualName).toEqual(expectedName);
    }
}

module.exports = { CartPage };
