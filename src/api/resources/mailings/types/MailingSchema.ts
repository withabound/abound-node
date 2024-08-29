/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Abound from "../../../index";

/**
 * @example
 *     {
 *         id: "mailingId_sampleFV9b73IvAD",
 *         createdAt: "2024-01-01T00:00:00.000Z",
 *         url: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/FORM-1099-COPY-B.pdf",
 *         status: Abound.MailingStatusEnum.Created,
 *         to: {
 *             address: "1401 N Shoreline Blvd",
 *             address2: "Suite 1",
 *             city: "Mountain View",
 *             state: "CA",
 *             postalCode: "94043",
 *             country: "US",
 *             name: "Ada Lovelace"
 *         },
 *         from: {
 *             address: "256 Byron Street",
 *             address2: "Suite 32",
 *             city: "Palo Alto",
 *             state: "CA",
 *             postalCode: "94306",
 *             country: "US",
 *             name: "Hooli"
 *         },
 *         mailedFromId: "documentId_sampletTtqNfulW8"
 *     }
 */
export interface MailingSchema extends Abound.MailingRequestSchema {
    /** The unique identifier for this mailing. */
    id: string;
    /** The creation date and time of the mailing in `ISO 8601` format. */
    createdAt: string;
    /** The URL to the mailed document. */
    url: string;
    /** The status of the mailing. */
    status: Abound.MailingStatusEnum;
    userId?: Abound.types.UserId;
    /** The `documentId` of the mailed document. */
    mailedFromId: string;
}
