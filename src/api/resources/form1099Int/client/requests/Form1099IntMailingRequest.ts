/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Abound from "../../../../index";

/**
 * @example
 *     {
 *         body: {
 *             to: {
 *                 address: "1401 N Shoreline Blvd",
 *                 address2: "Suite 1",
 *                 city: "Mountain View",
 *                 state: "CA",
 *                 postalCode: "94043",
 *                 country: "US",
 *                 name: "Ada Lovelace"
 *             },
 *             from: {
 *                 address: "256 Byron Street",
 *                 address2: "Suite 32",
 *                 city: "Palo Alto",
 *                 state: "CA",
 *                 postalCode: "94306",
 *                 country: "US",
 *                 name: "Hooli"
 *             }
 *         }
 *     }
 */
export interface Form1099IntMailingRequest {
    "Idempotency-Key"?: Abound.types.IdempotencyKey | undefined;
    body: Abound.MailingRequestSchema;
}
