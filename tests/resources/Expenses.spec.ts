import Abound from "../../src/abound";
import { EmptyObject } from "../../src/resources/base/AboundResource";
import {
  AboundBulkResponse,
  AboundResponse,
} from "../../src/resources/base/AboundResponse";
import { Expense } from "../../src/resources/Expenses";
import { createAboundClient, TEST_USER_ID } from "../utils";

const TEST_EXPENSE_ID = "expenseId_testB1FBA298F0154D1906F18AF8C8D97FDCBD28";

describe("Abound Expenses", () => {
  let abound: Abound;

  beforeAll(() => {
    abound = createAboundClient();
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

      expect(createdExpenses.data).toMatchInlineSnapshot(`
        Array [
          Object {
            "amount": 123.75,
            "date": "2020-12-12",
            "deductionAmount": 61.88,
            "description": "gas",
            "expenseId": "expenseId_testB1FBA298F0154D1906F18AF8C8D97FDCBD28",
            "expenseType": "business",
            "predictions": Object {
              "expenseTypePredictionScores": Object {
                "0": 0.007482942659408,
                "1": 0.992517054080963,
              },
              "taxCategoryPredictionScores": Object {
                "Advertising and Marketing": 0.05218,
                "Car and Truck": 0.0937,
                "Commission and Fees": 0.00056,
                "Contract Labor": 0.00352,
                "Depletion": 0.00006,
                "Depreciation": 0.00002,
                "Employee Benefits Program": 0.00624,
                "Insurance": 0.06961,
                "Interest (Mortgage)": 0.00012,
                "Interest (Other)": 0.00326,
                "Legal and Professional Fees": 0.12655,
                "Meals": 0.37615,
                "Office Expense": 0.041,
                "Other": 0.07123,
                "Pension and Profit Sharing": 0.00125,
                "Rent (Business Property)": 0.00777,
                "Rent (Vehicles and Equipment)": 0.00051,
                "Repairs and Maintenance": 0.00749,
                "Supplies": 0.0228,
                "Taxes and Licenses": 0.0025,
                "Travel": 0.00388,
                "Utilities": 0.10757,
                "Wages": 0.00204,
              },
            },
            "taxCategory": "Meals",
          },
          Object {
            "amount": 700.44,
            "date": "2020-12-12",
            "deductionAmount": 350.22,
            "description": "tires",
            "expenseId": "expenseId_test495DB2C7F905E5DDDFD03B12029D8FB99084",
            "expenseType": "business",
            "predictions": Object {
              "expenseTypePredictionScores": Object {
                "0": 0.007482942659408,
                "1": 0.992517054080963,
              },
              "taxCategoryPredictionScores": Object {
                "Advertising and Marketing": 0.05218,
                "Car and Truck": 0.0937,
                "Commission and Fees": 0.00056,
                "Contract Labor": 0.00352,
                "Depletion": 0.00006,
                "Depreciation": 0.00002,
                "Employee Benefits Program": 0.00624,
                "Insurance": 0.06961,
                "Interest (Mortgage)": 0.00012,
                "Interest (Other)": 0.00326,
                "Legal and Professional Fees": 0.12655,
                "Meals": 0.37615,
                "Office Expense": 0.041,
                "Other": 0.07123,
                "Pension and Profit Sharing": 0.00125,
                "Rent (Business Property)": 0.00777,
                "Rent (Vehicles and Equipment)": 0.00051,
                "Repairs and Maintenance": 0.00749,
                "Supplies": 0.0228,
                "Taxes and Licenses": 0.0025,
                "Travel": 0.00388,
                "Utilities": 0.10757,
                "Wages": 0.00204,
              },
            },
            "taxCategory": "Meals",
          },
        ]
      `);
    });
  });

  describe("list", () => {
    it("returns a promise that resolves to the user's Expenses on success", async () => {
      const expenses: AboundBulkResponse<Expense> = await abound.expenses.list(
        TEST_USER_ID
      );

      expect(expenses.data).toMatchInlineSnapshot(`
        Array [
          Object {
            "amount": 123.54,
            "date": "2020-05-12",
            "deductionAmount": 61.77,
            "description": "Pen and paper",
            "expenseId": "expenseId_testB1FBA298F0154D1906F18AF8C8D97FDCBD28",
            "expenseType": "business",
            "predictions": Object {
              "expenseTypePredictionScores": Object {
                "0": 0.007482942659408,
                "1": 0.992517054080963,
              },
              "taxCategoryPredictionScores": Object {
                "Advertising and Marketing": 0.05218,
                "Car and Truck": 0.0937,
                "Commission and Fees": 0.00056,
                "Contract Labor": 0.00352,
                "Depletion": 0.00006,
                "Depreciation": 0.00002,
                "Employee Benefits Program": 0.00624,
                "Insurance": 0.06961,
                "Interest (Mortgage)": 0.00012,
                "Interest (Other)": 0.00326,
                "Legal and Professional Fees": 0.12655,
                "Meals": 0.37615,
                "Office Expense": 0.041,
                "Other": 0.07123,
                "Pension and Profit Sharing": 0.00125,
                "Rent (Business Property)": 0.00777,
                "Rent (Vehicles and Equipment)": 0.00051,
                "Repairs and Maintenance": 0.00749,
                "Supplies": 0.0228,
                "Taxes and Licenses": 0.0025,
                "Travel": 0.00388,
                "Utilities": 0.10757,
                "Wages": 0.00204,
              },
            },
            "taxCategory": "Meals",
          },
        ]
      `);
    });

    it("returns a promise that resolves to a list of filtered Expenses when querying by foreignId", async () => {
      const expenses: AboundBulkResponse<Expense> = await abound.expenses.list(
        TEST_USER_ID,
        { foreignId: "29SMN2KD9" }
      );

      expect(expenses.data).toMatchInlineSnapshot(`
        Array [
          Object {
            "amount": 123.54,
            "date": "2020-05-12",
            "deductionAmount": 61.77,
            "description": "Pen and paper",
            "expenseId": "expenseId_testB1FBA298F0154D1906F18AF8C8D97FDCBD28",
            "expenseType": "business",
            "predictions": Object {
              "expenseTypePredictionScores": Object {
                "0": 0.007482942659408,
                "1": 0.992517054080963,
              },
              "taxCategoryPredictionScores": Object {
                "Advertising and Marketing": 0.05218,
                "Car and Truck": 0.0937,
                "Commission and Fees": 0.00056,
                "Contract Labor": 0.00352,
                "Depletion": 0.00006,
                "Depreciation": 0.00002,
                "Employee Benefits Program": 0.00624,
                "Insurance": 0.06961,
                "Interest (Mortgage)": 0.00012,
                "Interest (Other)": 0.00326,
                "Legal and Professional Fees": 0.12655,
                "Meals": 0.37615,
                "Office Expense": 0.041,
                "Other": 0.07123,
                "Pension and Profit Sharing": 0.00125,
                "Rent (Business Property)": 0.00777,
                "Rent (Vehicles and Equipment)": 0.00051,
                "Repairs and Maintenance": 0.00749,
                "Supplies": 0.0228,
                "Taxes and Licenses": 0.0025,
                "Travel": 0.00388,
                "Utilities": 0.10757,
                "Wages": 0.00204,
              },
            },
            "taxCategory": "Meals",
          },
        ]
      `);
    });
  });

  describe("retrive", () => {
    it("returns a promise that resolves to an Expense on success", async () => {
      const expense: AboundResponse<Expense> = await abound.expenses.retrieve(
        TEST_USER_ID,
        TEST_EXPENSE_ID
      );

      expect(expense.data).toMatchInlineSnapshot(`
        Object {
          "amount": 123.54,
          "date": "2020-05-12",
          "deductionAmount": 61.77,
          "description": "Pen and paper",
          "expenseId": "expenseId_testB1FBA298F0154D1906F18AF8C8D97FDCBD28",
          "expenseType": "business",
          "predictions": Object {
            "expenseTypePredictionScores": Object {
              "0": 0.007482942659408,
              "1": 0.992517054080963,
            },
            "taxCategoryPredictionScores": Object {
              "Advertising and Marketing": 0.05218,
              "Car and Truck": 0.0937,
              "Commission and Fees": 0.00056,
              "Contract Labor": 0.00352,
              "Depletion": 0.00006,
              "Depreciation": 0.00002,
              "Employee Benefits Program": 0.00624,
              "Insurance": 0.06961,
              "Interest (Mortgage)": 0.00012,
              "Interest (Other)": 0.00326,
              "Legal and Professional Fees": 0.12655,
              "Meals": 0.37615,
              "Office Expense": 0.041,
              "Other": 0.07123,
              "Pension and Profit Sharing": 0.00125,
              "Rent (Business Property)": 0.00777,
              "Rent (Vehicles and Equipment)": 0.00051,
              "Repairs and Maintenance": 0.00749,
              "Supplies": 0.0228,
              "Taxes and Licenses": 0.0025,
              "Travel": 0.00388,
              "Utilities": 0.10757,
              "Wages": 0.00204,
            },
          },
          "taxCategory": "Meals",
        }
      `);
    });
  });

  describe("update", () => {
    it("returns a promise that resolves to the updated Expense on success", async () => {
      const updatedExpense: AboundResponse<Expense> =
        await abound.expenses.update(TEST_USER_ID, TEST_EXPENSE_ID, {
          description: "something new!",
        });

      expect(updatedExpense.data).toMatchInlineSnapshot(`
        Object {
          "amount": 123.54,
          "date": "2020-05-12",
          "deductionAmount": 61.77,
          "description": "something new!",
          "expenseId": "expenseId_testB1FBA298F0154D1906F18AF8C8D97FDCBD28",
          "expenseType": "business",
          "predictions": Object {
            "expenseTypePredictionScores": Object {
              "0": 0.007482942659408,
              "1": 0.992517054080963,
            },
            "taxCategoryPredictionScores": Object {
              "Advertising and Marketing": 0.05218,
              "Car and Truck": 0.0937,
              "Commission and Fees": 0.00056,
              "Contract Labor": 0.00352,
              "Depletion": 0.00006,
              "Depreciation": 0.00002,
              "Employee Benefits Program": 0.00624,
              "Insurance": 0.06961,
              "Interest (Mortgage)": 0.00012,
              "Interest (Other)": 0.00326,
              "Legal and Professional Fees": 0.12655,
              "Meals": 0.37615,
              "Office Expense": 0.041,
              "Other": 0.07123,
              "Pension and Profit Sharing": 0.00125,
              "Rent (Business Property)": 0.00777,
              "Rent (Vehicles and Equipment)": 0.00051,
              "Repairs and Maintenance": 0.00749,
              "Supplies": 0.0228,
              "Taxes and Licenses": 0.0025,
              "Travel": 0.00388,
              "Utilities": 0.10757,
              "Wages": 0.00204,
            },
          },
          "taxCategory": "Meals",
        }
      `);
    });
  });

  describe("delete", () => {
    it("returns a promise that resolves to an empty object on success", async () => {
      const response: AboundResponse<EmptyObject> =
        await abound.expenses.delete(TEST_USER_ID, TEST_EXPENSE_ID);

      expect(response.data).toMatchInlineSnapshot(`Object {}`);
    });
  });
});
