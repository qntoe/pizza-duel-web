import { DynamicError } from '@dynamic-labs/utils';
import { WalletConnector } from '@dynamic-labs/wallet-connector-core';
export declare class HandleConnectWalletRejectionError extends DynamicError {
    walletConnector: WalletConnector;
    constructor(walletConnector: WalletConnector);
}
