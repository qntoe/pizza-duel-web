import { InternalWalletConnector, WalletConnectorBase } from '..';
export declare const getWalletConnectorByKey: (wallets: InternalWalletConnector[], key: string, chain?: WalletConnectorBase['connectedChain']) => InternalWalletConnector | null;
