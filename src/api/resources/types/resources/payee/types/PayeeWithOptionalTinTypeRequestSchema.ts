/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Abound from "../../../../../index";

/**
 * The payee of the document.
 */
export interface PayeeWithOptionalTinTypeRequestSchema extends Abound.types.PayeeRequestSchema {
    tinType?: Abound.types.TinTypeEnum;
}