/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface TaxTreatySchema {
    /** Abound's shorthand code for a particular US tax treaty. */
    taxTreatyCode: string;
    /** The foreign country, adhering to `ISO 3166-2` standards, associated with the tax treaty. */
    residentCountry: string;
    /** The decimal percentage rate of withholding the tax treaty allows by default. Rates are subject to validation and approval by the Payer. */
    rateOfWithholding: number;
    /** The income description associated with the tax treaty. */
    incomeDescription: string;
}
