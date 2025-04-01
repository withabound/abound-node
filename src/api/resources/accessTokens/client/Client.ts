/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Abound from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace AccessTokens {
    export interface Options {
        environment?: core.Supplier<environments.AboundEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        apiKey: core.Supplier<core.BearerToken>;
        fetcher?: core.FetchFunction;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class AccessTokens {
    constructor(protected readonly _options: AccessTokens.Options) {}

    /**
     * Creates an access token for authenticating Drop-In UI Components.
     *
     * @param {Abound.AccessTokenRequestSchema} request
     * @param {AccessTokens.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.types.BadRequestErrorSchema}
     * @throws {@link Abound.types.UnauthorizedErrorSchema}
     * @throws {@link Abound.types.NotFoundErrorSchema}
     * @throws {@link Abound.types.InternalServerErrorSchema}
     *
     * @example
     *     await client.accessTokens.create({
     *         expiresIn: 900
     *     })
     */
    public async create(
        request: Abound.AccessTokenRequestSchema,
        requestOptions?: AccessTokens.RequestOptions,
    ): Promise<Abound.AccessTokenSchema> {
        const { "Idempotency-Key": idempotencyKey, ..._body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.AboundEnvironment.Sandbox,
                "/v4/access-tokens",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@withabound/node-sdk",
                "X-Fern-SDK-Version": "6.0.65",
                "User-Agent": "@withabound/node-sdk/6.0.65",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                "Idempotency-Key": idempotencyKey != null ? idempotencyKey : undefined,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: _body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Abound.AccessTokenSchema;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Abound.types.BadRequestErrorSchema(
                        _response.error.body as Abound.types.ErrorBadRequestSchema,
                    );
                case 401:
                    throw new Abound.types.UnauthorizedErrorSchema(
                        _response.error.body as Abound.types.DefaultErrorSchema,
                    );
                case 404:
                    throw new Abound.types.NotFoundErrorSchema(_response.error.body as Abound.types.DefaultErrorSchema);
                case 500:
                    throw new Abound.types.InternalServerErrorSchema(
                        _response.error.body as Abound.types.DefaultErrorSchema,
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
                throw new errors.AboundTimeoutError("Timeout exceeded when calling POST /v4/access-tokens.");
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
