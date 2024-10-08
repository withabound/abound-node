/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Abound from "../../../../index";

/**
 * @example
 *     {
 *         body: {
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
 *                 bondPremium: 19423,
 *                 bondPremiumTaxExemptBond: 19423,
 *                 bondPremiumTreasury: 19423,
 *                 earlyWithdrawalPenalty: 23223,
 *                 foreignTaxPaid: 19423,
 *                 foreignTaxPaidCountry: "FR",
 *                 hasFatcaFilingRequirement: true,
 *                 interestIncome: 10000,
 *                 investmentExpenses: 19423,
 *                 marketDiscount: 19423,
 *                 payersRoutingNumber: "054000030",
 *                 specifiedPrivateActivityBondInterest: 19423,
 *                 taxExemptInterest: 19423,
 *                 usSavingsBondsInterest: 19423,
 *                 federalIncomeTaxWithheld: 0,
 *                 accountNumber: "A006SVmcrieFAbm3gsaV",
 *                 stateTaxInfo: [{
 *                         filingState: "CA"
 *                     }]
 *             }
 *         }
 *     }
 */
export interface Form1099IntCorrectRequest {
    "Idempotency-Key"?: Abound.types.IdempotencyKey | undefined;
    body: Abound.Form1099IntCorrectRequestSchema;
}
