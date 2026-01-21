import { test, expect } from '../../fixtures/custom-test';

test.describe('Module 2: Search Functionality', () => {

    test('TC013: Verify search bar visibility', async ({ homePage, header }) => {
        console.log('TC013: Starting test - Verify search bar visibility');

        // ARRANGE
        await homePage.navigate();

        // ASSERT
        // Verify visible
        await expect(header.searchInput).toBeVisible();
        await expect(header.searchButton).toBeVisible();

        // Verify placeholder
        // Note: Regex used in locator, checking attribute explicitly here
        await expect(header.searchInput).toHaveAttribute('placeholder', /Search/i);

        console.log('TC013: Test completed successfully.');
    });

    test('TC014: Verify valid product search', async ({ homePage, header, searchResultsPage }) => {
        console.log('TC014: Starting test - Verify valid product search');

        // ARRANGE
        await homePage.navigate();
        const query = 'Master Cardiology';

        // ACT
        console.log(`TC014: Searching for "${query}"...`);
        await header.search(query);

        // ASSERT
        await searchResultsPage.isLoaded();

        // Verify results
        const resultCount = await searchResultsPage.getResultsCount();
        console.log(`TC014: Found ${resultCount} results.`);
        expect(resultCount).toBeGreaterThan(0);

        // Verify relevance of first result
        const firstTitle = await searchResultsPage.productCards.first().locator('p').innerText();
        console.log(`TC014: First Result Title: ${firstTitle}`);
        expect(firstTitle.toLowerCase()).toContain('cardiology');

        console.log('TC014: Test completed successfully.');
    });

});
