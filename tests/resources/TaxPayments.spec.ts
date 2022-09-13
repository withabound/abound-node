import Abound from "../../src/abound";
import {
  AboundBulkResponse,
  AboundResponse,
} from "../../src/resources/base/AboundResponse";
import { TaxPayment, TaxPeriod } from "../../src/resources/TaxPayments";
import {
  createAboundClient,
  removeQueryParameters,
  TEST_USER_ID,
} from "../utils";

describe("Abound Tax Payments", () => {
  let abound: Abound;

  beforeAll(() => {
    abound = createAboundClient();
  });

  describe("create", () => {
    it("returns a promise that resolves to a created tax payment on success", async () => {
      const year = String(new Date().getFullYear());

      const createdTaxPayment: AboundResponse<TaxPayment> =
        await abound.taxPayments.create(TEST_USER_ID, {
          year,
          period: TaxPeriod.Q1,
          amount: 450.22,
          paymentMethodId:
            "paymentMethodId_test32920837fa800382b7ee5676f281fbfc18cb",
        });

      expect(normalizeNonIdempotentFields(createdTaxPayment.data))
        .toMatchInlineSnapshot(`
        Object {
          "amount": 450.22,
          "createdDate": "2021-09-05",
          "notes": Object {},
          "paymentMethodId": "paymentMethodId_test32920837fa800382b7ee5676f281fbfc18cb",
          "period": "Q1",
          "status": "created",
          "taxPaymentId": "taxPaymentId_test614d255d3048f6f7b3b5bb219b18f0f065d3",
          "year": "2022",
        }
      `);
    });
  });

  describe("list", () => {
    it("returns a promise that resolves to a list of the user's tax payments on success", async () => {
      const taxPayments: AboundBulkResponse<TaxPayment> =
        await abound.taxPayments.list(TEST_USER_ID);

      expect(bulkNormalizeNonIdempotentFields(taxPayments.data))
        .toMatchInlineSnapshot(`
        Array [
          Object {
            "amount": 154.66,
            "createdDate": "2021-09-05",
            "notes": Object {},
            "paymentMethodId": "paymentMethodId_test32920837fa800382b7ee5676f281fbfc18cb",
            "period": "Q2",
            "status": "created",
            "taxPaymentId": "taxPaymentId_test614d255d3048f6f7b3b5bb219b18f0f065d3",
            "year": "2020",
          },
        ]
      `);
    });

    it("returns a promise that resolves to a list of filtered tax payments when querying by foreignId", async () => {
      const taxPayments: AboundBulkResponse<TaxPayment> =
        await abound.taxPayments.list(TEST_USER_ID, { foreignId: "29SMN2KD9" });

      expect(taxPayments.data[0]).toMatchInlineSnapshot(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        { createdDate: expect.any(String) },
        `
        Object {
          "amount": 154.66,
          "createdDate": Any<String>,
          "notes": Object {},
          "paymentMethodId": "paymentMethodId_test32920837fa800382b7ee5676f281fbfc18cb",
          "period": "Q2",
          "status": "created",
          "taxPaymentId": "taxPaymentId_test614d255d3048f6f7b3b5bb219b18f0f065d3",
          "year": "2020",
        }
      `
      );
    });
  });

  describe("retrieve", () => {
    it("returns a promise that resolves to a single tax payment on success", async () => {
      const taxPayment: AboundResponse<TaxPayment> =
        await abound.taxPayments.retrieve(
          TEST_USER_ID,
          "taxPaymentId_test614d255d3048f6f7b3b5bb219b18f0f065d3"
        );

      expect(normalizeNonIdempotentFields(taxPayment.data))
        .toMatchInlineSnapshot(`
        Object {
          "amount": 154.66,
          "createdDate": "2021-09-05",
          "document": Object {
            "documentName": "2020 Q2 IRS Estimated Tax Payment",
            "documentURL": "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/test62ae93bafa6310aa9952e8b3bf5796443111/Form_1040ES_Y2020-Q2.pdf",
            "type": "1040ES",
            "year": "2020",
          },
          "notes": Object {},
          "paymentMethodId": "paymentMethodId_test32920837fa800382b7ee5676f281fbfc18cb",
          "period": "Q2",
          "status": "done",
          "submittedDate": "2022-09-13",
          "taxPaymentId": "taxPaymentId_test614d255d3048f6f7b3b5bb219b18f0f065d3",
          "year": "2020",
        }
      `);
    });
  });
});

function bulkNormalizeNonIdempotentFields(
  taxPayments: TaxPayment[]
): TaxPayment[] {
  return taxPayments.map((tp) => normalizeNonIdempotentFields(tp));
}

/* eslint-disable @typescript-eslint/prefer-optional-chain */
function normalizeNonIdempotentFields(taxPayment: TaxPayment): TaxPayment {
  if (taxPayment.document && taxPayment.document.documentURL) {
    taxPayment.document.documentURL = removeQueryParameters(
      taxPayment.document.documentURL
    );
  }

  taxPayment.createdDate = "2021-09-05";

  return taxPayment;
}
/* eslint-enable @typescript-eslint/prefer-optional-chain */
