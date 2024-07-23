/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as AboundApi from "../index";

export interface MailingSchema extends AboundApi.MailingRequestSchema {
    /** The unique identifier for this mailing. */
    id: string;
    /** The creation date and time of the mailing in `ISO 8601` format. */
    createdAt: string;
    /** The status of the mailing. */
    status: AboundApi.MailingSchemaStatus;
    /** The URL to the mailed document. */
    url: string;
    /** The unique identifier of the user associated with this mailing. */
    userId?: string;
    /** The `documentId` of the mailed document. */
    mailedFromId: string;
}
