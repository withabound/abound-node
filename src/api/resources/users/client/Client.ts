/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Abound from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Users {
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

export class Users {
    constructor(protected readonly _options: Users.Options) {}

    /**
     * Returns a list of users. Up to 100 users are returned per request.
     *
     * @param {Abound.UsersListRequest} request
     * @param {Users.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.types.BadRequestErrorSchema}
     * @throws {@link Abound.types.UnauthorizedErrorSchema}
     * @throws {@link Abound.types.NotFoundErrorSchema}
     * @throws {@link Abound.types.InternalServerErrorSchema}
     *
     * @example
     *     await client.users.list()
     */
    public async list(
        request: Abound.UsersListRequest = {},
        requestOptions?: Users.RequestOptions
    ): Promise<Abound.UserSchema[]> {
        const { page, email, foreignId } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (page != null) {
            _queryParams["page"] = page.toString();
        }

        if (email != null) {
            _queryParams["email"] = email;
        }

        if (foreignId != null) {
            _queryParams["foreignId"] = foreignId;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Sandbox,
                "/v4/users"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@withabound/node-sdk",
                "X-Fern-SDK-Version": "6.0.46",
                "User-Agent": "@withabound/node-sdk/6.0.46",
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
            return _response.body as Abound.UserSchema[];
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
     * Creates a user for a single end-user of your application.
     *
     * @param {Abound.UsersCreateRequest} request
     * @param {Users.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.types.BadRequestErrorSchema}
     * @throws {@link Abound.types.UnauthorizedErrorSchema}
     * @throws {@link Abound.types.NotFoundErrorSchema}
     * @throws {@link Abound.types.ConflictErrorSchema}
     * @throws {@link Abound.types.InternalServerErrorSchema}
     *
     * @example
     *     await client.users.create({
     *         body: {
     *             foreignId: "my-foreign-id"
     *         }
     *     })
     */
    public async create(
        request: Abound.UsersCreateRequest,
        requestOptions?: Users.RequestOptions
    ): Promise<Abound.UserSchema> {
        const { "Idempotency-Key": idempotencyKey, body: _body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Sandbox,
                "/v4/users"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@withabound/node-sdk",
                "X-Fern-SDK-Version": "6.0.46",
                "User-Agent": "@withabound/node-sdk/6.0.46",
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
            return _response.body as Abound.UserSchema;
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
                case 409:
                    throw new Abound.types.ConflictErrorSchema(_response.error.body as Abound.types.DefaultErrorSchema);
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
     * Retrieves the details of an existing user.
     *
     * @param {Abound.types.UserId} userId
     * @param {Users.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.types.BadRequestErrorSchema}
     * @throws {@link Abound.types.UnauthorizedErrorSchema}
     * @throws {@link Abound.types.NotFoundErrorSchema}
     * @throws {@link Abound.types.InternalServerErrorSchema}
     *
     * @example
     *     await client.users.retrieve("userId_sampleXGMFnhOpeR")
     */
    public async retrieve(
        userId: Abound.types.UserId,
        requestOptions?: Users.RequestOptions
    ): Promise<Abound.UserSchema> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Sandbox,
                `/v4/users/${encodeURIComponent(userId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@withabound/node-sdk",
                "X-Fern-SDK-Version": "6.0.46",
                "User-Agent": "@withabound/node-sdk/6.0.46",
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
            return _response.body as Abound.UserSchema;
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
     * Updates an existing user. Any body parameters not provided will be removed.
     *
     * @param {Abound.types.UserId} userId
     * @param {Abound.UserRequestSchema} request
     * @param {Users.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.types.BadRequestErrorSchema}
     * @throws {@link Abound.types.UnauthorizedErrorSchema}
     * @throws {@link Abound.types.NotFoundErrorSchema}
     * @throws {@link Abound.types.ConflictErrorSchema}
     *
     * @example
     *     await client.users.update("userId_sampleXGMFnhOpeR", {
     *         foreignId: "my-foreign-id"
     *     })
     */
    public async update(
        userId: Abound.types.UserId,
        request: Abound.UserRequestSchema,
        requestOptions?: Users.RequestOptions
    ): Promise<Abound.UserSchema> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Sandbox,
                `/v4/users/${encodeURIComponent(userId)}`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@withabound/node-sdk",
                "X-Fern-SDK-Version": "6.0.46",
                "User-Agent": "@withabound/node-sdk/6.0.46",
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
            return _response.body as Abound.UserSchema;
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
                case 409:
                    throw new Abound.types.ConflictErrorSchema(_response.error.body as Abound.types.DefaultErrorSchema);
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
