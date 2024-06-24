import { describe, expect, test } from "vitest";
import { Abound } from "../abound.js";
import {
  invalidConfig,
  matchers,
  sampleConfig,
  singular,
} from "../test-utils.js";

const slug = "documents/w-9" as const;
const resource = "formW9" as const;
const sampleId = "documentId_sampleVppNzzIbQT";

const request = {
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
  formFields: {
    taxClassification: "SOLE_PROPRIETOR" as const,
    exemptPayeeCode: "1" as const,
    exemptFatcaCode: "A" as const,
    accountNumbers: ["10000001", "10000002"],
    certifiedAt: "2023-01-01T00:00:00.000Z",
  },
  userId: "userId_sampleXGMFnhOpeR",
};

const invalidRequest = {
  payee: {},
  payer: {},
  formFields: {},
  userId: 1000,
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
    // @ts-expect-error required for test case
    await expect(async () => abound[resource].create(invalidRequest)).rejects
      .toThrowErrorMatchingInlineSnapshot(`
      AboundBadRequest {
        "errors": [
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
            "field": "formFields.taxClassification",
            "message": "Expected formFields.taxClassification to be INDIVIDUAL, SOLE_PROPRIETOR, SINGLE_MEMBER_LLC, C_CORPORATION, S_CORPORATION, PARTNERSHIP, TRUST, ESTATE, LLC_PARTNERSHIP, LLC_C_CORPORATION, LLC_S_CORPORATION, or OTHER, but received undefined",
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
        createdAt: expect.stringMatching(matchers.isoDatetimeRegex) as string,
        formFields: {
          certifiedAt: expect.stringMatching(
            matchers.isoDatetimeRegex
          ) as string,
        },
      },
      `
      {
        "createdAt": StringMatching /\\^\\\\d\\{4\\}-\\\\d\\{2\\}-\\\\d\\{2\\}T\\\\d\\{2\\}:\\\\d\\{2\\}:\\\\d\\{2\\}\\\\\\.\\\\d\\{3\\}Z\\$/,
        "formFields": {
          "accountNumbers": [
            "10000001",
            "10000002",
          ],
          "certifiedAt": StringMatching /\\^\\\\d\\{4\\}-\\\\d\\{2\\}-\\\\d\\{2\\}T\\\\d\\{2\\}:\\\\d\\{2\\}:\\\\d\\{2\\}\\\\\\.\\\\d\\{3\\}Z\\$/,
          "exemptFatcaCode": "A",
          "exemptPayeeCode": "1",
          "taxClassification": "SOLE_PROPRIETOR",
        },
        "id": "documentId_sampleVppNzzIbQT",
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
        "url": "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-W-9.pdf",
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
        createdAt: expect.stringMatching(matchers.isoDatetimeRegex) as string,
        formFields: {
          certifiedAt: expect.stringMatching(
            matchers.isoDatetimeRegex
          ) as string,
        },
      },
      `
      {
        "createdAt": StringMatching /\\^\\\\d\\{4\\}-\\\\d\\{2\\}-\\\\d\\{2\\}T\\\\d\\{2\\}:\\\\d\\{2\\}:\\\\d\\{2\\}\\\\\\.\\\\d\\{3\\}Z\\$/,
        "formFields": {
          "accountNumbers": [
            "1234567890",
            "1234567891",
          ],
          "certifiedAt": StringMatching /\\^\\\\d\\{4\\}-\\\\d\\{2\\}-\\\\d\\{2\\}T\\\\d\\{2\\}:\\\\d\\{2\\}:\\\\d\\{2\\}\\\\\\.\\\\d\\{3\\}Z\\$/,
          "taxClassification": "SOLE_PROPRIETOR",
        },
        "id": "documentId_sampleVppNzzIbQT",
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
        "url": "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-W-9.pdf",
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
        createdAt: expect.stringMatching(matchers.isoDatetimeRegex) as string,
        formFields: {
          certifiedAt: expect.stringMatching(
            matchers.isoDatetimeRegex
          ) as string,
        },
      },
      `
      {
        "createdAt": StringMatching /\\^\\\\d\\{4\\}-\\\\d\\{2\\}-\\\\d\\{2\\}T\\\\d\\{2\\}:\\\\d\\{2\\}:\\\\d\\{2\\}\\\\\\.\\\\d\\{3\\}Z\\$/,
        "formFields": {
          "accountNumbers": [
            "1234567890",
            "1234567891",
          ],
          "certifiedAt": StringMatching /\\^\\\\d\\{4\\}-\\\\d\\{2\\}-\\\\d\\{2\\}T\\\\d\\{2\\}:\\\\d\\{2\\}:\\\\d\\{2\\}\\\\\\.\\\\d\\{3\\}Z\\$/,
          "taxClassification": "SOLE_PROPRIETOR",
        },
        "id": "documentId_sampleVppNzzIbQT",
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
        "url": "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-W-9.pdf",
      }
    `
    );
  });
});
