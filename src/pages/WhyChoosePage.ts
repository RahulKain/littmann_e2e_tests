import { Page, Locator, expect } from '@playwright/test';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export class WhyChoosePage {
    readonly page: Page;
    readonly header: Header;
    readonly footer: Footer;

    readonly pageHeading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = new Header(page);
        this.footer = new Footer(page);

        this.pageHeading = page.getByRole('heading', { level: 1, name: /Why Choose/i });
    }

    async isLoaded() {
        await expect(this.page).toHaveURL(/\/why-choose\//);
        await expect(this.pageHeading).toBeVisible();
    }
}
