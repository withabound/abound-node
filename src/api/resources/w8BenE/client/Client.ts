/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Abound from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace W8BenE {
    interface Options {
        environment?: core.Supplier<environments.AboundEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
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

export class W8BenE {
    constructor(protected readonly _options: W8BenE.Options) {}

    /**
     * Returns a list of W-8BEN-E documents.
     *
     * @param {Abound.W8BenEListRequest} request
     * @param {W8BenE.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.BadRequestError}
     * @throws {@link Abound.UnauthorizedError}
     * @throws {@link Abound.NotFoundError}
     * @throws {@link Abound.InternalServerError}
     *
     * @example
     *     await client.w8BenE.list()
     */
    public async list(
        request: Abound.W8BenEListRequest = {},
        requestOptions?: W8BenE.RequestOptions
    ): Promise<Abound.W8BenESchema[]> {
        const { page, payeeTinFingerprint, payeeForeignTinFingerprint, userId } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (page != null) {
            _queryParams["page"] = page.toString();
        }

        if (payeeTinFingerprint != null) {
            _queryParams["payeeTinFingerprint"] = payeeTinFingerprint;
        }

        if (payeeForeignTinFingerprint != null) {
            _queryParams["payeeForeignTinFingerprint"] = payeeForeignTinFingerprint;
        }

        if (userId != null) {
            _queryParams["userId"] = userId;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Production,
                "documents/w-8ben-e"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "abound",
                "X-Fern-SDK-Version": "6.0.0-alpha0",
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
            return _response.body as Abound.W8BenESchema[];
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Abound.BadRequestError(_response.error.body as Abound.ErrorBadRequestSchema);
                case 401:
                    throw new Abound.UnauthorizedError(_response.error.body as Abound.ErrorSchema);
                case 404:
                    throw new Abound.NotFoundError(_response.error.body as Abound.ErrorSchema);
                case 500:
                    throw new Abound.InternalServerError(_response.error.body as Abound.ErrorSchema);
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
     * Creates a W-8BEN-E document and, if present, subsequently kicks off a TIN Verification. A TIN Verification will only kickoff if the name and TIN combo has not been seen before.
     *
     * @param {Abound.W8BenECreateRequest} request
     * @param {W8BenE.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.BadRequestError}
     * @throws {@link Abound.UnauthorizedError}
     * @throws {@link Abound.NotFoundError}
     * @throws {@link Abound.InternalServerError}
     *
     * @example
     *     await client.w8BenE.create({
     *         "Idempotency-Key": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
     *         body: {
     *             id: "documentId_sampleGyuBXlfAwo",
     *             createdAt: new Date("2024-01-01T00:00:00.000Z"),
     *             expiresAt: new Date("2028-01-01T00:00:00.000Z"),
     *             url: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/documents/FORM-W-8BEN-E.pdf",
     *             formFields: {}
     *         }
     *     })
     */
    public async create(
        request: Abound.W8BenECreateRequest,
        requestOptions?: W8BenE.RequestOptions
    ): Promise<Abound.W8BenESchema> {
        const { "Idempotency-Key": idempotencyKey, body: _body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Production,
                "documents/w-8ben-e"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "abound",
                "X-Fern-SDK-Version": "6.0.0-alpha0",
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
            return _response.body as Abound.W8BenESchema;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Abound.BadRequestError(_response.error.body as Abound.ErrorBadRequestSchema);
                case 401:
                    throw new Abound.UnauthorizedError(_response.error.body as Abound.ErrorSchema);
                case 404:
                    throw new Abound.NotFoundError(_response.error.body as Abound.ErrorSchema);
                case 500:
                    throw new Abound.InternalServerError(_response.error.body as Abound.ErrorSchema);
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
     * Retrieves the details of an existing W-8BEN-E document.
     *
     * @param {string} documentId - The unique identifier for an existing document.
     * @param {W8BenE.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.BadRequestError}
     * @throws {@link Abound.UnauthorizedError}
     * @throws {@link Abound.NotFoundError}
     * @throws {@link Abound.InternalServerError}
     *
     * @example
     *     await client.w8BenE.get("{{documentId}}")
     */
    public async get(documentId: string, requestOptions?: W8BenE.RequestOptions): Promise<Abound.W8BenESchema> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Production,
                `documents/w-8ben-e/${encodeURIComponent(documentId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "abound",
                "X-Fern-SDK-Version": "6.0.0-alpha0",
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
            return _response.body as Abound.W8BenESchema;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Abound.BadRequestError(_response.error.body as Abound.ErrorBadRequestSchema);
                case 401:
                    throw new Abound.UnauthorizedError(_response.error.body as Abound.ErrorSchema);
                case 404:
                    throw new Abound.NotFoundError(_response.error.body as Abound.ErrorSchema);
                case 500:
                    throw new Abound.InternalServerError(_response.error.body as Abound.ErrorSchema);
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
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
