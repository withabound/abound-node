/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Abound from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace FormW9 {
    interface Options {
        environment?: core.Supplier<environments.AboundEnvironment | string>;
        apiKey: core.Supplier<core.BearerToken>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class FormW9 {
    constructor(protected readonly _options: FormW9.Options) {}

    /**
     * Returns a list of W-9 documents.
     *
     * @param {Abound.FormW9ListRequest} request
     * @param {FormW9.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.types.BadRequestErrorSchema}
     * @throws {@link Abound.types.UnauthorizedErrorSchema}
     * @throws {@link Abound.types.NotFoundErrorSchema}
     * @throws {@link Abound.types.InternalServerErrorSchema}
     *
     * @example
     *     await client.formW9.list()
     */
    public async list(
        request: Abound.FormW9ListRequest = {},
        requestOptions?: FormW9.RequestOptions
    ): Promise<Abound.W9Schema[]> {
        const { page, payeeTinFingerprint, payerTinFingerprint, userId } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (page != null) {
            _queryParams["page"] = page.toString();
        }

        if (payeeTinFingerprint != null) {
            _queryParams["payeeTinFingerprint"] = payeeTinFingerprint;
        }

        if (payerTinFingerprint != null) {
            _queryParams["payerTinFingerprint"] = payerTinFingerprint;
        }

        if (userId != null) {
            _queryParams["userId"] = userId;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Sandbox,
                "/v4/documents/w-9"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@withabound/node-sdk",
                "X-Fern-SDK-Version": "6.0.6",
                "User-Agent": "@withabound/node-sdk/6.0.6",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Abound.W9Schema[];
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Abound.types.BadRequestErrorSchema(
                        _response.error.body as Abound.types.ErrorBadRequestSchema
                    );
                case 401:
                    throw new Abound.types.UnauthorizedErrorSchema(
                        _response.error.body as Abound.types.DefaultErrorSchema
                    );
                case 404:
                    throw new Abound.types.NotFoundErrorSchema(_response.error.body as Abound.types.DefaultErrorSchema);
                case 500:
                    throw new Abound.types.InternalServerErrorSchema(
                        _response.error.body as Abound.types.DefaultErrorSchema
                    );
                default:
                    throw new errors.AboundError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.AboundError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.AboundTimeoutError();
            case "unknown":
                throw new errors.AboundError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Creates a W-9 document and subsequently kicks off a TIN verification, if the name and TIN combo has not been used before.
     *
     * @param {Abound.FormW9RequestSchema} request
     * @param {FormW9.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.types.BadRequestErrorSchema}
     * @throws {@link Abound.types.UnauthorizedErrorSchema}
     * @throws {@link Abound.types.NotFoundErrorSchema}
     * @throws {@link Abound.types.InternalServerErrorSchema}
     *
     * @example
     *     await client.formW9.create({
     *         body: {
     *             payee: {
     *                 name: "Ada Lovelace",
     *                 address: "1401 N Shoreline Blvd",
     *                 address2: "Suite 1",
     *                 city: "Mountain View",
     *                 country: "US",
     *                 postalCode: "94043",
     *                 state: "CA",
     *                 tin: "000000000",
     *                 tinType: "INDIVIDUAL"
     *             },
     *             formFields: {
     *                 taxClassification: "INDIVIDUAL",
     *                 isSubjectToBackupWithholding: false,
     *                 electronicSignature: {
     *                     signature: "Ada Lovelace",
     *                     printedName: "Ada Lovelace",
     *                     signedAt: "2024-01-01T00:00:00.000Z",
     *                     ipAddress: "127.0.0.1"
     *                 }
     *             }
     *         }
     *     })
     */
    public async create(
        request: Abound.FormW9RequestSchema,
        requestOptions?: FormW9.RequestOptions
    ): Promise<Abound.W9Schema> {
        const { "Idempotency-Key": idempotencyKey, body: _body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Sandbox,
                "/v4/documents/w-9"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@withabound/node-sdk",
                "X-Fern-SDK-Version": "6.0.6",
                "User-Agent": "@withabound/node-sdk/6.0.6",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                "Idempotency-Key": idempotencyKey != null ? idempotencyKey : undefined,
            },
            contentType: "application/json",
            requestType: "json",
            body: _body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Abound.W9Schema;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Abound.types.BadRequestErrorSchema(
                        _response.error.body as Abound.types.ErrorBadRequestSchema
                    );
                case 401:
                    throw new Abound.types.UnauthorizedErrorSchema(
                        _response.error.body as Abound.types.DefaultErrorSchema
                    );
                case 404:
                    throw new Abound.types.NotFoundErrorSchema(_response.error.body as Abound.types.DefaultErrorSchema);
                case 500:
                    throw new Abound.types.InternalServerErrorSchema(
                        _response.error.body as Abound.types.DefaultErrorSchema
                    );
                default:
                    throw new errors.AboundError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.AboundError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.AboundTimeoutError();
            case "unknown":
                throw new errors.AboundError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Retrieves the details of an existing W-9 document.
     *
     * @param {Abound.types.DocumentId} documentId
     * @param {FormW9.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.types.BadRequestErrorSchema}
     * @throws {@link Abound.types.UnauthorizedErrorSchema}
     * @throws {@link Abound.types.NotFoundErrorSchema}
     * @throws {@link Abound.types.InternalServerErrorSchema}
     *
     * @example
     *     await client.formW9.retrieve("documentId_sampleVppNzzIbQT")
     */
    public async retrieve(
        documentId: Abound.types.DocumentId,
        requestOptions?: FormW9.RequestOptions
    ): Promise<Abound.W9Schema> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Sandbox,
                `/v4/documents/w-9/${encodeURIComponent(documentId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@withabound/node-sdk",
                "X-Fern-SDK-Version": "6.0.6",
                "User-Agent": "@withabound/node-sdk/6.0.6",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Abound.W9Schema;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Abound.types.BadRequestErrorSchema(
                        _response.error.body as Abound.types.ErrorBadRequestSchema
                    );
                case 401:
                    throw new Abound.types.UnauthorizedErrorSchema(
                        _response.error.body as Abound.types.DefaultErrorSchema
                    );
                case 404:
                    throw new Abound.types.NotFoundErrorSchema(_response.error.body as Abound.types.DefaultErrorSchema);
                case 500:
                    throw new Abound.types.InternalServerErrorSchema(
                        _response.error.body as Abound.types.DefaultErrorSchema
                    );
                default:
                    throw new errors.AboundError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.AboundError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.AboundTimeoutError();
            case "unknown":
                throw new errors.AboundError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.apiKey)}`;
    }
}
