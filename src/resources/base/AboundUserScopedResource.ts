import { AboundResource, EmptyObject } from "./AboundResource";
import { AboundBulkResponse, AboundResponse } from "./AboundResponse";

/**
 * Abstract class for all user-scoped resources, wherein a user-scoped resource is one
 * having the relative path `https://baseURL/v2/users/{userId}/resource`
 *
 * @param {I} input — the data type of the request body
 * @param {O} output — the data type of the response body
 */
export abstract class AboundUserScopedResource<I, O> extends AboundResource<
  I,
  O
> {
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
    payload: Record<string, Partial<I>>
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
