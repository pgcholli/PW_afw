import { chromium } from "@playwright/test";

export default async function global_setup(config) {
    console.log("Framewordk started");
    let app_url = config.projects[0].use.baseURL;
    console.log("App URL:", app_url);

    let browser = await chromium.launch();
    let page = await browser.newPage();
    await page.goto(app_url,{timeout: 60000});
    await page.locator("#input-username").fill("student123");
    await page.locator("#input-password").fill("akshara123");
    await page.locator("//button[text()='Go']").click();
    await page.context().storageState({ path: 'storage_state.json' });
    await browser.close();
    console.log("storage state saved")


}