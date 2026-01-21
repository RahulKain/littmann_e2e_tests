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
        this.productsMenu = page.getByRole('link', { name: 'Products', exact: true }).first();
        this.innovationMenu = page.getByRole('link', { name: 'Our Innovation', exact: true }).first();
        this.toolsMenu = page.getByRole('link', { name: 'Tools & Resources', exact: true }).first();
        this.educationMenu = page.getByRole('link', { name: 'Education & Training', exact: true }).first();
        this.newsMenu = page.getByRole('link', { name: 'Latest News', exact: true }).first();
        this.whereToBuyMenu = page.getByRole('link', { name: 'Where to Buy', exact: true }).first();
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

    async clickInnovation() {
        await this.innovationMenu.click();
    }

    async clickToolsResources() {
        await this.toolsMenu.click();
    }

    async clickEducationTraining() {
        await this.educationMenu.click();
    }

    async clickLatestNews() {
        await this.newsMenu.click();
    }

    async hoverProducts() {
        await this.productsMenu.hover();
    }

    getSubmenuLink(name: string): Locator {
        return this.page.getByRole('link', { name: new RegExp(name, 'i') })
            .or(this.page.getByRole('menuitem', { name: new RegExp(name, 'i') }));
    }
}
