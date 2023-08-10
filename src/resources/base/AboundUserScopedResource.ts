import { AboundResource, DeepPartial, EmptyObject } from "./AboundResource";
import { AboundBulkResponse, AboundResponse } from "./AboundResponse";

/**
 * Abstract class for all user-scoped resources, wherein a user-scoped resource is one
 * having the relative path `https://baseURL/v3/users/{userId}/resource`
 *
 * @param {I} input — the data type of the request body
 * @param {O} output — the data type of the payloads returned by SDK methods.
 * @param {RESP} API response — the data type of the raw response returned by Abound's APIs. In most cases,
 * the payload returned by the APIs is the same as the payload returned by the SDK. Infrequently, the SDK
 * will process raw API responses, transforming them into type O.
 */
export abstract class AboundUserScopedResource<
  I,
  O,
  RESP extends O = O
> extends AboundResource<I, O, RESP> {
  protected async listForUser<P extends Record<string, unknown>>(
    userId: string,
    parameters?: P
  ): Promise<AboundBulkResponse<O>> {
    const uri = this.userScopedResourcesUri(userId);

    return super._list(uri, parameters);
  }

  protected async createForUser(
    userId: string,
    payload: Record<string, I>
  ): Promise<AboundResponse<O>> {
    const uri = this.userScopedResourcesUri(userId);

    return super._create(uri, payload);
  }

  protected async bulkCreateForUser(
    userId: string,
    payload: Record<string, I[]>
  ): Promise<AboundBulkResponse<O>> {
    const uri = this.userScopedResourcesUri(userId);

    return super._bulkCreate(uri, payload);
  }

  protected async retrieveForUser(
    userId: string,
    resourceId: string
  ): Promise<AboundResponse<O>> {
    const uri = this.userScopedResourceUri(userId, resourceId);

    return super._retrieve(uri);
  }

  protected async updateForUser(
    userId: string,
    resourceId: string,
    payload: Record<string, DeepPartial<I>>
  ): Promise<AboundResponse<O>> {
    const uri = this.userScopedResourceUri(userId, resourceId);

    return super._update(uri, payload);
  }

  protected async deleteForUser(
    userId: string,
    resourceId: string
  ): Promise<AboundResponse<EmptyObject>> {
    const uri = this.userScopedResourceUri(userId, resourceId);

    return super._delete(uri);
  }

  protected userScopedResourcesUri(userId: string): string {
    return `/users/${userId}${this.path}`;
  }

  protected userScopedResourceUri(userId: string, resourceId: string): string {
    return `/users/${userId}${this.path}/${resourceId}`;
  }
}
