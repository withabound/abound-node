import { EmptyObject, Notes, Pagination } from "./base/AboundResource";
import { AboundBulkResponse, AboundResponse } from "./base/AboundResponse";
import { AboundUserScopedResource } from "./base/AboundUserScopedResource";

// request body
export interface ExpenseRequest {
  amount: number; // float
  description: string;
  date: string; // YYYY-MM-DD
  expenseType?: ExpenseType;
  taxCategory?: string;
  foreignId?: string;
  notes?: Notes;
}

export enum ExpenseType {
  BUSINESS = "business",
  PERSONAL = "personal",
}

// query params
export interface ExpenseParameters extends Pagination {
  foreignId?: string;
  year?: string;
}

// response body
export interface Expense extends ExpenseRequest {
  expenseId: Readonly<string>;
  deductionAmount: number; // float
  predictions: ExpensePredictions;
}

interface ExpensePredictions {
  expenseTypePredictionScores: Record<string, number>; // 0 < values < 1
  taxCategoryPredictionScores: Record<string, number>; // 0 < values < 1
}

/**
 * See https://docs.withabound.com/reference/expenses
 * @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog).
 */
export default class Expenses extends AboundUserScopedResource<
  ExpenseRequest,
  Expense
> {
  path = "/expenses";

  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  public async create(
    userId: string,
    expenses: ExpenseRequest[]
  ): Promise<AboundBulkResponse<Expense>> {
    return super.bulkCreateForUser(userId, { expenses });
  }

  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  public async list(
    userId: string,
    parameters?: ExpenseParameters
  ): Promise<AboundBulkResponse<Expense>> {
    return super.listForUser(userId, parameters);
  }

  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  public async retrieve(
    userId: string,
    expenseId: string
  ): Promise<AboundResponse<Expense>> {
    return super.retrieveForUser(userId, expenseId);
  }

  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  public async update(
    userId: string,
    expenseId: string,
    expense: Partial<ExpenseRequest>
  ): Promise<AboundResponse<Expense>> {
    return super.updateForUser(userId, expenseId, { expense });
  }

  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  public async delete(
    userId: string,
    expenseId: string
  ): Promise<AboundResponse<EmptyObject>> {
    return super.deleteForUser(userId, expenseId);
  }
}
