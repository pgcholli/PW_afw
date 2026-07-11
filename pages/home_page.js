export default class HomePage 
{
    #items_menu;//declaration
    /**@param {import ("@playwright/test").Page} page */
    constructor(page) //initialization
    {
        this.#items_menu=page.locator("//a[text()='Items']");
    }
    async click_items_menu()//utilization
    {
        await this.#items_menu.click();
    }
}