/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Abound from "../../src/api/index";
import { AboundClient } from "../../src/Client";

const client = new AboundClient({
    environment: process.env.TESTS_BASE_URL || "test",
    apiKey: process.env.TESTS_AUTH || "test",
});

describe("Form1099Nec", () => {
    test("list", async () => {
        const response = await client.form1099Nec.list();
        expect(response).toEqual([
            {
                id: "documentId_samplegU0eR8oc8a",
                formFields: {
                    isCorrected: false,
                    isVoid: false,
                    nonemployeeCompensation: 23423,
                    hasDirectSalesOver5000: false,
                    federalIncomeTaxWithheld: 0,
                    accountNumber: "A0NEqtav7n0sBGoq88w0",
                    stateTaxInfo: [{ filingState: "CA", stateIncome: 23423, stateTaxWithheld: 0 }],
                },
                filingYear: 2023,
                createdAt: "2024-01-01T00:00:00.000Z",
                status: "CREATED",
                payer: {
                    name: "Hooli",
                    address: "256 Byron Street",
                    address2: "Suite 32",
                    city: "Palo Alto",
                    state: "CA",
                    postalCode: "94306",
                    country: "US",
                    phoneNumber: "6501014096",
                    tin: "*******11",
                    tinType: "BUSINESS",
                    tinFingerprint: "tinFingerprint_sample847jI1LwxF",
                    tinVerificationId: "tinVerificationId_sample1b0E6efa89",
                    tinVerificationStatus: "MATCH",
                },
                payee: {
                    name: "Ada Lovelace",
                    address: "1401 N Shoreline Blvd",
                    address2: "Suite 1",
                    city: "Mountain View",
                    state: "CA",
                    postalCode: "94043",
                    country: "US",
                    tin: "*******00",
                    tinType: "INDIVIDUAL",
                    tinFingerprint: "tinFingerprint_samplehy2BWO6JJG",
                    tinVerificationId: "tinVerificationId_sample41SD71AV8f",
                    tinVerificationStatus: "MATCH",
                },
                payerUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-NEC-COPY-C.pdf",
                payeeUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-NEC-COPY-B.pdf",
            },
        ]);
    });

    test("create", async () => {
        const response = await client.form1099Nec.create({
            body: {
                filingYear: 2023,
                payer: {
                    name: "Hooli",
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
                    tin: "000000000",
                    address: "1401 N Shoreline Blvd",
                    address2: "Suite 1",
                    city: "Mountain View",
                    state: "CA",
                    postalCode: "94043",
                    country: "US",
                },
                formFields: {
                    nonemployeeCompensation: 23423,
                    hasDirectSalesOver5000: false,
                    federalIncomeTaxWithheld: 0,
                    accountNumber: "A0NEqtav7n0sBGoq88w0",
                    stateTaxInfo: [
                        {
                            filingState: Abound.types.Form1099FilingStateEnum.Ca,
                            stateIncome: 23423,
                            stateTaxWithheld: 0,
                        },
                    ],
                },
            },
        });
        expect(response).toEqual({
            id: "documentId_samplegU0eR8oc8a",
            formFields: {
                isCorrected: false,
                isVoid: false,
                nonemployeeCompensation: 23423,
                hasDirectSalesOver5000: false,
                federalIncomeTaxWithheld: 0,
                accountNumber: "A0NEqtav7n0sBGoq88w0",
                stateTaxInfo: [{ filingState: "CA", stateIncome: 23423, stateTaxWithheld: 0 }],
            },
            filingYear: 2023,
            createdAt: "2024-01-01T00:00:00.000Z",
            status: "CREATED",
            payer: {
                name: "Hooli",
                address: "256 Byron Street",
                address2: "Suite 32",
                city: "Palo Alto",
                state: "CA",
                postalCode: "94306",
                country: "US",
                phoneNumber: "6501014096",
                tin: "*******11",
                tinType: "BUSINESS",
                tinFingerprint: "tinFingerprint_sample847jI1LwxF",
                tinVerificationId: "tinVerificationId_sample1b0E6efa89",
                tinVerificationStatus: "MATCH",
            },
            payee: {
                name: "Ada Lovelace",
                address: "1401 N Shoreline Blvd",
                address2: "Suite 1",
                city: "Mountain View",
                state: "CA",
                postalCode: "94043",
                country: "US",
                tin: "*******00",
                tinType: "INDIVIDUAL",
                tinFingerprint: "tinFingerprint_samplehy2BWO6JJG",
                tinVerificationId: "tinVerificationId_sample41SD71AV8f",
                tinVerificationStatus: "MATCH",
            },
            payerUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-NEC-COPY-C.pdf",
            payeeUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-NEC-COPY-B.pdf",
        });
    });

    test("mail", async () => {
        const response = await client.form1099Nec.mail("documentId_samplegU0eR8oc8a", {
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
            status: "CREATED",
            url: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-1099-COPY-B.pdf",
            mailedFromId: "documentId_sampletTtqNfulW8",
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
        });
    });

    test("file", async () => {
        const response = await client.form1099Nec.file("documentId_samplegU0eR8oc8a");
        expect(response).toEqual({
            id: "documentId_samplegU0eR8oc8a",
            formFields: {
                isCorrected: false,
                isVoid: false,
                nonemployeeCompensation: 23423,
                hasDirectSalesOver5000: false,
                federalIncomeTaxWithheld: 0,
                accountNumber: "A0NEqtav7n0sBGoq88w0",
                stateTaxInfo: [{ filingState: "CA", stateIncome: 23423, stateTaxWithheld: 0 }],
            },
            filingYear: 2023,
            createdAt: "2024-01-01T00:00:00.000Z",
            status: "FILED",
            payer: {
                name: "Hooli",
                address: "256 Byron Street",
                address2: "Suite 32",
                city: "Palo Alto",
                state: "CA",
                postalCode: "94306",
                country: "US",
                phoneNumber: "6501014096",
                tin: "*******11",
                tinType: "BUSINESS",
                tinFingerprint: "tinFingerprint_sample847jI1LwxF",
                tinVerificationId: "tinVerificationId_sample1b0E6efa89",
                tinVerificationStatus: "MATCH",
            },
            payee: {
                name: "Ada Lovelace",
                address: "1401 N Shoreline Blvd",
                address2: "Suite 1",
                city: "Mountain View",
                state: "CA",
                postalCode: "94043",
                country: "US",
                tin: "*******00",
                tinType: "INDIVIDUAL",
                tinFingerprint: "tinFingerprint_samplehy2BWO6JJG",
                tinVerificationId: "tinVerificationId_sample41SD71AV8f",
                tinVerificationStatus: "MATCH",
            },
            payerUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-NEC-COPY-C.pdf",
            payeeUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-NEC-COPY-B.pdf",
        });
    });

    test("correct", async () => {
        const response = await client.form1099Nec.correct("documentId_samplegU0eR8oc8a", {
            body: {
                payee: {
                    name: "Ada Lovelace",
                    tin: "000000000",
                    address: "1401 N Shoreline Blvd",
                    address2: "Suite 1",
                    city: "Mountain View",
                    state: "CA",
                    postalCode: "94043",
                    country: "US",
                },
                formFields: {
                    nonemployeeCompensation: 10000,
                    accountNumber: "A0NEqtav7n0sBGoq88w0",
                    stateTaxInfo: [
                        {
                            filingState: Abound.types.Form1099FilingStateEnum.Ca,
                            stateIncome: 10000,
                        },
                    ],
                },
            },
        });
        expect(response).toEqual({
            id: "documentId_sampletdeUbrEgYw",
            correctedFromId: "documentId_samplegU0eR8oc8a",
            formFields: {
                isCorrected: true,
                isVoid: false,
                nonemployeeCompensation: 10000,
                hasDirectSalesOver5000: false,
                federalIncomeTaxWithheld: 0,
                accountNumber: "A0NEqtav7n0sBGoq88w0",
                stateTaxInfo: [{ filingState: "CA", stateIncome: 10000, stateTaxWithheld: 0 }],
            },
            filingYear: 2023,
            createdAt: "2024-01-01T00:00:00.000Z",
            status: "FILED",
            payer: {
                name: "Hooli",
                address: "256 Byron Street",
                address2: "Suite 32",
                city: "Palo Alto",
                state: "CA",
                postalCode: "94306",
                country: "US",
                phoneNumber: "6501014096",
                tin: "*******11",
                tinType: "BUSINESS",
                tinFingerprint: "tinFingerprint_sample847jI1LwxF",
                tinVerificationId: "tinVerificationId_sample1b0E6efa89",
                tinVerificationStatus: "MATCH",
            },
            payee: {
                name: "Ada Lovelace",
                address: "1401 N Shoreline Blvd",
                address2: "Suite 1",
                city: "Mountain View",
                state: "CA",
                postalCode: "94043",
                country: "US",
                tin: "*******00",
                tinType: "INDIVIDUAL",
                tinFingerprint: "tinFingerprint_samplehy2BWO6JJG",
                tinVerificationId: "tinVerificationId_sample41SD71AV8f",
                tinVerificationStatus: "MATCH",
            },
            payerUrl:
                "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-NEC-CORRECTED-COPY-C.pdf",
            payeeUrl:
                "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-NEC-CORRECTED-COPY-B.pdf",
        });
    });

    test("void", async () => {
        const response = await client.form1099Nec.void("documentId_samplegU0eR8oc8a");
        expect(response).toEqual({
            id: "documentId_sampleSaOkfbLdUb",
            voidedFromId: "documentId_samplegU0eR8oc8a",
            formFields: {
                isCorrected: false,
                isVoid: true,
                nonemployeeCompensation: 23423,
                hasDirectSalesOver5000: false,
                federalIncomeTaxWithheld: 0,
                accountNumber: "A0NEqtav7n0sBGoq88w0",
                stateTaxInfo: [{ filingState: "CA", stateIncome: 23423, stateTaxWithheld: 0 }],
            },
            filingYear: 2023,
            createdAt: "2024-01-01T00:00:00.000Z",
            status: "FILED",
            payer: {
                name: "Hooli",
                address: "256 Byron Street",
                address2: "Suite 32",
                city: "Palo Alto",
                state: "CA",
                postalCode: "94306",
                country: "US",
                phoneNumber: "6501014096",
                tin: "*******11",
                tinType: "BUSINESS",
                tinFingerprint: "tinFingerprint_sample847jI1LwxF",
                tinVerificationId: "tinVerificationId_sample1b0E6efa89",
                tinVerificationStatus: "MATCH",
            },
            payee: {
                name: "Ada Lovelace",
                address: "1401 N Shoreline Blvd",
                address2: "Suite 1",
                city: "Mountain View",
                state: "CA",
                postalCode: "94043",
                country: "US",
                tin: "*******00",
                tinType: "INDIVIDUAL",
                tinFingerprint: "tinFingerprint_samplehy2BWO6JJG",
                tinVerificationId: "tinVerificationId_sample41SD71AV8f",
                tinVerificationStatus: "MATCH",
            },
            payerUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-NEC-VOID-COPY-C.pdf",
            payeeUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-NEC-VOID-COPY-B.pdf",
        });
    });

    test("retrieve", async () => {
        const response = await client.form1099Nec.retrieve("documentId_samplegU0eR8oc8a");
        expect(response).toEqual({
            id: "documentId_samplegU0eR8oc8a",
            formFields: {
                isCorrected: false,
                isVoid: false,
                nonemployeeCompensation: 23423,
                hasDirectSalesOver5000: false,
                federalIncomeTaxWithheld: 0,
                accountNumber: "A0NEqtav7n0sBGoq88w0",
                stateTaxInfo: [{ filingState: "CA", stateIncome: 23423, stateTaxWithheld: 0 }],
            },
            filingYear: 2023,
            createdAt: "2024-01-01T00:00:00.000Z",
            status: "CREATED",
            payer: {
                name: "Hooli",
                address: "256 Byron Street",
                address2: "Suite 32",
                city: "Palo Alto",
                state: "CA",
                postalCode: "94306",
                country: "US",
                phoneNumber: "6501014096",
                tin: "*******11",
                tinType: "BUSINESS",
                tinFingerprint: "tinFingerprint_sample847jI1LwxF",
                tinVerificationId: "tinVerificationId_sample1b0E6efa89",
                tinVerificationStatus: "MATCH",
            },
            payee: {
                name: "Ada Lovelace",
                address: "1401 N Shoreline Blvd",
                address2: "Suite 1",
                city: "Mountain View",
                state: "CA",
                postalCode: "94043",
                country: "US",
                tin: "*******00",
                tinType: "INDIVIDUAL",
                tinFingerprint: "tinFingerprint_samplehy2BWO6JJG",
                tinVerificationId: "tinVerificationId_sample41SD71AV8f",
                tinVerificationStatus: "MATCH",
            },
            payerUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-NEC-COPY-C.pdf",
            payeeUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-NEC-COPY-B.pdf",
        });
    });

    test("delete", async () => {
        const response = await client.form1099Nec.delete("documentId_samplegU0eR8oc8a");
        expect(response).toEqual({});
    });
});