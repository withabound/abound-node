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

      expect(taxes).toMatchInlineSnapshot(`
        Object {
          "data": Array [
            Object {
              "1099Income": 0,
              "effectiveTaxRate": 0,
              "expenseDeduction": 3296.76,
              "federalIncomeTax": 0,
              "federalTaxOutstanding": 0,
              "federalTaxTotal": 0,
              "filingState": "ca",
              "filingStatus": "single",
              "irsPayments": 0,
              "marginalTaxRate": 0,
              "medicareTax": 0,
              "mileage": 0,
              "mileageDeduction": 0,
              "otherIrsPayments": 0,
              "otherStatePayments": 0,
              "otherTaxWithholdings": 0,
              "qbiDeduction": 0,
              "quarterlyPayments": 0,
              "selfEmploymentTax": 0,
              "smartTaxRate": 0.153,
              "socialSecurityTax": 0,
              "stateIncomeTax": 0,
              "stateTaxOutstanding": 0,
              "stateTaxPayments": 0,
              "taxBalance": 0,
              "taxTotalOutstanding": 0,
              "taxWithholdings": 0,
              "taxWithholdingsPending": 0,
              "totalTax": 0,
              "w2Income": 0,
              "year": "2020",
            },
            Object {
              "1099Income": 1394.69,
              "effectiveTaxRate": 0.1413,
              "expenseDeduction": 0,
              "federalIncomeTax": 0,
              "federalTaxOutstanding": 197.06,
              "federalTaxTotal": 197.06,
              "filingState": "ca",
              "filingStatus": "single",
              "irsPayments": 0,
              "marginalTaxRate": 0.1513,
              "medicareTax": 37.35,
              "mileage": 0,
              "mileageDeduction": 0,
              "otherIrsPayments": 0,
              "otherStatePayments": 0,
              "otherTaxWithholdings": 0,
              "qbiDeduction": 0,
              "quarterlyPayments": 0,
              "selfEmploymentTax": 197.06,
              "smartTaxRate": 0.153,
              "socialSecurityTax": 159.71,
              "stateIncomeTax": 0,
              "stateTaxOutstanding": 0,
              "stateTaxPayments": 0,
              "taxBalance": 197.06,
              "taxTotalOutstanding": 197.06,
              "taxWithholdings": 0,
              "taxWithholdingsPending": 0,
              "totalTax": 197.06,
              "w2Income": 0,
              "year": "2021",
            },
          ],
          "request": Object {
            "requestId": "requestId_4a9f0da465b57f74eb0fb501",
            "timestamp": 1629658911188,
          },
        }
      `);
    });
  });

  describe("retrieve", () => {
    it("returns a promise that resolves to an object that includes the user's Taxes for a single year on success", async () => {
      const taxes: AboundResponse<Tax> = await abound.taxes.retrieve(
        TEST_USER_ID,
        "2020"
      );

      expect(taxes).toMatchInlineSnapshot(`
        Object {
          "data": Object {
            "1099Income": 0,
            "effectiveTaxRate": 0,
            "expenseDeduction": 3296.76,
            "federalIncomeTax": 0,
            "federalTaxOutstanding": 0,
            "federalTaxTotal": 0,
            "filingState": "ca",
            "filingStatus": "single",
            "irsPayments": 0,
            "marginalTaxRate": 0,
            "medicareTax": 0,
            "mileage": 0,
            "mileageDeduction": 0,
            "otherIrsPayments": 0,
            "otherStatePayments": 0,
            "otherTaxWithholdings": 0,
            "qbiDeduction": 0,
            "quarterlyPayments": 0,
            "selfEmploymentTax": 0,
            "smartTaxRate": 0.153,
            "socialSecurityTax": 0,
            "stateIncomeTax": 0,
            "stateTaxOutstanding": 0,
            "stateTaxPayments": 0,
            "taxBalance": 0,
            "taxTotalOutstanding": 0,
            "taxWithholdings": 0,
            "taxWithholdingsPending": 0,
            "totalTax": 0,
            "w2Income": 0,
            "year": "2020",
          },
          "request": Object {
            "requestId": "requestId_21e2e210d99a7325f4c1a58d",
            "timestamp": 1629658926934,
          },
        }
      `);
    });
  });

  describe("calculate", () => {
    it("returns a promise that resolves to a user's Taxes based on the specified adjustments on success", async () => {
      const updatedTaxes: AboundResponse<Tax> = await abound.taxes.calculate(
        TEST_USER_ID,
        "2020",
        {
          w2Income: 55999.11,
          mileage: 16500,
        }
      );

      expect(updatedTaxes).toMatchInlineSnapshot(`
        Object {
          "data": Object {
            "1099Income": 0,
            "effectiveTaxRate": 0,
            "expenseDeduction": 3296.76,
            "federalIncomeTax": 0,
            "federalTaxOutstanding": 0,
            "federalTaxTotal": 0,
            "filingState": "ca",
            "filingStatus": "single",
            "irsPayments": 0,
            "marginalTaxRate": 0.12,
            "medicareTax": 0,
            "mileage": 16500,
            "mileageDeduction": 9487.5,
            "otherIrsPayments": 0,
            "otherStatePayments": 0,
            "otherTaxWithholdings": 0,
            "qbiDeduction": 0,
            "quarterlyPayments": 0,
            "selfEmploymentTax": 0,
            "smartTaxRate": 0.153,
            "socialSecurityTax": 0,
            "stateIncomeTax": 0,
            "stateTaxOutstanding": 0,
            "stateTaxPayments": 0,
            "taxBalance": 0,
            "taxTotalOutstanding": 0,
            "taxWithholdings": 0,
            "taxWithholdingsPending": 0,
            "totalTax": 0,
            "w2Income": 55999.11,
            "year": "2020",
          },
          "request": Object {
            "requestId": "requestId_219ba36a9605fc6bf51ddc18",
            "timestamp": 1629659031632,
          },
        }
      `);
    });
  });

  function initMocks() {
    // list
    nock(V2_SANDBOX_URL)
      .get(`/users/${TEST_USER_ID}/taxes`)
      .reply(200, {
        data: [
          {
            "1099Income": 0,
            effectiveTaxRate: 0,
            expenseDeduction: 3296.76,
            federalIncomeTax: 0,
            federalTaxOutstanding: 0,
            federalTaxTotal: 0,
            filingState: "ca",
            filingStatus: "single",
            irsPayments: 0,
            quarterlyPayments: 0,
            marginalTaxRate: 0,
            medicareTax: 0,
            mileage: 0,
            mileageDeduction: 0,
            otherIrsPayments: 0,
            otherStatePayments: 0,
            otherTaxWithholdings: 0,
            qbiDeduction: 0,
            selfEmploymentTax: 0,
            smartTaxRate: 0.153,
            socialSecurityTax: 0,
            stateIncomeTax: 0,
            stateTaxOutstanding: 0,
            stateTaxPayments: 0,
            taxBalance: 0,
            taxWithholdings: 0,
            taxWithholdingsPending: 0,
            taxTotalOutstanding: 0,
            totalTax: 0,
            w2Income: 0,
            year: "2020",
          },
          {
            "1099Income": 1394.69,
            effectiveTaxRate: 0.1413,
            expenseDeduction: 0,
            federalIncomeTax: 0,
            federalTaxOutstanding: 197.06,
            federalTaxTotal: 197.06,
            filingState: "ca",
            filingStatus: "single",
            irsPayments: 0,
            quarterlyPayments: 0,
            marginalTaxRate: 0.1513,
            medicareTax: 37.35,
            mileage: 0,
            mileageDeduction: 0,
            otherIrsPayments: 0,
            otherStatePayments: 0,
            otherTaxWithholdings: 0,
            qbiDeduction: 0,
            selfEmploymentTax: 197.06,
            smartTaxRate: 0.153,
            socialSecurityTax: 159.71,
            stateIncomeTax: 0,
            stateTaxOutstanding: 0,
            stateTaxPayments: 0,
            taxBalance: 197.06,
            taxWithholdings: 0,
            taxWithholdingsPending: 0,
            taxTotalOutstanding: 197.06,
            totalTax: 197.06,
            w2Income: 0,
            year: "2021",
          },
        ],
        request: {
          timestamp: 1629658911188,
          requestId: "requestId_4a9f0da465b57f74eb0fb501",
        },
      });

    // retrieve
    nock(V2_SANDBOX_URL)
      .get(`/users/${TEST_USER_ID}/taxes/2020`)
      .reply(200, {
        data: {
          "1099Income": 0,
          effectiveTaxRate: 0,
          expenseDeduction: 3296.76,
          federalIncomeTax: 0,
          federalTaxOutstanding: 0,
          federalTaxTotal: 0,
          filingState: "ca",
          filingStatus: "single",
          irsPayments: 0,
          quarterlyPayments: 0,
          marginalTaxRate: 0,
          medicareTax: 0,
          mileage: 0,
          mileageDeduction: 0,
          otherIrsPayments: 0,
          otherStatePayments: 0,
          otherTaxWithholdings: 0,
          qbiDeduction: 0,
          selfEmploymentTax: 0,
          smartTaxRate: 0.153,
          socialSecurityTax: 0,
          stateIncomeTax: 0,
          stateTaxOutstanding: 0,
          stateTaxPayments: 0,
          taxBalance: 0,
          taxWithholdings: 0,
          taxWithholdingsPending: 0,
          taxTotalOutstanding: 0,
          totalTax: 0,
          w2Income: 0,
          year: "2020",
        },
        request: {
          timestamp: 1629658926934,
          requestId: "requestId_21e2e210d99a7325f4c1a58d",
        },
      });

    // calculate
    nock(V2_SANDBOX_URL)
      .put(`/users/${TEST_USER_ID}/taxes/2020`)
      .reply(200, {
        data: {
          "1099Income": 0,
          effectiveTaxRate: 0,
          expenseDeduction: 3296.76,
          federalIncomeTax: 0,
          federalTaxOutstanding: 0,
          federalTaxTotal: 0,
          filingState: "ca",
          filingStatus: "single",
          irsPayments: 0,
          quarterlyPayments: 0,
          marginalTaxRate: 0.12,
          medicareTax: 0,
          mileage: 16500,
          mileageDeduction: 9487.5,
          otherIrsPayments: 0,
          otherStatePayments: 0,
          otherTaxWithholdings: 0,
          qbiDeduction: 0,
          selfEmploymentTax: 0,
          smartTaxRate: 0.153,
          socialSecurityTax: 0,
          stateIncomeTax: 0,
          stateTaxOutstanding: 0,
          stateTaxPayments: 0,
          taxBalance: 0,
          taxWithholdings: 0,
          taxWithholdingsPending: 0,
          taxTotalOutstanding: 0,
          totalTax: 0,
          w2Income: 55999.11,
          year: "2020",
        },
        request: {
          timestamp: 1629659031632,
          requestId: "requestId_219ba36a9605fc6bf51ddc18",
        },
      });
  }
});
