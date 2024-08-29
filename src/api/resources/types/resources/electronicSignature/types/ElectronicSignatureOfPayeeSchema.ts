/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The electronic signature of the payee.
 */
export interface ElectronicSignatureOfPayeeSchema {
    /** The signature of the payee. */
    signature: string;
    /** The printed name of the payee. */
    printedName: string;
    /** The date and time in `ISO 8601` format of the signature. */
    signedAt: string;
    /** The IP address of the payee when signing this document. */
    ipAddress: string;
}
