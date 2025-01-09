/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { AboundClient } from "../../src/Client";

const client = new AboundClient({
    environment: process.env.TESTS_BASE_URL || "test",
    apiKey: process.env.TESTS_AUTH || "test",
});

describe("Form1099K", () => {
    test("list", async () => {
        const response = await client.form1099K.list();
        expect(response).toEqual([
            {
                id: "documentId_sampletTtqNfulW8",
                formFields: {
                    isCorrected: false,
                    isVoid: false,
                    accountNumber: "A0MCFOfvWWL7AVtwrhiU",
                    aggregateGrossAmount: 27987876,
                    aggregateGrossAmountCardNotPresent: 2332323,
                    federalIncomeTaxWithheld: 0,
                    merchantCategoryCode: "4582",
                    numberOfPaymentTransactions: 767,
                    pseName: "Payment Entity",
                    payerClassification: "PSE",
                    transactionsReportedClassification: "PAYMENT_CARD",
                    psePhoneNumber: "+15555555555",
                    grossAmountsByMonth: {
                        april: 2332323,
                        august: 2332323,
                        december: 2332323,
                        february: 2332323,
                        january: 2332323,
                        july: 2332323,
                        june: 2332323,
                        march: 2332323,
                        may: 2332323,
                        november: 2332323,
                        october: 2332323,
                        september: 2332323,
                    },
                    stateTaxInfo: [{ filingState: "CA", stateTaxWithheld: 0 }],
                },
                filingYear: 2024,
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
                    phoneNumber: "+16501014096",
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
                payerUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-1099-K-COPY-C.pdf",
                payeeUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-1099-K-COPY-B.pdf",
            },
        ]);
    });

    test("create", async () => {
        const response = await client.form1099K.create({
            body: {
                filingYear: 2024,
                payer: {
                    name: "Hooli",
                    tin: "111111111",
                    address: "256 Byron Street",
                    address2: "Suite 32",
                    city: "Palo Alto",
                    state: "CA",
                    postalCode: "94306",
                    country: "US",
                    phoneNumber: "+16501014096",
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
                    accountNumber: "A0MCFOfvWWL7AVtwrhiU",
                    aggregateGrossAmount: 27987876,
                    aggregateGrossAmountCardNotPresent: 2332323,
                    federalIncomeTaxWithheld: 0,
                    merchantCategoryCode: "4582",
                    numberOfPaymentTransactions: 767,
                    pseName: "Payment Entity",
                    payerClassification: "PSE",
                    transactionsReportedClassification: "PAYMENT_CARD",
                    psePhoneNumber: "+15555555555",
                    grossAmountsByMonth: {
                        april: 2332323,
                        august: 2332323,
                        december: 2332323,
                        february: 2332323,
                        january: 2332323,
                        july: 2332323,
                        june: 2332323,
                        march: 2332323,
                        may: 2332323,
                        november: 2332323,
                        october: 2332323,
                        september: 2332323,
                    },
                    stateTaxInfo: [
                        {
                            filingState: "CA",
                            stateTaxWithheld: 0,
                        },
                    ],
                },
            },
        });
        expect(response).toEqual({
            id: "documentId_sampletTtqNfulW8",
            formFields: {
                isCorrected: false,
                isVoid: false,
                accountNumber: "A0MCFOfvWWL7AVtwrhiU",
                aggregateGrossAmount: 27987876,
                aggregateGrossAmountCardNotPresent: 2332323,
                federalIncomeTaxWithheld: 0,
                merchantCategoryCode: "4582",
                numberOfPaymentTransactions: 767,
                pseName: "Payment Entity",
                payerClassification: "PSE",
                transactionsReportedClassification: "PAYMENT_CARD",
                psePhoneNumber: "+15555555555",
                grossAmountsByMonth: {
                    april: 2332323,
                    august: 2332323,
                    december: 2332323,
                    february: 2332323,
                    january: 2332323,
                    july: 2332323,
                    june: 2332323,
                    march: 2332323,
                    may: 2332323,
                    november: 2332323,
                    october: 2332323,
                    september: 2332323,
                },
                stateTaxInfo: [{ filingState: "CA", stateTaxWithheld: 0 }],
            },
            filingYear: 2024,
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
                phoneNumber: "+16501014096",
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
            payerUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-1099-K-COPY-C.pdf",
            payeeUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-1099-K-COPY-B.pdf",
        });
    });

    test("mail", async () => {
        const response = await client.form1099K.mail("documentId_sampletTtqNfulW8", {
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
        const response = await client.form1099K.file("documentId_sampletTtqNfulW8");
        expect(response).toEqual({
            id: "documentId_sampletTtqNfulW8",
            formFields: {
                isCorrected: false,
                isVoid: false,
                accountNumber: "A0MCFOfvWWL7AVtwrhiU",
                aggregateGrossAmount: 27987876,
                aggregateGrossAmountCardNotPresent: 2332323,
                federalIncomeTaxWithheld: 0,
                merchantCategoryCode: "4582",
                numberOfPaymentTransactions: 767,
                pseName: "Payment Entity",
                payerClassification: "PSE",
                transactionsReportedClassification: "PAYMENT_CARD",
                psePhoneNumber: "+15555555555",
                grossAmountsByMonth: {
                    april: 2332323,
                    august: 2332323,
                    december: 2332323,
                    february: 2332323,
                    january: 2332323,
                    july: 2332323,
                    june: 2332323,
                    march: 2332323,
                    may: 2332323,
                    november: 2332323,
                    october: 2332323,
                    september: 2332323,
                },
                stateTaxInfo: [{ filingState: "CA", stateTaxWithheld: 0 }],
            },
            filingYear: 2024,
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
                phoneNumber: "+16501014096",
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
            payerUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-1099-K-COPY-C.pdf",
            payeeUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-1099-K-COPY-B.pdf",
        });
    });

    test("correct", async () => {
        const response = await client.form1099K.correct("documentId_sampletTtqNfulW8", {
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
                    accountNumber: "A0MCFOfvWWL7AVtwrhiU",
                    aggregateGrossAmount: 25655553,
                    aggregateGrossAmountCardNotPresent: 25655553,
                    federalIncomeTaxWithheld: 0,
                    merchantCategoryCode: "4582",
                    numberOfPaymentTransactions: 767,
                    pseName: "Payment Entity",
                    payerClassification: "PSE",
                    transactionsReportedClassification: "PAYMENT_CARD",
                    psePhoneNumber: "+15555555555",
                    grossAmountsByMonth: {
                        april: 2332323,
                        august: 2332323,
                        december: 2332323,
                        february: 2332323,
                        january: 0,
                        july: 2332323,
                        june: 2332323,
                        march: 2332323,
                        may: 2332323,
                        november: 2332323,
                        october: 2332323,
                        september: 2332323,
                    },
                    stateTaxInfo: [
                        {
                            filingState: "CA",
                        },
                    ],
                },
            },
        });
        expect(response).toEqual({
            id: "documentId_samplenOHhUUVnh6",
            correctedFromId: "documentId_sampletTtqNfulW8",
            formFields: {
                isCorrected: true,
                isVoid: false,
                accountNumber: "A0MCFOfvWWL7AVtwrhiU",
                aggregateGrossAmount: 25655553,
                aggregateGrossAmountCardNotPresent: 25655553,
                federalIncomeTaxWithheld: 0,
                merchantCategoryCode: "4582",
                numberOfPaymentTransactions: 767,
                pseName: "Payment Entity",
                payerClassification: "PSE",
                transactionsReportedClassification: "PAYMENT_CARD",
                psePhoneNumber: "+15555555555",
                grossAmountsByMonth: {
                    april: 2332323,
                    august: 2332323,
                    december: 2332323,
                    february: 2332323,
                    january: 0,
                    july: 2332323,
                    june: 2332323,
                    march: 2332323,
                    may: 2332323,
                    november: 2332323,
                    october: 2332323,
                    september: 2332323,
                },
                stateTaxInfo: [{ filingState: "CA", stateTaxWithheld: 0 }],
            },
            filingYear: 2024,
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
                phoneNumber: "+16501014096",
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
            payerUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-1099-K-CORRECTED-COPY-C.pdf",
            payeeUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-1099-K-CORRECTED-COPY-B.pdf",
        });
    });

    test("void", async () => {
        const response = await client.form1099K.void("documentId_sampletTtqNfulW8");
        expect(response).toEqual({
            id: "documentId_sampleb6HQLsVuM9",
            voidedFromId: "documentId_sampletTtqNfulW8",
            formFields: {
                isCorrected: false,
                isVoid: true,
                accountNumber: "A0MCFOfvWWL7AVtwrhiU",
                aggregateGrossAmount: 27987876,
                aggregateGrossAmountCardNotPresent: 2332323,
                federalIncomeTaxWithheld: 0,
                merchantCategoryCode: "4582",
                numberOfPaymentTransactions: 767,
                pseName: "Payment Entity",
                payerClassification: "PSE",
                transactionsReportedClassification: "PAYMENT_CARD",
                psePhoneNumber: "+15555555555",
                grossAmountsByMonth: {
                    april: 2332323,
                    august: 2332323,
                    december: 2332323,
                    february: 2332323,
                    january: 2332323,
                    july: 2332323,
                    june: 2332323,
                    march: 2332323,
                    may: 2332323,
                    november: 2332323,
                    october: 2332323,
                    september: 2332323,
                },
                stateTaxInfo: [{ filingState: "CA", stateTaxWithheld: 0 }],
            },
            filingYear: 2024,
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
                phoneNumber: "+16501014096",
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
            payerUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-1099-K-VOID-COPY-C.pdf",
            payeeUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-1099-K-VOID-COPY-B.pdf",
        });
    });

    test("retrieve", async () => {
        const response = await client.form1099K.retrieve("documentId_sampletTtqNfulW8");
        expect(response).toEqual({
            id: "documentId_sampletTtqNfulW8",
            formFields: {
                isCorrected: false,
                isVoid: false,
                accountNumber: "A0MCFOfvWWL7AVtwrhiU",
                aggregateGrossAmount: 27987876,
                aggregateGrossAmountCardNotPresent: 2332323,
                federalIncomeTaxWithheld: 0,
                merchantCategoryCode: "4582",
                numberOfPaymentTransactions: 767,
                pseName: "Payment Entity",
                payerClassification: "PSE",
                transactionsReportedClassification: "PAYMENT_CARD",
                psePhoneNumber: "+15555555555",
                grossAmountsByMonth: {
                    april: 2332323,
                    august: 2332323,
                    december: 2332323,
                    february: 2332323,
                    january: 2332323,
                    july: 2332323,
                    june: 2332323,
                    march: 2332323,
                    may: 2332323,
                    november: 2332323,
                    october: 2332323,
                    september: 2332323,
                },
                stateTaxInfo: [{ filingState: "CA", stateTaxWithheld: 0 }],
            },
            filingYear: 2024,
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
                phoneNumber: "+16501014096",
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
            payerUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-1099-K-COPY-C.pdf",
            payeeUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-1099-K-COPY-B.pdf",
        });
    });

    test("delete", async () => {
        const response = await client.form1099K.delete("documentId_sampletTtqNfulW8");
        expect(response).toEqual({});
    });
});
