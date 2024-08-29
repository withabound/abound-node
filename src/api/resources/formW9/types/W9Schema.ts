/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Abound from "../../../index";

/**
 * @example
 *     {
 *         id: "documentId_sampleVppNzzIbQT",
 *         createdAt: "2024-01-01T00:00:00.000Z",
 *         url: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-W-9.pdf",
 *         payee: {
 *             name: "Ada Lovelace",
 *             address: "1401 N Shoreline Blvd",
 *             address2: "Suite 1",
 *             city: "Mountain View",
 *             country: "US",
 *             postalCode: "94043",
 *             state: "CA",
 *             tin: "*******00",
 *             tinType: Abound.types.TinTypeEnum.Individual,
 *             tinFingerprint: "tinFingerprint_samplehy2BWO6JJG",
 *             tinVerificationId: "tinVerificationId_sample41SD71AV8f",
 *             tinVerificationStatus: Abound.types.TinVerificationStatusEnum.Match
 *         },
 *         formFields: {
 *             accountNumbers: ["1234567890", "1234567891"],
 *             taxClassification: Abound.W9TaxClassificationSchema.Individual,
 *             isSubjectToBackupWithholding: false,
 *             electronicSignature: {
 *                 signature: "Ada Lovelace",
 *                 printedName: "Ada Lovelace",
 *                 signedAt: "2024-01-01T00:00:00.000Z",
 *                 ipAddress: "127.0.0.1"
 *             }
 *         }
 *     }
 */
export interface W9Schema {
    /** The unique identifier for the W-9 document. */
    id: string;
    /** The date and time in `ISO 8601` format when the W-9 document was created. */
    createdAt: string;
    /** The URL to the W-9 document. */
    url: string;
    payee: Abound.types.PayeeSchema;
    payer?: Abound.types.PayerSchema;
    formFields: Abound.W9FormFieldsSchema;
    userId?: Abound.types.UserId;
}
