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
            "deductionAmount": 0,
            "description": "gas",
            "expenseId": "expenseId_testB1FBA298F0154D1906F18AF8C8D97FDCBD28",
            "expenseType": "personal",
            "predictions": Object {},
            "taxCategory": null,
          },
          Object {
            "amount": 700.44,
            "date": "2020-12-12",
            "deductionAmount": 0,
            "description": "tires",
            "expenseId": "expenseId_test495DB2C7F905E5DDDFD03B12029D8FB99084",
            "expenseType": "personal",
            "predictions": Object {},
            "taxCategory": null,
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
            "predictions": Object {},
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
            "predictions": Object {},
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
          "predictions": Object {},
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
          "predictions": Object {},
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
