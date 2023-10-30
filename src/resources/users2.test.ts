import { describe, expect, test } from "vitest";
import { Abound } from "../abound.js";
import {
  invalidConfig,
  matchers,
  sampleConfig,
  singular,
} from "../test-utils.js";

const slug = "users" as const;
const resource = "users" as const;
const sampleId = "userId_sampleXGMFnhOpeR";

const request = {
  email: "tj@piedpiper.io",
  foreignId: "tj_miller",
  metadata: {
    title: "Board member of Pied Piper",
  },
};

const invalidRequest = {
  email: "invalid_email_address",
  foreignId: 1000,
  metadata: "invalid_metadata",
};

const updateRequest = {
  email: "erlich@piedpiper.io",
};

const propertyMatchers = {
  createdAt: expect.stringMatching(matchers.isoDatetimeRegex) as string,
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
          "field": "email",
          "message": "Expected email to be a valid email address",
        },
        {
          "field": "foreignId",
          "message": "Expected foreignId to be of type string, but received number",
        },
        {
          "field": "metadata",
          "message": "Expected metadata to be of type object, but received string",
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
      propertyMatchers,
      `
    {
      "createdAt": StringMatching /\\^\\\\d\\{4\\}-\\\\d\\{2\\}-\\\\d\\{2\\}T\\\\d\\{2\\}:\\\\d\\{2\\}:\\\\d\\{2\\}\\\\\\.\\\\d\\{3\\}Z\\$/,
      "email": "tj@piedpiper.io",
      "foreignId": "tj_miller",
      "id": "userId_sampleXGMFnhOpeR",
      "metadata": {
        "title": "Board member of Pied Piper",
      },
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
      propertyMatchers,
      `
      {
        "createdAt": StringMatching /\\^\\\\d\\{4\\}-\\\\d\\{2\\}-\\\\d\\{2\\}T\\\\d\\{2\\}:\\\\d\\{2\\}:\\\\d\\{2\\}\\\\\\.\\\\d\\{3\\}Z\\$/,
        "email": "your-users-email@domain.com",
        "id": "userId_sampleXGMFnhOpeR",
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
      propertyMatchers,
      `
      {
        "createdAt": StringMatching /\\^\\\\d\\{4\\}-\\\\d\\{2\\}-\\\\d\\{2\\}T\\\\d\\{2\\}:\\\\d\\{2\\}:\\\\d\\{2\\}\\\\\\.\\\\d\\{3\\}Z\\$/,
        "email": "your-users-email@domain.com",
        "id": "userId_sampleXGMFnhOpeR",
      }
    `
    );
  });
});

describe(`abound.${resource}.update()`, () => {
  test(`throws a bad request error when attempting to update the ${singular(
    resource
  )} with an invalid request`, async () => {
    // Arrange
    const abound = new Abound(sampleConfig);

    // Act & Assert
    // @ts-expect-error required for test case
    await expect(async () => abound[resource].update(sampleId, invalidRequest))
      .rejects.toThrowErrorMatchingInlineSnapshot(`
    AboundBadRequest {
      "errors": [
        {
          "field": "email",
          "message": "Expected email to be a valid email address",
        },
        {
          "field": "foreignId",
          "message": "Expected foreignId to be of type string, but received number",
        },
        {
          "field": "metadata",
          "message": "Expected metadata to be of type object, but received string",
        },
      ],
    }
  `);
  });

  test(`updates a ${singular(slug)}`, async () => {
    // Arrange
    const abound = new Abound(sampleConfig);

    // Act
    const response = await abound[resource].update(sampleId, updateRequest);

    // Assert
    expect(response).toMatchInlineSnapshot(
      propertyMatchers,
      `
      {
        "createdAt": StringMatching /\\^\\\\d\\{4\\}-\\\\d\\{2\\}-\\\\d\\{2\\}T\\\\d\\{2\\}:\\\\d\\{2\\}:\\\\d\\{2\\}\\\\\\.\\\\d\\{3\\}Z\\$/,
        "email": "erlich@piedpiper.io",
        "id": "userId_sampleXGMFnhOpeR",
      }
    `
    );
  });
});
