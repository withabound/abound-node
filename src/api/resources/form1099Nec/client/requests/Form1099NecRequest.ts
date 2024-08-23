/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Abound from "../../../../index";

/**
 * @example
 *     {
 *         body: {
 *             filingYear: 2023,
 *             payer: {
 *                 address: "1401 N Shoreline Blvd",
 *                 address2: "Suite 1",
 *                 city: "Mountain View",
 *                 state: "CA",
 *                 postalCode: "94043",
 *                 country: "US",
 *                 name: "Hooli",
 *                 name2: "Hooli",
 *                 tin: "111111111",
 *                 phoneNumber: "6501014096"
 *             },
 *             payee: {
 *                 address: "256 Byron Street",
 *                 address2: "Suite 32",
 *                 city: "Palo Alto",
 *                 state: "CA",
 *                 postalCode: "94306",
 *                 country: "US",
 *                 name: "Ada Lovelace",
 *                 name2: "InGen Corporation",
 *                 tin: "000000000"
 *             },
 *             formFields: {
 *                 accountNumber: "123456789",
 *                 nonemployeeCompensation: 100000,
 *                 hasDirectSalesOver5000: false,
 *                 federalIncomeTaxWithheld: 0,
 *                 stateTaxInfo: [{
 *                         filingState: Abound.types.Form1099FilingStateEnum.Ca,
 *                         stateIncome: 100000,
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
