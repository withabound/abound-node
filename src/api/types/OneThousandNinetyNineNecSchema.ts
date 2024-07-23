/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as AboundApi from "../index";

export interface OneThousandNinetyNineNecSchema
    extends AboundApi.OneThousandNinetyNineSchema,
        AboundApi.OneThousandNinetyNineRequestSchema,
        AboundApi.ReferencesSchema,
        AboundApi.OneThousandNinetyNineRelationsSchema,
        AboundApi.Unknown {
    /** The unique identifier for this 1099-NEC document. */
    id: string;
    payer?: AboundApi.PayerNestedOptionalSchema;
    payee?: AboundApi.PayeeNestedOptionalSchema;
    formFields?: AboundApi.OneThousandNinetyNineCorrectionFormFieldsSchemaFormFields;
}
