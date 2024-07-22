import { describe, expect, test } from "vitest";
import { Abound } from "../abound.js";
import {
  invalidConfig,
  matchers,
  sampleConfig,
  singular,
} from "../test-utils.js";

const slug = "1099-nec";
const resource = "form1099Nec";
const sampleId = "documentId_sampletdeUbrEgYw";

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
    accountNumber: "1000000001",
    nonemployeeCompensation: 23_423,
    hasDirectSalesOver5000: false,
    federalIncomeTaxWithheld: 0,
    stateTaxInfo: [
      {
        stateTaxWithheld: 0,
        filingState: "CA" as const,
        payeeStateId: "1234567891",
        payerStateId: "1234567891",
        stateIncome: 345_543,
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
      `[Error: Your app is not authorized to do this (Code 6b6d7bbe)]`
    );
  });

  test(`throws a bad request error when creating an invalid ${singular(
    resource
  )}`, async () => {
    // Arrange
    const abound = new Abound(sampleConfig);

    // Act & Assert
    await expect(async () =>
      // @ts-expect-error required for test case
      abound[resource].create(invalidRequest)
    ).rejects.toThrowErrorMatchingInlineSnapshot(`
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
            "field": "formFields.nonemployeeCompensation",
            "message": "Expected formFields.nonemployeeCompensation to be of type number, but received undefined",
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
        payeeUrl: expect.stringContaining(
          "-FORM-1099-NEC-COPY-B.pdf"
        ) as string,
        payerUrl: expect.stringContaining(
          "-FORM-1099-NEC-COPY-C.pdf"
        ) as string,
      },
      `
      {
        "createdAt": StringMatching /\\^\\\\d\\{4\\}-\\\\d\\{2\\}-\\\\d\\{2\\}T\\\\d\\{2\\}:\\\\d\\{2\\}:\\\\d\\{2\\}\\\\\\.\\\\d\\{3\\}Z\\$/,
        "filingYear": Any<Number>,
        "formFields": {
          "accountNumber": "1000000001",
          "federalIncomeTaxWithheld": 0,
          "hasDirectSalesOver5000": false,
          "isCorrected": false,
          "isVoid": false,
          "nonemployeeCompensation": 23423,
          "stateTaxInfo": [
            {
              "filingState": "CA",
              "payerStateId": "1234567891",
              "stateIncome": 345543,
              "stateTaxWithheld": 0,
            },
          ],
        },
        "id": "documentId_samplegU0eR8oc8a",
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
        "payeeUrl": StringContaining "-FORM-1099-NEC-COPY-B.pdf",
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
        "payerUrl": StringContaining "-FORM-1099-NEC-COPY-C.pdf",
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
        payeeUrl: expect.stringContaining(
          "-FORM-1099-NEC-COPY-B.pdf"
        ) as string,
        payerUrl: expect.stringContaining(
          "-FORM-1099-NEC-COPY-C.pdf"
        ) as string,
      },
      `
      {
        "createdAt": StringMatching /\\^\\\\d\\{4\\}-\\\\d\\{2\\}-\\\\d\\{2\\}T\\\\d\\{2\\}:\\\\d\\{2\\}:\\\\d\\{2\\}\\\\\\.\\\\d\\{3\\}Z\\$/,
        "filingYear": Any<Number>,
        "formFields": {
          "accountNumber": "A0NEqtav7n0sBGoq88w0",
          "federalIncomeTaxWithheld": 0,
          "hasDirectSalesOver5000": false,
          "isCorrected": false,
          "isVoid": false,
          "nonemployeeCompensation": 23423,
          "stateTaxInfo": [
            {
              "filingState": "CA",
              "payerStateId": "1234567891",
              "stateIncome": 345543,
              "stateTaxWithheld": 0,
            },
          ],
        },
        "id": "documentId_samplegU0eR8oc8a",
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
        "payeeUrl": StringContaining "-FORM-1099-NEC-COPY-B.pdf",
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
        "payerUrl": StringContaining "-FORM-1099-NEC-COPY-C.pdf",
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
        payeeUrl: expect.stringContaining(
          "-FORM-1099-NEC-COPY-B.pdf"
        ) as string,
        payerUrl: expect.stringContaining(
          "-FORM-1099-NEC-COPY-C.pdf"
        ) as string,
      },
      `
      {
        "createdAt": StringMatching /\\^\\\\d\\{4\\}-\\\\d\\{2\\}-\\\\d\\{2\\}T\\\\d\\{2\\}:\\\\d\\{2\\}:\\\\d\\{2\\}\\\\\\.\\\\d\\{3\\}Z\\$/,
        "filingYear": Any<Number>,
        "formFields": {
          "accountNumber": "A0NEqtav7n0sBGoq88w0",
          "federalIncomeTaxWithheld": 0,
          "hasDirectSalesOver5000": false,
          "isCorrected": false,
          "isVoid": false,
          "nonemployeeCompensation": 23423,
          "stateTaxInfo": [
            {
              "filingState": "CA",
              "payerStateId": "1234567891",
              "stateIncome": 345543,
              "stateTaxWithheld": 0,
            },
          ],
        },
        "id": "documentId_samplegU0eR8oc8a",
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
        "payeeUrl": StringContaining "-FORM-1099-NEC-COPY-B.pdf",
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
        "payerUrl": StringContaining "-FORM-1099-NEC-COPY-C.pdf",
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
          "-FORM-1099-NEC-CORRECTED-COPY-B.pdf"
        ) as string,
        payerUrl: expect.stringContaining(
          "-FORM-1099-NEC-CORRECTED-COPY-C.pdf"
        ) as string,
      },
      `
      {
        "correctedFromId": "documentId_samplegU0eR8oc8a",
        "createdAt": StringMatching /\\^\\\\d\\{4\\}-\\\\d\\{2\\}-\\\\d\\{2\\}T\\\\d\\{2\\}:\\\\d\\{2\\}:\\\\d\\{2\\}\\\\\\.\\\\d\\{3\\}Z\\$/,
        "filingYear": Any<Number>,
        "formFields": {
          "accountNumber": "1000000001",
          "federalIncomeTaxWithheld": 0,
          "hasDirectSalesOver5000": false,
          "isCorrected": true,
          "isVoid": false,
          "nonemployeeCompensation": 23423,
          "stateTaxInfo": [
            {
              "filingState": "CA",
              "payerStateId": "1234567891",
              "stateIncome": 345543,
              "stateTaxWithheld": 0,
            },
          ],
        },
        "id": "documentId_sampletdeUbrEgYw",
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
        "payeeUrl": StringContaining "-FORM-1099-NEC-CORRECTED-COPY-B.pdf",
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
        "payerUrl": StringContaining "-FORM-1099-NEC-CORRECTED-COPY-C.pdf",
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
          "-FORM-1099-NEC-VOID-COPY-B.pdf"
        ) as string,
        payerUrl: expect.stringContaining(
          "-FORM-1099-NEC-VOID-COPY-C.pdf"
        ) as string,
      },
      `
      {
        "createdAt": StringMatching /\\^\\\\d\\{4\\}-\\\\d\\{2\\}-\\\\d\\{2\\}T\\\\d\\{2\\}:\\\\d\\{2\\}:\\\\d\\{2\\}\\\\\\.\\\\d\\{3\\}Z\\$/,
        "filingYear": Any<Number>,
        "formFields": {
          "accountNumber": "A0NEqtav7n0sBGoq88w0",
          "federalIncomeTaxWithheld": 0,
          "hasDirectSalesOver5000": false,
          "isCorrected": false,
          "isVoid": true,
          "nonemployeeCompensation": 23423,
          "stateTaxInfo": [
            {
              "filingState": "CA",
              "payerStateId": "1234567891",
              "stateIncome": 345543,
              "stateTaxWithheld": 0,
            },
          ],
        },
        "id": "documentId_sampleSaOkfbLdUb",
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
        "payeeUrl": StringContaining "-FORM-1099-NEC-VOID-COPY-B.pdf",
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
        "payerUrl": StringContaining "-FORM-1099-NEC-VOID-COPY-C.pdf",
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
        payeeUrl: expect.stringContaining(
          "-FORM-1099-NEC-COPY-B.pdf"
        ) as string,
        payerUrl: expect.stringContaining(
          "-FORM-1099-NEC-COPY-C.pdf"
        ) as string,
      },
      `
      {
        "createdAt": StringMatching /\\^\\\\d\\{4\\}-\\\\d\\{2\\}-\\\\d\\{2\\}T\\\\d\\{2\\}:\\\\d\\{2\\}:\\\\d\\{2\\}\\\\\\.\\\\d\\{3\\}Z\\$/,
        "filingYear": Any<Number>,
        "formFields": {
          "accountNumber": "A0NEqtav7n0sBGoq88w0",
          "federalIncomeTaxWithheld": 0,
          "hasDirectSalesOver5000": false,
          "isCorrected": false,
          "isVoid": false,
          "nonemployeeCompensation": 23423,
          "stateTaxInfo": [
            {
              "filingState": "CA",
              "payerStateId": "1234567891",
              "stateIncome": 345543,
              "stateTaxWithheld": 0,
            },
          ],
        },
        "id": "documentId_samplegU0eR8oc8a",
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
        "payeeUrl": StringContaining "-FORM-1099-NEC-COPY-B.pdf",
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
        "payerUrl": StringContaining "-FORM-1099-NEC-COPY-C.pdf",
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
