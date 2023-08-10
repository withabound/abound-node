import { EmptyObject } from "./AboundResource";
import { AboundBulkResponse, AboundResponse } from "./AboundResponse";
import { AboundUserScopedResource } from "./AboundUserScopedResource";

/**
 * Abstract class for all document-scoped resources, wherein a document-scoped resource is one
 * having the relative path `https://baseURL/v3/users/{userId}/documents/{documentId}/resource`
 *
 * @param {I} input — the data type of the request body
 * @param {O} output — the data type of the payloads returned by SDK methods.
 * @param {RESP} API response — the data type of the raw response returned by Abound's APIs. In most cases,
 * the payload returned by the APIs is the same as the payload returned by the SDK. Infrequently, the SDK
 * will process raw API responses, transforming them into type O.
 */
export abstract class AboundDocumentScopedResource<
  I,
  O,
  RESP extends O = O
> extends AboundUserScopedResource<I, O, RESP> {
  protected async listForDocument<P extends Record<string, unknown>>(
    userId: string,
    documentId: string,
    parameters?: P
  ): Promise<AboundBulkResponse<O>> {
    const uri = this.documentScopedResourcesUri(userId, documentId);

    return super._list(uri, parameters);
  }

  protected async createForDocument(
    userId: string,
    documentId: string,
    payload?: Record<string, I>
  ): Promise<AboundResponse<O>> {
    const uri = this.documentScopedResourcesUri(userId, documentId);

    return super._create(uri, payload);
  }

  protected async retrieveForDocument(
    userId: string,
    documentId: string,
    resourceId: string
  ): Promise<AboundResponse<O>> {
    const uri = this.documentScopedResourceUri(userId, documentId, resourceId);

    return super._retrieve(uri);
  }

  protected async deleteForDocument(
    userId: string,
    documentId: string,
    resourceId: string
  ): Promise<AboundResponse<EmptyObject>> {
    const uri = this.documentScopedResourceUri(userId, documentId, resourceId);

    return super._delete(uri);
  }

  protected documentScopedResourcesUri(
    userId: string,
    documentId: string
  ): string {
    return `/users/${userId}/documents/${documentId}${this.path}`;
  }

  protected documentScopedResourceUri(
    userId: string,
    documentId: string,
    resourceId: string
  ): string {
    return `/users/${userId}/documents/${documentId}${this.path}/${resourceId}`;
  }
}
