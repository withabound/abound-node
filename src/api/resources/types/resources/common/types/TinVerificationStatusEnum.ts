/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The status of the TIN Verification.
 */
export type TinVerificationStatusEnum = "MATCH" | "MISMATCH" | "PENDING";

export const TinVerificationStatusEnum = {
    Match: "MATCH",
    Mismatch: "MISMATCH",
    Pending: "PENDING",
} as const;
