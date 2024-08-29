/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Abound from "../../../index";

/**
 * @example
 *     {
 *         id: "documentId_sampleGNPOKNmIgF",
 *         formFields: {
 *             isCorrected: false,
 *             isVoid: false,
 *             cropInsuranceProceeds: 97109,
 *             excessGoldenParachutePayments: 97109,
 *             federalIncomeTaxWithheld: 0,
 *             fishPurchasedForResale: 97109,
 *             fishingBoatProceeds: 97109,
 *             grossProceedsPaidToAnAttorney: 97109,
 *             hasDirectSalesOver5000: false,
 *             hasFatcaFilingRequirement: true,
 *             medicalAndHealthCarePayments: 97109,
 *             nonqualifiedDeferredCompensation: 97109,
 *             substitutePaymentsInLieuOfDividendsOrInterest: 97109,
 *             otherIncome: 97109,
 *             rents: 97109,
 *             royalties: 97109,
 *             section409ADeferrals: 97109,
 *             accountNumber: "A00AskD1ZTO4YB8oBHav",
 *             stateTaxInfo: [{
 *                     filingState: Abound.types.Form1099FilingStateEnum.Ca,
 *                     stateIncome: 345543,
 *                     stateTaxWithheld: 0
 *                 }]
 *         },
 *         filingYear: 2023,
 *         createdAt: "2024-01-01T00:00:00.000Z",
 *         status: Abound.types.Form1099StatusEnum.Created,
 *         payer: {
 *             name: "Hooli",
 *             address: "256 Byron Street",
 *             address2: "Suite 32",
 *             city: "Palo Alto",
 *             state: "CA",
 *             postalCode: "94306",
 *             country: "US",
 *             phoneNumber: "6501014096",
 *             tin: "*******11",
 *             tinType: Abound.types.TinTypeEnum.Business,
 *             tinFingerprint: "tinFingerprint_sample847jI1LwxF",
 *             tinVerificationId: "tinVerificationId_sample1b0E6efa89",
 *             tinVerificationStatus: Abound.types.TinVerificationStatusEnum.Match
 *         },
 *         payee: {
 *             name: "Ada Lovelace",
 *             address: "1401 N Shoreline Blvd",
 *             address2: "Suite 1",
 *             city: "Mountain View",
 *             state: "CA",
 *             postalCode: "94043",
 *             country: "US",
 *             tin: "*******00",
 *             tinType: Abound.types.TinTypeEnum.Individual,
 *             tinFingerprint: "tinFingerprint_samplehy2BWO6JJG",
 *             tinVerificationId: "tinVerificationId_sample41SD71AV8f",
 *             tinVerificationStatus: Abound.types.TinVerificationStatusEnum.Match
 *         },
 *         payerUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-MISC-COPY-C.pdf",
 *         payeeUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-MISC-COPY-B.pdf"
 *     }
 *
 * @example
 *     {
 *         id: "documentId_sampleGNPOKNmIgF",
 *         formFields: {
 *             isCorrected: false,
 *             isVoid: false,
 *             cropInsuranceProceeds: 97109,
 *             excessGoldenParachutePayments: 97109,
 *             federalIncomeTaxWithheld: 0,
 *             fishPurchasedForResale: 97109,
 *             fishingBoatProceeds: 97109,
 *             grossProceedsPaidToAnAttorney: 97109,
 *             hasDirectSalesOver5000: false,
 *             hasFatcaFilingRequirement: true,
 *             medicalAndHealthCarePayments: 97109,
 *             nonqualifiedDeferredCompensation: 97109,
 *             substitutePaymentsInLieuOfDividendsOrInterest: 97109,
 *             otherIncome: 97109,
 *             rents: 97109,
 *             royalties: 97109,
 *             section409ADeferrals: 97109,
 *             accountNumber: "A00AskD1ZTO4YB8oBHav",
 *             stateTaxInfo: [{
 *                     filingState: Abound.types.Form1099FilingStateEnum.Ca,
 *                     stateIncome: 345543,
 *                     stateTaxWithheld: 0
 *                 }]
 *         },
 *         filingYear: 2023,
 *         createdAt: "2024-01-01T00:00:00.000Z",
 *         status: Abound.types.Form1099StatusEnum.Filed,
 *         payer: {
 *             name: "Hooli",
 *             address: "256 Byron Street",
 *             address2: "Suite 32",
 *             city: "Palo Alto",
 *             state: "CA",
 *             postalCode: "94306",
 *             country: "US",
 *             phoneNumber: "6501014096",
 *             tin: "*******11",
 *             tinType: Abound.types.TinTypeEnum.Business,
 *             tinFingerprint: "tinFingerprint_sample847jI1LwxF",
 *             tinVerificationId: "tinVerificationId_sample1b0E6efa89",
 *             tinVerificationStatus: Abound.types.TinVerificationStatusEnum.Match
 *         },
 *         payee: {
 *             name: "Ada Lovelace",
 *             address: "1401 N Shoreline Blvd",
 *             address2: "Suite 1",
 *             city: "Mountain View",
 *             state: "CA",
 *             postalCode: "94043",
 *             country: "US",
 *             tin: "*******00",
 *             tinType: Abound.types.TinTypeEnum.Individual,
 *             tinFingerprint: "tinFingerprint_samplehy2BWO6JJG",
 *             tinVerificationId: "tinVerificationId_sample41SD71AV8f",
 *             tinVerificationStatus: Abound.types.TinVerificationStatusEnum.Match
 *         },
 *         payerUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-MISC-COPY-C.pdf",
 *         payeeUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-MISC-COPY-B.pdf"
 *     }
 *
 * @example
 *     {
 *         id: "documentId_sampleaTA4jltVVx",
 *         correctedFromId: "documentId_sampleGNPOKNmIgF",
 *         formFields: {
 *             isCorrected: true,
 *             isVoid: false,
 *             cropInsuranceProceeds: 97109,
 *             excessGoldenParachutePayments: 97109,
 *             federalIncomeTaxWithheld: 0,
 *             fishPurchasedForResale: 97109,
 *             fishingBoatProceeds: 97109,
 *             grossProceedsPaidToAnAttorney: 97109,
 *             hasDirectSalesOver5000: false,
 *             hasFatcaFilingRequirement: true,
 *             medicalAndHealthCarePayments: 97109,
 *             nonqualifiedDeferredCompensation: 97109,
 *             substitutePaymentsInLieuOfDividendsOrInterest: 97109,
 *             otherIncome: 97109,
 *             rents: 10000,
 *             royalties: 97109,
 *             section409ADeferrals: 97109,
 *             accountNumber: "A00AskD1ZTO4YB8oBHav",
 *             stateTaxInfo: [{
 *                     filingState: Abound.types.Form1099FilingStateEnum.Ca,
 *                     stateIncome: 258434,
 *                     stateTaxWithheld: 0
 *                 }]
 *         },
 *         filingYear: 2023,
 *         createdAt: "2024-01-01T00:00:00.000Z",
 *         status: Abound.types.Form1099StatusEnum.Filed,
 *         payer: {
 *             name: "Hooli",
 *             address: "256 Byron Street",
 *             address2: "Suite 32",
 *             city: "Palo Alto",
 *             state: "CA",
 *             postalCode: "94306",
 *             country: "US",
 *             phoneNumber: "6501014096",
 *             tin: "*******11",
 *             tinType: Abound.types.TinTypeEnum.Business,
 *             tinFingerprint: "tinFingerprint_sample847jI1LwxF",
 *             tinVerificationId: "tinVerificationId_sample1b0E6efa89",
 *             tinVerificationStatus: Abound.types.TinVerificationStatusEnum.Match
 *         },
 *         payee: {
 *             name: "Ada Lovelace",
 *             address: "1401 N Shoreline Blvd",
 *             address2: "Suite 1",
 *             city: "Mountain View",
 *             state: "CA",
 *             postalCode: "94043",
 *             country: "US",
 *             tin: "*******00",
 *             tinType: Abound.types.TinTypeEnum.Individual,
 *             tinFingerprint: "tinFingerprint_samplehy2BWO6JJG",
 *             tinVerificationId: "tinVerificationId_sample41SD71AV8f",
 *             tinVerificationStatus: Abound.types.TinVerificationStatusEnum.Match
 *         },
 *         payerUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-MISC-CORRECTED-COPY-C.pdf",
 *         payeeUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-MISC-CORRECTED-COPY-B.pdf"
 *     }
 *
 * @example
 *     {
 *         id: "documentId_sampleStGnVcbd57",
 *         voidedFromId: "documentId_sampleGNPOKNmIgF",
 *         formFields: {
 *             isCorrected: false,
 *             isVoid: true,
 *             cropInsuranceProceeds: 97109,
 *             excessGoldenParachutePayments: 97109,
 *             federalIncomeTaxWithheld: 0,
 *             fishPurchasedForResale: 97109,
 *             fishingBoatProceeds: 97109,
 *             grossProceedsPaidToAnAttorney: 97109,
 *             hasDirectSalesOver5000: false,
 *             hasFatcaFilingRequirement: true,
 *             medicalAndHealthCarePayments: 97109,
 *             nonqualifiedDeferredCompensation: 97109,
 *             substitutePaymentsInLieuOfDividendsOrInterest: 97109,
 *             otherIncome: 97109,
 *             rents: 97109,
 *             royalties: 97109,
 *             section409ADeferrals: 97109,
 *             accountNumber: "A00AskD1ZTO4YB8oBHav",
 *             stateTaxInfo: [{
 *                     filingState: Abound.types.Form1099FilingStateEnum.Ca,
 *                     stateIncome: 345543,
 *                     stateTaxWithheld: 0
 *                 }]
 *         },
 *         filingYear: 2023,
 *         createdAt: "2024-01-01T00:00:00.000Z",
 *         status: Abound.types.Form1099StatusEnum.Filed,
 *         payer: {
 *             name: "Hooli",
 *             address: "256 Byron Street",
 *             address2: "Suite 32",
 *             city: "Palo Alto",
 *             state: "CA",
 *             postalCode: "94306",
 *             country: "US",
 *             phoneNumber: "6501014096",
 *             tin: "*******11",
 *             tinType: Abound.types.TinTypeEnum.Business,
 *             tinFingerprint: "tinFingerprint_sample847jI1LwxF",
 *             tinVerificationId: "tinVerificationId_sample1b0E6efa89",
 *             tinVerificationStatus: Abound.types.TinVerificationStatusEnum.Match
 *         },
 *         payee: {
 *             name: "Ada Lovelace",
 *             address: "1401 N Shoreline Blvd",
 *             address2: "Suite 1",
 *             city: "Mountain View",
 *             state: "CA",
 *             postalCode: "94043",
 *             country: "US",
 *             tin: "*******00",
 *             tinType: Abound.types.TinTypeEnum.Individual,
 *             tinFingerprint: "tinFingerprint_samplehy2BWO6JJG",
 *             tinVerificationId: "tinVerificationId_sample41SD71AV8f",
 *             tinVerificationStatus: Abound.types.TinVerificationStatusEnum.Match
 *         },
 *         payerUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-MISC-VOID-COPY-C.pdf",
 *         payeeUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-MISC-VOID-COPY-B.pdf"
 *     }
 */
export interface Form1099MiscSchema extends Abound.types.Form1099BaseSchema {
    formFields: Abound.Form1099MiscFormFieldsSchema;
}
