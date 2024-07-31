import { AboundClient as FernClient } from "../Client";
import * as core from "../core";
import * as environments from "../environments";

export declare namespace AboundClient {
    
    interface Options {
        environment?: core.Supplier<environments.AboundEnvironment | string>;
        appId: core.Supplier<string>;
        appSecret: core.Supplier<string>;
    }
}

export class AboundClient extends FernClient {

    constructor(_options: AboundClient.Options) {
        super({
            ..._options,
            token: `${_options.appId}.${_options.appSecret}`,
        })
    }
}