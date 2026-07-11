import { defineConfig, devices } from "@playwright/test";

export default defineConfig(
    {
        testDir: "tests",
        globalSetup: "./utility/global_setup.js",
        globalTeardown: "./utility/global_teardown.js",
        reporter: [['list'], ['allure-playwright']],
        workers: 1,

        use:
        {
            headless: false,
            storageState: 'storage_state.json',
            baseURL: "https://pos.aksharatraining.in/login"
            // baseURL: "https://www.google.com"
        },
        projects: [{
            name: "chromium",
            use: { ...devices['Desktop Chrome'] }
        }]
    });