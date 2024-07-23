/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as AboundApi from "../../../../index";

/**
 * @example
 *     {
 *         "Idempotency-Key": "string",
 *         payee: {
 *             name: "string",
 *             name2: "string",
 *             tin: "string",
 *             address: "string",
 *             address2: "string",
 *             city: "string",
 *             state: "string",
 *             postalCode: "string",
 *             country: "string"
 *         },
 *         payer: {
 *             name: "string",
 *             name2: "string",
 *             tin: "string",
 *             phoneNumber: "string",
 *             address: "string",
 *             address2: "string",
 *             city: "string",
 *             state: "string",
 *             postalCode: "string",
 *             country: "string"
 *         },
 *         formFields: {
 *             taxClassification: AboundApi.W9FormFieldsSchemaFormFieldsTaxClassification.Individual,
 *             otherTaxClassification: "string",
 *             hasIndirectForeignOwnership: true,
 *             exemptPayeeCode: AboundApi.W9FormFieldsSchemaFormFieldsExemptPayeeCode.One,
 *             exemptFatcaCode: AboundApi.W9FormFieldsSchemaFormFieldsExemptFatcaCode.A,
 *             accountNumbers: ["string"],
 *             isSubjectToBackupWithholding: true,
 *             certifiedAt: new Date("2024-01-15T09:30:00.000Z"),
 *             electronicSignature: {
 *                 signature: "string",
 *                 printedName: "string",
 *                 signedAt: new Date("2024-01-15T09:30:00.000Z"),
 *                 ipAddress: "string"
 *             }
 *         },
 *         userId: "string"
 *     }
 */
export interface W9RequestSchema
    extends AboundApi.PayeeSchema,
        AboundApi.PayerSchema,
        AboundApi.W9FormFieldsSchema,
        AboundApi.ReferencesSchema {
    /**
     * The unique key used to identify a request that has already been processed.
     */
    "Idempotency-Key"?: string;
}
