/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Abound from "../../../../../index";

export interface Form1099BaseRequestSchema {
    filingYear: Abound.types.FilingYear;
    userId?: Abound.types.UserId;
    payer: Abound.types.PayerRequestSchema;
    payee: Abound.types.PayeeRequestSchema;
}
