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
        // Register handler for the cookie dialog to settle it whenever it appears
        const acceptBtn = this.page.getByRole('button', { name: 'Accept Cookies' });
        const rejectBtn = this.page.getByRole('button', { name: 'Reject Non-Essential Cookies' });

        await this.page.addLocatorHandler(acceptBtn, async () => {
            console.log('Locator Handler: Accepting cookies...');
            await acceptBtn.click();
        });

        await this.page.addLocatorHandler(rejectBtn, async () => {
            console.log('Locator Handler: Rejecting cookies...');
            await rejectBtn.click();
        });

        await this.page.goto('/');
        await this.page.waitForLoadState('load');
    }

    // Deprecated manual method, keeping as fallback or utility if needed
    async acceptCookies() {
        // Logic moved to addLocatorHandler in navigate()
    }

    async isLoaded() {
        await expect(this.page).toHaveTitle(/Littmann/i);
        await expect(this.heroSection).toBeVisible();
    }
}
