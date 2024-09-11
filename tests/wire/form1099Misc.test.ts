/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Abound from "../../src/api/index";
import { AboundClient } from "../../src/Client";

const client = new AboundClient({
    environment: process.env.TESTS_BASE_URL || "test",
    apiKey: process.env.TESTS_AUTH || "test",
});

describe("Form1099Misc", () => {
    test("list", async () => {
        const response = await client.form1099Misc.list();
        expect(response).toEqual([
            {
                id: "documentId_sampleGNPOKNmIgF",
                formFields: {
                    isCorrected: false,
                    isVoid: false,
                    cropInsuranceProceeds: 97109,
                    excessGoldenParachutePayments: 97109,
                    federalIncomeTaxWithheld: 0,
                    fishPurchasedForResale: 97109,
                    fishingBoatProceeds: 97109,
                    grossProceedsPaidToAnAttorney: 97109,
                    hasDirectSalesOver5000: false,
                    hasFatcaFilingRequirement: true,
                    medicalAndHealthCarePayments: 97109,
                    nonqualifiedDeferredCompensation: 97109,
                    substitutePaymentsInLieuOfDividendsOrInterest: 97109,
                    otherIncome: 97109,
                    rents: 97109,
                    royalties: 97109,
                    section409ADeferrals: 97109,
                    accountNumber: "A00AskD1ZTO4YB8oBHav",
                    stateTaxInfo: [{ filingState: "CA", stateIncome: 345543, stateTaxWithheld: 0 }],
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
                payerUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-MISC-COPY-C.pdf",
                payeeUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-MISC-COPY-B.pdf",
            },
        ]);
    });

    test("create", async () => {
        const response = await client.form1099Misc.create({
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
                    cropInsuranceProceeds: 97109,
                    excessGoldenParachutePayments: 97109,
                    federalIncomeTaxWithheld: 0,
                    fishPurchasedForResale: 97109,
                    fishingBoatProceeds: 97109,
                    grossProceedsPaidToAnAttorney: 97109,
                    hasDirectSalesOver5000: false,
                    hasFatcaFilingRequirement: true,
                    medicalAndHealthCarePayments: 97109,
                    nonqualifiedDeferredCompensation: 97109,
                    substitutePaymentsInLieuOfDividendsOrInterest: 97109,
                    otherIncome: 97109,
                    rents: 97109,
                    royalties: 97109,
                    section409ADeferrals: 97109,
                    accountNumber: "A00AskD1ZTO4YB8oBHav",
                    stateTaxInfo: [
                        {
                            filingState: Abound.types.Form1099FilingStateEnum.Ca,
                            stateIncome: 345543,
                            stateTaxWithheld: 0,
                        },
                    ],
                },
            },
        });
        expect(response).toEqual({
            id: "documentId_sampleGNPOKNmIgF",
            formFields: {
                isCorrected: false,
                isVoid: false,
                cropInsuranceProceeds: 97109,
                excessGoldenParachutePayments: 97109,
                federalIncomeTaxWithheld: 0,
                fishPurchasedForResale: 97109,
                fishingBoatProceeds: 97109,
                grossProceedsPaidToAnAttorney: 97109,
                hasDirectSalesOver5000: false,
                hasFatcaFilingRequirement: true,
                medicalAndHealthCarePayments: 97109,
                nonqualifiedDeferredCompensation: 97109,
                substitutePaymentsInLieuOfDividendsOrInterest: 97109,
                otherIncome: 97109,
                rents: 97109,
                royalties: 97109,
                section409ADeferrals: 97109,
                accountNumber: "A00AskD1ZTO4YB8oBHav",
                stateTaxInfo: [{ filingState: "CA", stateIncome: 345543, stateTaxWithheld: 0 }],
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
            payerUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-MISC-COPY-C.pdf",
            payeeUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-MISC-COPY-B.pdf",
        });
    });

    test("mail", async () => {
        const response = await client.form1099Misc.mail("documentId_sampleGNPOKNmIgF", {
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
        const response = await client.form1099Misc.file("documentId_sampleGNPOKNmIgF");
        expect(response).toEqual({
            id: "documentId_sampleGNPOKNmIgF",
            formFields: {
                isCorrected: false,
                isVoid: false,
                cropInsuranceProceeds: 97109,
                excessGoldenParachutePayments: 97109,
                federalIncomeTaxWithheld: 0,
                fishPurchasedForResale: 97109,
                fishingBoatProceeds: 97109,
                grossProceedsPaidToAnAttorney: 97109,
                hasDirectSalesOver5000: false,
                hasFatcaFilingRequirement: true,
                medicalAndHealthCarePayments: 97109,
                nonqualifiedDeferredCompensation: 97109,
                substitutePaymentsInLieuOfDividendsOrInterest: 97109,
                otherIncome: 97109,
                rents: 97109,
                royalties: 97109,
                section409ADeferrals: 97109,
                accountNumber: "A00AskD1ZTO4YB8oBHav",
                stateTaxInfo: [{ filingState: "CA", stateIncome: 345543, stateTaxWithheld: 0 }],
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
            payerUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-MISC-COPY-C.pdf",
            payeeUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-MISC-COPY-B.pdf",
        });
    });

    test("correct", async () => {
        const response = await client.form1099Misc.correct("documentId_sampleGNPOKNmIgF", {
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
                    cropInsuranceProceeds: 97109,
                    excessGoldenParachutePayments: 97109,
                    federalIncomeTaxWithheld: 0,
                    fishPurchasedForResale: 97109,
                    fishingBoatProceeds: 97109,
                    grossProceedsPaidToAnAttorney: 97109,
                    hasDirectSalesOver5000: false,
                    hasFatcaFilingRequirement: true,
                    medicalAndHealthCarePayments: 97109,
                    nonqualifiedDeferredCompensation: 97109,
                    substitutePaymentsInLieuOfDividendsOrInterest: 97109,
                    otherIncome: 97109,
                    rents: 10000,
                    royalties: 97109,
                    section409ADeferrals: 97109,
                    accountNumber: "A00AskD1ZTO4YB8oBHav",
                    stateTaxInfo: [
                        {
                            filingState: Abound.types.Form1099FilingStateEnum.Ca,
                            stateIncome: 258434,
                        },
                    ],
                },
            },
        });
        expect(response).toEqual({
            id: "documentId_sampleaTA4jltVVx",
            correctedFromId: "documentId_sampleGNPOKNmIgF",
            formFields: {
                isCorrected: true,
                isVoid: false,
                cropInsuranceProceeds: 97109,
                excessGoldenParachutePayments: 97109,
                federalIncomeTaxWithheld: 0,
                fishPurchasedForResale: 97109,
                fishingBoatProceeds: 97109,
                grossProceedsPaidToAnAttorney: 97109,
                hasDirectSalesOver5000: false,
                hasFatcaFilingRequirement: true,
                medicalAndHealthCarePayments: 97109,
                nonqualifiedDeferredCompensation: 97109,
                substitutePaymentsInLieuOfDividendsOrInterest: 97109,
                otherIncome: 97109,
                rents: 10000,
                royalties: 97109,
                section409ADeferrals: 97109,
                accountNumber: "A00AskD1ZTO4YB8oBHav",
                stateTaxInfo: [{ filingState: "CA", stateIncome: 258434, stateTaxWithheld: 0 }],
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
                "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-MISC-CORRECTED-COPY-C.pdf",
            payeeUrl:
                "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-MISC-CORRECTED-COPY-B.pdf",
        });
    });

    test("void", async () => {
        const response = await client.form1099Misc.void("documentId_sampleGNPOKNmIgF");
        expect(response).toEqual({
            id: "documentId_sampleStGnVcbd57",
            voidedFromId: "documentId_sampleGNPOKNmIgF",
            formFields: {
                isCorrected: false,
                isVoid: true,
                cropInsuranceProceeds: 97109,
                excessGoldenParachutePayments: 97109,
                federalIncomeTaxWithheld: 0,
                fishPurchasedForResale: 97109,
                fishingBoatProceeds: 97109,
                grossProceedsPaidToAnAttorney: 97109,
                hasDirectSalesOver5000: false,
                hasFatcaFilingRequirement: true,
                medicalAndHealthCarePayments: 97109,
                nonqualifiedDeferredCompensation: 97109,
                substitutePaymentsInLieuOfDividendsOrInterest: 97109,
                otherIncome: 97109,
                rents: 97109,
                royalties: 97109,
                section409ADeferrals: 97109,
                accountNumber: "A00AskD1ZTO4YB8oBHav",
                stateTaxInfo: [{ filingState: "CA", stateIncome: 345543, stateTaxWithheld: 0 }],
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
            payerUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-MISC-VOID-COPY-C.pdf",
            payeeUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-MISC-VOID-COPY-B.pdf",
        });
    });

    test("retrieve", async () => {
        const response = await client.form1099Misc.retrieve("documentId_sampleGNPOKNmIgF");
        expect(response).toEqual({
            id: "documentId_sampleGNPOKNmIgF",
            formFields: {
                isCorrected: false,
                isVoid: false,
                cropInsuranceProceeds: 97109,
                excessGoldenParachutePayments: 97109,
                federalIncomeTaxWithheld: 0,
                fishPurchasedForResale: 97109,
                fishingBoatProceeds: 97109,
                grossProceedsPaidToAnAttorney: 97109,
                hasDirectSalesOver5000: false,
                hasFatcaFilingRequirement: true,
                medicalAndHealthCarePayments: 97109,
                nonqualifiedDeferredCompensation: 97109,
                substitutePaymentsInLieuOfDividendsOrInterest: 97109,
                otherIncome: 97109,
                rents: 97109,
                royalties: 97109,
                section409ADeferrals: 97109,
                accountNumber: "A00AskD1ZTO4YB8oBHav",
                stateTaxInfo: [{ filingState: "CA", stateIncome: 345543, stateTaxWithheld: 0 }],
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
            payerUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-MISC-COPY-C.pdf",
            payeeUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-MISC-COPY-B.pdf",
        });
    });

    test("delete", async () => {
        const response = await client.form1099Misc.delete("documentId_sampleGNPOKNmIgF");
        expect(response).toEqual({});
    });
});