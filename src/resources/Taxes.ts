import { AboundBulkResponse, AboundResponse } from "./base/AboundResponse";
import { AboundUserScopedResource } from "./base/AboundUserScopedResource";

// request body
export interface TaxRequest {
  "1099Income"?: number; // float. The total annual 1099 income for the user
  w2Income?: number; // float. The user’s expected annual W-2 income (if applicable).
  expenseDeduction?: number; // float. The total business expense deduction for this user.
  mileage?: number; // float. The total number of tax deductible miles a user has driven YTD.
  filingState?: string; // lowercase two-letter code. The state in which the user earns their 1099 income (this is typically the state they live in).
  filingStatus?: FilingStatus;
}

export enum FilingStatus {
  SINGLE = "single",
  MARRIED = "married",
  MARRIED_SEPARATELY = "marriedSeparately",
  HEAD_OF_HOUSEHOLD = "headOfHousehold",
  QUALIFIED_WIDOW = "qualifiedWidow",
}

// response body
export interface Tax extends Required<TaxRequest> {
  effectiveTaxRate: number; // float
  federalIncomeTax: number; // float
  federalTaxOutstanding: number; // float
  federalTaxTotal: number; // float
  irsPayments: number;
  quarterlyPayments: number;
  marginalTaxRate: number; // float
  medicareTax: number; // float
  mileageDeduction: number; // float
  qbiDeduction: number; // float
  selfEmploymentTax: number; // float
  smartTaxRate: number; // float
  socialSecurityTax: number; // float
  stateIncomeTax: number; // float
  stateTaxTotal: number; // float
  taxBalance: number; // float
  taxWithholdings: number; // float
  taxWithholdingsPending: number;
  totalTax: number; // float
  year: string;
}

/**
 * See https://docs.withabound.com/reference/taxes
 * @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog).
 */
export default class Taxes extends AboundUserScopedResource<TaxRequest, Tax> {
  path = "/taxes";

  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  public async list(userId: string): Promise<AboundBulkResponse<Tax>> {
    return super.listForUser(userId);
  }

  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  public async retrieve(
    userId: string,
    year: string
  ): Promise<AboundResponse<Tax>> {
    return super.retrieveForUser(userId, year);
  }

  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  public async calculate(
    userId: string,
    year: string,
    taxes: Partial<TaxRequest>
  ): Promise<AboundResponse<Tax>> {
    return super.updateForUser(userId, year, { taxes });
  }
}
