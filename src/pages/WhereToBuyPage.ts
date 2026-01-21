import { Page, Locator, expect } from '@playwright/test';
import { Header } from '../components/Header';

export class WhereToBuyPage {
    readonly page: Page;
    readonly header: Header;
    readonly pageHeading: Locator;
    readonly onlineRetailersSection: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = new Header(page);
        // Using strict mode handling
        this.pageHeading = page.locator('h1, h2').filter({ hasText: /Where to Buy/i }).first();
        // Assuming there's a section for retailers
        this.onlineRetailersSection = page.locator('text=Online Retailers').first();
    }

    async isLoaded() {
        await expect(this.page).toHaveURL(/where-to-buy/i);
        await expect(this.pageHeading).toBeVisible();
    }
}
