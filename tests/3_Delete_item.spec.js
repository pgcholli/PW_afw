import HomePage from "../pages/home_page.js";
import ItemsPage from "../pages/items_page.js";
import { testEach as test } from "../utility/base_test.js";
import { expect } from "@playwright/test";
import read_excel from "../utility/excel.js";

let all_data = read_excel("./test_data/input.xlsx", "delete_item");

for (let data of all_data) {
    let item_name = data.item_name;
    let expected_msg = data.expected_msg;

    test(`delete item'${item_name}'`, async ({ page }) => {

        let home_page = new HomePage(page);
        let items_page = new ItemsPage(page);

        console.log("1. click on items menu");
        await home_page.click_items_menu();

        console.log("2.select the check box of specified item");
        await items_page.select_item_checkbox(item_name);

        console.log("3.click on delete button");
        console.log("4.click ok on confirmaiton popup");
        await items_page.click_delete_and_accept_confirmation_popup();

        console.log("5. verify the success msg");
        console.log("Expected Message:", expected_msg);

        let actual_msg = await items_page.get_success_msg();
        console.log("Actual Message:", actual_msg);

        expect(actual_msg).toContain(expected_msg);
    });
}