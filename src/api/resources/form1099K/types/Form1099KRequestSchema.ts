/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Abound from "../../../index";

/**
 * @example
 *     {
 *         filingYear: 2024,
 *         payer: {
 *             name: "Hooli",
 *             tin: "111111111",
 *             address: "256 Byron Street",
 *             address2: "Suite 32",
 *             city: "Palo Alto",
 *             state: "CA",
 *             postalCode: "94306",
 *             country: "US",
 *             phoneNumber: "+16501014096"
 *         },
 *         payee: {
 *             name: "Ada Lovelace",
 *             tin: "000000000",
 *             address: "1401 N Shoreline Blvd",
 *             address2: "Suite 1",
 *             city: "Mountain View",
 *             state: "CA",
 *             postalCode: "94043",
 *             country: "US"
 *         },
 *         formFields: {
 *             accountNumber: "A0MCFOfvWWL7AVtwrhiU",
 *             aggregateGrossAmount: 27987876,
 *             aggregateGrossAmountCardNotPresent: 2332323,
 *             federalIncomeTaxWithheld: 0,
 *             merchantCategoryCode: "4582",
 *             numberOfPaymentTransactions: 767,
 *             pseName: "Payment Entity",
 *             payerClassification: Abound.Form1099KPayerClassificationEnum.Pse,
 *             transactionsReportedClassification: Abound.Form1099KTransactionsReportedClassificationSchema.PaymentCard,
 *             psePhoneNumber: "+15555555555",
 *             grossAmountsByMonth: {
 *                 april: 2332323,
 *                 august: 2332323,
 *                 december: 2332323,
 *                 february: 2332323,
 *                 january: 2332323,
 *                 july: 2332323,
 *                 june: 2332323,
 *                 march: 2332323,
 *                 may: 2332323,
 *                 november: 2332323,
 *                 october: 2332323,
 *                 september: 2332323
 *             },
 *             stateTaxInfo: [{
 *                     filingState: Abound.types.Form1099FilingStateEnum.Ca,
 *                     stateTaxWithheld: 0
 *                 }]
 *         }
 *     }
 */
export interface Form1099KRequestSchema extends Abound.types.Form1099BaseRequestSchema {
    formFields: Abound.Form1099KFormFieldsRequestSchema;
}
