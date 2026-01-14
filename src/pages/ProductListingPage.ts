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
}
