/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ForeignAddressSchema {
    /** The legal address. */
    address: string;
    /** The second part of the legal address, such as an apartment or suite number. */
    address2?: string;
    /** The city associated with the street address. */
    city?: string;
    /** The province associated with the street address. */
    state?: string;
    /** The foreign postal code associated with the street address. */
    postalCode?: string;
    /** The country adhering to `ISO 3166-2` standards. */
    country: string;
}