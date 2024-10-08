/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Abound from "../../../index";

export interface W9FormFieldsSchema {
    /** The U.S. federal tax classification of the person. */
    taxClassification: Abound.W9TaxClassificationSchema;
    /** The tax classification of the payee if `taxClassification` is `OTHER`. */
    otherTaxClassification?: string;
    /** If your `taxClassification` is `PARTNERSHIP`, `TRUST`, `ESTATE`, or `LLC_PARTNERSHIP`, and you are providing this form to a partnership, trust, or estate in which you have an ownership interest, pass `true` if you have any foreign partners, owners, or beneficiaries. */
    hasIndirectForeignOwnership?: boolean;
    /** The code to identify a payee that is exempt from backup withholding. */
    exemptPayeeCode?: Abound.W9ExemptPayeeCodeSchema;
    /** The code to identify a payee that is exempt from reporting under FATCA. */
    exemptFatcaCode?: Abound.W9ExemptFatcaCodeSchema;
    /** The account numbers to list on this W-9. */
    accountNumbers?: string[];
    /** If the payee is subject to backup withholding, pass `true`. */
    isSubjectToBackupWithholding?: boolean;
    /** The certification date and time in `ISO 8601` format. This field is deprecated. Please use `electronicSignature` instead. */
    certifiedAt?: string;
    /** The electronic signature of the payee. */
    electronicSignature?: Abound.types.ElectronicSignatureOfPayeeSchema;
}
