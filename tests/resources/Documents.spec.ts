import Abound from "../../src/abound";
import {
  AboundBulkResponse,
  AboundResponse,
} from "../../src/resources/base/AboundResponse";
import { Document, DocumentType } from "../../src/resources/Documents";
import {
  createAboundClient,
  PUBLIC_BANK_LOGO_URL,
  randomEmail,
  randomNumberString,
  randomString,
  randomZip,
  removeQueryParameters,
  TEST_USER_ID,
} from "../utils";

const TEST_DOCUMENT_ID = "documentId_testefbd5d3d9ee9526ef9ff89a7c6b879174170";

describe("Abound Documents", () => {
  let abound: Abound;

  beforeAll(() => {
    abound = createAboundClient();
  });

  describe("create", () => {
    it("returns a promise that resolves to an object that includes a list of the created Documents on success", async () => {
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

  // TODO restore this test after the API properly returns a 200 response
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
