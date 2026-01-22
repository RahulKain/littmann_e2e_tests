const { spawn, exec } = require('child_process');
const path = require('path');
const fs = require('fs');

// Report path (absolute)
const reportPath = path.resolve(__dirname, 'playwright-report', 'smart-report.html');

// Arguments passed to the script (e.g. --grep "TC001")
const args = process.argv.slice(2);

console.log('🚀 Running Playwright Tests with Smart Reporter...');
console.log(`Args: ${args.join(' ') || 'None (Full Suite)'}`);

// Spawn Playwright Test
const playwright = spawn('npx', ['playwright', 'test', ...args], {
    stdio: 'inherit',
    shell: true
});

playwright.on('close', (code) => {
    console.log(`\n✅ Test execution completed with code: ${code}`);

    // Check if report exists
    if (fs.existsSync(reportPath)) {
        console.log(`📊 Opening Smart Report: ${reportPath}`);

        // Open the report based on OS
        let command;
        switch (process.platform) {
            case 'win32':
                command = `start "" "${reportPath}"`;
                break;
            case 'darwin':
                command = `open "${reportPath}"`;
                break;
            default: // linux
                command = `xdg-open "${reportPath}"`;
                break;
        }

        // Use exec for better shell command handling and wait for callback
        exec(command, (error) => {
            if (error) {
                console.error('❌ Failed to open report:', error);
            }
            // Exit after attempting to open
            process.exit(code);
        });
    } else {
        console.error('❌ Report file not found at:', reportPath);
        process.exit(code);
    }
});
