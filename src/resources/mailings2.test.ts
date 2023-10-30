import { describe, expect, test } from "vitest";
import { Abound } from "../abound.js";
import { matchers, sampleConfig, singular } from "../test-utils.js";

const slug = "mailings" as const;
const resource = "mailings" as const;
const sampleId = "mailingId_sampleFV9b73IvAD";

const request = {
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

const invalidRequest = {
  to: {},
  from: {},
};

const updateRequest = {
  to: {
    ...request.to,
    state: "MN",
  },
  from: {
    ...request.from,
    state: "MN",
  },
};

const propertyMatchers = {
  createdAt: expect.stringMatching(matchers.isoDatetimeRegex) as string,
};

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
        "from": {
          "address": "1401 N Shoreline Blvd",
          "address2": "Suite 1",
          "city": "Mountain View",
          "country": "US",
          "name": "Hooli",
          "postalCode": "94043",
          "state": "CA",
        },
        "id": "mailingId_sampleFV9b73IvAD",
        "mailedFromId": "documentId_sampletTtqNfulW8",
        "status": "CREATED",
        "to": {
          "address": "1401 N Shoreline Blvd",
          "address2": "Suite 1",
          "city": "Mountain View",
          "country": "US",
          "name": "Ada Lovelace",
          "postalCode": "94043",
          "state": "CA",
        },
        "url": "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-1099-COPY-B.pdf",
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
        "from": {
          "address": "1401 N Shoreline Blvd",
          "address2": "Suite 1",
          "city": "Mountain View",
          "country": "US",
          "name": "Hooli",
          "postalCode": "94043",
          "state": "CA",
        },
        "id": "mailingId_sampleFV9b73IvAD",
        "mailedFromId": "documentId_sampletTtqNfulW8",
        "status": "CREATED",
        "to": {
          "address": "1401 N Shoreline Blvd",
          "address2": "Suite 1",
          "city": "Mountain View",
          "country": "US",
          "name": "Ada Lovelace",
          "postalCode": "94043",
          "state": "CA",
        },
        "url": "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-1099-COPY-B.pdf",
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
    await expect(async () =>
      // @ts-expect-error required for test case
      abound[resource].update(sampleId, invalidRequest)
    ).rejects.toThrowErrorMatchingInlineSnapshot(`
      AboundBadRequest {
        "errors": [
          {
            "field": "to.name",
            "message": "Expected to.name to be of type string, but received undefined",
          },
          {
            "field": "to.address",
            "message": "Expected to.address to be of type string, but received undefined",
          },
          {
            "field": "to.city",
            "message": "Expected to.city to be of type string, but received undefined",
          },
          {
            "field": "to.state",
            "message": "Expected to.state to be AK, AL, AR, AZ, CA, CO, CT, DC, DE, FL, GA, HI, IA, ID, IL, IN, KY, KS, LA, MA, MD, ME, MI, MN, MO, MS, MT, NC, ND, NE, NH, NJ, NM, NV, NY, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VA, VT, WA, WI, WV, WY, AA, AE, AP, AS, GU, MP, PR, or VI",
          },
          {
            "field": "to.postalCode",
            "message": "Expected to.postalCode to be of type string, but received undefined",
          },
          {
            "field": "to.country",
            "message": "Expected to.country to be US, but received undefined",
          },
          {
            "field": "from.name",
            "message": "Expected from.name to be of type string, but received undefined",
          },
          {
            "field": "from.address",
            "message": "Expected from.address to be of type string, but received undefined",
          },
          {
            "field": "from.city",
            "message": "Expected from.city to be of type string, but received undefined",
          },
          {
            "field": "from.state",
            "message": "Expected from.state to be AK, AL, AR, AZ, CA, CO, CT, DC, DE, FL, GA, HI, IA, ID, IL, IN, KY, KS, LA, MA, MD, ME, MI, MN, MO, MS, MT, NC, ND, NE, NH, NJ, NM, NV, NY, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VA, VT, WA, WI, WV, WY, AA, AE, AP, AS, GU, MP, PR, or VI",
          },
          {
            "field": "from.postalCode",
            "message": "Expected from.postalCode to be of type string, but received undefined",
          },
          {
            "field": "from.country",
            "message": "Expected from.country to be US, but received undefined",
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
        "from": {
          "address": "256 Byron Street",
          "address2": "Suite 32",
          "city": "Palo Alto",
          "country": "US",
          "name": "Hooli, Inc.",
          "name2": "Hooli",
          "postalCode": "94306",
          "state": "MN",
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
          "state": "MN",
        },
        "url": "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-1099-COPY-B.pdf",
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
