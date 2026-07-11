import HomePage from "../pages/home_page.js";
import ItemsPage from "../pages/items_page.js";
import { testEach as test } from "../utility/base_test.js";
import { expect } from "@playwright/test";
import read_excel from "../utility/excel.js";

let all_data = read_excel("./test_data/input.xlsx", "update_item");

for (let data of all_data) {
    let item_name = data.item_name;
    let item_qty = data.item_qty;
    let expected_msg = data.expected_msg;

    test(`update item '${item_name}`, async ({ page }) => {

        let home_page = new HomePage(page);
        let items_page = new ItemsPage(page);


        console.log("1.click on items menu");
        home_page.click_items_menu();

        console.log("2. Click update bitton for given item");
        items_page.click_update_item_button(item_name);

        console.log("3.Enter the new item qty");
        items_page.enter_item_quantity(item_qty);

        console.log("4.click on submit");
        items_page.click_submit();

        console.log("5.Verify success message");
        console.log("Expected msg:", expected_msg);

        let actual_msg = await items_page.get_success_msg();
        console.log("Actual msg:", actual_msg);
        expect(actual_msg).toContain(expected_msg);
    })
};