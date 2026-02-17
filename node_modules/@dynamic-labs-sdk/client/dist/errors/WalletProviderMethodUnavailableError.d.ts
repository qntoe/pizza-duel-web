import { BaseError } from './base';
type WalletProviderMethodUnavailableErrorParams = {
    methodName: string;
    walletProviderKey: string;
};
export declare class WalletProviderMethodUnavailableError extends BaseError {
    constructor({ methodName, walletProviderKey, }: WalletProviderMethodUnavailableErrorParams);
}
export {};
//# sourceMappingURL=WalletProviderMethodUnavailableError.d.ts.map