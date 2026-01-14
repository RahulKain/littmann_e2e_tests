import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { ProductListingPage } from '../pages/ProductListingPage';

type MyFixtures = {
    homePage: HomePage;
    header: Header;
    footer: Footer;
    productListingPage: ProductListingPage;
};

export const test = base.extend<MyFixtures>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    header: async ({ page }, use) => {
        const header = new Header(page);
        await use(header);
    },
    footer: async ({ page }, use) => {
        const footer = new Footer(page);
        await use(footer);
    },
    productListingPage: async ({ page }, use) => {
        const plp = new ProductListingPage(page);
        await use(plp);
    },
});

export { expect } from '@playwright/test';
