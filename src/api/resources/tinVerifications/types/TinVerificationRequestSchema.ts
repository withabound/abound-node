/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Abound from "../../../index";

/**
 * @example
 *     {
 *         name: "Ada Lovelace",
 *         tin: "000000000"
 *     }
 */
export interface TinVerificationRequestSchema {
    /** The legal name (first + last) or business name. */
    name: string;
    /** The tax identification number, commonly referred to as a TIN. No hyphens. Numerical digits only. */
    tin: string;
    userId?: Abound.types.UserId;
}
