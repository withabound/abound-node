import { EmptyObject } from "../../src/resources/base/AboundResource";
import {
  AboundBulkResponse,
  AboundResponse,
} from "../../src/resources/base/AboundResponse";
import { PayerRequest, Payer } from "../../src/resources/Payers";
import { createAboundClients, randomString } from "../utils";

export const TEST_PAYER_ID = "payerId_test3629d683f7534f096ccd8d236e24887c9891";

describe("Abound Payers", () => {
  for (const abound of createAboundClients()) {
    describe("create", () => {
      it("returns a promise that resolves to the bulk created Payers on success", async () => {
        const createdPayer: AboundBulkResponse<Payer> =
          await abound.payers.create([
            {
              name: "John Doe",
              address: "299 Main St.",
              address2: "Suite 122",
              city: "Anytown",
              state: "PA",
              country: "US",
              zipcode: "17101",
              phoneNumber: "5555555555",
              taxIdNumber: "10011010",
            },
          ]);

        expect(createdPayer.data).toMatchInlineSnapshot(`
        Array [
          Object {
            "address": "299 Main St.",
            "address2": "Suite 122",
            "city": "Anytown",
            "country": "US",
            "foreignId": "your_foreign_id",
            "name": "John Doe",
            "payerId": "payerId_test3629d683f7534f096ccd8d236e24887c9891",
            "phoneNumber": "5555555555",
            "state": "PA",
            "zipcode": "17101",
          },
        ]
      `);
      });
    });

    describe("list", () => {
      it("returns a promise that resolves to a list of the account's Payers on success", async () => {
        const listedPayers: AboundBulkResponse<Payer> =
          await abound.payers.list();

        expect(listedPayers.data).toMatchInlineSnapshot(`
        Array [
          Object {
            "address": "1401 N Shoreline Blvd",
            "address2": "Suite 1",
            "city": "Mountain View",
            "country": "US",
            "foreignId": "your_foreign_id",
            "name": "Hooli",
            "payerId": "payerId_test3629d683f7534f096ccd8d236e24887c9891",
            "phoneNumber": "6501014096",
            "state": "CA",
            "zipcode": "94043",
          },
        ]
      `);
      });

      it("returns a promise that resolves to a list of filtered Payers when querying by foreignId", async () => {
        const payers: AboundBulkResponse<Payer> = await abound.payers.list({
          foreignId: "29SMN2KD9",
        });

        expect(payers.data).toMatchInlineSnapshot(`
Array [
  Object {
    "address": "1401 N Shoreline Blvd",
    "address2": "Suite 1",
    "city": "Mountain View",
    "country": "US",
    "foreignId": "your_foreign_id",
    "name": "Hooli",
    "payerId": "payerId_test3629d683f7534f096ccd8d236e24887c9891",
    "phoneNumber": "6501014096",
    "state": "CA",
    "zipcode": "94043",
  },
]
`);
      });
    });

    describe("retrieve", () => {
      it("returns a promise that resolves to a Payer on success", async () => {
        const retrievedPayer: AboundResponse<Payer> =
          await abound.payers.retrieve(TEST_PAYER_ID);

        expect(retrievedPayer.data).toMatchInlineSnapshot(`
        Object {
          "address": "1401 N Shoreline Blvd",
          "address2": "Suite 1",
          "city": "Mountain View",
          "country": "US",
          "foreignId": "your_foreign_id",
          "name": "Hooli",
          "payerId": "payerId_test3629d683f7534f096ccd8d236e24887c9891",
          "phoneNumber": "6501014096",
          "state": "CA",
          "zipcode": "94043",
        }
      `);
      });
    });

    describe("update", () => {
      it("returns a promise that resolves to the updated Payer on success", async () => {
        const newName: string = randomString();
        const newCity: string = randomString();
        const newAddress = "999 Main St.";

        const payerUpdates: Partial<PayerRequest> = {
          name: newName,
          city: newCity,
          address: newAddress,
        };
        const updatedPayer = await abound.payers.update(
          TEST_PAYER_ID,
          payerUpdates
        );

        expect(updatedPayer.data).toMatchInlineSnapshot(`
        Object {
          "address": "${newAddress}",
          "address2": "Suite 1",
          "city": "${newCity}",
          "country": "US",
          "foreignId": "your_foreign_id",
          "name": "${newName}",
          "payerId": "payerId_test3629d683f7534f096ccd8d236e24887c9891",
          "phoneNumber": "6501014096",
          "state": "CA",
          "zipcode": "94043",
        }
      `);
      });
    });

    describe("delete", () => {
      it("returns a promise that resolves to an empty object on success", async () => {
        const response: AboundResponse<EmptyObject> =
          await abound.payers.delete(TEST_PAYER_ID);

        expect(response.data).toMatchInlineSnapshot(`Object {}`);
      });
    });
  }
});
