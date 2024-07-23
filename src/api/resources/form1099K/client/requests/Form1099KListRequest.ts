/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Abound from "../../../../index";

/**
 * @example
 *     {}
 */
export interface Form1099KListRequest {
    /**
     * The specific page of results you're requesting. Responses are limited to a maximum of 100 records.
     */
    page?: number;
    /**
     * Filters the list of documents based on the `filingYear` field.
     */
    filingYear?: string;
    /**
     * Filters the list of documents based on the `payee.tinFingerprint` field.
     */
    payeeTinFingerprint?: string;
    /**
     * Filters the list of documents based on the `payer.tinFingerprint` field.
     */
    payerTinFingerprint?: string;
    /**
     * Filters the list of documents based on the `status` field.
     */
    status?: Abound.Form1099KListRequestStatus;
    /**
     * The unique identifier for a single end-user of your application.
     */
    userId?: string;
}
