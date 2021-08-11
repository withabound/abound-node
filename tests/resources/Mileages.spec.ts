import nock from "nock";

import Abound from "../../src/abound";
import {
  AboundBulkResponse,
  AboundResponse,
} from "../../src/resources/base/AboundResponse";
import { Mileage } from "../../src/resources/Mileages";
import { createAboundClient, randomDate, V2_SANDBOX_URL } from "../utils";

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
    it("returns a promise that resolves to a list of the bulk created Mileages on success", async () => {
      const createdMileages: AboundBulkResponse<Mileage> =
        await abound.mileages.create(
          "userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f",
          [
            {
              distance: 21.1,
              date: randomDate(),
            },
            {
              distance: 89.1,
              date: randomDate(),
            },
          ]
        );

      expect(createdMileages).toMatchInlineSnapshot(`
Object {
  "data": Array [
    Object {
      "date": "2021-08-09",
      "distance": 21.1,
      "transactionId": "mileageId_a4f91a486455036ff08fac6392d7c73ca4077f18",
    },
    Object {
      "date": "2021-08-10",
      "distance": 89.1,
      "transactionId": "mileageId_899077c22a901810574c95009abc072cd3febe1e",
    },
  ],
  "request": Object {
    "requestId": "requestId_cbac0c1330db2308633bae2f",
    "timestamp": 1628655978213,
  },
}
`);
    });
  });

  describe("retrieve", () => {
    it("returns a promise that resolves to a Mileage on success", async () => {
      const retrievedMileage: AboundResponse<Mileage> =
        await abound.mileages.retrieve(
          "userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f",
          "mileageId_a4f91a486455036ff08fac6392d7c73ca4077f18"
        );

      expect(retrievedMileage).toMatchInlineSnapshot(`
Object {
  "data": Object {
    "date": "2021-08-09",
    "distance": 21.1,
    "transactionId": "mileageId_a4f91a486455036ff08fac6392d7c73ca4077f18",
  },
  "request": Object {
    "requestId": "requestId_038d9dcdf0a008ed80742dee",
    "timestamp": 1628656933874,
  },
}
`);
    });
  });

  function initMocks() {
    nock(V2_SANDBOX_URL)
      .post("/users/userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f/mileage")
      .reply(200, {
        data: [
          {
            distance: 21.1,
            date: "2021-08-09",
            transactionId: "mileageId_a4f91a486455036ff08fac6392d7c73ca4077f18",
          },
          {
            distance: 89.1,
            date: "2021-08-10",
            transactionId: "mileageId_899077c22a901810574c95009abc072cd3febe1e",
          },
        ],
        request: {
          timestamp: 1628655978213,
          requestId: "requestId_cbac0c1330db2308633bae2f",
        },
      });

    nock(V2_SANDBOX_URL)
      .get(
        "/users/userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f/mileage/mileageId_a4f91a486455036ff08fac6392d7c73ca4077f18"
      )
      .reply(200, {
        data: {
          transactionId: "mileageId_a4f91a486455036ff08fac6392d7c73ca4077f18",
          distance: 21.1,
          date: "2021-08-09",
        },
        request: {
          timestamp: 1628656933874,
          requestId: "requestId_038d9dcdf0a008ed80742dee",
        },
      });
  }
});
