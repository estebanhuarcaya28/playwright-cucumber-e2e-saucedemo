const { Locator } = require("@playwright/test");

class CheckoutInfoPage {
    constructor(page) {
        this.page = page; // Guardamos la instancia de Page
        this.firstNameTextbox = this.page.getByRole('textbox', { name: 'First Name' });
        this.lastNameTextbox = this.page.getByRole('textbox', { name: 'Last Name' });
        this.zipCodeTextbox = this.page.getByRole('textbox', { name: 'Zip/Postal Code' });
        this.continueButton = this.page.getByRole('button', { name: 'Continue' });
    }

    async fillCheckoutInfo(firstName, lastName, zipCode) {
        await this.firstNameTextbox.fill(firstName);
        await this.lastNameTextbox.fill(lastName);
        await this.zipCodeTextbox.fill(zipCode);
        await this.continueButton.click();
    }
}

module.exports = { CheckoutInfoPage };
