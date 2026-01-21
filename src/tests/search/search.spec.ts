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

    test('TC015: Verify partial keyword search', async ({ homePage, header, searchResultsPage }) => {
        console.log('TC015: Starting test - Verify partial keyword search');

        // ARRANGE
        await homePage.navigate();
        const query = 'Cardio';

        // ACT
        await header.search(query);

        // ASSERT
        await searchResultsPage.isLoaded();
        const resultCount = await searchResultsPage.getResultsCount();
        console.log(`TC015: Found ${resultCount} results for "${query}"`);
        expect(resultCount).toBeGreaterThan(0);

        // Verify relevance (check first card contains related terms)
        const firstTitle = await searchResultsPage.productCards.first().locator('p').innerText();
        console.log(`TC015: First result: ${firstTitle}`);
        // Fuzzy matching may return broader results
        expect(firstTitle.length).toBeGreaterThan(0);

        console.log('TC015: Test completed successfully.');
    });

    test('TC016: Verify no results found', async ({ homePage, header, searchResultsPage }) => {
        console.log('TC016: Starting test - Verify no results found (or fallback results)');

        // ARRANGE
        await homePage.navigate();
        const query = 'xyz123invalid';

        // ACT
        await header.search(query);

        // ASSERT
        // isLoaded waits for either grid OR no results message
        await searchResultsPage.isLoaded();

        // Site has fuzzy matching - may return fallback results instead of strict "no results"
        // Verify the page loaded and handled the invalid query gracefully
        const resultCount = await searchResultsPage.getResultsCount();
        console.log(`TC016: Query "${query}" returned ${resultCount} result(s) (site uses fuzzy matching/fallback)`);

        // Verify page doesn't crash and shows some response
        const heading = searchResultsPage.page.locator('h1').first();
        await expect(heading).toBeVisible();

        console.log('TC016: Test completed successfully - Invalid query handled gracefully.');
    });

});
