import Abound from "../../src/abound";
import {
  AboundBulkResponse,
  AboundResponse,
} from "../../src/resources/base/AboundResponse";
import { Mileage } from "../../src/resources/Mileages";
import { createAboundClient, randomDate, TEST_USER_ID } from "../utils";

describe("Abound Mileages", () => {
  let abound: Abound;

  beforeAll(() => {
    abound = createAboundClient();
  });

  describe("create", () => {
    it("returns a promise that resolves to a list of the bulk created Mileages on success", async () => {
      const randomDate1 = randomDate();
      const randomDate2 = randomDate();

      const createdMileages: AboundBulkResponse<Mileage> =
        await abound.mileages.create(TEST_USER_ID, [
          {
            distance: 21.1,
            date: randomDate1,
          },
          {
            distance: 89.1,
            date: randomDate2,
          },
        ]);

      expect(createdMileages.data).toMatchInlineSnapshot(`
        Array [
          Object {
            "date": "${randomDate1}",
            "description": "On-site Client Visit",
            "distance": 21.1,
            "transactionId": "mileageId_test4af7070cfb04a12552a1950e2f0afa660fba",
          },
          Object {
            "date": "${randomDate2}",
            "description": "On-site Client Visit",
            "distance": 89.1,
            "transactionId": "mileageId_test18aab753b0b7fda03a50e609790d088e5c25",
          },
        ]
      `);
    });
  });

  describe("retrieve", () => {
    it("returns a promise that resolves to a Mileage on success", async () => {
      const retrievedMileage: AboundResponse<Mileage> =
        await abound.mileages.retrieve(
          TEST_USER_ID,
          "mileageId_test4af7070cfb04a12552a1950e2f0afa660fba"
        );

      expect(retrievedMileage.data).toMatchInlineSnapshot(`
        Object {
          "date": "2020-01-09",
          "description": "On-site Client Visit",
          "distance": 23.1,
          "transactionId": "mileageId_test4af7070cfb04a12552a1950e2f0afa660fba",
        }
      `);
    });
  });
});
