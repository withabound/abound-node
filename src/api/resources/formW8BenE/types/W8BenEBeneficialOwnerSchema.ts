/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Abound from "../../../index";

export interface W8BenEBeneficialOwnerSchema extends Abound.W8BenEBeneficialOwnerRequestSchema {
    tinFingerprint?: Abound.types.TinFingerprint;
    tinType?: Abound.types.TinTypeEnum;
    tinVerificationId?: Abound.types.TinVerificationId;
    tinVerificationStatus?: Abound.types.TinVerificationStatusEnum;
    foreignTinFingerprint?: Abound.types.ForeignTinFingerprint;
}
