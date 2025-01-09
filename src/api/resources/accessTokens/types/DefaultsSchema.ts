/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface DefaultsSchema {
    /** The payee's legal first name. */
    firstName?: string;
    /** The payee's legal last name. */
    lastName?: string;
    /** The payee's business name. */
    businessName?: string;
    /** The date, in `YYYY-MM-DD` format, the payee was born on. */
    dateOfBirth?: string;
    /** The legal address. */
    address?: string;
    /** The second part of the legal address, such as an apartment or suite number. */
    address2?: string;
    /** The city associated with the street address. Required if `country` is `US`. */
    city?: string;
    /** The two-letter character code for this state (`CA` for California, `ME` for Maine). Required if `country` is `US`. If foreign, use the province. */
    state?: string;
    /** The postal code associated with the street address. Required to be a 5-digit numerical value if `country` is `US`. If foreign, use the foreign postal code. */
    postalCode?: string;
    /** The country adhering to `ISO 3166-2` standards. */
    country?: string;
    /** The payee's email address. Abound assume's you have taken the proper steps to verify the ownership of this email address. */
    email?: string;
}