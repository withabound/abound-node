import Abound from "../../src/abound";
import {
  AboundBulkResponse,
  AboundResponse,
} from "../../src/resources/base/AboundResponse";
import { Tax } from "../../src/resources/Taxes";
import { createAboundClient, TEST_USER_ID } from "../utils";

describe("Abound Taxes", () => {
  let abound: Abound;

  beforeAll(() => {
    abound = createAboundClient();
  });

  describe("list", () => {
    it("returns a promise that resolves to an object that includes the user's Taxes for all years on success", async () => {
      const taxes: AboundBulkResponse<Tax> = await abound.taxes.list(
        TEST_USER_ID
      );

      expect(taxes.data).toMatchInlineSnapshot(`
        Array [
          Object {
            "1099Income": 85329.67,
            "effectiveTaxRate": 0.3203,
            "expenseDeduction": 15321.99,
            "federalIncomeTax": 11556.64,
            "federalTaxOutstanding": 21305.31,
            "federalTaxTotal": 21305.31,
            "filingState": "ca",
            "filingStatus": "single",
            "irsPayments": 0,
            "marginalTaxRate": 0.4472,
            "medicareTax": 1847.79,
            "mileage": 1761.4,
            "mileageDeduction": 1012.8,
            "otherIrsPayments": 0,
            "otherStatePayments": 0,
            "otherTaxWithholdings": 0,
            "qbiDeduction": 12824.11,
            "quarterlyPayments": 0,
            "selfEmploymentTax": 9748.67,
            "smartTaxRate": 0.3838,
            "socialSecurityTax": 7900.88,
            "stateIncomeTax": 6026.71,
            "stateTaxOutstanding": 6026.71,
            "stateTaxPayments": 0,
            "stateTaxTotal": 6026.71,
            "taxBalance": 27332.02,
            "taxTotalOutstanding": 27332.02,
            "taxWithholdings": 0,
            "taxWithholdingsPending": 0,
            "totalTax": 27332.02,
            "w2Income": 60000,
            "year": "2020",
          },
        ]
      `);
    });
  });

  describe("retrieve", () => {
    it("returns a promise that resolves to an object that includes the user's Taxes for a single year on success", async () => {
      const taxes: AboundResponse<Tax> = await abound.taxes.retrieve(
        TEST_USER_ID,
        "2020"
      );

      expect(taxes.data).toMatchInlineSnapshot(`
        Object {
          "1099Income": 85329.67,
          "effectiveTaxRate": 0.3203,
          "expenseDeduction": 15321.99,
          "federalIncomeTax": 11556.64,
          "federalTaxOutstanding": 21305.31,
          "federalTaxTotal": 21305.31,
          "filingState": "ca",
          "filingStatus": "single",
          "irsPayments": 0,
          "marginalTaxRate": 0.4472,
          "medicareTax": 1847.79,
          "mileage": 1761.4,
          "mileageDeduction": 1012.8,
          "otherIrsPayments": 0,
          "otherStatePayments": 0,
          "otherTaxWithholdings": 0,
          "qbiDeduction": 12824.11,
          "quarterlyPayments": 0,
          "selfEmploymentTax": 9748.67,
          "smartTaxRate": 0.3838,
          "socialSecurityTax": 7900.88,
          "stateIncomeTax": 6026.71,
          "stateTaxOutstanding": 6026.71,
          "stateTaxPayments": 0,
          "stateTaxTotal": 6026.71,
          "taxBalance": 27332.02,
          "taxTotalOutstanding": 27332.02,
          "taxWithholdings": 0,
          "taxWithholdingsPending": 0,
          "totalTax": 27332.02,
          "w2Income": 60000,
          "year": "2020",
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
          w2Income: 75000,
          mileage: 16500,
        }
      );

      expect(updatedTaxes.data).toMatchInlineSnapshot(`
        Object {
          "1099Income": 85329.67,
          "effectiveTaxRate": 0.3203,
          "expenseDeduction": 15321.99,
          "federalIncomeTax": 11556.64,
          "federalTaxOutstanding": 21305.31,
          "federalTaxTotal": 21305.31,
          "filingState": "ca",
          "filingStatus": "single",
          "irsPayments": 0,
          "marginalTaxRate": 0.4472,
          "medicareTax": 1847.79,
          "mileage": 1761.4,
          "mileageDeduction": 1012.8,
          "otherIrsPayments": 0,
          "otherStatePayments": 0,
          "otherTaxWithholdings": 0,
          "qbiDeduction": 12824.11,
          "quarterlyPayments": 0,
          "selfEmploymentTax": 9748.67,
          "smartTaxRate": 0.3838,
          "socialSecurityTax": 7900.88,
          "stateIncomeTax": 6026.71,
          "stateTaxOutstanding": 6026.71,
          "stateTaxPayments": 0,
          "stateTaxTotal": 6026.71,
          "taxBalance": 27332.02,
          "taxTotalOutstanding": 27332.02,
          "taxWithholdings": 0,
          "taxWithholdingsPending": 0,
          "totalTax": 27332.02,
          "w2Income": 60000,
          "year": "2020",
        }
      `);
    });
  });
});
