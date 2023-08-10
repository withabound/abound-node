import { AboundResource, DeepPartial, EmptyObject } from "./AboundResource";
import { AboundBulkResponse, AboundResponse } from "./AboundResponse";

/**
 * Abstract class for all base resources, wherein a base resource is one
 * having the relative path `https://baseURL/v3/resource` (i.e. it is not
 * scoped to a user).
 *
 * @param {I} input — the data type of the request body
 * @param {O} output — the data type of the payloads returned by SDK methods.
 * @param {RESP} API response — the data type of the raw response returned by Abound's APIs. In most cases,
 * the payload returned by the APIs is the same as the payload returned by the SDK. Infrequently, the SDK
 * will process raw API responses, transforming them into type O.
 */
export abstract class AboundBaseResource<
  I,
  O,
  RESP extends O = O
> extends AboundResource<I, O, RESP> {
  abstract path: string;

  protected async listBaseResource<P extends Record<string, unknown>>(
    parameters?: P
  ): Promise<AboundBulkResponse<O>> {
    return super._list(this.path, parameters);
  }

  protected async createBaseResource(
    payload: Record<string, I>
  ): Promise<AboundResponse<O>> {
    return super._create(this.path, payload);
  }

  protected async bulkCreateBaseResource(
    payload: Record<string, I[]>
  ): Promise<AboundBulkResponse<O>> {
    return super._bulkCreate(this.path, payload);
  }

  protected async retrieveBaseResource(id: string): Promise<AboundResponse<O>> {
    const uri = `${this.path}/${id}`;

    return super._retrieve(uri);
  }

  protected async updateBaseResource(
    id: string,
    payload: Record<string, DeepPartial<I>>
  ): Promise<AboundResponse<O>> {
    const uri = `${this.path}/${id}`;

    return super._update(uri, payload);
  }

  protected async deleteBaseResource(
    id: string
  ): Promise<AboundResponse<EmptyObject>> {
    const uri = `${this.path}/${id}`;

    return super._delete(uri);
  }
}
