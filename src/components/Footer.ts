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
        // Verified by browser agent: Footer is a div with class 'm-footer'
        this.footerContainer = page.locator('.m-footer').first();

        // Scope all links to the footer container to avoid matching Header links
        this.contactUsLink = this.footerContainer.getByRole('link', { name: /^contact us$/i });
        this.whereToBuyLink = this.footerContainer.getByRole('link', { name: /^where to buy$/i });
        this.legalInfoLink = this.footerContainer.getByRole('link', { name: /^legal$/i });
        this.privacyPolicyLink = this.footerContainer.getByRole('link', { name: /^privacy$/i });
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
