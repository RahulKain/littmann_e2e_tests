import { defineConfig, devices } from '@playwright/test';
import path from 'path';

const baseURL = 'https://www.littmann.in/3M/en_IN/littmann-stethoscopes-in/';


export default defineConfig({
    testDir: './src/tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: [
        ['html', { open: 'never' }],
        ['list'],
        ['playwright-smart-reporter', {
            title: '🏥 Littmann Stethoscopes E2E Automation',
            projectTitle: '🏥 Littmann Stethoscopes E2E Automation',
            reportTitle: '🏥 Littmann Stethoscopes E2E Automation',
            outputFile: path.resolve(__dirname, 'playwright-report/smart-report.html'),
            historyFile: path.resolve(__dirname, 'playwright-report/test-history.json'),
            maxHistoryRuns: 10,
            performanceThreshold: 0.2,
            // Feature flags
            enableRetryAnalysis: true,
            enableFailureClustering: true,
            enableStabilityScore: true,
            enableGalleryView: true,
            enableComparison: true,
            enableAIRecommendations: true,
            enableTraceViewer: true,
            enableHistoryDrilldown: true,
            enableNetworkLogs: true,
            networkLogExcludeAssets: true,
            networkLogMaxEntries: 50,
            stabilityThreshold: 70,
            retryFailureThreshold: 3,
        }],
    ],
    timeout: 60000, // Global timeout per test
    expect: {
        timeout: 10000 // Assertion timeout
    },
    use: {
        baseURL,
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        actionTimeout: 30000,
        navigationTimeout: 60000,
        ignoreHTTPSErrors: true,
    },


    projects: [
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
    ],
});
