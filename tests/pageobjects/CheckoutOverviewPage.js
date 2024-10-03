// checkoutOverviewPage.js
class CheckoutOverviewPage {
    constructor(page) {
        this.page = page;
        this.finishButton = this.page.getByRole('button', { name: 'Finish' });
    }

    async clickFinish() {
        await this.finishButton.click();
    }
}

module.exports = { CheckoutOverviewPage };
