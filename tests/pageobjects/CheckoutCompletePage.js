// checkoutCompletePage.js
class CheckoutCompletePage {
    constructor(page) {
        this.page = page;
        this.confirmationMessage = this.page.locator('h2.complete-header'); // Selector del mensaje de confirmación
    }

    async getConfirmationMessage() {
        return await this.confirmationMessage.innerText();
    }
}

module.exports = { CheckoutCompletePage };
