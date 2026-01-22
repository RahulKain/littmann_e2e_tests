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

        // Locators - using most reliable selectors
        this.pageHeading = page.locator('h1');
        this.filtersSection = page.locator('.sps2-lhn_content, aside, nav').first();
        this.productGrid = page.locator('body'); // Fallback to body since grid class varies
        this.productCards = page.locator('a[href*="/p/d/"]'); // Product detail links
        this.clearFiltersButton = page.locator('a').filter({ hasText: /all|clear/i });
    }

    async isLoaded() {
        await expect(this.pageHeading).toBeVisible({ timeout: 5000 });
        // Verify at least one product is visible
        await expect(this.productCards.first()).toBeVisible({ timeout: 5000 });
    }

    async getProductCount(): Promise<number> {
        return await this.productCards.count();
    }

    async filterByCategory(category: string) {
        const categoryLink = this.page.locator('a').filter({ hasText: new RegExp(category, 'i') }).first();
        await categoryLink.click();
        await this.page.waitForTimeout(1000);
    }

    async filterByColor(color: string) {
        const colorOption = this.page.locator('button, a').filter({ hasText: new RegExp(color, 'i') }).first();
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
