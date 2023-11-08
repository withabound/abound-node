import { describe, expect, test } from "vitest";
import { Abound } from "../abound.js";
import {
  invalidConfig,
  matchers,
  sampleConfig,
  singular,
} from "../test-utils.js";

const slug = "access-tokens" as const;
const resource = "accessTokens" as const;

const request = {
  expiresIn: 300,
  userId: "userId_sampleXGMFnhOpeR",
};

const invalidRequest = {};

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
            "field": "expiresIn",
            "message": "Expected expiresIn to be of type number, but received undefined",
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
        expiresAt: expect.stringMatching(matchers.isoDatetimeRegex) as string,
      },
      `
      {
        "accessToken": "accessToken_sampleeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTY5ODczNTcsImV4cCI6MTY5Njk4NzY1NywiYXVkIjoiYXBwSWRfc2FtcGxlcU5oVmNkWVFZVSIsImlzcyI6Imh0dHBzOi8vc2FuZGJveC1hcGkud2l0aGFib3VuZC5jb20vdjQiLCJzdWIiOiJ1c2VySWRfc2FtcGxlWEdNRm5oT3BlUiJ9.-NrPVQvsnM8vJouyuP5yeFGlYb1xGgR-gS3v87p5BQk",
        "createdAt": StringMatching /\\^\\\\d\\{4\\}-\\\\d\\{2\\}-\\\\d\\{2\\}T\\\\d\\{2\\}:\\\\d\\{2\\}:\\\\d\\{2\\}\\\\\\.\\\\d\\{3\\}Z\\$/,
        "expiresAt": StringMatching /\\^\\\\d\\{4\\}-\\\\d\\{2\\}-\\\\d\\{2\\}T\\\\d\\{2\\}:\\\\d\\{2\\}:\\\\d\\{2\\}\\\\\\.\\\\d\\{3\\}Z\\$/,
      }
    `
    );
  });
});
