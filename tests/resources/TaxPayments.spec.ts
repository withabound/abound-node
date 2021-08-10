import nock from "nock";

import Abound from "../../src/abound";
import {
  AboundBulkResponse,
  AboundResponse,
} from "../../src/resources/base/AboundResponse";
import { TaxPayment, TaxPeriod } from "../../src/resources/TaxPayments";
import { createAboundClient, V2_SANDBOX_URL } from "../utils";

describe("Abound Tax Payments", () => {
  let abound: Abound;

  beforeAll(() => {
    abound = createAboundClient();
    initMocks();
  });

  afterAll(() => {
    nock.restore();
  });

  describe("create", () => {
    it("returns a promise that resolves to a created tax payment on success", async () => {
      const createdTaxPayment: AboundResponse<TaxPayment> =
        await abound.taxPayments.create(
          "userId_509948c18e95c0462cad5db54a18888cd2779b72",
          {
            year: "2020",
            period: TaxPeriod.Q1,
            amount: 450.22,
            entity: "IRS",
            paymentMethodId:
              "paymentMethodId_27849a2a5b3135486c4860dc437ba026d6294ad4",
          }
        );

      expect(createdTaxPayment).toMatchInlineSnapshot(`
        Object {
          "data": Object {
            "amount": 450.22,
            "createdDate": "2021-08-09",
            "entity": "IRS",
            "paymentMethodId": "paymentMethodId_27849a2a5b3135486c4860dc437ba026d6294ad4",
            "period": "Q1",
            "status": "created",
            "taxPaymentId": "taxPaymentId_db80fa2ca8ccd4463ba5f1e926aea8e1d01ee8aa",
            "year": "2020",
          },
          "request": Object {
            "requestId": "requestId_0c882658fbd4f711e588a8b2",
            "timestamp": 1628561398061,
          },
        }
      `);
    });
  });

  describe("list", () => {
    it("returns a promise that resolves to a list of the user's tax payments on success", async () => {
      const taxPayments: AboundBulkResponse<TaxPayment> =
        await abound.taxPayments.list(
          "userId_509948c18e95c0462cad5db54a18888cd2779b72"
        );

      expect(taxPayments).toMatchInlineSnapshot(`
        Object {
          "data": Array [
            Object {
              "amount": 450.22,
              "createdDate": "2021-08-09",
              "entity": "IRS",
              "paymentMethodId": "paymentMethodId_27849a2a5b3135486c4860dc437ba026d6294ad4",
              "period": "Q1",
              "status": "created",
              "taxPaymentId": "taxPaymentId_db80fa2ca8ccd4463ba5f1e926aea8e1d01ee8aa",
              "year": "2020",
            },
          ],
          "request": Object {
            "requestId": "requestId_d1f6a31771713026d15c043e",
            "timestamp": 1628561782066,
          },
        }
      `);
    });
  });

  describe("retrieve", () => {
    it("returns a promise that resolves to a single tax payment on success", async () => {
      const taxPayment: AboundResponse<TaxPayment> =
        await abound.taxPayments.retrieve(
          "userId_509948c18e95c0462cad5db54a18888cd2779b72",
          "taxPaymentId_db80fa2ca8ccd4463ba5f1e926aea8e1d01ee8aa"
        );

      expect(taxPayment).toMatchInlineSnapshot(`
        Object {
          "data": Object {
            "amount": 450.22,
            "createdDate": "2021-08-09",
            "entity": "IRS",
            "paymentMethodId": "paymentMethodId_27849a2a5b3135486c4860dc437ba026d6294ad4",
            "period": "Q1",
            "status": "created",
            "taxPaymentId": "taxPaymentId_db80fa2ca8ccd4463ba5f1e926aea8e1d01ee8aa",
            "year": "2020",
          },
          "request": Object {
            "requestId": "requestId_b9b11d251b802fc9ab043c7b",
            "timestamp": 1628561846156,
          },
        }
      `);
    });
  });

  function initMocks() {
    nock(V2_SANDBOX_URL)
      .post(
        "/users/userId_509948c18e95c0462cad5db54a18888cd2779b72/taxPayments"
      )
      .reply(200, {
        data: {
          taxPaymentId: "taxPaymentId_db80fa2ca8ccd4463ba5f1e926aea8e1d01ee8aa",
          year: "2020",
          period: "Q1",
          status: "created",
          amount: 450.22,
          entity: "IRS",
          paymentMethodId:
            "paymentMethodId_27849a2a5b3135486c4860dc437ba026d6294ad4",
          createdDate: "2021-08-09",
        },
        request: {
          timestamp: 1628561398061,
          requestId: "requestId_0c882658fbd4f711e588a8b2",
        },
      });

    nock(V2_SANDBOX_URL)
      .get("/users/userId_509948c18e95c0462cad5db54a18888cd2779b72/taxPayments")
      .reply(200, {
        data: [
          {
            taxPaymentId:
              "taxPaymentId_db80fa2ca8ccd4463ba5f1e926aea8e1d01ee8aa",
            year: "2020",
            period: "Q1",
            status: "created",
            amount: 450.22,
            entity: "IRS",
            paymentMethodId:
              "paymentMethodId_27849a2a5b3135486c4860dc437ba026d6294ad4",
            createdDate: "2021-08-09",
          },
        ],
        request: {
          timestamp: 1628561782066,
          requestId: "requestId_d1f6a31771713026d15c043e",
        },
      });

    nock(V2_SANDBOX_URL)
      .get(
        "/users/userId_509948c18e95c0462cad5db54a18888cd2779b72/taxPayments/taxPaymentId_db80fa2ca8ccd4463ba5f1e926aea8e1d01ee8aa"
      )
      .reply(200, {
        data: {
          taxPaymentId: "taxPaymentId_db80fa2ca8ccd4463ba5f1e926aea8e1d01ee8aa",
          year: "2020",
          period: "Q1",
          status: "created",
          amount: 450.22,
          entity: "IRS",
          paymentMethodId:
            "paymentMethodId_27849a2a5b3135486c4860dc437ba026d6294ad4",
          createdDate: "2021-08-09",
        },
        request: {
          timestamp: 1628561846156,
          requestId: "requestId_b9b11d251b802fc9ab043c7b",
        },
      });
  }
});
