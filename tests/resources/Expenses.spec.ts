import nock from "nock";

import Abound from "../../src/abound";
import { EmptyObject } from "../../src/resources/base/AboundResource";
import {
  AboundBulkResponse,
  AboundResponse,
} from "../../src/resources/base/AboundResponse";
import { Expense } from "../../src/resources/Expenses";
import { createAboundClient, V2_SANDBOX_URL } from "../utils";

describe("Abound Expenses", () => {
  const TEST_USER_ID = "userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f";

  let abound: Abound;

  beforeAll(() => {
    abound = createAboundClient();
    initMocks();
  });

  afterAll(() => {
    nock.restore();
  });

  describe("create", () => {
    it("returns a promise that resolves to the created Expenses on success", async () => {
      const createdExpenses: AboundBulkResponse<Expense> =
        await abound.expenses.create(TEST_USER_ID, [
          {
            amount: 123.75,
            date: "2020-12-12",
            description: "gas",
          },
          {
            amount: 700.44,
            date: "2020-12-12",
            description: "tires",
          },
        ]);

      expect(createdExpenses).toMatchInlineSnapshot(`
        Object {
          "data": Array [
            Object {
              "amount": 123.75,
              "date": "2020-12-12",
              "deductionAmount": 123.75,
              "description": "gas",
              "expenseId": "expenseId_65cb0770e21198ccc41aab608eae75ec23a7140f",
              "expenseType": "business",
              "predictions": Object {
                "expenseTypePredictionScores": Object {
                  "0": 0.230972409248352,
                  "1": 0.769027531147003,
                },
                "taxCategoryPredictionScores": Object {
                  "Advertising and Marketing": 0.0021,
                  "Car and Truck": 0.64147,
                  "Commission and Fees": 0.00002,
                  "Contract Labor": 0.00022,
                  "Depletion": 0,
                  "Depreciation": 0,
                  "Employee Benefits Program": 0.00067,
                  "Insurance": 0.00565,
                  "Interest (Mortgage)": 0.00001,
                  "Interest (Other)": 0.00048,
                  "Legal and Professional Fees": 0.00454,
                  "Meals": 0.29912,
                  "Office Expense": 0.00375,
                  "Other": 0.01244,
                  "Pension and Profit Sharing": 0.00012,
                  "Rent (Business Property)": 0.00242,
                  "Rent (Vehicles and Equipment)": 0.00112,
                  "Repairs and Maintenance": 0.00299,
                  "Supplies": 0.00824,
                  "Taxes and Licenses": 0.00023,
                  "Travel": 0.01005,
                  "Utilities": 0.00422,
                  "Wages": 0.00012,
                },
              },
              "taxCategory": "Car and Truck",
            },
            Object {
              "amount": 700.44,
              "date": "2020-12-12",
              "deductionAmount": 700.44,
              "description": "tires",
              "expenseId": "expenseId_e2ce4b0e7643465a1cd9ed62ffef3364d59768d2",
              "expenseType": "business",
              "predictions": Object {
                "expenseTypePredictionScores": Object {
                  "0": 0.366108894348144,
                  "1": 0.633891105651856,
                },
                "taxCategoryPredictionScores": Object {
                  "Advertising and Marketing": 0.00188,
                  "Car and Truck": 0.76325,
                  "Commission and Fees": 0.00002,
                  "Contract Labor": 0.00037,
                  "Depletion": 0,
                  "Depreciation": 0,
                  "Employee Benefits Program": 0.00068,
                  "Insurance": 0.00695,
                  "Interest (Mortgage)": 0.00001,
                  "Interest (Other)": 0.00066,
                  "Legal and Professional Fees": 0.00331,
                  "Meals": 0.17761,
                  "Office Expense": 0.00285,
                  "Other": 0.01027,
                  "Pension and Profit Sharing": 0.00017,
                  "Rent (Business Property)": 0.0033,
                  "Rent (Vehicles and Equipment)": 0.00183,
                  "Repairs and Maintenance": 0.0032,
                  "Supplies": 0.00656,
                  "Taxes and Licenses": 0.00023,
                  "Travel": 0.01287,
                  "Utilities": 0.00382,
                  "Wages": 0.00015,
                },
              },
              "taxCategory": "Car and Truck",
            },
          ],
          "request": Object {
            "requestId": "requestId_bbdcaa5b818a0f344439283f",
            "timestamp": 1628737382261,
          },
        }
     `);
    });
  });

  describe("list", () => {
    it("returns a promise that resolves to the user's Expenses on success", async () => {
      const expenses: AboundBulkResponse<Expense> = await abound.expenses.list(
        TEST_USER_ID
      );

      expect(expenses).toMatchInlineSnapshot(`
        Object {
          "count": 4,
          "data": Array [
            Object {
              "amount": 123.75,
              "date": "2020-12-12",
              "deductionAmount": 123.75,
              "description": "gas",
              "expenseId": "expenseId_1c3327fef570bbc0f8bac30cb0590cf6b1f3bb3f",
              "expenseType": "business",
              "predictions": Object {
                "expenseTypePredictionScores": Object {
                  "0": 0.230972409248352,
                  "1": 0.769027531147003,
                },
                "taxCategoryPredictionScores": Object {
                  "Advertising and Marketing": 0.0021,
                  "Car and Truck": 0.64147,
                  "Commission and Fees": 0.00002,
                  "Contract Labor": 0.00022,
                  "Depletion": 0,
                  "Depreciation": 0,
                  "Employee Benefits Program": 0.00067,
                  "Insurance": 0.00565,
                  "Interest (Mortgage)": 0.00001,
                  "Interest (Other)": 0.00048,
                  "Legal and Professional Fees": 0.00454,
                  "Meals": 0.29912,
                  "Office Expense": 0.00375,
                  "Other": 0.01244,
                  "Pension and Profit Sharing": 0.00012,
                  "Rent (Business Property)": 0.00242,
                  "Rent (Vehicles and Equipment)": 0.00112,
                  "Repairs and Maintenance": 0.00299,
                  "Supplies": 0.00824,
                  "Taxes and Licenses": 0.00023,
                  "Travel": 0.01005,
                  "Utilities": 0.00422,
                  "Wages": 0.00012,
                },
              },
              "taxCategory": "Car and Truck",
            },
            Object {
              "amount": 700.44,
              "date": "2020-12-12",
              "deductionAmount": 700.44,
              "description": "tires",
              "expenseId": "expenseId_2b87eac9d4be774867767066e57e53c50f3af468",
              "expenseType": "business",
              "predictions": Object {
                "expenseTypePredictionScores": Object {
                  "0": 0.366108894348144,
                  "1": 0.633891105651856,
                },
                "taxCategoryPredictionScores": Object {
                  "Advertising and Marketing": 0.00188,
                  "Car and Truck": 0.76325,
                  "Commission and Fees": 0.00002,
                  "Contract Labor": 0.00037,
                  "Depletion": 0,
                  "Depreciation": 0,
                  "Employee Benefits Program": 0.00068,
                  "Insurance": 0.00695,
                  "Interest (Mortgage)": 0.00001,
                  "Interest (Other)": 0.00066,
                  "Legal and Professional Fees": 0.00331,
                  "Meals": 0.17761,
                  "Office Expense": 0.00285,
                  "Other": 0.01027,
                  "Pension and Profit Sharing": 0.00017,
                  "Rent (Business Property)": 0.0033,
                  "Rent (Vehicles and Equipment)": 0.00183,
                  "Repairs and Maintenance": 0.0032,
                  "Supplies": 0.00656,
                  "Taxes and Licenses": 0.00023,
                  "Travel": 0.01287,
                  "Utilities": 0.00382,
                  "Wages": 0.00015,
                },
              },
              "taxCategory": "Car and Truck",
            },
            Object {
              "amount": 700.44,
              "date": "2020-12-12",
              "deductionAmount": 700.44,
              "description": "tires",
              "expenseId": "expenseId_30551f75e7e5bea932caf9c0e7e9c5a3a83ed7ec",
              "expenseType": "business",
              "predictions": Object {
                "expenseTypePredictionScores": Object {
                  "0": 0.366108894348144,
                  "1": 0.633891105651856,
                },
                "taxCategoryPredictionScores": Object {
                  "Advertising and Marketing": 0.00188,
                  "Car and Truck": 0.76325,
                  "Commission and Fees": 0.00002,
                  "Contract Labor": 0.00037,
                  "Depletion": 0,
                  "Depreciation": 0,
                  "Employee Benefits Program": 0.00068,
                  "Insurance": 0.00695,
                  "Interest (Mortgage)": 0.00001,
                  "Interest (Other)": 0.00066,
                  "Legal and Professional Fees": 0.00331,
                  "Meals": 0.17761,
                  "Office Expense": 0.00285,
                  "Other": 0.01027,
                  "Pension and Profit Sharing": 0.00017,
                  "Rent (Business Property)": 0.0033,
                  "Rent (Vehicles and Equipment)": 0.00183,
                  "Repairs and Maintenance": 0.0032,
                  "Supplies": 0.00656,
                  "Taxes and Licenses": 0.00023,
                  "Travel": 0.01287,
                  "Utilities": 0.00382,
                  "Wages": 0.00015,
                },
              },
              "taxCategory": "Car and Truck",
            },
            Object {
              "amount": 123.75,
              "date": "2020-12-12",
              "deductionAmount": 123.75,
              "description": "gas",
              "expenseId": "expenseId_41585f57b0bde06638d175d6bcf390a8e5b68855",
              "expenseType": "business",
              "predictions": Object {
                "expenseTypePredictionScores": Object {
                  "0": 0.230972409248352,
                  "1": 0.769027531147003,
                },
                "taxCategoryPredictionScores": Object {
                  "Advertising and Marketing": 0.0021,
                  "Car and Truck": 0.64147,
                  "Commission and Fees": 0.00002,
                  "Contract Labor": 0.00022,
                  "Depletion": 0,
                  "Depreciation": 0,
                  "Employee Benefits Program": 0.00067,
                  "Insurance": 0.00565,
                  "Interest (Mortgage)": 0.00001,
                  "Interest (Other)": 0.00048,
                  "Legal and Professional Fees": 0.00454,
                  "Meals": 0.29912,
                  "Office Expense": 0.00375,
                  "Other": 0.01244,
                  "Pension and Profit Sharing": 0.00012,
                  "Rent (Business Property)": 0.00242,
                  "Rent (Vehicles and Equipment)": 0.00112,
                  "Repairs and Maintenance": 0.00299,
                  "Supplies": 0.00824,
                  "Taxes and Licenses": 0.00023,
                  "Travel": 0.01005,
                  "Utilities": 0.00422,
                  "Wages": 0.00012,
                },
              },
              "taxCategory": "Car and Truck",
            },
          ],
          "request": Object {
            "requestId": "requestId_2291bb2a297b78f6d03b4acf",
            "timestamp": 1628738183183,
          },
        }
      `);
    });

    it("returns a promise that resolves to a list of filtered Expenses when querying by foreignId", async () => {
      const expenses: AboundBulkResponse<Expense> = await abound.expenses.list(
        TEST_USER_ID,
        { foreignId: "29SMN2KD9" }
      );

      expect(expenses).toMatchInlineSnapshot(`
        Object {
          "count": 1,
          "data": Array [
            Object {
              "amount": 700.44,
              "date": "2020-12-12",
              "deductionAmount": 700.44,
              "description": "tires",
              "expenseId": "expenseId_49453d8e0258217b84a85458045872289450532e",
              "expenseType": "business",
              "foreignId": "29SMN2KD9",
              "predictions": Object {
                "expenseTypePredictionScores": Object {
                  "0": 0.366108894348144,
                  "1": 0.633891105651856,
                },
                "taxCategoryPredictionScores": Object {
                  "Advertising and Marketing": 0.00188,
                  "Car and Truck": 0.76325,
                  "Commission and Fees": 0.00002,
                  "Contract Labor": 0.00037,
                  "Depletion": 0,
                  "Depreciation": 0,
                  "Employee Benefits Program": 0.00068,
                  "Insurance": 0.00695,
                  "Interest (Mortgage)": 0.00001,
                  "Interest (Other)": 0.00066,
                  "Legal and Professional Fees": 0.00331,
                  "Meals": 0.17761,
                  "Office Expense": 0.00285,
                  "Other": 0.01027,
                  "Pension and Profit Sharing": 0.00017,
                  "Rent (Business Property)": 0.0033,
                  "Rent (Vehicles and Equipment)": 0.00183,
                  "Repairs and Maintenance": 0.0032,
                  "Supplies": 0.00656,
                  "Taxes and Licenses": 0.00023,
                  "Travel": 0.01287,
                  "Utilities": 0.00382,
                  "Wages": 0.00015,
                },
              },
              "taxCategory": "Car and Truck",
            },
          ],
          "request": Object {
            "requestId": "requestId_1c1114a52d162d9f9c169325",
            "timestamp": 1628738411642,
          },
        }
      `);
    });
  });

  describe("retrive", () => {
    it("returns a promise that resolves to an Expense on success", async () => {
      const expense: AboundResponse<Expense> = await abound.expenses.retrieve(
        TEST_USER_ID,
        "expenseId_41585f57b0bde06638d175d6bcf390a8e5b68855"
      );

      expect(expense).toMatchInlineSnapshot(`
        Object {
          "data": Object {
            "amount": 123.75,
            "date": "2020-12-12",
            "deductionAmount": 123.75,
            "description": "gas",
            "expenseId": "expenseId_41585f57b0bde06638d175d6bcf390a8e5b68855",
            "expenseType": "business",
            "predictions": Object {
              "expenseTypePredictionScores": Object {
                "0": 0.230972409248352,
                "1": 0.769027531147003,
              },
              "taxCategoryPredictionScores": Object {
                "Advertising and Marketing": 0.0021,
                "Car and Truck": 0.64147,
                "Commission and Fees": 0.00002,
                "Contract Labor": 0.00022,
                "Depletion": 0,
                "Depreciation": 0,
                "Employee Benefits Program": 0.00067,
                "Insurance": 0.00565,
                "Interest (Mortgage)": 0.00001,
                "Interest (Other)": 0.00048,
                "Legal and Professional Fees": 0.00454,
                "Meals": 0.29912,
                "Office Expense": 0.00375,
                "Other": 0.01244,
                "Pension and Profit Sharing": 0.00012,
                "Rent (Business Property)": 0.00242,
                "Rent (Vehicles and Equipment)": 0.00112,
                "Repairs and Maintenance": 0.00299,
                "Supplies": 0.00824,
                "Taxes and Licenses": 0.00023,
                "Travel": 0.01005,
                "Utilities": 0.00422,
                "Wages": 0.00012,
              },
            },
            "taxCategory": "Car and Truck",
          },
          "request": Object {
            "requestId": "requestId_08d271f97f4a9491f8777ca4",
            "timestamp": 1628738452220,
          },
        }
      `);
    });
  });

  describe("update", () => {
    it("returns a promise that resolves to the updated Expense on success", async () => {
      const updatedExpense: AboundResponse<Expense> =
        await abound.expenses.update(
          TEST_USER_ID,
          "expenseId_e2ce4b0e7643465a1cd9ed62ffef3364d59768d2",
          {
            description: "something new!",
          }
        );

      expect(updatedExpense).toMatchInlineSnapshot(`
        Object {
          "data": Object {
            "amount": 700.44,
            "date": "2020-12-12",
            "deductionAmount": 700.44,
            "description": "something new!",
            "expenseId": "expenseId_e2ce4b0e7643465a1cd9ed62ffef3364d59768d2",
            "expenseType": "business",
            "predictions": Object {
              "expenseTypePredictionScores": Object {
                "0": 0.366108894348144,
                "1": 0.633891105651856,
              },
              "taxCategoryPredictionScores": Object {
                "Advertising and Marketing": 0.00188,
                "Car and Truck": 0.76325,
                "Commission and Fees": 0.00002,
                "Contract Labor": 0.00037,
                "Depletion": 0,
                "Depreciation": 0,
                "Employee Benefits Program": 0.00068,
                "Insurance": 0.00695,
                "Interest (Mortgage)": 0.00001,
                "Interest (Other)": 0.00066,
                "Legal and Professional Fees": 0.00331,
                "Meals": 0.17761,
                "Office Expense": 0.00285,
                "Other": 0.01027,
                "Pension and Profit Sharing": 0.00017,
                "Rent (Business Property)": 0.0033,
                "Rent (Vehicles and Equipment)": 0.00183,
                "Repairs and Maintenance": 0.0032,
                "Supplies": 0.00656,
                "Taxes and Licenses": 0.00023,
                "Travel": 0.01287,
                "Utilities": 0.00382,
                "Wages": 0.00015,
              },
            },
            "taxCategory": "Car and Truck",
          },
          "request": Object {
            "requestId": "requestId_89cf01824e24d43d430fc6bb",
            "timestamp": 1628738497079,
          },
        }
     `);
    });
  });

  describe("delete", () => {
    it("returns a promise that resolves to an empty object on success", async () => {
      const response: AboundResponse<EmptyObject> =
        await abound.expenses.delete(
          TEST_USER_ID,
          "expenseId_5c8ff0de2d08d33946b09481727a8895befe17ab"
        );

      expect(response).toMatchInlineSnapshot(`
        Object {
          "data": Object {},
          "request": Object {
            "requestId": "requestId_37dcdfe90793c2c1a634bc3c",
            "timestamp": 1628737968580,
          },
        }
     `);
    });
  });

  function initMocks() {
    // create
    nock(V2_SANDBOX_URL)
      .post("/users/userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f/expenses")
      .reply(200, {
        data: [
          {
            expenseId: "expenseId_65cb0770e21198ccc41aab608eae75ec23a7140f",
            amount: 123.75,
            description: "gas",
            date: "2020-12-12",
            expenseType: "business",
            taxCategory: "Car and Truck",
            deductionAmount: 123.75,
            predictions: {
              expenseTypePredictionScores: {
                "0": 0.230972409248352,
                "1": 0.769027531147003,
              },
              taxCategoryPredictionScores: {
                "Advertising and Marketing": 0.0021,
                "Car and Truck": 0.64147,
                "Commission and Fees": 0.00002,
                "Contract Labor": 0.00022,
                Depletion: 0,
                Depreciation: 0,
                "Employee Benefits Program": 0.00067,
                Insurance: 0.00565,
                "Interest (Mortgage)": 0.00001,
                "Interest (Other)": 0.00048,
                "Legal and Professional Fees": 0.00454,
                "Office Expense": 0.00375,
                "Pension and Profit Sharing": 0.00012,
                "Rent (Vehicles and Equipment)": 0.00112,
                "Rent (Business Property)": 0.00242,
                "Repairs and Maintenance": 0.00299,
                Supplies: 0.00824,
                "Taxes and Licenses": 0.00023,
                Travel: 0.01005,
                Meals: 0.29912,
                Utilities: 0.00422,
                Wages: 0.00012,
                Other: 0.01244,
              },
            },
          },
          {
            expenseId: "expenseId_e2ce4b0e7643465a1cd9ed62ffef3364d59768d2",
            amount: 700.44,
            description: "tires",
            date: "2020-12-12",
            expenseType: "business",
            taxCategory: "Car and Truck",
            deductionAmount: 700.44,
            predictions: {
              expenseTypePredictionScores: {
                "0": 0.366108894348144,
                "1": 0.633891105651856,
              },
              taxCategoryPredictionScores: {
                "Advertising and Marketing": 0.00188,
                "Car and Truck": 0.76325,
                "Commission and Fees": 0.00002,
                "Contract Labor": 0.00037,
                Depletion: 0,
                Depreciation: 0,
                "Employee Benefits Program": 0.00068,
                Insurance: 0.00695,
                "Interest (Mortgage)": 0.00001,
                "Interest (Other)": 0.00066,
                "Legal and Professional Fees": 0.00331,
                "Office Expense": 0.00285,
                "Pension and Profit Sharing": 0.00017,
                "Rent (Vehicles and Equipment)": 0.00183,
                "Rent (Business Property)": 0.0033,
                "Repairs and Maintenance": 0.0032,
                Supplies: 0.00656,
                "Taxes and Licenses": 0.00023,
                Travel: 0.01287,
                Meals: 0.17761,
                Utilities: 0.00382,
                Wages: 0.00015,
                Other: 0.01027,
              },
            },
          },
        ],
        request: {
          timestamp: 1628737382261,
          requestId: "requestId_bbdcaa5b818a0f344439283f",
        },
      });

    // list
    nock(V2_SANDBOX_URL)
      .get("/users/userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f/expenses")
      .reply(200, {
        data: [
          {
            expenseId: "expenseId_1c3327fef570bbc0f8bac30cb0590cf6b1f3bb3f",
            amount: 123.75,
            description: "gas",
            date: "2020-12-12",
            expenseType: "business",
            taxCategory: "Car and Truck",
            deductionAmount: 123.75,
            predictions: {
              expenseTypePredictionScores: {
                "0": 0.230972409248352,
                "1": 0.769027531147003,
              },
              taxCategoryPredictionScores: {
                "Office Expense": 0.00375,
                "Repairs and Maintenance": 0.00299,
                "Employee Benefits Program": 0.00067,
                "Interest (Other)": 0.00048,
                "Pension and Profit Sharing": 0.00012,
                "Car and Truck": 0.64147,
                "Commission and Fees": 0.00002,
                "Rent (Vehicles and Equipment)": 0.00112,
                "Interest (Mortgage)": 0.00001,
                "Contract Labor": 0.00022,
                Travel: 0.01005,
                Depreciation: 0,
                Utilities: 0.00422,
                Depletion: 0,
                "Legal and Professional Fees": 0.00454,
                Insurance: 0.00565,
                "Taxes and Licenses": 0.00023,
                Supplies: 0.00824,
                Meals: 0.29912,
                Wages: 0.00012,
                "Advertising and Marketing": 0.0021,
                "Rent (Business Property)": 0.00242,
                Other: 0.01244,
              },
            },
          },
          {
            expenseId: "expenseId_2b87eac9d4be774867767066e57e53c50f3af468",
            amount: 700.44,
            description: "tires",
            date: "2020-12-12",
            expenseType: "business",
            taxCategory: "Car and Truck",
            deductionAmount: 700.44,
            predictions: {
              expenseTypePredictionScores: {
                "0": 0.366108894348144,
                "1": 0.633891105651856,
              },
              taxCategoryPredictionScores: {
                "Office Expense": 0.00285,
                "Repairs and Maintenance": 0.0032,
                "Employee Benefits Program": 0.00068,
                "Interest (Other)": 0.00066,
                "Pension and Profit Sharing": 0.00017,
                "Car and Truck": 0.76325,
                "Commission and Fees": 0.00002,
                "Rent (Vehicles and Equipment)": 0.00183,
                "Interest (Mortgage)": 0.00001,
                "Contract Labor": 0.00037,
                Travel: 0.01287,
                Depreciation: 0,
                Utilities: 0.00382,
                Depletion: 0,
                "Legal and Professional Fees": 0.00331,
                Insurance: 0.00695,
                "Taxes and Licenses": 0.00023,
                Supplies: 0.00656,
                Meals: 0.17761,
                Wages: 0.00015,
                "Advertising and Marketing": 0.00188,
                "Rent (Business Property)": 0.0033,
                Other: 0.01027,
              },
            },
          },
          {
            expenseId: "expenseId_30551f75e7e5bea932caf9c0e7e9c5a3a83ed7ec",
            amount: 700.44,
            description: "tires",
            date: "2020-12-12",
            expenseType: "business",
            taxCategory: "Car and Truck",
            deductionAmount: 700.44,
            predictions: {
              expenseTypePredictionScores: {
                "0": 0.366108894348144,
                "1": 0.633891105651856,
              },
              taxCategoryPredictionScores: {
                "Office Expense": 0.00285,
                "Repairs and Maintenance": 0.0032,
                "Employee Benefits Program": 0.00068,
                "Interest (Other)": 0.00066,
                "Pension and Profit Sharing": 0.00017,
                "Car and Truck": 0.76325,
                "Commission and Fees": 0.00002,
                "Rent (Vehicles and Equipment)": 0.00183,
                "Interest (Mortgage)": 0.00001,
                "Contract Labor": 0.00037,
                Travel: 0.01287,
                Depreciation: 0,
                Utilities: 0.00382,
                Depletion: 0,
                "Legal and Professional Fees": 0.00331,
                Insurance: 0.00695,
                "Taxes and Licenses": 0.00023,
                Supplies: 0.00656,
                Meals: 0.17761,
                Wages: 0.00015,
                "Advertising and Marketing": 0.00188,
                "Rent (Business Property)": 0.0033,
                Other: 0.01027,
              },
            },
          },
          {
            expenseId: "expenseId_41585f57b0bde06638d175d6bcf390a8e5b68855",
            amount: 123.75,
            description: "gas",
            date: "2020-12-12",
            expenseType: "business",
            taxCategory: "Car and Truck",
            deductionAmount: 123.75,
            predictions: {
              expenseTypePredictionScores: {
                "0": 0.230972409248352,
                "1": 0.769027531147003,
              },
              taxCategoryPredictionScores: {
                "Office Expense": 0.00375,
                "Repairs and Maintenance": 0.00299,
                "Employee Benefits Program": 0.00067,
                "Interest (Other)": 0.00048,
                "Pension and Profit Sharing": 0.00012,
                "Car and Truck": 0.64147,
                "Commission and Fees": 0.00002,
                "Rent (Vehicles and Equipment)": 0.00112,
                "Interest (Mortgage)": 0.00001,
                "Contract Labor": 0.00022,
                Travel: 0.01005,
                Depreciation: 0,
                Utilities: 0.00422,
                Depletion: 0,
                "Legal and Professional Fees": 0.00454,
                Insurance: 0.00565,
                "Taxes and Licenses": 0.00023,
                Supplies: 0.00824,
                Meals: 0.29912,
                Wages: 0.00012,
                "Advertising and Marketing": 0.0021,
                "Rent (Business Property)": 0.00242,
                Other: 0.01244,
              },
            },
          },
        ],
        count: 4,
        request: {
          timestamp: 1628738183183,
          requestId: "requestId_2291bb2a297b78f6d03b4acf",
        },
      });

    // list, filter by foreignId
    nock(V2_SANDBOX_URL)
      .get(
        "/users/userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f/expenses?foreignId=29SMN2KD9"
      )
      .reply(200, {
        data: [
          {
            expenseId: "expenseId_49453d8e0258217b84a85458045872289450532e",
            amount: 700.44,
            description: "tires",
            date: "2020-12-12",
            expenseType: "business",
            taxCategory: "Car and Truck",
            deductionAmount: 700.44,
            foreignId: "29SMN2KD9",
            predictions: {
              expenseTypePredictionScores: {
                "0": 0.366108894348144,
                "1": 0.633891105651856,
              },
              taxCategoryPredictionScores: {
                "Office Expense": 0.00285,
                "Repairs and Maintenance": 0.0032,
                "Employee Benefits Program": 0.00068,
                "Interest (Other)": 0.00066,
                "Pension and Profit Sharing": 0.00017,
                "Car and Truck": 0.76325,
                "Commission and Fees": 0.00002,
                "Rent (Vehicles and Equipment)": 0.00183,
                "Interest (Mortgage)": 0.00001,
                "Contract Labor": 0.00037,
                Travel: 0.01287,
                Depreciation: 0,
                Utilities: 0.00382,
                Depletion: 0,
                "Legal and Professional Fees": 0.00331,
                Insurance: 0.00695,
                "Taxes and Licenses": 0.00023,
                Supplies: 0.00656,
                Meals: 0.17761,
                Wages: 0.00015,
                "Advertising and Marketing": 0.00188,
                "Rent (Business Property)": 0.0033,
                Other: 0.01027,
              },
            },
          },
        ],
        count: 1,
        request: {
          timestamp: 1628738411642,
          requestId: "requestId_1c1114a52d162d9f9c169325",
        },
      });

    // retrieve
    nock(V2_SANDBOX_URL)
      .get(
        "/users/userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f/expenses/expenseId_41585f57b0bde06638d175d6bcf390a8e5b68855"
      )
      .reply(200, {
        data: {
          expenseId: "expenseId_41585f57b0bde06638d175d6bcf390a8e5b68855",
          amount: 123.75,
          description: "gas",
          date: "2020-12-12",
          expenseType: "business",
          taxCategory: "Car and Truck",
          deductionAmount: 123.75,
          predictions: {
            expenseTypePredictionScores: {
              "0": 0.230972409248352,
              "1": 0.769027531147003,
            },
            taxCategoryPredictionScores: {
              "Office Expense": 0.00375,
              "Repairs and Maintenance": 0.00299,
              "Employee Benefits Program": 0.00067,
              "Interest (Other)": 0.00048,
              "Pension and Profit Sharing": 0.00012,
              "Car and Truck": 0.64147,
              "Commission and Fees": 0.00002,
              "Rent (Vehicles and Equipment)": 0.00112,
              "Interest (Mortgage)": 0.00001,
              "Contract Labor": 0.00022,
              Travel: 0.01005,
              Depreciation: 0,
              Utilities: 0.00422,
              Depletion: 0,
              "Legal and Professional Fees": 0.00454,
              Insurance: 0.00565,
              "Taxes and Licenses": 0.00023,
              Supplies: 0.00824,
              Meals: 0.29912,
              Wages: 0.00012,
              "Advertising and Marketing": 0.0021,
              "Rent (Business Property)": 0.00242,
              Other: 0.01244,
            },
          },
        },
        request: {
          timestamp: 1628738452220,
          requestId: "requestId_08d271f97f4a9491f8777ca4",
        },
      });

    // update
    nock(V2_SANDBOX_URL)
      .put(
        "/users/userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f/expenses/expenseId_e2ce4b0e7643465a1cd9ed62ffef3364d59768d2"
      )
      .reply(200, {
        data: {
          expenseId: "expenseId_e2ce4b0e7643465a1cd9ed62ffef3364d59768d2",
          amount: 700.44,
          description: "something new!",
          date: "2020-12-12",
          expenseType: "business",
          taxCategory: "Car and Truck",
          deductionAmount: 700.44,
          predictions: {
            expenseTypePredictionScores: {
              "0": 0.366108894348144,
              "1": 0.633891105651856,
            },
            taxCategoryPredictionScores: {
              "Office Expense": 0.00285,
              "Repairs and Maintenance": 0.0032,
              "Employee Benefits Program": 0.00068,
              "Interest (Other)": 0.00066,
              "Pension and Profit Sharing": 0.00017,
              "Car and Truck": 0.76325,
              "Commission and Fees": 0.00002,
              "Rent (Vehicles and Equipment)": 0.00183,
              "Interest (Mortgage)": 0.00001,
              "Contract Labor": 0.00037,
              Travel: 0.01287,
              Depreciation: 0,
              Utilities: 0.00382,
              Depletion: 0,
              "Legal and Professional Fees": 0.00331,
              Insurance: 0.00695,
              "Taxes and Licenses": 0.00023,
              Supplies: 0.00656,
              Meals: 0.17761,
              Wages: 0.00015,
              "Advertising and Marketing": 0.00188,
              "Rent (Business Property)": 0.0033,
              Other: 0.01027,
            },
          },
        },
        request: {
          timestamp: 1628738497079,
          requestId: "requestId_89cf01824e24d43d430fc6bb",
        },
      });

    // delete
    nock(V2_SANDBOX_URL)
      .delete(
        "/users/userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f/expenses/expenseId_5c8ff0de2d08d33946b09481727a8895befe17ab"
      )
      .reply(200, {
        data: {},
        request: {
          requestId: "requestId_37dcdfe90793c2c1a634bc3c",
          timestamp: 1628737968580,
        },
      });
  }
});
