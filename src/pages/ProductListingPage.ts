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
    readonly productCards: Locator;
    readonly clearFiltersButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = new Header(page);
        this.footer = new Footer(page);

        // Locators
        this.pageHeading = page.getByRole('heading', { level: 1 });

        // Filters sidebar - navigation with "Filtering Options" aria-label
        this.filtersSection = page.locator('navigation[aria-label*="Filtering"]').first();

        // Product grid wrapper - main element containing product links
        this.productGrid = page.locator('main').first();

        // Product cards (links to products) - links inside main
        this.productCards = page.locator('main a[href*="/p/d/"]');

        // Clear filters button
        this.clearFiltersButton = page.getByRole('button', { name: /clear|reset/i });
    }

    async isLoaded() {
        await expect(this.page).toHaveURL(/\/p\//);
        await expect(this.pageHeading).toBeVisible();
        await expect(this.productGrid).toBeVisible();
    }

    async getProductCount(): Promise<number> {
        return await this.productCards.count();
    }

    async filterByCategory(category: string) {
        // Click on category filter in sidebar
        const categoryButton = this.filtersSection.getByRole('button', { name: new RegExp(category, 'i') });
        await categoryButton.click();
        // Wait for grid to update
        await this.page.waitForTimeout(1000);
    }

    async filterByColor(color: string) {
        // Expand color filter section if needed
        const colorSection = this.filtersSection.getByText(/color/i).first();
        if (await colorSection.isVisible()) {
            await colorSection.click();
        }

        // Select color
        const colorOption = this.filtersSection.getByRole('button', { name: new RegExp(color, 'i') });
        await colorOption.click();
        await this.page.waitForTimeout(1000);
    }

    async clearFilters() {
        if (await this.clearFiltersButton.isVisible()) {
            await this.clearFiltersButton.click();
            await this.page.waitForTimeout(1000);
        }
    }

    async getProductCardDetails(index: number = 0) {
        const card = this.productCards.nth(index);
        const title = await card.locator('p').first().innerText();
        const image = card.locator('img').first();
        const isImageVisible = await image.isVisible();

        return {
            title,
            hasImage: isImageVisible
        };
    }

    async selectFirstProduct() {
        const firstCard = this.productCards.first();
        await expect(firstCard).toBeVisible();
        await firstCard.click();
    }

    async selectProductByIndex(index: number) {
        const card = this.productCards.nth(index);
        await expect(card).toBeVisible();
        await card.click();
    }
}
