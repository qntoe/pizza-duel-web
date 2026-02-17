import { BaseError } from './base';
type NotWaasWalletProviderErrorParams = {
    walletProviderKey: string;
};
export declare class NotWaasWalletProviderError extends BaseError {
    constructor({ walletProviderKey }: NotWaasWalletProviderErrorParams);
}
export {};
//# sourceMappingURL=NotWaasWalletProviderError.d.ts.map