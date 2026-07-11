import HomePage from "../pages/home_page.js";
import ItemsPage from "../pages/items_page.js";
import { testEach as test } from "../utility/base_test.js";
import { expect } from "@playwright/test";
import read_excel from "../utility/excel.js";

let all_data = read_excel("./test_data/input.xlsx", "create_item");

for (let data of all_data) {
   let item_name = data.item_name;
   let item_category = data.item_category;
   let expected_msg = data.expected_msg;


   test(`create item:${item_name}`, async ({ page }) => {

      let home_page = new HomePage(page);
      let items_page = new ItemsPage(page);

      console.log("1.Click on Items option");
      await home_page.click_items_menu();

      console.log("2.Click on New Item");
      await items_page.click_new_item_button();

      console.log("3.Enter Item Name & category");
      await items_page.enter_item_name(item_name);
      await items_page.enter_item_category(item_category);

      console.log("4.Click submit");
      await items_page.click_submit();

      console.log("5.verify sucees message");
      console.log(expected_msg);
      let actual_msg = await items_page.get_success_msg();
      console.log("Actual Message:", actual_msg);
      expect(actual_msg).toContain(expected_msg);


   })
};