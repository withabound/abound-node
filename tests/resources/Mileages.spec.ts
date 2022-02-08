import Abound from "../../src/abound";
import { EmptyObject } from "../../src/resources/base/AboundResource";
import {
  AboundBulkResponse,
  AboundResponse,
} from "../../src/resources/base/AboundResponse";
import { Mileage, MileageRequest } from "../../src/resources/Mileages";
import {
  createAboundClient,
  randomDate,
  randomString,
  TEST_USER_ID,
} from "../utils";

const TEST_MILEAGE_ID = "mileageId_test4af7070cfb04a12552a1950e2f0afa660fba";

describe("Abound Mileages", () => {
  let abound: Abound;

  beforeAll(() => {
    abound = createAboundClient();
  });

  describe("list", () => {
    it("returns a promise that resolves to a list of the user's Mileages on success", async () => {
      const listedMileages: AboundBulkResponse<Mileage> =
        await abound.mileages.list(TEST_USER_ID);

      expect(listedMileages.data).toMatchInlineSnapshot(`
        Array [
          Object {
            "date": "2020-01-09",
            "description": "On-site Client Visit",
            "distance": 23.1,
            "transactionId": "mileageId_test4af7070cfb04a12552a1950e2f0afa660fba",
          },
        ]
      `);
    });
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
        await abound.mileages.retrieve(TEST_USER_ID, TEST_MILEAGE_ID);

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

  describe("update", () => {
    it("returns a promise that resolves to the updated Mileage on success", async () => {
      const newDate = randomDate();
      const newDescription = randomString();

      const toUpdate: Partial<MileageRequest> = {
        date: newDate,
        distance: 18.4,
        description: newDescription,
      };

      const updatedMileage: AboundResponse<Mileage> =
        await abound.mileages.update(TEST_USER_ID, TEST_MILEAGE_ID, toUpdate);

      expect(updatedMileage.data).toMatchInlineSnapshot(`
        Object {
          "date": "${newDate}",
          "description": "${newDescription}",
          "distance": 18.4,
          "transactionId": "mileageId_test4af7070cfb04a12552a1950e2f0afa660fba",
        }
      `);
    });
  });

  describe("delete", () => {
    it("returns a promise that resolves to an empty object on success", async () => {
      const response: AboundResponse<EmptyObject> =
        await abound.expenses.delete(TEST_USER_ID, TEST_MILEAGE_ID);

      expect(response.data).toMatchInlineSnapshot(`Object {}`);
    });
  });
});
