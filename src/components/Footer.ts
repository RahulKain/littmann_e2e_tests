import { Page, Locator } from '@playwright/test';

export class Footer {
    readonly page: Page;
    readonly contactUsLink: Locator;
    readonly whereToBuyLink: Locator;
    readonly legalInfoLink: Locator;
    readonly privacyPolicyLink: Locator;

    readonly footerContainer: Locator;

    constructor(page: Page) {
        this.page = page;
        this.footerContainer = page.locator('footer');
        // Using getByRole for links found in footer
        // Note: Specific locators might need adjustment based on actual DOM structure if roles are ambiguous
        this.contactUsLink = page.getByRole('link', { name: /^contact us$/i });
        this.whereToBuyLink = page.getByRole('link', { name: /^where to buy$/i });
        // Simplified regex to match "Legal" and "Privacy" exactly as seen in DOM check
        this.legalInfoLink = page.getByRole('link', { name: /^legal$/i });
        this.privacyPolicyLink = page.getByRole('link', { name: /^privacy$/i });
    }

    async scrollIntoView() {
        // Scroll to a key element in the footer instead of container to avoid tag issues
        await this.contactUsLink.scrollIntoViewIfNeeded();
        await expect(this.contactUsLink).toBeVisible();
    }

    async clickContactUs() {
        await this.contactUsLink.click();
    }

    async clickWhereToBuy() {
        await this.whereToBuyLink.click();
    }
}
import { expect } from '@playwright/test';
