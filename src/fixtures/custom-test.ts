import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { ProductListingPage } from '../pages/ProductListingPage';
import { WhyChoosePage } from '../pages/WhyChoosePage';
import { ContactUsPage } from '../pages/ContactUsPage';
import { WhereToBuyPage } from '../pages/WhereToBuyPage';
import { ProductDetailPage } from '../pages/ProductDetailPage';
import { SearchResultsPage } from '../pages/SearchResultsPage';

type MyFixtures = {
    homePage: HomePage;
    header: Header;
    footer: Footer;
    productListingPage: ProductListingPage;
    whyChoosePage: WhyChoosePage;
    contactUsPage: ContactUsPage;
    whereToBuyPage: WhereToBuyPage;
    productDetailPage: ProductDetailPage;
    searchResultsPage: SearchResultsPage;
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
    whyChoosePage: async ({ page }, use) => {
        const wcp = new WhyChoosePage(page);
        await use(wcp);
    },
    contactUsPage: async ({ page }, use) => {
        const cup = new ContactUsPage(page);
        await use(cup);
    },
    whereToBuyPage: async ({ page }, use) => {
        const wtb = new WhereToBuyPage(page);
        await use(wtb);
    },
    productDetailPage: async ({ page }, use) => {
        const pdp = new ProductDetailPage(page);
        await use(pdp);
    },
    searchResultsPage: async ({ page }, use) => {
        const srp = new SearchResultsPage(page);
        await use(srp);
    },
});

export { expect } from '@playwright/test';
