import { Page, Locator } from '@playwright/test';

export class Header {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly productsMenu: Locator;
    readonly innovationMenu: Locator;
    readonly toolsMenu: Locator;
    readonly educationMenu: Locator;
    readonly newsMenu: Locator;
    readonly whereToBuyMenu: Locator;

    constructor(page: Page) {
        this.page = page;
        // Search
        this.searchInput = page.getByRole('searchbox', { name: /search/i }).or(page.getByPlaceholder('Search'));
        this.searchButton = page.getByRole('button', { name: /search/i });

        // Navigation Menus
        this.productsMenu = page.getByRole('link', { name: 'Products', exact: true });
        this.innovationMenu = page.getByRole('link', { name: 'Our Innovation', exact: true });
        this.toolsMenu = page.getByRole('link', { name: 'Tools & Resources', exact: true });
        this.educationMenu = page.getByRole('link', { name: 'Education & Training', exact: true });
        this.newsMenu = page.getByRole('link', { name: 'Latest News', exact: true });
        this.whereToBuyMenu = page.getByRole('link', { name: 'Where to Buy', exact: true });
    }

    async search(query: string) {
        await this.searchInput.fill(query);
        await this.searchInput.press('Enter');
    }

    async clickProducts() {
        await this.productsMenu.click();
    }

    async clickWhereToBuy() {
        await this.whereToBuyMenu.click();
    }
}
