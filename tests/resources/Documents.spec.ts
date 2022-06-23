import Abound from "../../src/abound";
import {
  AboundBulkResponse,
  AboundResponse,
} from "../../src/resources/base/AboundResponse";
import { Document, DocumentType } from "../../src/resources/Documents";
import {
  W9DocumentRequest,
  W9TaxClassification,
} from "../../src/resources/document-types/W9";
import { Ten99INTDocumentRequest } from "../../src/resources/document-types/1099INT";
import {
  PayerClassification,
  Ten99KDocumentRequest,
  TransactionsReportedClassification,
} from "../../src/resources/document-types/1099K";
import { Ten99MISCDocumentRequest } from "../../src/resources/document-types/1099MISC";
import { Ten99NECDocumentRequest } from "../../src/resources/document-types/1099NEC";
import { TEST_PAYER_ID } from "./Payers.spec";
import {
  createAboundClient,
  PUBLIC_BANK_LOGO_URL,
  randomCurrencyAmount,
  randomEmail,
  randomNumberString,
  randomString,
  randomZip,
  removeQueryParameters,
  TEST_USER_ID,
} from "../utils";
import {
  StateTaxInfo,
  StateTaxInfoWithIncome,
} from "../../src/resources/document-types/StateTaxInfo";

const TEST_DOCUMENT_ID = "documentId_testefbd5d3d9ee9526ef9ff89a7c6b879174170";

describe("Abound Documents", () => {
  let abound: Abound;

  beforeAll(() => {
    abound = createAboundClient();
  });

  describe("create account statement", () => {
    it("returns a promise that resolves to an object that includes a list of the created Account Statement Documents on success", async () => {
      const accountNumber = randomNumberString(9);
      const last4 = accountNumber.slice(-4);

      const createdDocuments: AboundBulkResponse<Document> =
        await abound.documents.create(TEST_USER_ID, [
          {
            type: DocumentType.ACCOUNT_STATEMENT,
            year: 2020,
            beginDate: "2020-03-01",
            endDate: "2020-05-31",
            accountNumber,
            summary: {
              beginningBalance: 1234.89,
              endingBalance: 4321.89,
              interestPercentage: 1.23,
              interestAmount: 6.78,
              totalFees: 5.25,
            },
            bank: {
              name: randomString(),
              logo: PUBLIC_BANK_LOGO_URL,
              address: randomString(),
              city: randomString(),
              state: "CA",
              zipcode: randomZip(),
              customerService: {
                phoneNumber: "555-555-5555",
                email: randomEmail(),
                website: "www.example.com",
              },
            },
          },
        ]);

      expect(bulkNormalizeNonIdempotentFields(createdDocuments.data))
        .toMatchInlineSnapshot(`
        Array [
          Object {
            "createdTimestamp": 1630000000000,
            "documentId": "documentId_testefbd5d3d9ee9526ef9ff89a7c6b879174170",
            "documentName": "2020-03-01 - 2020-05-31 Account Statement (${last4})",
            "documentURL": "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/test62ae93bafa6310aa9952e8b3bf5796443111/2020-01-01_2020-01-31_Account_Statement_7890.pdf",
            "type": "accountStatement",
            "year": "2020",
          },
        ]
      `);
    });
  });

  describe("create 1099-INT", () => {
    describe("with the minimum number (1) of optional fields", () => {
      it("returns a promise that resolves to an object that includes a list of the created 1099-INT Documents on success", async () => {
        const ten99IntToCreate: Ten99INTDocumentRequest = {
          type: DocumentType.TEN99INT,
          payerId: TEST_PAYER_ID,
          year: 2021,
          interestIncome: 10.18,
        };

        const response: AboundBulkResponse<Document> =
          await abound.documents.create(TEST_USER_ID, [ten99IntToCreate]);

        expect(bulkNormalizeNonIdempotentFields(response.data))
          .toMatchInlineSnapshot(`
          Array [
            Object {
              "createdTimestamp": 1630000000000,
              "documentId": "documentId_testefbd5d3d9ee9526ef9ff89a7c6b879174170",
              "documentName": "2021 Form 1099-INT",
              "documentURL": "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/test62ae93bafa6310aa9952e8b3bf5796443111/2021_Form_1099-INT.pdf",
              "status": "created",
              "type": "1099int",
              "year": "2021",
            },
          ]
        `);
      });
    });

    describe("with many optional fields", () => {
      it("returns a promise that resolves to an object that includes a list of the created 1099-INT Documents on success", async () => {
        const accountNumber: string = randomNumberString(9);
        const payersRoutingNumber = "102001017";
        const investmentExpenses: number = randomCurrencyAmount(100);
        const bondPremium: number = randomCurrencyAmount(500);
        const taxExemptInterest: number = randomCurrencyAmount(1500);
        const stateTaxInfo: StateTaxInfo = {
          filingState: "ny",
          stateTaxWithheld: 3434.56,
        };

        const ten99INTToCreate: Ten99INTDocumentRequest = {
          type: DocumentType.TEN99INT,
          payerId: TEST_PAYER_ID,
          year: 2021,
          accountNumber,
          payersRoutingNumber,
          investmentExpenses,
          bondPremium,
          taxExemptInterest,
          interestIncome: 10.18,
          foreignTaxPaidCountry: "fr",
          stateTaxInfo: [stateTaxInfo],
        };

        const response: AboundBulkResponse<Document> =
          await abound.documents.create(TEST_USER_ID, [ten99INTToCreate]);

        expect(bulkNormalizeNonIdempotentFields(response.data))
          .toMatchInlineSnapshot(`
          Array [
            Object {
              "createdTimestamp": 1630000000000,
              "documentId": "documentId_testefbd5d3d9ee9526ef9ff89a7c6b879174170",
              "documentName": "2021 Form 1099-INT",
              "documentURL": "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/test62ae93bafa6310aa9952e8b3bf5796443111/2021_Form_1099-INT.pdf",
              "status": "created",
              "type": "1099int",
              "year": "2021",
            },
          ]
        `);
      });
    });
  });

  describe("create 1099-K", () => {
    it("returns a promise that resolves to an object that includes a list of the created 1099-K Documents on success", async () => {
      const pseName = randomString();
      const psePhoneNumber = randomNumberString(10);

      const ten99KToCreate: Ten99KDocumentRequest = {
        type: DocumentType.TEN99K,
        payerId: TEST_PAYER_ID,
        year: 2021,
        payerClassification: PayerClassification.PAYMENT_SETTLEMENT_ENTITY,
        pseName,
        psePhoneNumber,
        aggregateGrossAmount: 1000,
        transactionsReportedClassification:
          TransactionsReportedClassification.PAYMENT_CARD,
        numberOfPaymentTransactions: 12,
        grossAmountsByMonth: {
          january: 1000,
        },
      };

      const response: AboundBulkResponse<Document> =
        await abound.documents.create(TEST_USER_ID, [ten99KToCreate]);

      expect(bulkNormalizeNonIdempotentFields(response.data))
        .toMatchInlineSnapshot(`
          Array [
            Object {
              "createdTimestamp": 1630000000000,
              "documentId": "documentId_testefbd5d3d9ee9526ef9ff89a7c6b879174170",
              "documentName": "2021 Form 1099-K",
              "documentURL": "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/test62ae93bafa6310aa9952e8b3bf5796443111/2021_Form_1099-K.pdf",
              "status": "created",
              "type": "1099k",
              "year": "2021",
            },
          ]
        `);
    });
  });

  describe("create 1099-MISC", () => {
    it("returns a promise that resolves to an object that includes a list of the created 1099-MISC Documents on success", async () => {
      const accountNumber = randomNumberString(9);
      const rents: number = randomCurrencyAmount(7000);
      const royalties: number = randomCurrencyAmount(1000);
      const stateTaxInfoWithIncome: StateTaxInfoWithIncome = {
        filingState: "ca",
        stateTaxWithheld: 1927.38,
        stateIncome: 8391.18,
      };

      const ten99MISCToCreate: Ten99MISCDocumentRequest = {
        type: DocumentType.TEN99MISC,
        payerId: TEST_PAYER_ID,
        year: 2021,
        accountNumber,
        rents,
        royalties,
        stateTaxInfo: [stateTaxInfoWithIncome],
      };

      const response: AboundBulkResponse<Document> =
        await abound.documents.create(TEST_USER_ID, [ten99MISCToCreate]);

      expect(bulkNormalizeNonIdempotentFields(response.data))
        .toMatchInlineSnapshot(`
        Array [
          Object {
            "createdTimestamp": 1630000000000,
            "documentId": "documentId_testefbd5d3d9ee9526ef9ff89a7c6b879174170",
            "documentName": "2021 Form 1099-MISC",
            "documentURL": "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/test62ae93bafa6310aa9952e8b3bf5796443111/2021_Form_1099-MISC.pdf",
            "status": "created",
            "type": "1099misc",
            "year": "2021",
          },
        ]
      `);
    });
  });

  describe("create 1099-NEC", () => {
    it("returns a promise that resolves to an object that includes a list of the created 1099-NEC Documents on success", async () => {
      const ten99NECToCreate: Ten99NECDocumentRequest = {
        type: DocumentType.TEN99NEC,
        payerId: TEST_PAYER_ID,
        year: 2020,
        nonemployeeCompensation: 15000,
      };

      const response: AboundBulkResponse<Document> =
        await abound.documents.create(TEST_USER_ID, [ten99NECToCreate]);

      expect(bulkNormalizeNonIdempotentFields(response.data))
        .toMatchInlineSnapshot(`
        Array [
          Object {
            "createdTimestamp": 1630000000000,
            "documentId": "documentId_testefbd5d3d9ee9526ef9ff89a7c6b879174170",
            "documentName": "2020 Form 1099-NEC",
            "documentURL": "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/test62ae93bafa6310aa9952e8b3bf5796443111/2021_Form_1099-NEC.pdf",
            "status": "created",
            "type": "1099nec",
            "year": "2020",
          },
        ]
      `);
    });
  });

  describe("create W9", () => {
    it("returns a promise that resolves to an object that includes a list of the created W9 Documents on success", async () => {
      const accountNumber: string = randomNumberString(9);

      const w9ToCreate: W9DocumentRequest = {
        type: DocumentType.W9,
        year: 2021,
        payerId: TEST_PAYER_ID,
        taxClassification: W9TaxClassification.SOLE_PROPRIETOR,
        certificationTimestamp: Date.now(),
        accountNumbers: [accountNumber],
      };

      const response: AboundBulkResponse<Document> =
        await abound.documents.create(TEST_USER_ID, [w9ToCreate]);

      expect(bulkNormalizeNonIdempotentFields(response.data))
        .toMatchInlineSnapshot(`
        Array [
          Object {
            "createdTimestamp": 1630000000000,
            "documentId": "documentId_testefbd5d3d9ee9526ef9ff89a7c6b879174170",
            "documentName": "2021 Form W-9",
            "documentURL": "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/test62ae93bafa6310aa9952e8b3bf5796443111/2021_Form_W-9.pdf",
            "type": "w9",
            "year": "2021",
          },
        ]
      `);
    });
  });

  describe("list", () => {
    it("returns a promise that resolves to an object that includes a list of the user's Documents on success", async () => {
      const documents: AboundBulkResponse<Document> =
        await abound.documents.list(TEST_USER_ID);

      expect(bulkNormalizeNonIdempotentFields(documents.data))
        .toMatchInlineSnapshot(`
        Array [
          Object {
            "createdTimestamp": 1630000000000,
            "documentId": "documentId_testefbd5d3d9ee9526ef9ff89a7c6b879174170",
            "documentName": "2020-01-01 - 2020-01-31 Account Statement (7890)",
            "documentURL": "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/test62ae93bafa6310aa9952e8b3bf5796443111/2020-01-01_2020-01-31_Account_Statement_7890.pdf",
            "type": "accountStatement",
            "year": "2020",
          },
        ]
      `);
    });

    it("returns a promise that resolves to an object that includes a list of the user's Documents filtered by year on success when querying by year", async () => {
      const filteredDocuments: AboundBulkResponse<Document> =
        await abound.documents.list(TEST_USER_ID, {
          year: "2021",
        });

      expect(bulkNormalizeNonIdempotentFields(filteredDocuments.data))
        .toMatchInlineSnapshot(`
        Array [
          Object {
            "createdTimestamp": 1630000000000,
            "documentId": "documentId_testefbd5d3d9ee9526ef9ff89a7c6b879174170",
            "documentName": "2021-01-01 - 2021-01-31 Account Statement (7890)",
            "documentURL": "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/test62ae93bafa6310aa9952e8b3bf5796443111/2020-01-01_2020-01-31_Account_Statement_7890.pdf",
            "type": "accountStatement",
            "year": "2021",
          },
          Object {
            "createdTimestamp": 1630000000000,
            "documentId": null,
            "documentName": "2021 Q2 Federal Estimated Tax Payment",
            "documentURL": "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/test62ae93bafa6310aa9952e8b3bf5796443111/Form_1040ES_Y2020-Q2.pdf",
            "type": "1040ES",
            "year": "2021",
          },
          Object {
            "createdTimestamp": 1630000000000,
            "documentId": null,
            "documentName": "2021 Expenses",
            "documentURL": "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/test62ae93bafa6310aa9952e8b3bf5796443111/2020_Expenses.csv",
            "type": "businessExpenses",
            "year": "2021",
          },
          Object {
            "createdTimestamp": 1630000000000,
            "documentId": null,
            "documentName": "2021 Schedule C",
            "documentURL": "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/test62ae93bafa6310aa9952e8b3bf5796443111/2020_scheduleC.pdf",
            "type": "scheduleC",
            "year": "2021",
          },
        ]
      `);
    });
  });

  // FIXME: restore this test after the API properly returns a 200 response
  describe.skip("retrieve", () => {
    it("returns a promise that resolves to an object that includes a single Document on success", async () => {
      const document: AboundResponse<Document> =
        await abound.documents.retrieve(TEST_USER_ID, TEST_DOCUMENT_ID);

      expect(document.data).toMatchInlineSnapshot();
    });
  });
});

function bulkNormalizeNonIdempotentFields(documents: Document[]) {
  return documents.map((d) => normalizeNonIdempotentFields(d));
}

function normalizeNonIdempotentFields(document: Document): Document {
  document.documentURL = removeQueryParameters(document.documentURL!);
  document.createdTimestamp = 1630000000000;

  return document;
}
