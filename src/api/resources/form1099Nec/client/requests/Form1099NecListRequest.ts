/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Abound from "../../../../index";

/**
 * @example
 *     {}
 */
export interface Form1099NecListRequest {
    page?: Abound.types.Page;
    filingYear?: Abound.types.FilingYear;
    payeeTinFingerprint?: Abound.types.PayeeTinFingerprint;
    payerTinFingerprint?: Abound.types.PayerTinFingerprint;
    status?: Abound.types.Form1099StatusEnum;
    userId?: Abound.types.UserId;
}
