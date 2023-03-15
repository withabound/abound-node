import { AboundBaseResource } from "./base/AboundBaseResource";
import { AboundResponse } from "./base/AboundResponse";

/**
 * See https://docs.withabound.com/reference/tax-categories
 * @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog).
 */
export default class TaxCategories extends AboundBaseResource<never, string[]> {
  path = "/taxCategories";

  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  public async retrieve(year: string): Promise<AboundResponse<string[]>> {
    return super.retrieveBaseResource(year);
  }
}
