/// <reference types="react" />
import { DeferredPromise } from '@dynamic-labs/utils';
import { GetAddressOpts, WalletConnectorCore } from '@dynamic-labs/wallet-connector-core';
export declare const useFundingHelpers: () => {
    getWalletAddress: (walletConnector: WalletConnectorCore.WalletConnector) => Promise<string>;
    handleWalletMethod: (props: {
        walletConnector: WalletConnectorCore.WalletConnector;
        getAddressOpts?: GetAddressOpts;
    }) => Promise<void>;
    initiatedByWidgetRef: import("react").MutableRefObject<boolean>;
    internalConnectionPromiseRef: import("react").MutableRefObject<DeferredPromise<string> | null>;
    resetWalletConnectSession: () => Promise<void>;
};
