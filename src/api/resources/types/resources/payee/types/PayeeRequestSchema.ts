/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Abound from "../../../../../index";

/**
 * The payee of the document.
 */
export interface PayeeRequestSchema extends Abound.types.AddressSchema {
    /** The payee's legal name (first + last) or business name. */
    name: string;
    /** The payee's trade name, DBA name, or disregarded entity name, if different from `name`. */
    name2?: string;
    /** The payee's tax identification number, commonly referred to as a TIN. No hyphens. Numerical digits only. Alternatively, you may pass the corresponding `tinFingerprint`. */
    tin: string;
}
