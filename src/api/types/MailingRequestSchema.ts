/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Abound from "../index";

export interface MailingRequestSchema {
    /** The mailing address of the recipient. */
    to: Abound.MailingRequestSchemaTo;
    /** The mailing address of the sender. */
    from: Abound.MailingRequestSchemaFrom;
}
