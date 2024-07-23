/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as AboundApi from "../index";

export interface W8BenESchema extends AboundApi.ReferencesSchema {
    /** The unique identifier for this W-8BEN-E document. */
    id: string;
    /** The creation date and time of the W-8BEN-E in `ISO 8601` format. */
    createdAt: string;
    /** The expiration date and time of the W-8BEN-E in `ISO 8601` format. Once past, the W-8BEN-E is no longer valid and re-collection is required. */
    expiresAt: string;
    /** The URL to the W-8BEN-E document. */
    url: string;
    /** The W-8BEN-E form fields. */
    formFields: AboundApi.W8BenESchemaFormFields;
    payee?: AboundApi.W8BenEBeneficialOwnerNestedOptionalSchema;
}
