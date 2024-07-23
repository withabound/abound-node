/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Abound from "../../../../index";

/**
 * @example
 *     {
 *         "Idempotency-Key": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
 *         body: {
 *             to: {},
 *             from: {}
 *         }
 *     }
 */
export interface Form1099NecMailRequest {
    /**
     * The unique key used to identify a request that has already been processed.
     */
    "Idempotency-Key"?: string;
    body: Abound.MailingRequestSchema;
}
