/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Abound from "../../../index";

/**
 * @example
 *     {
 *         id: "documentId_samplegU0eR8oc8a",
 *         formFields: {
 *             isCorrected: false,
 *             isVoid: false,
 *             nonemployeeCompensation: 23423,
 *             hasDirectSalesOver5000: false,
 *             federalIncomeTaxWithheld: 0,
 *             accountNumber: "A0NEqtav7n0sBGoq88w0",
 *             stateTaxInfo: [{
 *                     filingState: Abound.types.Form1099FilingStateEnum.Ca,
 *                     stateIncome: 23423,
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
 *         payerUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-NEC-COPY-C.pdf",
 *         payeeUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-NEC-COPY-B.pdf"
 *     }
 *
 * @example
 *     {
 *         id: "documentId_samplegU0eR8oc8a",
 *         formFields: {
 *             isCorrected: false,
 *             isVoid: false,
 *             nonemployeeCompensation: 23423,
 *             hasDirectSalesOver5000: false,
 *             federalIncomeTaxWithheld: 0,
 *             accountNumber: "A0NEqtav7n0sBGoq88w0",
 *             stateTaxInfo: [{
 *                     filingState: Abound.types.Form1099FilingStateEnum.Ca,
 *                     stateIncome: 23423,
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
 *         payerUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-NEC-COPY-C.pdf",
 *         payeeUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-NEC-COPY-B.pdf"
 *     }
 *
 * @example
 *     {
 *         id: "documentId_sampletdeUbrEgYw",
 *         correctedFromId: "documentId_samplegU0eR8oc8a",
 *         formFields: {
 *             isCorrected: true,
 *             isVoid: false,
 *             nonemployeeCompensation: 10000,
 *             hasDirectSalesOver5000: false,
 *             federalIncomeTaxWithheld: 0,
 *             accountNumber: "A0NEqtav7n0sBGoq88w0",
 *             stateTaxInfo: [{
 *                     filingState: Abound.types.Form1099FilingStateEnum.Ca,
 *                     stateIncome: 10000,
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
 *         payerUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-NEC-CORRECTED-COPY-C.pdf",
 *         payeeUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-NEC-CORRECTED-COPY-B.pdf"
 *     }
 *
 * @example
 *     {
 *         id: "documentId_sampleSaOkfbLdUb",
 *         voidedFromId: "documentId_samplegU0eR8oc8a",
 *         formFields: {
 *             isCorrected: false,
 *             isVoid: true,
 *             nonemployeeCompensation: 23423,
 *             hasDirectSalesOver5000: false,
 *             federalIncomeTaxWithheld: 0,
 *             accountNumber: "A0NEqtav7n0sBGoq88w0",
 *             stateTaxInfo: [{
 *                     filingState: Abound.types.Form1099FilingStateEnum.Ca,
 *                     stateIncome: 23423,
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
 *         payerUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-NEC-VOID-COPY-C.pdf",
 *         payeeUrl: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/2023-FORM-1099-NEC-VOID-COPY-B.pdf"
 *     }
 */
export interface Form1099NecSchema extends Abound.types.Form1099BaseSchema {
    formFields: Abound.Form1099NecFormFieldsSchema;
}
