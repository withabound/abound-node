import { describe, expect, test } from "vitest";
import { Abound } from "../abound.js";
import {
  invalidConfig,
  matchers,
  sampleConfig,
  singular,
} from "../test-utils.js";

const slug = "1099-k" as const;
const resource = "form1099K" as const;
const sampleId = "documentId_samplenOHhUUVnh6";

const request = {
  filingYear: new Date().getFullYear() - 1,
  payer: {
    name: "Hooli, Inc.",
    name2: "Hooli",
    tin: "111111111",
    address: "256 Byron Street",
    address2: "Suite 32",
    city: "Palo Alto",
    state: "CA",
    postalCode: "94306",
    country: "US",
    phoneNumber: "6501014096",
  },
  payee: {
    name: "Ada Lovelace",
    name2: "InGen Corporation",
    tin: "000000000",
    address: "256 Byron Street",
    address2: "Suite 32",
    city: "Palo Alto",
    state: "CA",
    postalCode: "94306",
    country: "US",
  },
  formFields: {
    payerClassification: "PSE" as const,
    transactionsReportedClassification: "PAYMENT_CARD" as const,
    pseName: "Payment Entity",
    psePhoneNumber: "5555555555",
    accountNumber: "1000000001",
    aggregateGrossAmount: 27_987_876,
    aggregateGrossAmountCardNotPresent: 2_332_323,
    merchantCategoryCode: "4582",
    numberOfPaymentTransactions: 767,
    federalIncomeTaxWithheld: 0,
    grossAmountsByMonth: {
      january: 2_332_323,
      february: 2_332_323,
      march: 2_332_323,
      april: 2_332_323,
      may: 2_332_323,
      june: 2_332_323,
      july: 2_332_323,
      august: 2_332_323,
      september: 2_332_323,
      october: 2_332_323,
      november: 2_332_323,
      december: 2_332_323,
    },
    stateTaxInfo: [
      {
        filingState: "CA" as const,
        payeeStateId: "1234567891",
        payerStateId: "1234567891",
        stateTaxWithheld: 0,
      },
    ],
  },
  userId: "userId_sampleXGMFnhOpeR",
};

const invalidRequest = {
  payer: {},
  payee: {},
  formFields: {},
  userId: 1000,
};

const mailingRequest = {
  to: {
    name: "Ada Lovelace",
    name2: "InGen Corporation",
    address: "256 Byron Street",
    address2: "Suite 32",
    city: "Palo Alto",
    state: "CA",
    postalCode: "94306",
    country: "US",
  },
  from: {
    name: "Hooli, Inc.",
    name2: "Hooli",
    address: "256 Byron Street",
    address2: "Suite 32",
    city: "Palo Alto",
    state: "CA",
    postalCode: "94306",
    country: "US",
  },
};

describe(`abound.${resource}.create()`, () => {
  test("throws an error when the sdk config is invalid", async () => {
    // Arrange
    const abound = new Abound(invalidConfig);

    // Act & Assert
    await expect(async () =>
      abound[resource].create(request)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      '"Your app is not authorized to do this (Code 6b6d7bbe)"'
    );
  });

  test(`throws a bad request error when creating an invalid ${singular(
    resource
  )}`, async () => {
    // Arrange
    const abound = new Abound(sampleConfig);

    // Act & Assert
    // @ts-expect-error required for test case
    await expect(async () => abound[resource].create(invalidRequest)).rejects
      .toThrowErrorMatchingInlineSnapshot(`
      AboundBadRequest {
        "errors": [
          {
            "field": "filingYear",
            "message": "Expected filingYear to be of type number, but received undefined",
          },
          {
            "field": "payer.name",
            "message": "Expected payer.name to be of type string, but received undefined",
          },
          {
            "field": "payer.tin",
            "message": "Expected payer.tin to be of type string, but received undefined",
          },
          {
            "field": "payer.address",
            "message": "Expected payer.address to be of type string, but received undefined",
          },
          {
            "field": "payer.country",
            "message": "Expected payer.country to be of type string, but received undefined",
          },
          {
            "field": "payer.phoneNumber",
            "message": "Expected payer.phoneNumber to be of type string, but received undefined",
          },
          {
            "field": "payee.name",
            "message": "Expected payee.name to be of type string, but received undefined",
          },
          {
            "field": "payee.tin",
            "message": "Expected payee.tin to be of type string, but received undefined",
          },
          {
            "field": "payee.address",
            "message": "Expected payee.address to be of type string, but received undefined",
          },
          {
            "field": "payee.country",
            "message": "Expected payee.country to be of type string, but received undefined",
          },
          {
            "field": "formFields.payerClassification",
            "message": "Expected formFields.payerClassification to be EPF_OTHER or PSE, but received undefined",
          },
          {
            "field": "formFields.transactionsReportedClassification",
            "message": "Expected formFields.transactionsReportedClassification to be PAYMENT_CARD or THIRD_PARTY_NETWORK, but received undefined",
          },
          {
            "field": "formFields.aggregateGrossAmount",
            "message": "Expected formFields.aggregateGrossAmount to be of type number, but received undefined",
          },
          {
            "field": "formFields.numberOfPaymentTransactions",
            "message": "Expected formFields.numberOfPaymentTransactions to be of type number, but received undefined",
          },
          {
            "field": "formFields.grossAmountsByMonth",
            "message": "Expected formFields.grossAmountsByMonth to be of type object, but received undefined",
          },
          {
            "field": "formFields.stateTaxInfo",
            "message": "Expected formFields.stateTaxInfo to be of type array, but received undefined",
          },
          {
            "field": "userId",
            "message": "Expected userId to be of type string, but received number",
          },
        ],
      }
    `);
  });

  test(`creates a ${singular(slug)}`, async () => {
    // Arrange
    const abound = new Abound(sampleConfig);

    // Act
    const response = await abound[resource].create(request);

    // Assert
    expect(response).toMatchInlineSnapshot(
      {
        filingYear: expect.any(Number) as number,
        createdAt: expect.stringMatching(matchers.isoDatetimeRegex) as string,
        payeeUrl: expect.stringContaining("-FORM-1099-K-COPY-B.pdf") as string,
        payerUrl: expect.stringContaining("-FORM-1099-K-COPY-C.pdf") as string,
      },
      `
      {
        "createdAt": StringMatching /\\^\\\\d\\{4\\}-\\\\d\\{2\\}-\\\\d\\{2\\}T\\\\d\\{2\\}:\\\\d\\{2\\}:\\\\d\\{2\\}\\\\\\.\\\\d\\{3\\}Z\\$/,
        "filingYear": Any<Number>,
        "formFields": {
          "accountNumber": "1000000001",
          "aggregateGrossAmount": 27987876,
          "aggregateGrossAmountCardNotPresent": 2332323,
          "federalIncomeTaxWithheld": 0,
          "grossAmountsByMonth": {
            "april": 2332323,
            "august": 2332323,
            "december": 2332323,
            "february": 2332323,
            "january": 2332323,
            "july": 2332323,
            "june": 2332323,
            "march": 2332323,
            "may": 2332323,
            "november": 2332323,
            "october": 2332323,
            "september": 2332323,
          },
          "isCorrected": false,
          "isVoid": false,
          "merchantCategoryCode": "4582",
          "numberOfPaymentTransactions": 767,
          "payerClassification": "PSE",
          "pseName": "Payment Entity",
          "psePhoneNumber": "5555555555",
          "stateTaxInfo": [
            {
              "filingState": "CA",
              "payeeStateId": "1234567891",
              "stateTaxWithheld": 0,
            },
          ],
          "transactionsReportedClassification": "PAYMENT_CARD",
        },
        "id": "documentId_sampletTtqNfulW8",
        "payee": {
          "address": "256 Byron Street",
          "address2": "Suite 32",
          "city": "Palo Alto",
          "country": "US",
          "name": "Ada Lovelace",
          "name2": "InGen Corporation",
          "postalCode": "94306",
          "state": "CA",
          "tin": "*******00",
          "tinFingerprint": "tinFingerprint_samplehy2BWO6JJG",
          "tinType": "INDIVIDUAL",
          "tinVerificationId": "tinVerificationId_sample41SD71AV8f",
          "tinVerificationStatus": "MATCH",
        },
        "payeeUrl": StringContaining "-FORM-1099-K-COPY-B.pdf",
        "payer": {
          "address": "256 Byron Street",
          "address2": "Suite 32",
          "city": "Palo Alto",
          "country": "US",
          "name": "Hooli, Inc.",
          "name2": "Hooli",
          "phoneNumber": "6501014096",
          "postalCode": "94306",
          "state": "CA",
          "tin": "*******11",
          "tinFingerprint": "tinFingerprint_sample847jI1LwxF",
          "tinType": "BUSINESS",
          "tinVerificationId": "tinVerificationId_sample1b0E6efa89",
          "tinVerificationStatus": "MATCH",
        },
        "payerUrl": StringContaining "-FORM-1099-K-COPY-C.pdf",
        "status": "CREATED",
        "userId": "userId_sampleXGMFnhOpeR",
      }
    `
    );
  });
});

describe(`abound.${resource}.list()`, () => {
  test("throws a bad request error when the page query string parameter is invalid", async () => {
    // Arrange
    const abound = new Abound(sampleConfig);

    // Act & Assert
    await expect(async () =>
      abound[resource].list({
        // @ts-expect-error required for test case
        page: "invalid_page",
      })
    ).rejects.toThrowErrorMatchingInlineSnapshot(`
      AboundBadRequest {
        "errors": [
          {
            "field": "page",
            "message": "Expected page query string parameter to be a number greater than or equal to 1, but received invalid_page",
          },
        ],
      }
    `);
  });

  test(`lists ${slug}`, async () => {
    // Arrange
    const abound = new Abound(sampleConfig);

    // Act
    const response = await abound[resource].list();

    // Assert
    expect(response.at(0)).toMatchInlineSnapshot(
      {
        filingYear: expect.any(Number) as number,
        createdAt: expect.stringMatching(matchers.isoDatetimeRegex) as string,
        payeeUrl: expect.stringContaining("-FORM-1099-K-COPY-B.pdf") as string,
        payerUrl: expect.stringContaining("-FORM-1099-K-COPY-C.pdf") as string,
      },
      `
      {
        "createdAt": StringMatching /\\^\\\\d\\{4\\}-\\\\d\\{2\\}-\\\\d\\{2\\}T\\\\d\\{2\\}:\\\\d\\{2\\}:\\\\d\\{2\\}\\\\\\.\\\\d\\{3\\}Z\\$/,
        "filingYear": Any<Number>,
        "formFields": {
          "accountNumber": "1234567890",
          "aggregateGrossAmount": 27987876,
          "aggregateGrossAmountCardNotPresent": 2332323,
          "federalIncomeTaxWithheld": 0,
          "grossAmountsByMonth": {
            "april": 2332323,
            "august": 2332323,
            "december": 2332323,
            "february": 2332323,
            "january": 2332323,
            "july": 2332323,
            "june": 2332323,
            "march": 2332323,
            "may": 2332323,
            "november": 2332323,
            "october": 2332323,
            "september": 2332323,
          },
          "isCorrected": false,
          "isVoid": false,
          "merchantCategoryCode": "4582",
          "numberOfPaymentTransactions": 767,
          "payerClassification": "PSE",
          "pseName": "Payment Entity",
          "psePhoneNumber": "5555555555",
          "stateTaxInfo": [
            {
              "filingState": "CA",
              "payeeStateId": "1234567891",
              "stateTaxWithheld": 0,
            },
          ],
          "transactionsReportedClassification": "PAYMENT_CARD",
        },
        "id": "documentId_sampletTtqNfulW8",
        "payee": {
          "address": "1401 N Shoreline Blvd",
          "address2": "Suite 1",
          "city": "Mountain View",
          "country": "US",
          "name": "Ada Lovelace",
          "postalCode": "94043",
          "state": "CA",
          "tin": "*******00",
          "tinFingerprint": "tinFingerprint_samplehy2BWO6JJG",
          "tinType": "INDIVIDUAL",
          "tinVerificationId": "tinVerificationId_sample41SD71AV8f",
          "tinVerificationStatus": "MATCH",
        },
        "payeeUrl": StringContaining "-FORM-1099-K-COPY-B.pdf",
        "payer": {
          "address": "1401 N Shoreline Blvd",
          "address2": "Suite 1",
          "city": "Mountain View",
          "country": "US",
          "name": "Hooli",
          "phoneNumber": "6501014096",
          "postalCode": "94043",
          "state": "CA",
          "tin": "*******11",
          "tinFingerprint": "tinFingerprint_sample847jI1LwxF",
          "tinType": "BUSINESS",
          "tinVerificationId": "tinVerificationId_sample1b0E6efa89",
          "tinVerificationStatus": "MATCH",
        },
        "payerUrl": StringContaining "-FORM-1099-K-COPY-C.pdf",
        "status": "CREATED",
      }
    `
    );
  });
});

describe(`abound.${resource}.mail()`, () => {
  test(`mails a ${singular(slug)}`, async () => {
    // Arrange
    const abound = new Abound(sampleConfig);

    // Act
    const response = await abound[resource].mail(sampleId, mailingRequest);

    // Assert
    expect(response).toMatchInlineSnapshot(
      {
        createdAt: expect.stringMatching(matchers.isoDatetimeRegex) as string,
      },
      `
      {
        "createdAt": StringMatching /\\^\\\\d\\{4\\}-\\\\d\\{2\\}-\\\\d\\{2\\}T\\\\d\\{2\\}:\\\\d\\{2\\}:\\\\d\\{2\\}\\\\\\.\\\\d\\{3\\}Z\\$/,
        "from": {
          "address": "256 Byron Street",
          "address2": "Suite 32",
          "city": "Palo Alto",
          "country": "US",
          "name": "Hooli, Inc.",
          "name2": "Hooli",
          "postalCode": "94306",
          "state": "CA",
        },
        "id": "mailingId_sampleFV9b73IvAD",
        "mailedFromId": "documentId_sampletTtqNfulW8",
        "status": "CREATED",
        "to": {
          "address": "256 Byron Street",
          "address2": "Suite 32",
          "city": "Palo Alto",
          "country": "US",
          "name": "Ada Lovelace",
          "name2": "InGen Corporation",
          "postalCode": "94306",
          "state": "CA",
        },
        "url": "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-1099-COPY-B.pdf",
      }
    `
    );
  });
});

describe(`abound.${resource}.file()`, () => {
  test(`files a ${singular(slug)}`, async () => {
    // Arrange
    const abound = new Abound(sampleConfig);

    // Act
    const response = await abound[resource].file(sampleId);

    // Assert
    expect(response).toMatchInlineSnapshot(
      {
        filingYear: expect.any(Number) as number,
        createdAt: expect.stringMatching(matchers.isoDatetimeRegex) as string,
        payeeUrl: expect.stringContaining("-FORM-1099-K-COPY-B.pdf") as string,
        payerUrl: expect.stringContaining("-FORM-1099-K-COPY-C.pdf") as string,
      },
      `
      {
        "createdAt": StringMatching /\\^\\\\d\\{4\\}-\\\\d\\{2\\}-\\\\d\\{2\\}T\\\\d\\{2\\}:\\\\d\\{2\\}:\\\\d\\{2\\}\\\\\\.\\\\d\\{3\\}Z\\$/,
        "filingYear": Any<Number>,
        "formFields": {
          "accountNumber": "1234567890",
          "aggregateGrossAmount": 27987876,
          "aggregateGrossAmountCardNotPresent": 2332323,
          "federalIncomeTaxWithheld": 0,
          "grossAmountsByMonth": {
            "april": 2332323,
            "august": 2332323,
            "december": 2332323,
            "february": 2332323,
            "january": 2332323,
            "july": 2332323,
            "june": 2332323,
            "march": 2332323,
            "may": 2332323,
            "november": 2332323,
            "october": 2332323,
            "september": 2332323,
          },
          "isCorrected": false,
          "isVoid": false,
          "merchantCategoryCode": "4582",
          "numberOfPaymentTransactions": 767,
          "payerClassification": "PSE",
          "pseName": "Payment Entity",
          "psePhoneNumber": "5555555555",
          "stateTaxInfo": [
            {
              "filingState": "CA",
              "payeeStateId": "1234567891",
              "stateTaxWithheld": 0,
            },
          ],
          "transactionsReportedClassification": "PAYMENT_CARD",
        },
        "id": "documentId_sampletTtqNfulW8",
        "payee": {
          "address": "1401 N Shoreline Blvd",
          "address2": "Suite 1",
          "city": "Mountain View",
          "country": "US",
          "name": "Ada Lovelace",
          "postalCode": "94043",
          "state": "CA",
          "tin": "*******00",
          "tinFingerprint": "tinFingerprint_samplehy2BWO6JJG",
          "tinType": "INDIVIDUAL",
          "tinVerificationId": "tinVerificationId_sample41SD71AV8f",
          "tinVerificationStatus": "MATCH",
        },
        "payeeUrl": StringContaining "-FORM-1099-K-COPY-B.pdf",
        "payer": {
          "address": "1401 N Shoreline Blvd",
          "address2": "Suite 1",
          "city": "Mountain View",
          "country": "US",
          "name": "Hooli",
          "phoneNumber": "6501014096",
          "postalCode": "94043",
          "state": "CA",
          "tin": "*******11",
          "tinFingerprint": "tinFingerprint_sample847jI1LwxF",
          "tinType": "BUSINESS",
          "tinVerificationId": "tinVerificationId_sample1b0E6efa89",
          "tinVerificationStatus": "MATCH",
        },
        "payerUrl": StringContaining "-FORM-1099-K-COPY-C.pdf",
        "status": "FILED",
      }
    `
    );
  });
});

describe(`abound.${resource}.correct()`, () => {
  test(`corrects a ${singular(slug)}`, async () => {
    // Arrange
    const abound = new Abound(sampleConfig);

    // Act
    const response = await abound[resource].correct(sampleId, {
      payee: request.payee,
      formFields: request.formFields,
    });

    // Assert
    expect(response).toMatchInlineSnapshot(
      {
        filingYear: expect.any(Number) as number,
        createdAt: expect.stringMatching(matchers.isoDatetimeRegex) as string,
        payeeUrl: expect.stringContaining(
          "-FORM-1099-K-CORRECTED-COPY-B.pdf"
        ) as string,
        payerUrl: expect.stringContaining(
          "-FORM-1099-K-CORRECTED-COPY-C.pdf"
        ) as string,
      },
      `
      {
        "correctedFromId": "documentId_sampletTtqNfulW8",
        "createdAt": StringMatching /\\^\\\\d\\{4\\}-\\\\d\\{2\\}-\\\\d\\{2\\}T\\\\d\\{2\\}:\\\\d\\{2\\}:\\\\d\\{2\\}\\\\\\.\\\\d\\{3\\}Z\\$/,
        "filingYear": Any<Number>,
        "formFields": {
          "accountNumber": "1000000001",
          "aggregateGrossAmount": 27987876,
          "aggregateGrossAmountCardNotPresent": 2332323,
          "federalIncomeTaxWithheld": 0,
          "grossAmountsByMonth": {
            "april": 2332323,
            "august": 2332323,
            "december": 2332323,
            "february": 2332323,
            "january": 2332323,
            "july": 2332323,
            "june": 2332323,
            "march": 2332323,
            "may": 2332323,
            "november": 2332323,
            "october": 2332323,
            "september": 2332323,
          },
          "isCorrected": true,
          "isVoid": false,
          "merchantCategoryCode": "4582",
          "numberOfPaymentTransactions": 767,
          "payerClassification": "PSE",
          "pseName": "Payment Entity",
          "psePhoneNumber": "5555555555",
          "stateTaxInfo": [
            {
              "filingState": "CA",
              "payeeStateId": "1234567891",
              "stateTaxWithheld": 0,
            },
          ],
          "transactionsReportedClassification": "PAYMENT_CARD",
        },
        "id": "documentId_samplenOHhUUVnh6",
        "payee": {
          "address": "256 Byron Street",
          "address2": "Suite 32",
          "city": "Palo Alto",
          "country": "US",
          "name": "Ada Lovelace",
          "name2": "InGen Corporation",
          "postalCode": "94306",
          "state": "CA",
          "tin": "*******00",
          "tinFingerprint": "tinFingerprint_samplehy2BWO6JJG",
          "tinType": "INDIVIDUAL",
          "tinVerificationId": "tinVerificationId_sample41SD71AV8f",
          "tinVerificationStatus": "MATCH",
        },
        "payeeUrl": StringContaining "-FORM-1099-K-CORRECTED-COPY-B.pdf",
        "payer": {
          "address": "1401 N Shoreline Blvd",
          "address2": "Suite 1",
          "city": "Mountain View",
          "country": "US",
          "name": "Hooli",
          "phoneNumber": "6501014096",
          "postalCode": "94043",
          "state": "CA",
          "tin": "*******11",
          "tinFingerprint": "tinFingerprint_sample847jI1LwxF",
          "tinType": "BUSINESS",
          "tinVerificationId": "tinVerificationId_sample1b0E6efa89",
          "tinVerificationStatus": "MATCH",
        },
        "payerUrl": StringContaining "-FORM-1099-K-CORRECTED-COPY-C.pdf",
        "status": "FILED",
      }
    `
    );
  });
});

describe(`abound.${resource}.void()`, () => {
  test(`voids a ${singular(slug)}`, async () => {
    // Arrange
    const abound = new Abound(sampleConfig);

    // Act
    const response = await abound[resource].void(sampleId);

    // Assert
    expect(response).toMatchInlineSnapshot(
      {
        filingYear: expect.any(Number) as number,
        createdAt: expect.stringMatching(matchers.isoDatetimeRegex) as string,
        payeeUrl: expect.stringContaining(
          "-FORM-1099-K-VOID-COPY-B.pdf"
        ) as string,
        payerUrl: expect.stringContaining(
          "-FORM-1099-K-VOID-COPY-C.pdf"
        ) as string,
      },
      `
      {
        "createdAt": StringMatching /\\^\\\\d\\{4\\}-\\\\d\\{2\\}-\\\\d\\{2\\}T\\\\d\\{2\\}:\\\\d\\{2\\}:\\\\d\\{2\\}\\\\\\.\\\\d\\{3\\}Z\\$/,
        "filingYear": Any<Number>,
        "formFields": {
          "accountNumber": "1234567890",
          "aggregateGrossAmount": 27987876,
          "aggregateGrossAmountCardNotPresent": 2332323,
          "federalIncomeTaxWithheld": 0,
          "grossAmountsByMonth": {
            "april": 2332323,
            "august": 2332323,
            "december": 2332323,
            "february": 2332323,
            "january": 2332323,
            "july": 2332323,
            "june": 2332323,
            "march": 2332323,
            "may": 2332323,
            "november": 2332323,
            "october": 2332323,
            "september": 2332323,
          },
          "isCorrected": false,
          "isVoid": true,
          "merchantCategoryCode": "4582",
          "numberOfPaymentTransactions": 767,
          "payerClassification": "PSE",
          "pseName": "Payment Entity",
          "psePhoneNumber": "5555555555",
          "stateTaxInfo": [
            {
              "filingState": "CA",
              "payeeStateId": "1234567891",
              "stateTaxWithheld": 0,
            },
          ],
          "transactionsReportedClassification": "PAYMENT_CARD",
        },
        "id": "documentId_sampleb6HQLsVuM9",
        "payee": {
          "address": "1401 N Shoreline Blvd",
          "address2": "Suite 1",
          "city": "Mountain View",
          "country": "US",
          "name": "Ada Lovelace",
          "postalCode": "94043",
          "state": "CA",
          "tin": "*******00",
          "tinFingerprint": "tinFingerprint_samplehy2BWO6JJG",
          "tinType": "INDIVIDUAL",
          "tinVerificationId": "tinVerificationId_sample41SD71AV8f",
          "tinVerificationStatus": "MATCH",
        },
        "payeeUrl": StringContaining "-FORM-1099-K-VOID-COPY-B.pdf",
        "payer": {
          "address": "1401 N Shoreline Blvd",
          "address2": "Suite 1",
          "city": "Mountain View",
          "country": "US",
          "name": "Hooli",
          "phoneNumber": "6501014096",
          "postalCode": "94043",
          "state": "CA",
          "tin": "*******11",
          "tinFingerprint": "tinFingerprint_sample847jI1LwxF",
          "tinType": "BUSINESS",
          "tinVerificationId": "tinVerificationId_sample1b0E6efa89",
          "tinVerificationStatus": "MATCH",
        },
        "payerUrl": StringContaining "-FORM-1099-K-VOID-COPY-C.pdf",
        "status": "FILED",
        "voidedFromId": "documentId_sampletTtqNfulW8",
      }
    `
    );
  });
});

describe(`abound.${resource}.retrieve()`, () => {
  test(`retrieves a ${singular(slug)}`, async () => {
    // Arrange
    const abound = new Abound(sampleConfig);

    // Act
    const response = await abound[resource].retrieve(sampleId);

    // Assert
    expect(response).toMatchInlineSnapshot(
      {
        filingYear: expect.any(Number) as number,
        createdAt: expect.stringMatching(matchers.isoDatetimeRegex) as string,
        payeeUrl: expect.stringContaining("-FORM-1099-K-COPY-B.pdf") as string,
        payerUrl: expect.stringContaining("-FORM-1099-K-COPY-C.pdf") as string,
      },
      `
      {
        "createdAt": StringMatching /\\^\\\\d\\{4\\}-\\\\d\\{2\\}-\\\\d\\{2\\}T\\\\d\\{2\\}:\\\\d\\{2\\}:\\\\d\\{2\\}\\\\\\.\\\\d\\{3\\}Z\\$/,
        "filingYear": Any<Number>,
        "formFields": {
          "accountNumber": "1234567890",
          "aggregateGrossAmount": 27987876,
          "aggregateGrossAmountCardNotPresent": 2332323,
          "federalIncomeTaxWithheld": 0,
          "grossAmountsByMonth": {
            "april": 2332323,
            "august": 2332323,
            "december": 2332323,
            "february": 2332323,
            "january": 2332323,
            "july": 2332323,
            "june": 2332323,
            "march": 2332323,
            "may": 2332323,
            "november": 2332323,
            "october": 2332323,
            "september": 2332323,
          },
          "isCorrected": false,
          "isVoid": false,
          "merchantCategoryCode": "4582",
          "numberOfPaymentTransactions": 767,
          "payerClassification": "PSE",
          "pseName": "Payment Entity",
          "psePhoneNumber": "5555555555",
          "stateTaxInfo": [
            {
              "filingState": "CA",
              "payeeStateId": "1234567891",
              "stateTaxWithheld": 0,
            },
          ],
          "transactionsReportedClassification": "PAYMENT_CARD",
        },
        "id": "documentId_sampletTtqNfulW8",
        "payee": {
          "address": "1401 N Shoreline Blvd",
          "address2": "Suite 1",
          "city": "Mountain View",
          "country": "US",
          "name": "Ada Lovelace",
          "postalCode": "94043",
          "state": "CA",
          "tin": "*******00",
          "tinFingerprint": "tinFingerprint_samplehy2BWO6JJG",
          "tinType": "INDIVIDUAL",
          "tinVerificationId": "tinVerificationId_sample41SD71AV8f",
          "tinVerificationStatus": "MATCH",
        },
        "payeeUrl": StringContaining "-FORM-1099-K-COPY-B.pdf",
        "payer": {
          "address": "1401 N Shoreline Blvd",
          "address2": "Suite 1",
          "city": "Mountain View",
          "country": "US",
          "name": "Hooli",
          "phoneNumber": "6501014096",
          "postalCode": "94043",
          "state": "CA",
          "tin": "*******11",
          "tinFingerprint": "tinFingerprint_sample847jI1LwxF",
          "tinType": "BUSINESS",
          "tinVerificationId": "tinVerificationId_sample1b0E6efa89",
          "tinVerificationStatus": "MATCH",
        },
        "payerUrl": StringContaining "-FORM-1099-K-COPY-C.pdf",
        "status": "CREATED",
      }
    `
    );
  });
});

describe(`abound.${resource}.delete()`, () => {
  test(`deletes a ${singular(slug)}`, async () => {
    // Arrange
    const abound = new Abound(sampleConfig);

    // Act
    const response = await abound[resource].delete(sampleId);

    // Assert
    expect(response).toMatchInlineSnapshot("{}");
  });
});
