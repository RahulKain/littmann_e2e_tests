import { test, expect } from '../../fixtures/custom-test';

test.describe('Module 1: Navigation & Page Load', () => {

    test('TC001: Verify homepage loads successfully', async ({ homePage, page }) => {
        // ARRANGE & ACT
        await homePage.navigate();

        // ASSERT
        // Verify page title
        await expect(page).toHaveTitle(/Littmann/i);

        // Verify hero section is visible
        await expect(homePage.heroSection).toBeVisible();

        // Verify main navigation is visible (implicit via header/footer existing, but we can check an element)
        await expect(homePage.header.productsMenu).toBeVisible();
    });

});
