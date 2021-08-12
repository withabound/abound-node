import nock from "nock";

import Abound from "../../src/abound";
import {
  AboundBulkResponse,
  AboundResponse,
} from "../../src/resources/base/AboundResponse";
import { Tax } from "../../src/resources/Taxes";
import { createAboundClient, V2_SANDBOX_URL } from "../utils";

describe("Abound Taxes", () => {
  const TEST_USER_ID = "userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f";

  let abound: Abound;

  beforeAll(() => {
    abound = createAboundClient();
    initMocks();
  });

  afterAll(() => {
    nock.restore();
  });

  describe("list", () => {
    it("returns a promise that resolves to an object that includes the user's Taxes for all years on success", async () => {
      const taxes: AboundBulkResponse<Tax> = await abound.taxes.list(
        TEST_USER_ID
      );

      expect(taxes).toMatchInlineSnapshot();
    });
  });

  describe("retrieve", () => {
    it("returns a promise that resolves to an object that includes the user's Taxes for a single year on success", async () => {
      const taxes: AboundResponse<Tax> = await abound.taxes.retrieve(
        TEST_USER_ID,
        "2020"
      );

      expect(taxes).toMatchInlineSnapshot();
    });
  });

  describe("calculate", () => {
    it("returns a promise that resolves to a user's Taxes based on the specified adjustments on success", async () => {
      const updatedTaxes: AboundResponse<Tax> = await abound.taxes.calculate(
        TEST_USER_ID,
        "2020",
        {
          // todo needs data
        }
      );

      expect(updatedTaxes).toMatchInlineSnapshot();
    });
  });

  function initMocks() {
    // list
    nock(V2_SANDBOX_URL)
      .get("/users/userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f/taxes")
      .reply(200, {}); // todo needs data

    // retrieve
    nock(V2_SANDBOX_URL)
      .get("/users/userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f/taxes/2020")
      .reply(200, {}); // todo needs data

    // calculate
    nock(V2_SANDBOX_URL)
      .put("/users/userId_1dafc40ae9838c2c3e721b2c3c362252ab55eb9f/taxes/2020")
      .reply(200, {}); // todo needs data
  }
});
