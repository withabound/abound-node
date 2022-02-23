import Abound from "../../src/abound";
import { EmptyObject } from "../../src/resources/base/AboundResource";
import {
  AboundBulkResponse,
  AboundResponse,
} from "../../src/resources/base/AboundResponse";
import {
  Income,
  IncomeDocumentType,
  IncomeType,
} from "../../src/resources/Incomes";
import { createAboundClient, randomString, TEST_USER_ID } from "../utils";

const TEST_INCOME_ID = "incomeId_test8cb0d56b942722b6d719fa5aa9c5a8dbaa0f";

describe("Abound Incomes", () => {
  let abound: Abound;

  beforeAll(() => {
    abound = createAboundClient();
  });

  describe("create", () => {
    it("returns a promise that resolves to the created Income on success", async () => {
      const description = randomString();
      const category = randomString();

      const createdIncomes: AboundBulkResponse<Income> =
        await abound.incomes.create(TEST_USER_ID, [
          {
            incomeType: IncomeType.TEN99,
            date: "2021-08-01",
            amount: 410.11,
            description,
            category,
          },
        ]);

      expect(createdIncomes.data).toMatchInlineSnapshot(`
        Array [
          Object {
            "amount": 410.11,
            "category": "${category}",
            "date": "2021-08-01",
            "description": "${description}",
            "foreignId": "your_foreign_id",
            "incomeId": "incomeId_test8cb0d56b942722b6d719fa5aa9c5a8dbaa0f",
            "incomeType": "1099",
            "notes": Object {},
          },
        ]
      `);
    });
  });

  describe("create with predictions", () => {
    it("returns a promise that resolves to the created Income on success", async () => {
      const description = randomString();

      const createdIncomes: AboundBulkResponse<Income> =
        await abound.incomes.create(TEST_USER_ID, [
          {
            date: "2021-08-01",
            amount: 410.11,
            description,
          },
        ]);

      expect(createdIncomes.data).toMatchInlineSnapshot(`
          Array [
            Object {
              "amount": 410.11,
              "category": "Design Services",
              "date": "2021-08-01",
              "description": "${description}",
              "foreignId": "your_foreign_id",
              "incomeId": "incomeId_test8cb0d56b942722b6d719fa5aa9c5a8dbaa0f",
              "incomeType": "1099",
              "notes": Object {},
              "predictions": Object {
                "incomeTypePredictionScores": Object {
                  "1099": 0.95701,
                  "personal": 0.04299,
                  "w2": 0,
                },
              },
            },
          ]
          `);
    });
  });
  describe("list", () => {
    it("returns a promise that resolves to the user's Incomes on success", async () => {
      const incomes: AboundBulkResponse<Income> = await abound.incomes.list(
        TEST_USER_ID
      );

      expect(incomes.data).toMatchInlineSnapshot(`
        Array [
          Object {
            "amount": 222.34,
            "category": "Design Services",
            "date": "2020-01-14",
            "description": "Client Invoice",
            "foreignId": "your_foreign_id",
            "incomeId": "incomeId_test8cb0d56b942722b6d719fa5aa9c5a8dbaa0f",
            "incomeType": "1099",
            "notes": Object {},
          },
          Object {
            "amount": 333.34,
            "category": "Design Services",
            "date": "2020-01-14",
            "description": "Client Invoice",
            "documentType": "ssa1099",
            "foreignId": "your_foreign_id",
            "incomeId": "incomeId_test8cb0d56b942722b6d719fa5aa9c5a8dbaa0f",
            "incomeType": "1099",
            "notes": Object {},
          },
        ]
      `);
    });

    it("returns a promise that resolves to the user's incomes with filters applied when provided", async () => {
      const incomes: AboundBulkResponse<Income> = await abound.incomes.list(
        TEST_USER_ID,
        {
          incomeType: IncomeType.TEN99,
        }
      );

      expect(incomes.data).toMatchInlineSnapshot(`
        Array [
          Object {
            "amount": 222.34,
            "category": "Design Services",
            "date": "2020-01-14",
            "description": "Client Invoice",
            "foreignId": "your_foreign_id",
            "incomeId": "incomeId_test8cb0d56b942722b6d719fa5aa9c5a8dbaa0f",
            "incomeType": "1099",
            "notes": Object {},
          },
          Object {
            "amount": 333.34,
            "category": "Design Services",
            "date": "2020-01-14",
            "description": "Client Invoice",
            "documentType": "ssa1099",
            "foreignId": "your_foreign_id",
            "incomeId": "incomeId_test8cb0d56b942722b6d719fa5aa9c5a8dbaa0f",
            "incomeType": "1099",
            "notes": Object {},
          },
        ]
      `);
    });
  });

  describe("retrieve", () => {
    it("returns a promise that resolves to an Income on success", async () => {
      const income: AboundResponse<Income> = await abound.incomes.retrieve(
        TEST_USER_ID,
        TEST_INCOME_ID
      );

      expect(income.data).toMatchInlineSnapshot(`
        Object {
          "amount": 222.34,
          "category": "Design Services",
          "date": "2020-01-14",
          "description": "Client Invoice",
          "foreignId": "your_foreign_id",
          "incomeId": "incomeId_test8cb0d56b942722b6d719fa5aa9c5a8dbaa0f",
          "incomeType": "1099",
          "notes": Object {},
        }
      `);
    });
  });

  describe("update", () => {
    it("returns a promise that resolves to the updated Income on success", async () => {
      const updatedIncome: AboundResponse<Income> = await abound.incomes.update(
        TEST_USER_ID,
        TEST_INCOME_ID,
        {
          amount: 120.88,
        }
      );

      expect(updatedIncome.data).toMatchInlineSnapshot(`
        Object {
          "amount": 120.88,
          "category": "Design Services",
          "date": "2020-01-14",
          "description": "Client Invoice",
          "foreignId": "your_foreign_id",
          "incomeId": "incomeId_test8cb0d56b942722b6d719fa5aa9c5a8dbaa0f",
          "incomeType": "1099",
          "notes": Object {},
        }
      `);
    });
  });

  describe("delete", () => {
    it("returns a promise that resolves to an empty object on success", async () => {
      const result: AboundResponse<EmptyObject> = await abound.incomes.delete(
        TEST_USER_ID,
        TEST_INCOME_ID
      );

      expect(result.data).toMatchInlineSnapshot(`Object {}`);
    });
  });
});
