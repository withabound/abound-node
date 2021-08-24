import nock from "nock";

import Abound from "../../src/abound";
import { AboundResponse } from "../../src/resources/base/AboundResponse";
import { createAboundClient, V2_SANDBOX_URL } from "../utils";

describe("Abound Tax Categories", () => {
  let abound: Abound;

  beforeAll(() => {
    abound = createAboundClient();
    initMocks();
  });

  afterAll(() => {
    nock.restore();
  });

  describe("retrieve", () => {
    it("returns a promise that resolves to a list of tax categories for the given year", async () => {
      const taxCategories: AboundResponse<string[]> =
        await abound.taxCategories.retrieve(2021);

      expect(taxCategories).toMatchInlineSnapshot(`
        Object {
          "data": Array [
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
          ],
          "request": Object {
            "requestId": "requestId_dfc70284ffd30c02b300e9b0",
            "timestamp": 1629660582355,
          },
        }
      `);
    });
  });

  function initMocks() {
    nock(V2_SANDBOX_URL)
      .get("/taxCategories/2021")
      .reply(200, {
        data: [
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
        ],
        request: {
          timestamp: 1629660582355,
          requestId: "requestId_dfc70284ffd30c02b300e9b0",
        },
      });
  }
});
