/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Abound from "../../src/api/index";
import { AboundClient } from "../../src/Client";

const client = new AboundClient({
    environment: process.env.TESTS_BASE_URL || "test",
    sampleKey: process.env.TESTS_AUTH || "test",
});

describe("FormW8Ben", () => {
    test("list", async () => {
        const response = await client.formW8Ben.list();
        expect(response).toEqual([
            {
                id: "documentId_samplexEM8PRV7sh",
                createdAt: "2024-01-01T00:00:00.000Z",
                expiresAt: "2028-01-01T00:00:00.000Z",
                url: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-W-8BEN.pdf",
                payee: {
                    name: "Ada Lovelace",
                    citizenshipCountry: "GB",
                    dateOfBirth: "1982-12-10",
                    permanentResidenceAddress: {
                        address: "43 Hilly Fields",
                        address2: "Suite 32",
                        city: "Lewisham",
                        state: "London",
                        postalCode: "SE13 7JN",
                        country: "GB",
                    },
                    mailingAddress: {
                        address: "256 Byron Street",
                        address2: "Suite 32",
                        city: "Palo Alto",
                        postalCode: "94306",
                        state: "CA",
                        country: "US",
                    },
                    tin: "*******00",
                    tinType: "INDIVIDUAL",
                    tinFingerprint: "tinFingerprint_samplehy2BWO6JJG",
                    tinVerificationId: "tinVerificationId_sample41SD71AV8f",
                    tinVerificationStatus: "MATCH",
                    foreignTin: "*******6C",
                    foreignTinFingerprint: "tinFingerprint_sampleanXo4V9nL9",
                },
                formFields: {
                    taxClassification: "INDIVIDUAL",
                    isForeignTinNotRequired: false,
                    taxTreatyBenefits: {
                        residentCountry: "GB",
                        claimedProvision: "7",
                        rateOfWithholding: 0,
                        incomeCode: "17",
                        incomeType: "SERVICES",
                        additionalConditions: "Independent personal services performed in the US",
                    },
                    referenceNumbers: ["123456789"],
                    isCertified: true,
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
        const response = await client.formW8Ben.create({
            payee: {
                name: "Ada Lovelace",
                citizenshipCountry: "GB",
                tin: "000000000",
                foreignTin: "DQ123456C",
                dateOfBirth: "1982-12-10",
                permanentResidenceAddress: {
                    address: "43 Hilly Fields",
                    address2: "Suite 32",
                    city: "Lewisham",
                    state: "London",
                    postalCode: "SE13 7JN",
                    country: "GB",
                },
                mailingAddress: {
                    address: "256 Byron Street",
                    address2: "Suite 32",
                    city: "Palo Alto",
                    postalCode: "94306",
                    state: "CA",
                    country: "US",
                },
            },
            formFields: {
                isForeignTinNotRequired: false,
                taxTreatyCode: Abound.types.TaxTreatyAboundCodeEnum.Gb17IndependentPersonalServices,
                referenceNumbers: ["123456789"],
                isCertified: true,
                electronicSignature: {
                    signature: "Ada Lovelace",
                    printedName: "Ada Lovelace",
                    signedAt: "2024-01-01T00:00:00.000Z",
                    ipAddress: "127.0.0.1",
                },
            },
        });
        expect(response).toEqual({
            id: "documentId_samplexEM8PRV7sh",
            createdAt: "2024-01-01T00:00:00.000Z",
            expiresAt: "2028-01-01T00:00:00.000Z",
            url: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-W-8BEN.pdf",
            payee: {
                name: "Ada Lovelace",
                citizenshipCountry: "GB",
                dateOfBirth: "1982-12-10",
                permanentResidenceAddress: {
                    address: "43 Hilly Fields",
                    address2: "Suite 32",
                    city: "Lewisham",
                    state: "London",
                    postalCode: "SE13 7JN",
                    country: "GB",
                },
                mailingAddress: {
                    address: "256 Byron Street",
                    address2: "Suite 32",
                    city: "Palo Alto",
                    postalCode: "94306",
                    state: "CA",
                    country: "US",
                },
                tin: "*******00",
                tinType: "INDIVIDUAL",
                tinFingerprint: "tinFingerprint_samplehy2BWO6JJG",
                tinVerificationId: "tinVerificationId_sample41SD71AV8f",
                tinVerificationStatus: "MATCH",
                foreignTin: "*******6C",
                foreignTinFingerprint: "tinFingerprint_sampleanXo4V9nL9",
            },
            formFields: {
                taxClassification: "INDIVIDUAL",
                isForeignTinNotRequired: false,
                taxTreatyBenefits: {
                    residentCountry: "GB",
                    claimedProvision: "7",
                    rateOfWithholding: 0,
                    incomeCode: "17",
                    incomeType: "SERVICES",
                    additionalConditions: "Independent personal services performed in the US",
                },
                referenceNumbers: ["123456789"],
                isCertified: true,
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
        const response = await client.formW8Ben.retrieve("documentId_samplexEM8PRV7sh");
        expect(response).toEqual({
            id: "documentId_samplexEM8PRV7sh",
            createdAt: "2024-01-01T00:00:00.000Z",
            expiresAt: "2028-01-01T00:00:00.000Z",
            url: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-W-8BEN.pdf",
            payee: {
                name: "Ada Lovelace",
                citizenshipCountry: "GB",
                dateOfBirth: "1982-12-10",
                permanentResidenceAddress: {
                    address: "43 Hilly Fields",
                    address2: "Suite 32",
                    city: "Lewisham",
                    state: "London",
                    postalCode: "SE13 7JN",
                    country: "GB",
                },
                mailingAddress: {
                    address: "256 Byron Street",
                    address2: "Suite 32",
                    city: "Palo Alto",
                    postalCode: "94306",
                    state: "CA",
                    country: "US",
                },
                tin: "*******00",
                tinType: "INDIVIDUAL",
                tinFingerprint: "tinFingerprint_samplehy2BWO6JJG",
                tinVerificationId: "tinVerificationId_sample41SD71AV8f",
                tinVerificationStatus: "MATCH",
                foreignTin: "*******6C",
                foreignTinFingerprint: "tinFingerprint_sampleanXo4V9nL9",
            },
            formFields: {
                taxClassification: "INDIVIDUAL",
                isForeignTinNotRequired: false,
                taxTreatyBenefits: {
                    residentCountry: "GB",
                    claimedProvision: "7",
                    rateOfWithholding: 0,
                    incomeCode: "17",
                    incomeType: "SERVICES",
                    additionalConditions: "Independent personal services performed in the US",
                },
                referenceNumbers: ["123456789"],
                isCertified: true,
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
