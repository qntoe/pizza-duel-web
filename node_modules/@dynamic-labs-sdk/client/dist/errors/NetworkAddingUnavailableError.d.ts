import { BaseError } from './base';
type NetworkAddingUnavailableErrorParams = {
    extraMessages?: string[];
    originalError: unknown;
    walletProviderKey: string;
};
export declare class NetworkAddingUnavailableError extends BaseError {
    constructor({ walletProviderKey, originalError, extraMessages, }: NetworkAddingUnavailableErrorParams);
}
export {};
//# sourceMappingURL=NetworkAddingUnavailableError.d.ts.map