const { Locator } = require("@playwright/test");

class ProductsPage {
    constructor(page) {
        this.page = page; // Guardamos la instancia de Page
        this.itemsContainer = this.page.locator('#inventory_container .inventory_item');
        this.shoppingCartIcon = this.page.locator('a.shopping_cart_link');
    }

    async addRandomItemToCart() {
        const items = await this.itemsContainer.all();
        const randomIndex = Math.floor(Math.random() * items.length);
        await items[randomIndex].getByRole('button', { name: 'Add to cart' }).click();
    }

    async goToCart() {
        await this.shoppingCartIcon.click();
    }
}

module.exports = { ProductsPage };
