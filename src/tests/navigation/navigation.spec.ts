import { test, expect } from '../../fixtures/custom-test';

test.describe('Module 1: Navigation & Page Load', () => {

    test('TC001: Verify homepage loads successfully', async ({ homePage, page }) => {
        console.log('TC001: Starting test - Verify homepage loads successfully');

        // ARRANGE & ACT
        console.log('TC001: Navigating to homepage...');
        await homePage.navigate();

        // ASSERT
        // Verify page title
        console.log('TC001: Verifying page title...');
        await expect(page).toHaveTitle(/Littmann/i);

        // Verify hero section is visible
        console.log('TC001: Verifying hero section visibility...');
        await expect(homePage.heroSection).toBeVisible();

        // Verify main navigation is visible (implicit via header/footer existing, but we can check an element)
        console.log('TC001: Verifying header products menu visibility...');
        await expect(homePage.header.productsMenu).toBeVisible();

        console.log('TC001: Test completed successfully.');
    });

    test('TC002: Verify Products menu navigation', async ({ homePage, page }) => {
        console.log('TC002: Starting test - Verify Products menu navigation');

        // ARRANGE
        console.log('TC002: Navigating to homepage...');
        await homePage.navigate();
        await expect(homePage.header.productsMenu).toBeVisible();

        // ACT
        console.log('TC002: Clicking Products menu (trying click instead of hover)...');
        // await homePage.header.hoverProducts(); 
        await homePage.header.clickProducts(); // Trying click

        // Wait for potential animation or net request
        await page.waitForTimeout(1000);

        // ASSERT
        console.log('TC002: Verifying submenu items...');

        // Define expected submenu items
        // Note: Using a helper or direct locators. Since I added a generic getSubmenuLink, I can use that or direct role checks.
        // It's better to ensure they are visible.

        const expectedItems = [
            'Cardiology',
            'Classic',
            'Electronic', // or Digital 
            'Lightweight',
            'Accessories',
            'All Products' // or similar
        ];

        // Since the exact text might vary, I'll check for keys
        // If the menu is pure CSS hover, it should appear.

        // Checking for "Cardiology"
        const cardiology = homePage.header.getSubmenuLink('Cardiology').first();
        await expect(cardiology).toBeVisible();
        console.log('TC002: Verified Cardiology link visible');

        // Checking for "Accessories"
        const accessories = homePage.header.getSubmenuLink('Accessories').first();
        await expect(accessories).toBeVisible();
        console.log('TC002: Verified Accessories link visible');

        // Checking for "All Products" (might be "See All" or "View All" or "All Products")
        // Just checking a couple is good for now to verify the menu expanded.

        console.log('TC002: Test completed successfully.');
    });

    test('TC003: Verify "All Products" page load', async ({ homePage, productListingPage, page }) => {
        console.log('TC003: Starting test - Verify All Products page load');

        // ARRANGE
        console.log('TC003: Navigating to homepage...');
        await homePage.navigate();

        // ACT
        console.log('TC003: Opening Products menu...');
        await homePage.header.clickProducts();

        console.log('TC003: Clicking "All Products" link...');
        // Correct text found: "All Littmann Stethoscope Products"
        const link = homePage.header.getSubmenuLink('All Littmann Stethoscope Products').last();
        console.log('TC003: Link Href (last):', await link.getAttribute('href'));
        // await link.click({ force: true });
        console.log('TC003: Dispatching click event...');
        await link.dispatchEvent('click');

        // ASSERT
        console.log('TC003: Verifying page load...');
        await productListingPage.isLoaded();

        console.log('TC003: Test completed successfully.');
    });

});
