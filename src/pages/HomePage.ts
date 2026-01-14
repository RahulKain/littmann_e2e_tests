import { Page, Locator, expect } from '@playwright/test';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export class HomePage {
    readonly page: Page;
    readonly header: Header;
    readonly footer: Footer;
    readonly heroSection: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = new Header(page);
        this.footer = new Footer(page);

        // Hero section locator - using a stable characteristic if possible
        // Based on exploration, there might be a "Learn More" button or specific heading
        this.heroSection = page.locator('.hero').or(page.getByRole('heading', { level: 1 })).first();
    }

    async navigate() {
        await this.page.goto('/');
        await this.page.waitForLoadState('load');
    }

    async isLoaded() {
        await expect(this.page).toHaveTitle(/Littmann/i);
        await expect(this.heroSection).toBeVisible();
    }
}
