/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Abound from "../../../index";

/**
 * @example
 *     {
 *         taxTreatyCode: Abound.types.TaxTreatyAboundCodeEnum.Gb17IndependentPersonalServices,
 *         residentCountry: "GB",
 *         rateOfWithholding: 0,
 *         description: "Independent personal services performed in the US"
 *     }
 */
export interface TaxTreatySchema {
    /** Abound's shorthand code for a particular US tax treaty. */
    taxTreatyCode: Abound.types.TaxTreatyAboundCodeEnum;
    /** The foreign country, adhering to `ISO 3166-2` standards, associated with the tax treaty. */
    residentCountry: string;
    /** The decimal percentage rate of withholding the tax treaty allows by default. Rates are subject to validation and approval by the Payer. */
    rateOfWithholding: number;
    /** The income description associated with the tax treaty. */
    description: string;
}