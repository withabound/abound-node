import Abound from "../../src/abound";
import { AboundResponse } from "../../src/resources/base/AboundResponse";
import { createAboundClient } from "../utils";

describe("Abound Tax Categories", () => {
  let abound: Abound;

  beforeAll(() => {
    abound = createAboundClient();
  });

  describe("retrieve", () => {
    it("returns a promise that resolves to a list of tax categories for the given year", async () => {
      const taxCategories: AboundResponse<string[]> =
        await abound.taxCategories.retrieve(2021);

      expect(taxCategories.data).toMatchInlineSnapshot(`
        Array [
          "Advertising and Marketing",
          "Car and Truck",
          "Commission and Fees",
          "Contract Labor",
          "Depletion",
          "Depreciation",
          "Employee Benefits Program",
          "Insurance",
          "Interest (Mortgage)",
          "Interest (Other)",
          "Legal and Professional Fees",
          "Office Expense",
          "Pension and Profit Sharing",
          "Rent (Vehicles and Equipment)",
          "Rent (Business Property)",
          "Repairs and Maintenance",
          "Supplies",
          "Taxes and Licenses",
          "Travel",
          "Meals",
          "Utilities",
          "Wages",
          "Other",
        ]
      `);
    });
  });
});
