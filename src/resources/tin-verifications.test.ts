import { describe, expect, test } from "vitest";
import { Abound } from "../abound.js";
import {
  invalidConfig,
  matchers,
  sampleConfig,
  singular,
} from "../test-utils.js";

const slug = "tin-verifications" as const;
const resource = "tinVerifications" as const;
const sampleId = "tinVerificationId_sample41SD71AV8f";

const request = {
  name: "Ada Lovelace",
  tin: "111111111",
  userId: "userId_sampleXGMFnhOpeR",
};

const invalidRequest = {
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
    slug
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
            "field": "name",
            "message": "Expected name to be of type string, but received undefined",
          },
          {
            "field": "tin",
            "message": "Expected tin to be of type string, but received undefined",
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
      },
      `
      {
        "createdAt": StringMatching /\\^\\\\d\\{4\\}-\\\\d\\{2\\}-\\\\d\\{2\\}T\\\\d\\{2\\}:\\\\d\\{2\\}:\\\\d\\{2\\}\\\\\\.\\\\d\\{3\\}Z\\$/,
        "id": "tinVerificationId_sample41SD71AV8f",
        "name": "Ada Lovelace",
        "status": "MATCH",
        "tin": "*******11",
        "tinFingerprint": "tinFingerprint_samplehy2BWO6JJG",
        "tinType": "INDIVIDUAL",
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
      },
      `
      {
        "createdAt": StringMatching /\\^\\\\d\\{4\\}-\\\\d\\{2\\}-\\\\d\\{2\\}T\\\\d\\{2\\}:\\\\d\\{2\\}:\\\\d\\{2\\}\\\\\\.\\\\d\\{3\\}Z\\$/,
        "id": "tinVerificationId_sample41SD71AV8f",
        "name": "Ada Lovelace",
        "status": "MATCH",
        "tin": "*******00",
        "tinFingerprint": "tinFingerprint_samplehy2BWO6JJG",
        "tinType": "INDIVIDUAL",
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
      },
      `
      {
        "createdAt": StringMatching /\\^\\\\d\\{4\\}-\\\\d\\{2\\}-\\\\d\\{2\\}T\\\\d\\{2\\}:\\\\d\\{2\\}:\\\\d\\{2\\}\\\\\\.\\\\d\\{3\\}Z\\$/,
        "id": "tinVerificationId_sample41SD71AV8f",
        "name": "Ada Lovelace",
        "status": "MATCH",
        "tin": "*******00",
        "tinFingerprint": "tinFingerprint_samplehy2BWO6JJG",
        "tinType": "INDIVIDUAL",
      }
    `
    );
  });
});
