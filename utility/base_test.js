import {test} from "@playwright/test";

export const testEach=test.extend({
    page:async({page},use)=>{
        console.log("before test");
        await page.goto("/home");
        await use(page);
        console.log("after test");
    }
})

