import Abound from "../../src/abound";
import { DocumentType } from "../../src/resources/Documents";
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
// import { Ten99MISCDocumentRequest } from "../../src/resources/document-types/1099MISC";
import { Ten99NECDocumentRequest } from "../../src/resources/document-types/1099NEC";
import { TEST_PAYER_ID } from "./Payers.spec";
import { createAboundClient, TEST_USER_ID } from "../utils";

const TEST_DOCUMENT_ID = "documentId_testefbd5d3d9ee9526ef9ff89a7c6b879174170";

describe("Abound Documents", () => {
  let abound: Abound;

  beforeAll(() => {
    abound = createAboundClient();
  });

  describe("create 1099-INT", () => {
    describe("with the minimum number (1) of optional fields", () => {
      it("returns a promise that resolves to an object that includes a list of the created 1099-INT Documents on success", async () => {
        const ten99IntToCreate: Ten99INTDocumentRequest = {
          type: DocumentType.TEN99INT,
          payerId: TEST_PAYER_ID,
          year: 2021,
          interestIncome: 10.18,
          stateTaxInfo: [{ filingState: "CA" }],
        };

        const response = await abound.documents.create(TEST_USER_ID, [
          ten99IntToCreate,
        ]);

        expect(response.data.at(0)).toMatchSnapshot({
          createdTimestamp: expect.any(Number),
          documentURL: expect.stringContaining(
            "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com"
          ),
        });
      });
    });

    describe("with many optional fields", () => {
      it("returns a promise that resolves to an object that includes a list of the created 1099-INT Documents on success", async () => {
        const ten99INTToCreate: Ten99INTDocumentRequest = {
          type: DocumentType.TEN99INT,
          payerId: TEST_PAYER_ID,
          year: 2021,
          accountNumber: "430912910",
          payersRoutingNumber: "102001017",
          investmentExpenses: 54.32,
          bondPremium: 321.11,
          taxExemptInterest: 861.31,
          interestIncome: 10.18,
          foreignTaxPaidCountry: "fr",
          stateTaxInfo: [
            {
              filingState: "NY",
              stateTaxWithheld: 0,
            },
          ],
        };

        const response = await abound.documents.create(TEST_USER_ID, [
          ten99INTToCreate,
        ]);

        expect(response.data.at(0)).toMatchSnapshot({
          createdTimestamp: expect.any(Number),
          documentURL: expect.stringContaining(
            "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com"
          ),
        });
      });
    });
  });

  describe("create 1099-K", () => {
    it("returns a promise that resolves to an object that includes a list of the created 1099-K Documents on success", async () => {
      const ten99KToCreate: Ten99KDocumentRequest = {
        type: DocumentType.TEN99K,
        payerId: TEST_PAYER_ID,
        year: 2021,
        payerClassification: PayerClassification.PAYMENT_SETTLEMENT_ENTITY,
        pseName: "Payment Entity",
        psePhoneNumber: "5555555555",
        aggregateGrossAmount: 1000,
        transactionsReportedClassification:
          TransactionsReportedClassification.PAYMENT_CARD,
        numberOfPaymentTransactions: 12,
        grossAmountsByMonth: {
          january: 1000,
        },
        stateTaxInfo: [{ filingState: "CA" }],
      };

      const response = await abound.documents.create(TEST_USER_ID, [
        ten99KToCreate,
      ]);

      expect(response.data.at(0)).toMatchSnapshot({
        createdTimestamp: expect.any(Number),
        documentURL: expect.stringContaining(
          "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com"
        ),
      });
    });
  });

  // describe("create 1099-MISC", () => {
  //   it("returns a promise that resolves to an object that includes a list of the created 1099-MISC Documents on success", async () => {
  //     const accountNumber = randomNumberString(9);
  //     const rents: number = randomCurrencyAmount(7000);
  //     const royalties: number = randomCurrencyAmount(1000);
  //     const stateTaxInfoWithIncome: StateTaxInfoWithIncome = {
  //       filingState: "CA",
  //       stateTaxWithheld: 1927.38,
  //       stateIncome: 8391.18,
  //     };

  //     const ten99MISCToCreate: Ten99MISCDocumentRequest = {
  //       type: DocumentType.TEN99MISC,
  //       payerId: TEST_PAYER_ID,
  //       year: 2021,
  //       accountNumber,
  //       rents,
  //       royalties,
  //       stateTaxInfo: [stateTaxInfoWithIncome],
  //     };

  //     const response =
  //       await abound.documents.create(TEST_USER_ID, [ten99MISCToCreate]);

  //     expect(response.data.at(0)).toMatchInlineSnapshot(
  //       {
  //         createdTimestamp: expect.any(Number),
  //         documentURL: expect.stringContaining(
  //           "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com"
  //         ),
  //       },
  //       `
  //         Object {
  //           "createdTimestamp": 1630000000000,
  //           "documentId": "documentId_testefbd5d3d9ee9526ef9ff89a7c6b879174170",
  //           "documentName": "2021 Form 1099-MISC",
  //           "documentURL": "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/test62ae93bafa6310aa9952e8b3bf5796443111/2021_Form_1099-MISC.pdf",
  //           "status": "created",
  //           "type": "1099misc",
  //           "year": "2021",
  //         },
  //     `
  //     );
  //   });
  // });

  describe("create 1099-NEC", () => {
    it("returns a promise that resolves to an object that includes a list of the created 1099-NEC Documents on success", async () => {
      const ten99NECToCreate: Ten99NECDocumentRequest = {
        type: DocumentType.TEN99NEC,
        payerId: TEST_PAYER_ID,
        year: 2020,
        nonemployeeCompensation: 15000,
        stateTaxInfo: [{ filingState: "CA" }],
      };

      const response = await abound.documents.create(TEST_USER_ID, [
        ten99NECToCreate,
      ]);

      expect(response.data.at(0)).toMatchSnapshot({
        createdTimestamp: expect.any(Number),
        documentURL: expect.stringContaining(
          "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com"
        ),
      });
    });
  });

  describe("create W9", () => {
    it("returns a promise that resolves to an object that includes a list of the created W9 Documents on success", async () => {
      const w9ToCreate: W9DocumentRequest = {
        type: DocumentType.W9,
        year: 2021,
        payerId: TEST_PAYER_ID,
        taxClassification: W9TaxClassification.SOLE_PROPRIETOR,
        exemptPayeeCode: "1",
        exemptFatcaCode: "A",
        certificationTimestamp: Date.now(),
        accountNumbers: ["430912910"],
      };

      const response = await abound.documents.create(TEST_USER_ID, [
        w9ToCreate,
      ]);

      const document = response.data.at(0);
      expect(document).toMatchSnapshot({
        createdTimestamp: expect.any(Number),
        documentURL: expect.stringContaining(
          "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com"
        ),
        ...(document &&
          "formData" in document &&
          "certificationTimestamp" in document.formData &&
          document?.formData?.certificationTimestamp && {
            formData: {
              certificationTimestamp: expect.any(Number),
            },
          }),
      });
    });
  });

  describe("list", () => {
    it("returns a promise that resolves to an object that includes a list of the user's Documents on success", async () => {
      const documents = await abound.documents.list(TEST_USER_ID);

      for (const document of documents.data) {
        expect(document).toMatchSnapshot({
          createdTimestamp: expect.any(Number),
          documentURL: expect.stringContaining(
            "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com"
          ),
          ...("formData" in document &&
            "certificationTimestamp" in document.formData &&
            document?.formData?.certificationTimestamp && {
              formData: {
                certificationTimestamp: expect.any(Number),
              },
            }),
        });
      }
    });

    it("returns a promise that resolves to an object that includes a list of the user's Documents filtered by year on success when querying by year", async () => {
      const filteredDocuments = await abound.documents.list(TEST_USER_ID, {
        year: "2021",
      });

      for (const document of filteredDocuments.data) {
        expect(document).toMatchSnapshot({
          createdTimestamp: expect.any(Number),
          documentURL: expect.stringContaining(
            "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com"
          ),
          ...("formData" in document &&
            "certificationTimestamp" in document.formData &&
            document?.formData?.certificationTimestamp && {
              formData: {
                certificationTimestamp: expect.any(Number),
              },
            }),
        });
      }
    });
  });

  // FIXME: restore this test after the API properly returns a 200 response
  describe.skip("retrieve", () => {
    it("returns a promise that resolves to an object that includes a single Document on success", async () => {
      const document = await abound.documents.retrieve(
        TEST_USER_ID,
        TEST_DOCUMENT_ID
      );

      expect(document.data).toMatchInlineSnapshot();
    });
  });
});
