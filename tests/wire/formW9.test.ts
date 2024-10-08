/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { AboundClient } from "../../src/Client";

const client = new AboundClient({
    environment: process.env.TESTS_BASE_URL || "test",
    apiKey: process.env.TESTS_AUTH || "test",
});

describe("FormW9", () => {
    test("list", async () => {
        const response = await client.formW9.list();
        expect(response).toEqual([
            {
                id: "documentId_sampleVppNzzIbQT",
                createdAt: "2024-01-01T00:00:00.000Z",
                url: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-W-9.pdf",
                payee: {
                    name: "Ada Lovelace",
                    address: "1401 N Shoreline Blvd",
                    address2: "Suite 1",
                    city: "Mountain View",
                    country: "US",
                    postalCode: "94043",
                    state: "CA",
                    tin: "*******00",
                    tinType: "INDIVIDUAL",
                    tinFingerprint: "tinFingerprint_samplehy2BWO6JJG",
                    tinVerificationId: "tinVerificationId_sample41SD71AV8f",
                    tinVerificationStatus: "MATCH",
                },
                formFields: {
                    accountNumbers: ["1234567890", "1234567891"],
                    taxClassification: "INDIVIDUAL",
                    isSubjectToBackupWithholding: false,
                    electronicSignature: {
                        signature: "Ada Lovelace",
                        printedName: "Ada Lovelace",
                        signedAt: "2024-01-01T00:00:00.000Z",
                        ipAddress: "127.0.0.1",
                    },
                },
            },
        ]);
    });

    test("create", async () => {
        const response = await client.formW9.create({
            body: {
                payee: {
                    name: "Ada Lovelace",
                    address: "1401 N Shoreline Blvd",
                    address2: "Suite 1",
                    city: "Mountain View",
                    country: "US",
                    postalCode: "94043",
                    state: "CA",
                    tin: "000000000",
                    tinType: "INDIVIDUAL",
                },
                formFields: {
                    taxClassification: "INDIVIDUAL",
                    isSubjectToBackupWithholding: false,
                    electronicSignature: {
                        signature: "Ada Lovelace",
                        printedName: "Ada Lovelace",
                        signedAt: "2024-01-01T00:00:00.000Z",
                        ipAddress: "127.0.0.1",
                    },
                },
            },
        });
        expect(response).toEqual({
            id: "documentId_sampleVppNzzIbQT",
            createdAt: "2024-01-01T00:00:00.000Z",
            url: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-W-9.pdf",
            payee: {
                name: "Ada Lovelace",
                address: "1401 N Shoreline Blvd",
                address2: "Suite 1",
                city: "Mountain View",
                country: "US",
                postalCode: "94043",
                state: "CA",
                tin: "*******00",
                tinType: "INDIVIDUAL",
                tinFingerprint: "tinFingerprint_samplehy2BWO6JJG",
                tinVerificationId: "tinVerificationId_sample41SD71AV8f",
                tinVerificationStatus: "MATCH",
            },
            formFields: {
                accountNumbers: ["1234567890", "1234567891"],
                taxClassification: "INDIVIDUAL",
                isSubjectToBackupWithholding: false,
                electronicSignature: {
                    signature: "Ada Lovelace",
                    printedName: "Ada Lovelace",
                    signedAt: "2024-01-01T00:00:00.000Z",
                    ipAddress: "127.0.0.1",
                },
            },
        });
    });

    test("retrieve", async () => {
        const response = await client.formW9.retrieve("documentId_sampleVppNzzIbQT");
        expect(response).toEqual({
            id: "documentId_sampleVppNzzIbQT",
            createdAt: "2024-01-01T00:00:00.000Z",
            url: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-W-9.pdf",
            payee: {
                name: "Ada Lovelace",
                address: "1401 N Shoreline Blvd",
                address2: "Suite 1",
                city: "Mountain View",
                country: "US",
                postalCode: "94043",
                state: "CA",
                tin: "*******00",
                tinType: "INDIVIDUAL",
                tinFingerprint: "tinFingerprint_samplehy2BWO6JJG",
                tinVerificationId: "tinVerificationId_sample41SD71AV8f",
                tinVerificationStatus: "MATCH",
            },
            formFields: {
                accountNumbers: ["1234567890", "1234567891"],
                taxClassification: "INDIVIDUAL",
                isSubjectToBackupWithholding: false,
                electronicSignature: {
                    signature: "Ada Lovelace",
                    printedName: "Ada Lovelace",
                    signedAt: "2024-01-01T00:00:00.000Z",
                    ipAddress: "127.0.0.1",
                },
            },
        });
    });
});
