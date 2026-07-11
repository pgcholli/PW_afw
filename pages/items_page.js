export default class ItemsPage {
    #page;
    #new_item_button;
    #item_name_input;
    #item_category_input;
    #submit_button;
    #success_msg
    #update_item_button;
    #item_qty_input;
    #item_checkbox;
    #delete_button;

    /**@param {import ("@playwright/test").Page} page */
    constructor(page) //initialization
    {
        this.#page = page;
        this.#new_item_button = page.getByTitle("New Item");
        this.#item_name_input = page.locator("#name");
        this.#item_category_input = page.locator("#category");
        this.#submit_button = page.locator("#submit");
        this.#success_msg = page.locator("//span[@data-notify='message']");
        this.#item_qty_input = page.locator("#quantity_1");
        this.#delete_button = page.locator("#delete");
    }
    async click_new_item_button() {
        await this.#new_item_button.click();
    }
    async enter_item_name(item_name) {
        await this.#item_name_input.fill(item_name);
    }
    async enter_item_category(category) {
        await this.#item_category_input.fill(category);
    }
    async click_submit() {
        await this.#submit_button.click();
    }
    async get_success_msg() {
        return await this.#success_msg.innerText();
    }

    async click_update_item_button(item_name) {
        let xpath = `//td[text()='${item_name}']/..//a[@title='Update Item']`;
        console.log("xpath=", xpath);
        this.#update_item_button = this.#page.locator(xpath);
        console.log("Number of matches", await this.#update_item_button.count());
        await this.#update_item_button.first().click();
    }

    async enter_item_quantity(quantity) {
        await this.#item_qty_input.fill(quantity.toString());
    }

    async select_item_checkbox(item_name) {
        let xpath =`//td[text()='${item_name}']/..//input[@type='checkbox']`;
            console.log("xpath is", xpath);
        this.#item_checkbox = this.#page.locator(xpath);
        await this.#item_checkbox.first().check();
    }


    async click_delete_and_accept_confirmation_popup() {

        this.#page.once('dialog', (dialog) => {
            console.log("Popup Msg", dialog.message());
            dialog.accept();
        });
        this.#delete_button.click();
    }
}


