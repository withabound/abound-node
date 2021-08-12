import nock from "nock";

import Abound from "../../src/abound";
import {
  AboundBulkResponse,
  AboundResponse,
} from "../../src/resources/base/AboundResponse";
import { Document } from "../../src/resources/Documents";
import { createAboundClient, V2_SANDBOX_URL } from "../utils";

describe("Abound Incomes", () => {
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
    it("returns a promise that resolves to an object that includes a list of the created Documents on success", async () => {
      const createdDocuments: AboundBulkResponse<Document> =
        await abound.documents.create(TEST_USER_ID, [
          // TODO fill with documents
        ]);

      expect(createdDocuments).toMatchInlineSnapshot();
    });
  });

  describe("list", () => {
    it("returns a promise that resolves to an object that includes a list of the user's Documents on success", async () => {
      const documents: AboundBulkResponse<Document> =
        await abound.documents.list(TEST_USER_ID);

      expect(documents).toMatchInlineSnapshot();
    });

    it("returns a promise that resolves to an object that includes a list of the user's Documents filtered by year on success when querying by year", async () => {
      const filteredDocuments: AboundBulkResponse<Document> =
        await abound.documents.list(TEST_USER_ID, {
          year: "2020 ",
        });

      expect(filteredDocuments).toMatchInlineSnapshot();
    });
  });

  describe("retrieve", () => {
    it("returns a promise that resolves to an object that includes a single Document on success", async () => {
      const document: AboundResponse<Document> =
        await abound.documents.retrieve(TEST_USER_ID, ""); // todo include id

      expect(document).toMatchInlineSnapshot();
    });
  });

  function initMocks() {
    // create
    nock(V2_SANDBOX_URL)
      .post("/users/userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f/documents")
      .reply(200, {});

    // list
    nock(V2_SANDBOX_URL)
      .get("/users/userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f/documents")
      .reply(200, {});

    // list, filter by year
    nock(V2_SANDBOX_URL)
      .get(
        "/users/userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f/documents?year=2020"
      )
      .reply(200, {});

    // retrieve
    nock(V2_SANDBOX_URL)
      .get(
        "/users/userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f/documents/docId"
      ) // todo fill documentid
      .reply(200, {});
  }
});
