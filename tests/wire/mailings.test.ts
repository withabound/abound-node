/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { AboundClient } from "../../src/Client";

const client = new AboundClient({
    environment: process.env.TESTS_BASE_URL || "test",
    apiKey: process.env.TESTS_AUTH || "test",
});

describe("Mailings", () => {
    test("list", async () => {
        const response = await client.mailings.list();
        expect(response).toEqual([
            {
                id: "mailingId_sampleFV9b73IvAD",
                createdAt: "2024-01-01T00:00:00.000Z",
                url: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-1099-COPY-B.pdf",
                status: "CREATED",
                to: {
                    address: "1401 N Shoreline Blvd",
                    address2: "Suite 1",
                    city: "Mountain View",
                    state: "CA",
                    postalCode: "94043",
                    country: "US",
                    name: "Ada Lovelace",
                },
                from: {
                    address: "256 Byron Street",
                    address2: "Suite 32",
                    city: "Palo Alto",
                    state: "CA",
                    postalCode: "94306",
                    country: "US",
                    name: "Hooli",
                },
                mailedFromId: "documentId_sampletTtqNfulW8",
            },
        ]);
    });

    test("retrieve", async () => {
        const response = await client.mailings.retrieve("mailingId_sampleFV9b73IvAD");
        expect(response).toEqual({
            id: "mailingId_sampleFV9b73IvAD",
            createdAt: "2024-01-01T00:00:00.000Z",
            url: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-1099-COPY-B.pdf",
            status: "CREATED",
            to: {
                address: "1401 N Shoreline Blvd",
                address2: "Suite 1",
                city: "Mountain View",
                state: "CA",
                postalCode: "94043",
                country: "US",
                name: "Ada Lovelace",
            },
            from: {
                address: "256 Byron Street",
                address2: "Suite 32",
                city: "Palo Alto",
                state: "CA",
                postalCode: "94306",
                country: "US",
                name: "Hooli",
            },
            mailedFromId: "documentId_sampletTtqNfulW8",
        });
    });

    test("update", async () => {
        const response = await client.mailings.update("mailingId_sampleFV9b73IvAD", {
            body: {
                to: {
                    address: "1401 N Shoreline Blvd",
                    address2: "Suite 1",
                    city: "Mountain View",
                    state: "CA",
                    postalCode: "94043",
                    country: "US",
                    name: "Ada Lovelace",
                },
                from: {
                    address: "256 Byron Street",
                    address2: "Suite 32",
                    city: "Palo Alto",
                    state: "CA",
                    postalCode: "94306",
                    country: "US",
                    name: "Hooli",
                },
            },
        });
        expect(response).toEqual({
            id: "mailingId_sampleFV9b73IvAD",
            createdAt: "2024-01-01T00:00:00.000Z",
            url: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-1099-COPY-B.pdf",
            status: "CREATED",
            to: {
                address: "1401 N Shoreline Blvd",
                address2: "Suite 1",
                city: "Mountain View",
                state: "CA",
                postalCode: "94043",
                country: "US",
                name: "Ada Lovelace",
            },
            from: {
                address: "256 Byron Street",
                address2: "Suite 32",
                city: "Palo Alto",
                state: "CA",
                postalCode: "94306",
                country: "US",
                name: "Hooli",
            },
            mailedFromId: "documentId_sampletTtqNfulW8",
        });
    });

    test("delete", async () => {
        const response = await client.mailings.delete("mailingId_sampleFV9b73IvAD");
        expect(response).toEqual({});
    });
});