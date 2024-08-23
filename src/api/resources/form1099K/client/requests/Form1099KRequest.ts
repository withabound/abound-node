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
 *                 payerClassification: Abound.Form1099KPayerClassificationEnum.Pse,
 *                 transactionsReportedClassification: Abound.Form1099KTransactionsReportedClassificationSchema.PaymentCard,
 *                 pseName: "Acme Payments",
 *                 psePhoneNumber: "6501014096",
 *                 aggregateGrossAmount: 120000,
 *                 aggregateGrossAmountCardNotPresent: 50000,
 *                 merchantCategoryCode: "1234",
 *                 numberOfPaymentTransactions: 100,
 *                 grossAmountsByMonth: {
 *                     january: 10000,
 *                     february: 10000,
 *                     march: 10000,
 *                     april: 10000,
 *                     may: 10000,
 *                     june: 10000,
 *                     july: 10000,
 *                     august: 10000,
 *                     september: 10000,
 *                     october: 10000,
 *                     november: 10000,
 *                     december: 10000
 *                 },
 *                 stateTaxInfo: [{
 *                         filingState: Abound.types.Form1099FilingStateEnum.Ca,
 *                         stateTaxWithheld: 0
 *                     }]
 *             }
 *         }
 *     }
 */
export interface Form1099KRequest {
    "Idempotency-Key"?: Abound.types.IdempotencyKey | undefined;
    body: Abound.Form1099KRequestSchema;
}
