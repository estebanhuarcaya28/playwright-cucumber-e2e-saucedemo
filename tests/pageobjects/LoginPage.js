const { Locator } = require("@playwright/test");

class LoginPage {
    constructor(page) {
        this.page = page; // Guardamos la instancia de Page
        this.usernameTextbox = this.page.getByRole('textbox', { name: 'Username' });
        this.passwordTextbox = this.page.getByRole('textbox', { name: 'Password' });
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
    }

    async fillUsername(username) {
        await this.usernameTextbox.fill(username);
    }

    async fillPassword(password) {
        await this.passwordTextbox.fill(password);
    }

    async clickOnLogin() {
        await this.loginButton.click();
    }

    async loginWithCredentials(username, password) {
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickOnLogin();
    }
}

module.exports = { LoginPage };
