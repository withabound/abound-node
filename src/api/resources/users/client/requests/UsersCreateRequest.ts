/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Abound from "../../../../index";

/**
 * @example
 *     {
 *         body: {
 *             foreignId: "my-foreign-id"
 *         }
 *     }
 */
export interface UsersCreateRequest {
    "Idempotency-Key"?: Abound.types.IdempotencyKey | undefined;
    body: Abound.UserRequestSchema;
}
