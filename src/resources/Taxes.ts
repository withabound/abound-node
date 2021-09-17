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
  stateTaxOutstanding: number; // float
  stateTaxPayments: number;
  taxBalance: number; // float
  taxWithholdings: number; // float
  taxWithholdingsPending: number;
  taxTotalOutstanding: number; // float
  totalTax: number; // float
  year: string;
}

/**
 * See https://docs.withabound.com/reference/taxes
 */
export default class Taxes extends AboundUserScopedResource<TaxRequest, Tax> {
  path = "/taxes";

  public async list(userId: string): Promise<AboundBulkResponse<Tax>> {
    return super.listForUser(userId);
  }

  public async retrieve(
    userId: string,
    year: string
  ): Promise<AboundResponse<Tax>> {
    return super.retrieveForUser(userId, year);
  }

  public async calculate(
    userId: string,
    year: string,
    taxes: Partial<TaxRequest>
  ): Promise<AboundResponse<Tax>> {
    return super.updateForUser(userId, year, { taxes });
  }
}
