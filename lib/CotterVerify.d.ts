import { Config, VerifyRespondResponse } from "./binder";
import TokenHandler from "./handler/TokenHandler";
declare class CotterVerify {
    config: Config;
    state: string | null;
    loaded: boolean;
    cotterIframeID: string;
    verifier: string;
    cID: string;
    verifyError?: any;
    verifySuccess?: any;
    tokenHander?: TokenHandler;
    RegisterWebAuthn?: boolean;
    Identifier?: string;
    LoginWebAuthn?: boolean;
    ContinueSubmitData?: any;
    constructor(config: Config, tokenHandler?: TokenHandler);
    showEmailForm(): Promise<unknown>;
    showPhoneForm(): Promise<unknown>;
    showForm(): Promise<unknown>;
    removeForm(): void;
    onSuccess(data: object | string): void;
    onError(error: object | string): void;
    submitAuthorizationCode(payload: VerifyRespondResponse): Promise<void>;
    StopSubmissionWithError(err: string, iframeID: string): void;
    continue(payload: {
        identifier: string;
        auth_required?: boolean;
    }, iframeID: string): Promise<void>;
    static ContinueSubmit(payload: object, iframeID: string): void;
    static sendPost(data: object, iframeID: string): void;
}
export default CotterVerify;
