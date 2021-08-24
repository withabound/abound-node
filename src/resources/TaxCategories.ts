import { AboundBaseResource } from "./base/AboundBaseResource";
import { AboundResponse } from "./base/AboundResponse";

/**
 * See https://docs.withabound.com/reference/tax-categories
 */
export class TaxCategories extends AboundBaseResource<never, string[]> {
  path = "/taxCategories";

  public async retrieve(
    year: string | number
  ): Promise<AboundResponse<string[]>> {
    return super.retrieve(year.toString());
  }
}
