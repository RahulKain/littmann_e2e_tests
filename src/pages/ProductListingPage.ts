import { Page, Locator, expect } from '@playwright/test';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export class ProductListingPage {
    readonly page: Page;
    readonly header: Header;
    readonly footer: Footer;

    readonly pageHeading: Locator;
    readonly filtersSection: Locator;
    readonly productGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = new Header(page);
        this.footer = new Footer(page);

        // Locators - using loose matchers initially
        this.pageHeading = page.getByRole('heading', { level: 1 });

        // Filters usually in a sidebar or top bar
        this.filtersSection = page.locator('.filter-container, #filters, aside');

        // Product grid wrapper
        this.productGrid = page.locator('.product-grid, .grid-layout, [role="list"]');
    }

    async isLoaded() {
        await expect(this.page).toHaveURL(/\/p\//);
        await expect(this.pageHeading).toBeVisible();
    }

    async selectFirstProduct() {
        // Use text-based filtering which is more robust than guessing CSS classes
        // Based on debug output: "3M™ Littmann® Classic III™ Monitoring Stethoscope..."
        const productLink = this.page.locator('a').filter({ hasText: /Classic III|Cardiology IV|Master Cardiology/i }).first();

        try {
            await productLink.waitFor({ state: 'visible', timeout: 5000 });
            await productLink.click();
        } catch (e) {
            console.log('TC011: Failed to find product link via text. Dumping ALL links...');
            const links = await this.page.evaluate(() => Array.from(document.querySelectorAll('a')).map(a => a.innerText));
            console.log('VISIBLE LINKS:', links.join(' | '));
            throw e;
        }
    }
}
