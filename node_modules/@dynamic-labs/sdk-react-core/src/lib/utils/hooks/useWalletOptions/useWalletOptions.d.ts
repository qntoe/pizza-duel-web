import { Chain, Wallet } from '@dynamic-labs/wallet-connector-core';
import { WalletOptionMetadata } from '@dynamic-labs/types';
import { WalletOption } from '../../../shared';
export declare const useWalletOptions: () => {
    getFilteredWalletOptions: (filter: (options: WalletOption[]) => WalletOption[]) => WalletOptionMetadata[];
    selectWalletOption: (walletKey: string, selectGroupIfAvailable?: boolean, skipAllSelectionUi?: boolean, chain?: Chain) => Promise<Wallet<import("@dynamic-labs/wallet-connector-core").WalletConnectorCore.WalletConnector>>;
    walletOptions: WalletOptionMetadata[];
};
