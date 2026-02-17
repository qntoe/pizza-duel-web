import { WalletConnectorBase } from '@dynamic-labs/wallet-connector-core';
export type SetSelectedWalletConnectorKey = (data: {
    key: string;
    chain?: WalletConnectorBase['connectedChain'];
} | string | null) => void;
