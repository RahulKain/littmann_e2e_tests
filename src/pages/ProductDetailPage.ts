import { Page, Locator, expect } from '@playwright/test';
import { Header } from '../components/Header';

export class ProductDetailPage {
    readonly page: Page;
    readonly header: Header;
    readonly breadcrumb: Locator;
    readonly productTitle: Locator;
    readonly productImage: Locator;
    readonly imageThumbnails: Locator;
    readonly specificationsSection: Locator;
    readonly resourcesSection: Locator;
    readonly whereToBuyButton: Locator;
    readonly relatedProductsSection: Locator;
    readonly reviewsSection: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = new Header(page);

        // Basic locators
        this.breadcrumb = page.locator('nav[aria-label="Breadcrumb"], .breadcrumbs, nav.breadcrumbs');
        this.productTitle = page.locator('h1').first();

        // Image gallery
        this.productImage = page.locator('.product-image, .main-image, img[alt*="Littmann"]').first();
        this.imageThumbnails = page.locator('.thumbnail, .image-thumb');

        // Sections
        this.specificationsSection = page.locator('[id*="spec"], [class*="spec"], section').filter({ hasText: /specification|technical|details/i });
        this.resourcesSection = page.locator('[id*="resource"], section').filter({ hasText: /resource|download|brochure/i });
        this.relatedProductsSection = page.locator('section, div').filter({ hasText: /you may also like|related|recommended/i });
        this.reviewsSection = page.locator('[id*="review"], section').filter({ hasText: /review|rating/i });

        // Buttons
        this.whereToBuyButton = page.getByRole('link', { name: /where to buy/i });
    }

    async isLoaded() {
        await expect(this.productTitle).toBeVisible();
    }

    async verifyBreadcrumb() {
        // Look for "India" link which should be in breadcrumb
        const indiaLink = this.page.getByRole('link', { name: 'India', exact: true }).first();

        if (await indiaLink.isVisible()) {
            await expect(indiaLink).toBeVisible();
            return;
        }

        // Fallback to generic breadcrumb check
        await expect(this.breadcrumb.first()).toBeVisible({ timeout: 5000 });
    }

    async clickImageThumbnail(index: number) {
        const thumbnail = this.imageThumbnails.nth(index);
        await thumbnail.click();
        await this.page.waitForTimeout(500);
    }

    async hasSpecifications(): Promise<boolean> {
        return await this.specificationsSection.isVisible();
    }

    async hasResources(): Promise<boolean> {
        return await this.resourcesSection.isVisible();
    }

    async clickWhereToBuy() {
        await this.whereToBuyButton.click();
    }

    async hasRelatedProducts(): Promise<boolean> {
        return await this.relatedProductsSection.isVisible();
    }

    async hasReviews(): Promise<boolean> {
        return await this.reviewsSection.isVisible();
    }

    async clickResourceLink(index: number = 0) {
        const resourceLink = this.resourcesSection.locator('a').nth(index);
        await resourceLink.click();
    }

    async getAllLinks(): Promise<string[]> {
        const links = await this.page.locator('a[href]').all();
        const hrefs: string[] = [];

        for (const link of links) {
            const href = await link.getAttribute('href');
            if (href) {
                hrefs.push(href);
            }
        }

        return hrefs;
    }

    async setMobileViewport() {
        await this.page.setViewportSize({ width: 375, height: 667 });
    }

    async hasHorizontalScrollbar(): Promise<boolean> {
        const hasScroll = await this.page.evaluate(() => {
            return document.documentElement.scrollWidth > document.documentElement.clientWidth;
        });
        return hasScroll;
    }
}
