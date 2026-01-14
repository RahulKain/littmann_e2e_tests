import { Page, Locator } from '@playwright/test';

export class Footer {
    readonly page: Page;
    readonly contactUsLink: Locator;
    readonly whereToBuyLink: Locator;
    readonly legalInfoLink: Locator;
    readonly privacyPolicyLink: Locator;

    constructor(page: Page) {
        this.page = page;
        // Using getByRole for links found in footer
        // Note: Specific locators might need adjustment based on actual DOM structure if roles are ambiguous
        this.contactUsLink = page.getByRole('link', { name: /contact us/i });
        this.whereToBuyLink = page.getByRole('link', { name: /where to buy/i });
        this.legalInfoLink = page.getByRole('link', { name: /legal information/i });
        this.privacyPolicyLink = page.getByRole('link', { name: /privacy policy/i });
    }

    async clickContactUs() {
        await this.contactUsLink.click();
    }

    async clickWhereToBuy() {
        await this.whereToBuyLink.click();
    }
}
