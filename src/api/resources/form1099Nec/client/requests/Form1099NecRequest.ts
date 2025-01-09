/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Abound from "../../../../index";

/**
 * @example
 *     {
 *         body: {
 *             filingYear: 2024,
 *             payer: {
 *                 name: "Hooli",
 *                 tin: "111111111",
 *                 address: "256 Byron Street",
 *                 address2: "Suite 32",
 *                 city: "Palo Alto",
 *                 state: "CA",
 *                 postalCode: "94306",
 *                 country: "US",
 *                 phoneNumber: "+16501014096"
 *             },
 *             payee: {
 *                 name: "Ada Lovelace",
 *                 tin: "000000000",
 *                 address: "1401 N Shoreline Blvd",
 *                 address2: "Suite 1",
 *                 city: "Mountain View",
 *                 state: "CA",
 *                 postalCode: "94043",
 *                 country: "US"
 *             },
 *             formFields: {
 *                 nonemployeeCompensation: 23423,
 *                 hasDirectSalesOver5000: false,
 *                 federalIncomeTaxWithheld: 0,
 *                 accountNumber: "A0NEqtav7n0sBGoq88w0",
 *                 stateTaxInfo: [{
 *                         filingState: "CA",
 *                         stateIncome: 23423,
 *                         stateTaxWithheld: 0
 *                     }]
 *             }
 *         }
 *     }
 */
export interface Form1099NecRequest {
    "Idempotency-Key"?: Abound.types.IdempotencyKey | undefined;
    body: Abound.Form1099NecRequestSchema;
}
