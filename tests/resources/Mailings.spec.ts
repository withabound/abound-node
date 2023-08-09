import Abound, { Mailing } from "../../src/abound";
import { EmptyObject } from "../../src/resources/base/AboundResource";
import {
  AboundBulkResponse,
  AboundResponse,
} from "../../src/resources/base/AboundResponse";
import { createAboundClient, TEST_USER_ID } from "../utils";

const TEST_DOCUMENT_ID = "documentId_testefbd5d3d9ee9526ef9ff89a7c6b879174170";
const TEST_MAILING_ID = "mailingId_testa4824d994d97be802ad48729fb1e7e169648";

describe("Abound Mailings", () => {
  let abound: Abound;

  beforeAll(() => {
    abound = createAboundClient();
  });

  describe("create 1099-NEC mailing", () => {
    it("returns a promise that resolves to an object that includes the created Mailing on success", async () => {
      const response: AboundResponse<Mailing> = await abound.mailings.create(
        TEST_USER_ID,
        TEST_DOCUMENT_ID
      );

      expect(normalizeNonIdempotentFields(response.data))
        .toMatchInlineSnapshot(`
          Object {
            "createdTimestamp": 1630000000000,
            "from": Object {
              "address": "1401 N Shoreline Blvd",
              "address2": "Suite 1",
              "city": "Mountain View",
              "company": "Hooli",
              "country": "US",
              "state": "CA",
              "zipcode": "94043",
            },
            "mailingId": "mailingId_testa4824d994d97be802ad48729fb1e7e169648",
            "status": "created",
            "to": Object {
              "address": "256 Byron Street",
              "address2": "Suite 32",
              "city": "Palo Alto",
              "company": "InGen Corporation",
              "country": "US",
              "name": "Ada Lovelace",
              "state": "CA",
              "zipcode": "94306",
            },
          }
        `);
    });
  });

  describe("list", () => {
    it("returns a promise that resolves to an object that includes a list of the document's Mailings on success", async () => {
      const mailings: AboundBulkResponse<Mailing> = await abound.mailings.list(
        TEST_USER_ID,
        TEST_DOCUMENT_ID
      );

      expect(bulkNormalizeNonIdempotentFields(mailings.data))
        .toMatchInlineSnapshot(`
          Array [
            Object {
              "createdTimestamp": 1630000000000,
              "from": Object {
                "address": "1401 N Shoreline Blvd",
                "address2": "Suite 1",
                "city": "Mountain View",
                "company": "Hooli",
                "country": "US",
                "state": "CA",
                "zipcode": "94043",
              },
              "mailingId": "mailingId_testa4824d994d97be802ad48729fb1e7e169648",
              "status": "created",
              "to": Object {
                "address": "256 Byron Street",
                "address2": "Suite 32",
                "city": "Palo Alto",
                "company": "InGen Corporation",
                "country": "US",
                "name": "Ada Lovelace",
                "state": "CA",
                "zipcode": "94306",
              },
            },
          ]
        `);
    });
  });

  describe("retrieve", () => {
    it("returns a promise that resolves to an object that includes a Mailing on success", async () => {
      const mailing: AboundResponse<Mailing> = await abound.mailings.retrieve(
        TEST_USER_ID,
        TEST_DOCUMENT_ID,
        TEST_MAILING_ID
      );

      expect(normalizeNonIdempotentFields(mailing.data)).toMatchInlineSnapshot(`
        Object {
          "createdTimestamp": 1630000000000,
          "from": Object {
            "address": "1401 N Shoreline Blvd",
            "address2": "Suite 1",
            "city": "Mountain View",
            "company": "Hooli",
            "country": "US",
            "state": "CA",
            "zipcode": "94043",
          },
          "mailingId": "mailingId_testa4824d994d97be802ad48729fb1e7e169648",
          "status": "created",
          "to": Object {
            "address": "256 Byron Street",
            "address2": "Suite 32",
            "city": "Palo Alto",
            "company": "InGen Corporation",
            "country": "US",
            "name": "Ada Lovelace",
            "state": "CA",
            "zipcode": "94306",
          },
        }
      `);
    });
  });

  describe("delete", () => {
    it("returns a promise that resolves to an empty object on success", async () => {
      const response: AboundResponse<EmptyObject> =
        await abound.mailings.delete(
          TEST_USER_ID,
          TEST_DOCUMENT_ID,
          TEST_MAILING_ID
        );

      expect(response.data).toMatchInlineSnapshot(`Object {}`);
    });
  });
});

function bulkNormalizeNonIdempotentFields(mailings: Mailing[]) {
  return mailings.map((d) => normalizeNonIdempotentFields(d));
}

function normalizeNonIdempotentFields(mailing: Mailing): Mailing {
  mailing.createdTimestamp = 1630000000000;

  return mailing;
}
