/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../../../errors/index";
import * as Abound from "../../../../../index";

export class UnauthorizedErrorSchema extends errors.AboundError {
    constructor(body: Abound.types.DefaultErrorSchema) {
        super({
            message: "UnauthorizedErrorSchema",
            statusCode: 401,
            body: body,
        });
        Object.setPrototypeOf(this, UnauthorizedErrorSchema.prototype);
    }
}
