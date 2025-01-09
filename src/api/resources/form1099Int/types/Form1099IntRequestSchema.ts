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
 *             bondPremium: 19423,
 *             bondPremiumTaxExemptBond: 19423,
 *             bondPremiumTreasury: 19423,
 *             earlyWithdrawalPenalty: 23223,
 *             foreignTaxPaid: 19423,
 *             foreignTaxPaidCountry: "FR",
 *             hasFatcaFilingRequirement: true,
 *             interestIncome: 83232,
 *             investmentExpenses: 19423,
 *             marketDiscount: 19423,
 *             payersRoutingNumber: "054000030",
 *             specifiedPrivateActivityBondInterest: 19423,
 *             taxExemptInterest: 19423,
 *             usSavingsBondsInterest: 19423,
 *             federalIncomeTaxWithheld: 0,
 *             accountNumber: "A006SVmcrieFAbm3gsaV",
 *             stateTaxInfo: [{
 *                     filingState: Abound.types.Form1099FilingStateEnum.Ca,
 *                     stateTaxWithheld: 0
 *                 }]
 *         }
 *     }
 */
export interface Form1099IntRequestSchema extends Abound.types.Form1099BaseRequestSchema {
    formFields: Abound.Form1099IntFormFieldsRequestSchema;
}
