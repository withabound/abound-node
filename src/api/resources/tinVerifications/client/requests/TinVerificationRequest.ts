/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Abound from "../../../../index";

/**
 * @example
 *     {
 *         body: {
 *             name: "Ada Lovelace",
 *             tin: "000000000"
 *         }
 *     }
 */
export interface TinVerificationRequest {
    "Idempotency-Key"?: Abound.types.IdempotencyKey | undefined;
    body: Abound.TinVerificationRequestSchema;
}
