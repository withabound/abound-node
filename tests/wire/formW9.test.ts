/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Abound from "../../src/api/index";
import { AboundClient } from "../../src/Client";

const client = new AboundClient({
    environment: process.env.TESTS_BASE_URL || "test",
    sampleKey: process.env.appId_sampleqNhVcdYQYU.appSecret_sampleMz2Zbj3Hq || "test",
});

describe("FormW9", () => {
    test("list", async () => {
        const response = await client.formW9.list();
        expect(response).toEqual([
            {
                id: "documentId_sampleVppNzzIbQT",
                createdAt: new Date("2024-01-01T00:00:00.000Z"),
                url: "https://documents.withabound.com/documentId_sampleVppNzzIbQT",
                payee: {
                    name: "Ada Lovelace",
                    address: "256 Byron Street",
                    address2: "Suite 32",
                    city: "Palo Alto",
                    country: "US",
                    postalCode: "94306",
                    state: "CA",
                    tin: "*******00",
                    tinFingerprint: "tinFingerprint_samplehy2BWO6JJG",
                    tinVerificationId: "tinVerificationId_sample41SD71AV8f",
                    tinVerificationStatus: "MATCH",
                },
                formFields: {
                    taxClassification: "INDIVIDUAL",
                    isSubjectToBackupWithholding: false,
                    electronicSignature: {
                        signature: "Ada Lovelace",
                        printedName: "Ada Lovelace",
                        signedAt: new Date("2024-01-01T00:00:00.000Z"),
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
                    address: "256 Byron Street",
                    address2: "Suite 32",
                    city: "Palo Alto",
                    country: "US",
                    postalCode: "94306",
                    state: "CA",
                    tin: "000000000",
                    tinType: Abound.types.TinTypeEnum.Individual,
                },
                formFields: {
                    taxClassification: Abound.W9TaxClassificationSchema.Individual,
                    isSubjectToBackupWithholding: false,
                    electronicSignature: {
                        signature: "Ada Lovelace",
                        printedName: "Ada Lovelace",
                        signedAt: new Date("2024-01-01T00:00:00.000Z"),
                        ipAddress: "127.0.0.1",
                    },
                },
            },
        });
        expect(response).toEqual({
            id: "documentId_sampleVppNzzIbQT",
            createdAt: new Date("2024-01-01T00:00:00.000Z"),
            url: "https://documents.withabound.com/documentId_sampleVppNzzIbQT",
            payee: {
                name: "Ada Lovelace",
                address: "256 Byron Street",
                address2: "Suite 32",
                city: "Palo Alto",
                country: "US",
                postalCode: "94306",
                state: "CA",
                tin: "*******00",
                tinFingerprint: "tinFingerprint_samplehy2BWO6JJG",
                tinVerificationId: "tinVerificationId_sample41SD71AV8f",
                tinVerificationStatus: "MATCH",
            },
            formFields: {
                taxClassification: "INDIVIDUAL",
                isSubjectToBackupWithholding: false,
                electronicSignature: {
                    signature: "Ada Lovelace",
                    printedName: "Ada Lovelace",
                    signedAt: new Date("2024-01-01T00:00:00.000Z"),
                    ipAddress: "127.0.0.1",
                },
            },
        });
    });

    test("retrieve", async () => {
        const response = await client.formW9.retrieve("documentId_sampleVppNzzIbQT");
        expect(response).toEqual({
            id: "documentId_sampleVppNzzIbQT",
            createdAt: new Date("2024-01-01T00:00:00.000Z"),
            url: "https://documents.withabound.com/documentId_sampleVppNzzIbQT",
            payee: {
                name: "Ada Lovelace",
                address: "256 Byron Street",
                address2: "Suite 32",
                city: "Palo Alto",
                country: "US",
                postalCode: "94306",
                state: "CA",
                tin: "*******00",
                tinFingerprint: "tinFingerprint_samplehy2BWO6JJG",
                tinVerificationId: "tinVerificationId_sample41SD71AV8f",
                tinVerificationStatus: "MATCH",
            },
            formFields: {
                taxClassification: "INDIVIDUAL",
                isSubjectToBackupWithholding: false,
                electronicSignature: {
                    signature: "Ada Lovelace",
                    printedName: "Ada Lovelace",
                    signedAt: new Date("2024-01-01T00:00:00.000Z"),
                    ipAddress: "127.0.0.1",
                },
            },
        });
    });
});
