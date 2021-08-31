import nock from "nock";

import Abound from "../../src/abound";
import {
  AboundBulkResponse,
  AboundResponse,
} from "../../src/resources/base/AboundResponse";
import { DocumentType } from "../../src/resources/Documents";
import { AccountStatementDocument } from "../../src/resources/documents/AccountStatements";
import {
  createAboundClient,
  randomBase64EncodedString,
  randomEmail,
  randomNumberString,
  randomString,
  randomZip,
  V2_SANDBOX_URL,
} from "../utils";

describe("Abound Account Statement Documents", () => {
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
      const createdDocuments: AboundBulkResponse<AccountStatementDocument> =
        await abound.documents.create(TEST_USER_ID, [
          {
            type: DocumentType.ACCOUNT_STATEMENT,
            year: 2020,
            beginDate: "2020-03-01",
            endDate: "2020-05-31",
            accountNumber: randomNumberString(9),
            summary: {
              beginningBalance: 1234.89,
              endingBalance: 4321.89,
              interestPercentage: 1.23,
              interestAmount: 6.78,
              totalFees: 5.25,
            },
            bank: {
              name: randomString(),
              logo: randomBase64EncodedString(),
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

      expect(createdDocuments).toMatchInlineSnapshot(`
        Object {
          "data": Array [
            Object {
              "createdTimestamp": 1629428106674,
              "documentId": "documentId_cdf4d03f0f4ee54cbd179936f370e50ad6917361",
              "documentName": "2020-03-01 - 2020-05-31 Account Statement (11)",
              "documentURL": "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/886e591756b7ba0a12ebe677f7f42a5b26594c7f/2020-03-01_2020-05-31_Account_Statement_11_1629428106674.pdf?AWSAccessKeyId=<redacted>&Expires=1630032906&Signature=<redacted>",
              "type": "accountStatement",
              "year": "2020",
            },
          ],
          "request": Object {
            "requestId": "requestId_aeea70b23e42fdd4cefcd53e",
            "timestamp": 1629428106866,
          },
        }
      `);
    });
  });

  describe("list", () => {
    it("returns a promise that resolves to an object that includes a list of the user's Documents on success", async () => {
      const documents: AboundBulkResponse<AccountStatementDocument> =
        await abound.documents.list(TEST_USER_ID);

      expect(documents).toMatchInlineSnapshot(`
        Object {
          "count": 6,
          "data": Array [
            Object {
              "createdTimestamp": 1629428101007,
              "documentId": "documentId_0934040495b3ff23189455ea40366fd80ab2bbaa",
              "documentName": "2020-03-01 - 2020-05-31 Account Statement (3111)",
              "documentURL": "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/886e591756b7ba0a12ebe677f7f42a5b26594c7f/2020-03-01_2020-05-31_Account_Statement_3111_1629428101007.pdf?AWSAccessKeyId=<redacted>&Expires=1630033984&Signature=<redacted>",
              "type": "accountStatement",
              "year": "2020",
            },
            Object {
              "createdTimestamp": 1629428515887,
              "documentId": "documentId_6227faf9721cb65f24806a0f85492821a4bf133a",
              "documentName": "2021-03-01 - 2021-05-31 Account Statement (11)",
              "documentURL": "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/886e591756b7ba0a12ebe677f7f42a5b26594c7f/2021-03-01_2021-05-31_Account_Statement_11_1629428515887.pdf?AWSAccessKeyId=<redacted>&Expires=1630033984&Signature=<redacted>",
              "type": "accountStatement",
              "year": "2021",
            },
            Object {
              "createdTimestamp": 1629428959303,
              "documentId": "documentId_674a44c6db0ae80ff7c83eea4ad16221bef15a06",
              "documentName": "2020-03-01 - 2020-05-31 Account Statement (4507)",
              "documentURL": "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/886e591756b7ba0a12ebe677f7f42a5b26594c7f/2020-03-01_2020-05-31_Account_Statement_4507_1629428959303.pdf?AWSAccessKeyId=<redacted>&Expires=1630033984&Signature=<redacted>",
              "type": "accountStatement",
              "year": "2020",
            },
            Object {
              "createdTimestamp": 1629428008209,
              "documentId": "documentId_bc6df3a46c75c480219398eaa351d1ce79a589a0",
              "documentName": "2020-03-01 - 2020-05-31 Account Statement (3123)",
              "documentURL": "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/886e591756b7ba0a12ebe677f7f42a5b26594c7f/2020-03-01_2020-05-31_Account_Statement_3123_1629428008209.pdf?AWSAccessKeyId=<redacted>&Expires=1630033984&Signature=<redacted>",
              "type": "accountStatement",
              "year": "2020",
            },
            Object {
              "createdTimestamp": 1629428106674,
              "documentId": "documentId_cdf4d03f0f4ee54cbd179936f370e50ad6917361",
              "documentName": "2020-03-01 - 2020-05-31 Account Statement (11)",
              "documentURL": "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/886e591756b7ba0a12ebe677f7f42a5b26594c7f/2020-03-01_2020-05-31_Account_Statement_11_1629428106674.pdf?AWSAccessKeyId=<redacted>&Expires=1630033984&Signature=<redacted>",
              "type": "accountStatement",
              "year": "2020",
            },
            Object {
              "createdTimestamp": 1629428903973,
              "documentId": "documentId_ef2a325bd77b162ee40c014eccaa4239801828e9",
              "documentName": "2020-03-01 - 2020-05-31 Account Statement (8261)",
              "documentURL": "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/886e591756b7ba0a12ebe677f7f42a5b26594c7f/2020-03-01_2020-05-31_Account_Statement_8261_1629428903973.pdf?AWSAccessKeyId=<redacted>&Expires=1630033984&Signature=<redacted>",
              "type": "accountStatement",
              "year": "2020",
            },
          ],
          "request": Object {
            "requestId": "requestId_92043bc63a914ef3d5421e94",
            "timestamp": 1629429184249,
          },
        }
      `);
    });

    it("returns a promise that resolves to an object that includes a list of the user's Documents filtered by year on success when querying by year", async () => {
      const filteredDocuments: AboundBulkResponse<AccountStatementDocument> =
        await abound.documents.list(TEST_USER_ID, {
          year: "2021",
        });

      expect(filteredDocuments).toMatchInlineSnapshot(`
        Object {
          "count": 2,
          "data": Array [
            Object {
              "createdTimestamp": 1629428515887,
              "documentId": "documentId_6227faf9721cb65f24806a0f85492821a4bf133a",
              "documentName": "2021-03-01 - 2021-05-31 Account Statement (11)",
              "documentURL": "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/886e591756b7ba0a12ebe677f7f42a5b26594c7f/2021-03-01_2021-05-31_Account_Statement_11_1629428515887.pdf?AWSAccessKeyId=<redacted>&Expires=1630033916&Signature=<redacted>",
              "type": "accountStatement",
              "year": "2021",
            },
            Object {
              "createdTimestamp": 1629429116202,
              "documentId": null,
              "documentName": "2021 Schedule C",
              "documentURL": null,
              "message": "Schedule C for tax year 2021 is not yet available from the IRS.",
              "type": "scheduleC",
              "year": "2021",
            },
          ],
          "request": Object {
            "requestId": "requestId_f2d2a3c20ef3c6dbea3fe358",
            "timestamp": 1629429116202,
          },
        }
      `);
    });
  });

  describe("retrieve", () => {
    it("returns a promise that resolves to an object that includes a single Document on success", async () => {
      const document: AboundResponse<AccountStatementDocument> =
        await abound.documents.retrieve(
          TEST_USER_ID,
          "documentId_6227faf9721cb65f24806a0f85492821a4bf133a"
        );

      expect(document).toMatchInlineSnapshot(`
        Object {
          "data": Object {
            "createdTimestamp": 1629428515887,
            "documentId": "documentId_6227faf9721cb65f24806a0f85492821a4bf133a",
            "documentName": "2021-03-01 - 2021-05-31 Account Statement (11)",
            "documentURL": "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/886e591756b7ba0a12ebe677f7f42a5b26594c7f/2021-03-01_2021-05-31_Account_Statement_11_1629428515887.pdf?AWSAccessKeyId=<redacted>&Expires=1630033734&Signature=<redacted>",
            "type": "accountStatement",
            "year": "2021",
          },
          "request": Object {
            "requestId": "requestId_d59b7893baa1d6cc97fcfee7",
            "timestamp": 1629428934163,
          },
        }
      `);
    });
  });

  function initMocks() {
    // create
    nock(V2_SANDBOX_URL)
      .post(`/users/${TEST_USER_ID}/documents`)
      .reply(200, {
        data: [
          {
            documentId: "documentId_cdf4d03f0f4ee54cbd179936f370e50ad6917361",
            documentURL:
              "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/886e591756b7ba0a12ebe677f7f42a5b26594c7f/2020-03-01_2020-05-31_Account_Statement_11_1629428106674.pdf?AWSAccessKeyId=<redacted>&Expires=1630032906&Signature=<redacted>",
            documentName: "2020-03-01 - 2020-05-31 Account Statement (11)",
            type: "accountStatement",
            year: "2020",
            creationDate: "2021-08-20",
            createdTimestamp: 1629428106674,
          },
        ],
        request: {
          timestamp: 1629428106866,
          requestId: "requestId_aeea70b23e42fdd4cefcd53e",
        },
      });

    // list
    nock(V2_SANDBOX_URL)
      .get(`/users/${TEST_USER_ID}/documents`)
      .reply(200, {
        data: [
          {
            documentId: "documentId_0934040495b3ff23189455ea40366fd80ab2bbaa",
            documentURL:
              "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/886e591756b7ba0a12ebe677f7f42a5b26594c7f/2020-03-01_2020-05-31_Account_Statement_3111_1629428101007.pdf?AWSAccessKeyId=<redacted>&Expires=1630033984&Signature=<redacted>",
            documentName: "2020-03-01 - 2020-05-31 Account Statement (3111)",
            type: "accountStatement",
            year: "2020",
            creationDate: "2021-08-20",
            createdTimestamp: 1629428101007,
          },
          {
            documentId: "documentId_6227faf9721cb65f24806a0f85492821a4bf133a",
            documentURL:
              "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/886e591756b7ba0a12ebe677f7f42a5b26594c7f/2021-03-01_2021-05-31_Account_Statement_11_1629428515887.pdf?AWSAccessKeyId=<redacted>&Expires=1630033984&Signature=<redacted>",
            documentName: "2021-03-01 - 2021-05-31 Account Statement (11)",
            type: "accountStatement",
            year: "2021",
            creationDate: "2021-08-20",
            createdTimestamp: 1629428515887,
          },
          {
            documentId: "documentId_674a44c6db0ae80ff7c83eea4ad16221bef15a06",
            documentURL:
              "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/886e591756b7ba0a12ebe677f7f42a5b26594c7f/2020-03-01_2020-05-31_Account_Statement_4507_1629428959303.pdf?AWSAccessKeyId=<redacted>&Expires=1630033984&Signature=<redacted>",
            documentName: "2020-03-01 - 2020-05-31 Account Statement (4507)",
            type: "accountStatement",
            year: "2020",
            creationDate: "2021-08-20",
            createdTimestamp: 1629428959303,
          },
          {
            documentId: "documentId_bc6df3a46c75c480219398eaa351d1ce79a589a0",
            documentURL:
              "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/886e591756b7ba0a12ebe677f7f42a5b26594c7f/2020-03-01_2020-05-31_Account_Statement_3123_1629428008209.pdf?AWSAccessKeyId=<redacted>&Expires=1630033984&Signature=<redacted>",
            documentName: "2020-03-01 - 2020-05-31 Account Statement (3123)",
            type: "accountStatement",
            year: "2020",
            creationDate: "2021-08-20",
            createdTimestamp: 1629428008209,
          },
          {
            documentId: "documentId_cdf4d03f0f4ee54cbd179936f370e50ad6917361",
            documentURL:
              "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/886e591756b7ba0a12ebe677f7f42a5b26594c7f/2020-03-01_2020-05-31_Account_Statement_11_1629428106674.pdf?AWSAccessKeyId=<redacted>&Expires=1630033984&Signature=<redacted>",
            documentName: "2020-03-01 - 2020-05-31 Account Statement (11)",
            type: "accountStatement",
            year: "2020",
            creationDate: "2021-08-20",
            createdTimestamp: 1629428106674,
          },
          {
            documentId: "documentId_ef2a325bd77b162ee40c014eccaa4239801828e9",
            documentURL:
              "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/886e591756b7ba0a12ebe677f7f42a5b26594c7f/2020-03-01_2020-05-31_Account_Statement_8261_1629428903973.pdf?AWSAccessKeyId=<redacted>&Expires=1630033984&Signature=<redacted>",
            documentName: "2020-03-01 - 2020-05-31 Account Statement (8261)",
            type: "accountStatement",
            year: "2020",
            creationDate: "2021-08-20",
            createdTimestamp: 1629428903973,
          },
        ],
        count: 6,
        request: {
          timestamp: 1629429184249,
          requestId: "requestId_92043bc63a914ef3d5421e94",
        },
      });

    // list, filter by year
    nock(V2_SANDBOX_URL)
      .get(`/users/${TEST_USER_ID}/documents?year=2021`)
      .reply(200, {
        data: [
          {
            documentId: "documentId_6227faf9721cb65f24806a0f85492821a4bf133a",
            documentURL:
              "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/886e591756b7ba0a12ebe677f7f42a5b26594c7f/2021-03-01_2021-05-31_Account_Statement_11_1629428515887.pdf?AWSAccessKeyId=<redacted>&Expires=1630033916&Signature=<redacted>",
            documentName: "2021-03-01 - 2021-05-31 Account Statement (11)",
            type: "accountStatement",
            year: "2021",
            creationDate: "2021-08-20",
            createdTimestamp: 1629428515887,
          },
          {
            documentId: null,
            documentURL: null,
            message:
              "Schedule C for tax year 2021 is not yet available from the IRS.",
            documentName: "2021 Schedule C",
            type: "scheduleC",
            year: "2021",
            creationDate: "2021-08-20",
            createdTimestamp: 1629429116202,
          },
        ],
        count: 2,
        request: {
          timestamp: 1629429116202,
          requestId: "requestId_f2d2a3c20ef3c6dbea3fe358",
        },
      });

    // retrieve
    nock(V2_SANDBOX_URL)
      .get(
        `/users/${TEST_USER_ID}/documents/documentId_6227faf9721cb65f24806a0f85492821a4bf133a`
      )
      .reply(200, {
        data: {
          documentId: "documentId_6227faf9721cb65f24806a0f85492821a4bf133a",
          documentURL:
            "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/886e591756b7ba0a12ebe677f7f42a5b26594c7f/2021-03-01_2021-05-31_Account_Statement_11_1629428515887.pdf?AWSAccessKeyId=<redacted>&Expires=1630033734&Signature=<redacted>",
          documentName: "2021-03-01 - 2021-05-31 Account Statement (11)",
          type: "accountStatement",
          year: "2021",
          creationDate: "2021-08-20",
          createdTimestamp: 1629428515887,
        },
        request: {
          timestamp: 1629428934163,
          requestId: "requestId_d59b7893baa1d6cc97fcfee7",
        },
      });
  }
});
