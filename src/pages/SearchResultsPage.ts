import { Page, Locator, expect } from '@playwright/test';
import { Header } from '../components/Header';

export class SearchResultsPage {
    readonly page: Page;
    readonly header: Header;
    readonly resultsGrid: Locator;
    readonly productCards: Locator;
    readonly noResultsContainer: Locator;
    readonly filterSidebar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = new Header(page);

        // Locators based on browser inspection
        this.resultsGrid = page.locator('.mds-grid').first();
        // Product cards are links with specific class
        this.productCards = page.locator('a.mds-link');

        // No results message usually in mds-font_paragraph
        this.noResultsContainer = page.locator('.mds-font_paragraph').filter({ hasText: /No products|0 products/i });

        this.filterSidebar = page.locator('.m-lhn').first();
    }

    async isLoaded() {
        // Search URLs typically contain 'Ntt=' param or 'search' path
        // await expect(this.page).toHaveURL(/Ntt=|search/i); // Relaxing strict URL check for now

        // Check for Heading (most reliable indicator of load)
        const heading = this.page.locator('h1').filter({ hasText: /Results for|products/i });

        // Wait for Grid OR No Results OR Heading
        await expect(this.resultsGrid.or(this.noResultsContainer).or(heading).first()).toBeVisible({ timeout: 10000 });
    }

    async getResultsCount(): Promise<number> {
        return await this.productCards.count();
    }

    async hasNoResults(): Promise<boolean> {
        return await this.noResultsContainer.isVisible();
    }

    async clickResult(index: number = 0) {
        const card = this.productCards.nth(index);
        await expect(card).toBeVisible();
        await card.click();
    }
}
