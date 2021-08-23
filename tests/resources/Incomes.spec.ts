import nock from "nock";

import Abound from "../../src/abound";
import { EmptyObject } from "../../src/resources/base/AboundResource";
import {
  AboundBulkResponse,
  AboundResponse,
} from "../../src/resources/base/AboundResponse";
import { Income } from "../../src/resources/Incomes";
import { createAboundClient, randomString, V2_SANDBOX_URL } from "../utils";

describe("Abound Incomes", () => {
  let abound: Abound;

  beforeAll(() => {
    abound = createAboundClient();
    initMocks();
  });

  afterAll(() => {
    nock.restore();
  });

  describe("create", () => {
    it("returns a promise that resolves to the created Income on success", async () => {
      const createdIncomes: AboundBulkResponse<Income> =
        await abound.incomes.create(
          "userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f",
          [
            {
              incomeType: "1099",
              date: "2021-08-01",
              amount: 410.11,
            },
            {
              incomeType: "1099-INT",
              date: "2021-08-05",
              amount: 10.87,
              description: randomString(),
              category: randomString(),
            },
          ]
        );

      expect(createdIncomes).toMatchInlineSnapshot(`
        Object {
          "data": Array [
            Object {
              "amount": 410.11,
              "date": "2021-08-01",
              "incomeId": "incomeId_60fe7c563d806127e9f1ece2e4484edcc9abd200",
              "incomeType": "1099",
            },
            Object {
              "amount": 10.87,
              "category": "",
              "date": "2021-08-05",
              "description": "",
              "incomeId": "incomeId_fb14e2edbe3a0588d83ee630a1b9d259d0249aba",
              "incomeType": "1099-INT",
            },
          ],
          "request": Object {
            "requestId": "requestId_c5801a98e47cc641bf18e608",
            "timestamp": 1628651591380,
          },
        }
      `);
    });
  });

  describe("list", () => {
    it("returns a promise that resolves to the user's Incomes on success", async () => {
      const incomes: AboundBulkResponse<Income> = await abound.incomes.list(
        "userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f"
      );

      expect(incomes).toMatchInlineSnapshot(`
        Object {
          "count": 3,
          "data": Array [
            Object {
              "amount": 120.12,
              "date": "2021-08-01",
              "incomeId": "incomeId_084f9d71bb9330de4f796f3b5a9f8cbfc360ab5b",
              "incomeType": "1099",
            },
            Object {
              "amount": 410.11,
              "date": "2021-08-01",
              "incomeId": "incomeId_57300fc1d0bdfdfe0c14333acf85d35ae50f6c33",
              "incomeType": "1099",
            },
            Object {
              "amount": 10.87,
              "category": "",
              "date": "2021-08-05",
              "description": "",
              "incomeId": "incomeId_8cf0ec55ca5fa2642402ac1332d65e1c68b4d26e",
              "incomeType": "1099-INT",
            },
          ],
          "request": Object {
            "requestId": "requestId_773b31cfd01f4e0cad7e7fe3",
            "timestamp": 1628651525992,
          },
        }
      `);
    });

    it("returns a promise that resolves to the user's incomes with filters applied when provided", async () => {
      const incomes: AboundBulkResponse<Income> = await abound.incomes.list(
        "userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f",
        {
          incomeType: "1099-INT",
        }
      );

      expect(incomes).toMatchInlineSnapshot(`
        Object {
          "count": 4,
          "data": Array [
            Object {
              "amount": 10.87,
              "category": "u2l6b8txyy4k5",
              "date": "2021-08-05",
              "description": "uiyrhbwqnc67l",
              "incomeId": "incomeId_48ea76f7924cc32b008bed20a13a32a9686c7e7a",
              "incomeType": "1099-INT",
            },
            Object {
              "amount": 10.87,
              "category": "",
              "date": "2021-08-05",
              "description": "",
              "incomeId": "incomeId_8cf0ec55ca5fa2642402ac1332d65e1c68b4d26e",
              "incomeType": "1099-INT",
            },
            Object {
              "amount": 10.87,
              "category": "",
              "date": "2021-08-05",
              "description": "",
              "incomeId": "incomeId_fa7d544f4ff97f0254897774007a490c6e06d7fd",
              "incomeType": "1099-INT",
            },
            Object {
              "amount": 10.87,
              "category": "",
              "date": "2021-08-05",
              "description": "",
              "incomeId": "incomeId_fb14e2edbe3a0588d83ee630a1b9d259d0249aba",
              "incomeType": "1099-INT",
            },
          ],
          "request": Object {
            "requestId": "requestId_bad5b8c3955b32b14af7102c",
            "timestamp": 1629661376872,
          },
        }
      `);
    });
  });

  describe("retrieve", () => {
    it("returns a promise that resolves to an Income on success", async () => {
      const income: AboundResponse<Income> = await abound.incomes.retrieve(
        "userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f",
        "incomeId_57300fc1d0bdfdfe0c14333acf85d35ae50f6c33"
      );

      expect(income).toMatchInlineSnapshot(`
        Object {
          "data": Object {
            "amount": 410.11,
            "date": "2021-08-01",
            "incomeId": "incomeId_57300fc1d0bdfdfe0c14333acf85d35ae50f6c33",
            "incomeType": "1099",
          },
          "request": Object {
            "requestId": "requestId_8260c374701b7c4d1aab89e4",
            "timestamp": 1628652160678,
          },
        }
      `);
    });
  });

  describe("update", () => {
    it("returns a promise that resolves to the updated Income on success", async () => {
      const updatedIncome: AboundResponse<Income> = await abound.incomes.update(
        "userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f",
        "incomeId_084f9d71bb9330de4f796f3b5a9f8cbfc360ab5b",
        {
          amount: 120.88,
        }
      );

      expect(updatedIncome).toMatchInlineSnapshot(`
        Object {
          "data": Object {
            "amount": 120.12,
            "date": "2021-08-01",
            "incomeId": "incomeId_084f9d71bb9330de4f796f3b5a9f8cbfc360ab5b",
            "incomeType": "1099",
          },
          "request": Object {
            "requestId": "requestId_5c5bf5d604ad803e6cc8eadf",
            "timestamp": 1628651424422,
          },
        }
      `);
    });
  });

  describe("delete", () => {
    it("returns a promise that resolves to an empty object on success", async () => {
      const result: AboundResponse<EmptyObject> = await abound.incomes.delete(
        "userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f",
        "incomeId_60fe7c563d806127e9f1ece2e4484edcc9abd200"
      );

      expect(result).toMatchInlineSnapshot(`
Object {
  "data": Object {},
  "request": Object {
    "requestId": "requestId_ba26ac6cee76e54630ea7f2d",
    "timestamp": 1628651806010,
  },
}
`);
    });
  });

  function initMocks() {
    // list
    nock(V2_SANDBOX_URL)
      .get("/users/userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f/incomes")
      .reply(200, {
        data: [
          {
            incomeId: "incomeId_084f9d71bb9330de4f796f3b5a9f8cbfc360ab5b",
            incomeType: "1099",
            amount: 120.12,
            date: "2021-08-01",
          },
          {
            incomeId: "incomeId_57300fc1d0bdfdfe0c14333acf85d35ae50f6c33",
            incomeType: "1099",
            amount: 410.11,
            date: "2021-08-01",
          },
          {
            incomeId: "incomeId_8cf0ec55ca5fa2642402ac1332d65e1c68b4d26e",
            incomeType: "1099-INT",
            amount: 10.87,
            description: "",
            date: "2021-08-05",
            category: "",
          },
        ],
        count: 3,
        request: {
          timestamp: 1628651525992,
          requestId: "requestId_773b31cfd01f4e0cad7e7fe3",
        },
      });

    // list, filter by incomeType
    nock(V2_SANDBOX_URL)
      .get(
        "/users/userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f/incomes?incomeType=1099-INT"
      )
      .reply(200, {
        data: [
          {
            incomeId: "incomeId_48ea76f7924cc32b008bed20a13a32a9686c7e7a",
            incomeType: "1099-INT",
            amount: 10.87,
            description: "uiyrhbwqnc67l",
            date: "2021-08-05",
            category: "u2l6b8txyy4k5",
          },
          {
            incomeId: "incomeId_8cf0ec55ca5fa2642402ac1332d65e1c68b4d26e",
            incomeType: "1099-INT",
            amount: 10.87,
            description: "",
            date: "2021-08-05",
            category: "",
          },
          {
            incomeId: "incomeId_fa7d544f4ff97f0254897774007a490c6e06d7fd",
            incomeType: "1099-INT",
            amount: 10.87,
            description: "",
            date: "2021-08-05",
            category: "",
          },
          {
            incomeId: "incomeId_fb14e2edbe3a0588d83ee630a1b9d259d0249aba",
            incomeType: "1099-INT",
            amount: 10.87,
            description: "",
            date: "2021-08-05",
            category: "",
          },
        ],
        count: 4,
        request: {
          timestamp: 1629661376872,
          requestId: "requestId_bad5b8c3955b32b14af7102c",
        },
      });

    // retrieve
    nock(V2_SANDBOX_URL)
      .get(
        "/users/userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f/incomes/incomeId_57300fc1d0bdfdfe0c14333acf85d35ae50f6c33"
      )
      .reply(200, {
        data: {
          incomeId: "incomeId_57300fc1d0bdfdfe0c14333acf85d35ae50f6c33",
          incomeType: "1099",
          amount: 410.11,
          date: "2021-08-01",
        },
        request: {
          timestamp: 1628652160678,
          requestId: "requestId_8260c374701b7c4d1aab89e4",
        },
      });

    // create
    nock(V2_SANDBOX_URL)
      .post("/users/userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f/incomes")
      .reply(200, {
        data: [
          {
            incomeId: "incomeId_60fe7c563d806127e9f1ece2e4484edcc9abd200",
            incomeType: "1099",
            amount: 410.11,
            date: "2021-08-01",
          },
          {
            incomeId: "incomeId_fb14e2edbe3a0588d83ee630a1b9d259d0249aba",
            incomeType: "1099-INT",
            amount: 10.87,
            description: "",
            date: "2021-08-05",
            category: "",
          },
        ],
        request: {
          timestamp: 1628651591380,
          requestId: "requestId_c5801a98e47cc641bf18e608",
        },
      });

    // update
    nock(V2_SANDBOX_URL)
      .put(
        "/users/userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f/incomes/incomeId_084f9d71bb9330de4f796f3b5a9f8cbfc360ab5b"
      )
      .reply(200, {
        data: {
          incomeId: "incomeId_084f9d71bb9330de4f796f3b5a9f8cbfc360ab5b",
          incomeType: "1099",
          amount: 120.12,
          date: "2021-08-01",
        },
        request: {
          timestamp: 1628651424422,
          requestId: "requestId_5c5bf5d604ad803e6cc8eadf",
        },
      });

    nock(V2_SANDBOX_URL)
      .delete(
        "/users/userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f/incomes/incomeId_60fe7c563d806127e9f1ece2e4484edcc9abd200"
      )
      .reply(200, {
        data: {},
        request: {
          timestamp: 1628651806010,
          requestId: "requestId_ba26ac6cee76e54630ea7f2d",
        },
      });
  }
});
