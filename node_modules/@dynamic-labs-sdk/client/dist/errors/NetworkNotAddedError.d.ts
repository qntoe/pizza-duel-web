import type { NetworkData } from '../modules/wallets/networks/networkProvider/networkProvider.types';
import { BaseError } from './base';
type NetworkNotAddedErrorParams = {
    networkData: NetworkData;
    networkId: string;
    originalError: unknown;
    walletProviderKey: string;
};
export declare class NetworkNotAddedError extends BaseError {
    readonly networkData: NetworkData;
    constructor({ networkData, networkId, originalError, walletProviderKey, }: NetworkNotAddedErrorParams);
}
export {};
//# sourceMappingURL=NetworkNotAddedError.d.ts.map