import { BaseError } from './base';
type UnrecognizedNetworkErrorParams = {
    networkId: string;
    originalError: unknown;
    walletProviderKey: string;
};
export declare class UnrecognizedNetworkError extends BaseError {
    constructor({ networkId, originalError, walletProviderKey, }: UnrecognizedNetworkErrorParams);
}
export {};
//# sourceMappingURL=UnrecognizedNetworkError.d.ts.map