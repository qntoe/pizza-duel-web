import { BaseError } from './base';
type NetworkSwitchingUnavailableErrorParams = {
    extraMessages?: string[];
    originalError: unknown;
    walletProviderKey: string;
};
export declare class NetworkSwitchingUnavailableError extends BaseError {
    constructor({ walletProviderKey, originalError, extraMessages, }: NetworkSwitchingUnavailableErrorParams);
}
export {};
//# sourceMappingURL=NetworkSwitchingUnavailableError.d.ts.map