/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Abound from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace FormW8BenE {
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

export class FormW8BenE {
    constructor(protected readonly _options: FormW8BenE.Options) {}

    /**
     * Returns a list of W-8BEN-E documents.
     *
     * @param {Abound.FormW8BenEListRequest} request
     * @param {FormW8BenE.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.types.BadRequestErrorSchema}
     * @throws {@link Abound.types.UnauthorizedErrorSchema}
     * @throws {@link Abound.types.NotFoundErrorSchema}
     * @throws {@link Abound.types.InternalServerErrorSchema}
     *
     * @example
     *     await client.formW8BenE.list()
     */
    public async list(
        request: Abound.FormW8BenEListRequest = {},
        requestOptions?: FormW8BenE.RequestOptions
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
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Sandbox,
                "/v4/documents/w-8ben-e"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@withabound/node-sdk",
                "X-Fern-SDK-Version": "6.0.44",
                "User-Agent": "@withabound/node-sdk/6.0.44",
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
     * Creates a W-8BEN-E document and, if present, subsequently kicks off a TIN Verification. A TIN Verification will only kickoff if the name and TIN combo has not been seen before.
     *
     * @param {Abound.W8BenERequestSchema} request
     * @param {FormW8BenE.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.types.BadRequestErrorSchema}
     * @throws {@link Abound.types.UnauthorizedErrorSchema}
     * @throws {@link Abound.types.NotFoundErrorSchema}
     * @throws {@link Abound.types.InternalServerErrorSchema}
     *
     * @example
     *     await client.formW8BenE.create({
     *         payee: {
     *             name: "Hooli",
     *             incorporationCountry: "GB",
     *             tin: "111111111",
     *             foreignTin: "DQ123456C",
     *             permanentResidenceAddress: {
     *                 address: "43 Hilly Fields",
     *                 address2: "Suite 32",
     *                 city: "Lewisham",
     *                 state: "London",
     *                 postalCode: "SE13 7JN",
     *                 country: "GB"
     *             },
     *             mailingAddress: {
     *                 address: "256 Byron Street",
     *                 address2: "Suite 32",
     *                 city: "Palo Alto",
     *                 postalCode: "94306",
     *                 state: "CA",
     *                 country: "US"
     *             }
     *         },
     *         formFields: {
     *             taxClassification: "CORPORATION",
     *             isForeignTinNotRequired: false,
     *             taxTreatyCode: "GB_17_INDEPENDENT_PERSONAL_SERVICES",
     *             referenceNumbers: ["123456789"],
     *             isCertified: true,
     *             electronicSignature: {
     *                 signature: "Hooli Representative",
     *                 printedName: "Hooli Representative",
     *                 signedAt: "2024-01-01T00:00:00.000Z",
     *                 ipAddress: "127.0.0.1"
     *             }
     *         }
     *     })
     */
    public async create(
        request: Abound.W8BenERequestSchema,
        requestOptions?: FormW8BenE.RequestOptions
    ): Promise<Abound.W8BenESchema> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Sandbox,
                "/v4/documents/w-8ben-e"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@withabound/node-sdk",
                "X-Fern-SDK-Version": "6.0.44",
                "User-Agent": "@withabound/node-sdk/6.0.44",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
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
     * Retrieves the details of an existing W-8BEN-E document.
     *
     * @param {Abound.types.DocumentId} documentId
     * @param {FormW8BenE.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.types.BadRequestErrorSchema}
     * @throws {@link Abound.types.UnauthorizedErrorSchema}
     * @throws {@link Abound.types.NotFoundErrorSchema}
     * @throws {@link Abound.types.InternalServerErrorSchema}
     *
     * @example
     *     await client.formW8BenE.retrieve("documentId_sampleGyuBXlfAwo")
     */
    public async retrieve(
        documentId: Abound.types.DocumentId,
        requestOptions?: FormW8BenE.RequestOptions
    ): Promise<Abound.W8BenESchema> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Sandbox,
                `/v4/documents/w-8ben-e/${encodeURIComponent(documentId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@withabound/node-sdk",
                "X-Fern-SDK-Version": "6.0.44",
                "User-Agent": "@withabound/node-sdk/6.0.44",
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
