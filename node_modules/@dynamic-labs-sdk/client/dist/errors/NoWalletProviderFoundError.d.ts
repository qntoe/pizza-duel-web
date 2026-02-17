import { BaseError } from './base';
type NoWalletProviderFoundErrorParams = {
    walletProviderKey: string;
};
export declare class NoWalletProviderFoundError extends BaseError {
    constructor({ walletProviderKey }: NoWalletProviderFoundErrorParams);
}
export {};
//# sourceMappingURL=NoWalletProviderFoundError.d.ts.map