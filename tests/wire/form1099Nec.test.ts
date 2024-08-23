/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Abound from "../../src/api/index";
import { AboundClient } from "../../src/Client";

const client = new AboundClient({
    environment: process.env.TESTS_BASE_URL || "test",
    sampleKey: process.env.appId_sampleqNhVcdYQYU.appSecret_sampleMz2Zbj3Hq || "test",
});

describe("Form1099Nec", () => {
    test("list", async () => {
        const response = await client.form1099Nec.list();
        expect(response).toEqual([
            {
                id: "documentId_samplegU0eR8oc8a",
                userId: "userId_sampleXGMFnhOpeR",
                formFields: {},
                filingYear: 2023,
                createdAt: new Date("2024-01-01T00:00:00.000Z"),
                status: "FILED",
                payer: {
                    address: "1401 N Shoreline Blvd",
                    address2: "Suite 1",
                    city: "Mountain View",
                    state: "CA",
                    postalCode: "94043",
                    country: "US",
                    name: "Hooli",
                    name2: "Hooli",
                    phoneNumber: "6501014096",
                    tin: "*******11",
                    tinFingerprint: "tinFingerprint_sample847jI1LwxF",
                    tinVerificationId: "tinVerificationId_sample1b0E6efa89",
                    tinVerificationStatus: "MATCH",
                },
                payee: {
                    address: "256 Byron Street",
                    address2: "Suite 32",
                    city: "Palo Alto",
                    state: "CA",
                    postalCode: "94306",
                    country: "US",
                    name: "Ada Lovelace",
                    name2: "InGen Corporation",
                    tin: "*******00",
                    tinFingerprint: "tinFingerprint_samplehy2BWO6JJG",
                    tinVerificationId: "tinVerificationId_sample41SD71AV8f",
                    tinVerificationStatus: "MATCH",
                },
                payerUrl: "https://documents.withabound.com/documentId_samplegU0eR8oc8a",
                payeeUrl: "https://documents.withabound.com/documentId_samplegU0eR8oc8a",
            },
        ]);
    });

    test("create", async () => {
        const response = await client.form1099Nec.create({
            body: {
                filingYear: 2023,
                payer: {
                    address: "1401 N Shoreline Blvd",
                    address2: "Suite 1",
                    city: "Mountain View",
                    state: "CA",
                    postalCode: "94043",
                    country: "US",
                    name: "Hooli",
                    name2: "Hooli",
                    tin: "111111111",
                    phoneNumber: "6501014096",
                },
                payee: {
                    address: "256 Byron Street",
                    address2: "Suite 32",
                    city: "Palo Alto",
                    state: "CA",
                    postalCode: "94306",
                    country: "US",
                    name: "Ada Lovelace",
                    name2: "InGen Corporation",
                    tin: "000000000",
                },
                formFields: {
                    nonemployeeCompensation: 100000,
                    hasDirectSalesOver5000: false,
                    federalIncomeTaxWithheld: 0,
                    stateTaxInfo: [
                        {
                            filingState: Abound.types.Form1099FilingStateEnum.Ca,
                            stateIncome: 100000,
                            stateTaxWithheld: 0,
                        },
                    ],
                },
            },
        });
        expect(response).toEqual({
            id: "documentId_samplegU0eR8oc8a",
            userId: "userId_sampleXGMFnhOpeR",
            formFields: {},
            filingYear: 2023,
            createdAt: new Date("2024-01-01T00:00:00.000Z"),
            status: "CREATED",
            payer: {
                address: "1401 N Shoreline Blvd",
                address2: "Suite 1",
                city: "Mountain View",
                state: "CA",
                postalCode: "94043",
                country: "US",
                name: "Hooli",
                name2: "Hooli",
                phoneNumber: "6501014096",
                tin: "*******11",
                tinFingerprint: "tinFingerprint_sample847jI1LwxF",
                tinVerificationId: "tinVerificationId_sample1b0E6efa89",
                tinVerificationStatus: "MATCH",
            },
            payee: {
                address: "256 Byron Street",
                address2: "Suite 32",
                city: "Palo Alto",
                state: "CA",
                postalCode: "94306",
                country: "US",
                name: "Ada Lovelace",
                name2: "InGen Corporation",
                tin: "*******00",
                tinFingerprint: "tinFingerprint_samplehy2BWO6JJG",
                tinVerificationId: "tinVerificationId_sample41SD71AV8f",
                tinVerificationStatus: "MATCH",
            },
            payerUrl: "https://documents.withabound.com/documentId_samplegU0eR8oc8a",
            payeeUrl: "https://documents.withabound.com/documentId_samplegU0eR8oc8a",
        });
    });

    test("mail", async () => {
        const response = await client.form1099Nec.mail("documentId_samplegU0eR8oc8a", {
            body: {
                to: {
                    address: "256 Byron Street",
                    address2: "Suite 32",
                    city: "Palo Alto",
                    state: "CA",
                    postalCode: "94306",
                    country: "US",
                    name: "Ada Lovelace",
                    name2: "InGen Corporation",
                },
                from: {
                    address: "1401 N Shoreline Blvd",
                    address2: "Suite 1",
                    city: "Mountain View",
                    state: "CA",
                    postalCode: "94043",
                    country: "US",
                    name: "Hooli",
                    name2: "InGen Corporation",
                },
            },
        });
        expect(response).toEqual({
            to: {
                address: "256 Byron Street",
                address2: "Suite 32",
                city: "Palo Alto",
                state: "CA",
                postalCode: "94306",
                country: "US",
                name: "Ada Lovelace",
                name2: "InGen Corporation",
            },
            from: {
                address: "1401 N Shoreline Blvd",
                address2: "Suite 1",
                city: "Mountain View",
                state: "CA",
                postalCode: "94043",
                country: "US",
                name: "Hooli",
                name2: "InGen Corporation",
            },
            id: "mailingId_sampleFV9b73IvAD",
            createdAt: new Date("2024-01-01T00:00:00.000Z"),
            status: "CREATED",
            url: "https://document.,withabound.com/documentId_samplegU0eR8oc8a",
            userId: "userId_sampleXGMFnhOpeR",
            mailedFromId: "documentId_samplegU0eR8oc8a",
        });
    });

    test("file", async () => {
        const response = await client.form1099Nec.file("documentId_samplegU0eR8oc8a");
        expect(response).toEqual({
            id: "documentId_samplegU0eR8oc8a",
            userId: "userId_sampleXGMFnhOpeR",
            formFields: {},
            filingYear: 2023,
            createdAt: new Date("2024-01-01T00:00:00.000Z"),
            status: "FILED",
            payer: {
                address: "1401 N Shoreline Blvd",
                address2: "Suite 1",
                city: "Mountain View",
                state: "CA",
                postalCode: "94043",
                country: "US",
                name: "Hooli",
                name2: "Hooli",
                phoneNumber: "6501014096",
                tin: "*******11",
                tinFingerprint: "tinFingerprint_sample847jI1LwxF",
                tinVerificationId: "tinVerificationId_sample1b0E6efa89",
                tinVerificationStatus: "MATCH",
            },
            payee: {
                address: "256 Byron Street",
                address2: "Suite 32",
                city: "Palo Alto",
                state: "CA",
                postalCode: "94306",
                country: "US",
                name: "Ada Lovelace",
                name2: "InGen Corporation",
                tin: "*******00",
                tinFingerprint: "tinFingerprint_samplehy2BWO6JJG",
                tinVerificationId: "tinVerificationId_sample41SD71AV8f",
                tinVerificationStatus: "MATCH",
            },
            payerUrl: "https://documents.withabound.com/documentId_samplegU0eR8oc8a",
            payeeUrl: "https://documents.withabound.com/documentId_samplegU0eR8oc8a",
        });
    });

    test("correct", async () => {
        const response = await client.form1099Nec.correct("documentId_samplegU0eR8oc8a");
        expect(response).toEqual({
            id: "documentId_samplegU0eR8oc8a",
            userId: "userId_sampleXGMFnhOpeR",
            formFields: {},
            filingYear: 2023,
            createdAt: new Date("2024-01-01T00:00:00.000Z"),
            status: "FILED",
            payer: {
                address: "1401 N Shoreline Blvd",
                address2: "Suite 1",
                city: "Mountain View",
                state: "CA",
                postalCode: "94043",
                country: "US",
                name: "Hooli",
                name2: "Hooli",
                phoneNumber: "6501014096",
                tin: "*******11",
                tinFingerprint: "tinFingerprint_sample847jI1LwxF",
                tinVerificationId: "tinVerificationId_sample1b0E6efa89",
                tinVerificationStatus: "MATCH",
            },
            payee: {
                address: "256 Byron Street",
                address2: "Suite 32",
                city: "Palo Alto",
                state: "CA",
                postalCode: "94306",
                country: "US",
                name: "Ada Lovelace",
                name2: "InGen Corporation",
                tin: "*******00",
                tinFingerprint: "tinFingerprint_samplehy2BWO6JJG",
                tinVerificationId: "tinVerificationId_sample41SD71AV8f",
                tinVerificationStatus: "MATCH",
            },
            payerUrl: "https://documents.withabound.com/documentId_samplegU0eR8oc8a",
            payeeUrl: "https://documents.withabound.com/documentId_samplegU0eR8oc8a",
        });
    });

    test("void", async () => {
        const response = await client.form1099Nec.void("documentId_sample");
        expect(response).toEqual({
            id: "documentId_samplegU0eR8oc8a",
            userId: "userId_sampleXGMFnhOpeR",
            formFields: {},
            filingYear: 2023,
            createdAt: new Date("2024-01-01T00:00:00.000Z"),
            status: "FILED",
            payer: {
                address: "1401 N Shoreline Blvd",
                address2: "Suite 1",
                city: "Mountain View",
                state: "CA",
                postalCode: "94043",
                country: "US",
                name: "Hooli",
                name2: "Hooli",
                phoneNumber: "6501014096",
                tin: "*******11",
                tinFingerprint: "tinFingerprint_sample847jI1LwxF",
                tinVerificationId: "tinVerificationId_sample1b0E6efa89",
                tinVerificationStatus: "MATCH",
            },
            payee: {
                address: "256 Byron Street",
                address2: "Suite 32",
                city: "Palo Alto",
                state: "CA",
                postalCode: "94306",
                country: "US",
                name: "Ada Lovelace",
                name2: "InGen Corporation",
                tin: "*******00",
                tinFingerprint: "tinFingerprint_samplehy2BWO6JJG",
                tinVerificationId: "tinVerificationId_sample41SD71AV8f",
                tinVerificationStatus: "MATCH",
            },
            payerUrl: "https://documents.withabound.com/documentId_samplegU0eR8oc8a",
            payeeUrl: "https://documents.withabound.com/documentId_samplegU0eR8oc8a",
        });
    });

    test("retrieve", async () => {
        const response = await client.form1099Nec.retrieve("documentId_samplegU0eR8oc8a");
        expect(response).toEqual({
            id: "documentId_samplegU0eR8oc8a",
            userId: "userId_sampleXGMFnhOpeR",
            formFields: {},
            filingYear: 2023,
            createdAt: new Date("2024-01-01T00:00:00.000Z"),
            status: "CREATED",
            payer: {
                address: "1401 N Shoreline Blvd",
                address2: "Suite 1",
                city: "Mountain View",
                state: "CA",
                postalCode: "94043",
                country: "US",
                name: "Hooli",
                name2: "Hooli",
                phoneNumber: "6501014096",
                tin: "*******11",
                tinFingerprint: "tinFingerprint_sample847jI1LwxF",
                tinVerificationId: "tinVerificationId_sample1b0E6efa89",
                tinVerificationStatus: "MATCH",
            },
            payee: {
                address: "256 Byron Street",
                address2: "Suite 32",
                city: "Palo Alto",
                state: "CA",
                postalCode: "94306",
                country: "US",
                name: "Ada Lovelace",
                name2: "InGen Corporation",
                tin: "*******00",
                tinFingerprint: "tinFingerprint_samplehy2BWO6JJG",
                tinVerificationId: "tinVerificationId_sample41SD71AV8f",
                tinVerificationStatus: "MATCH",
            },
            payerUrl: "https://documents.withabound.com/documentId_samplegU0eR8oc8a",
            payeeUrl: "https://documents.withabound.com/documentId_samplegU0eR8oc8a",
        });
    });

    test("delete", async () => {
        const response = await client.form1099Nec.delete("documentId_samplegU0eR8oc8a");
        expect(response).toEqual({});
    });
});
