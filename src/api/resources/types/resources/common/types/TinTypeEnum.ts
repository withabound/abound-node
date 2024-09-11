/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of the TIN. `INDIVIDUAL` refers to SSNs, ITINs, or ATINs. While `BUSINESS` refers to EINs.
 */
export type TinTypeEnum = "INDIVIDUAL" | "BUSINESS";

export const TinTypeEnum = {
    Individual: "INDIVIDUAL",
    Business: "BUSINESS",
} as const;