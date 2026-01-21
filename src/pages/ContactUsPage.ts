import { Page, Locator, expect } from '@playwright/test';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export class ContactUsPage {
    readonly page: Page;
    readonly header: Header;
    readonly footer: Footer;

    readonly pageHeading: Locator;
    readonly showFormButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = new Header(page);
        this.footer = new Footer(page);

        this.pageHeading = page.getByRole('heading', { level: 2, name: /Customer Service/i }).first();
        // "Show Form" might be a button or a link depending on implementation. 
        // Based on typical 3M sites, it might be a button expanding a section.
        // For now, I'll use a generic text locator or button locator.
        this.showFormButton = page.getByRole('button', { name: /Show Form|Email Us/i }).first();
    }

    async isLoaded() {
        await expect(this.page).toHaveURL(/\/contact-us\//);
        await expect(this.pageHeading).toBeVisible();
    }
}
