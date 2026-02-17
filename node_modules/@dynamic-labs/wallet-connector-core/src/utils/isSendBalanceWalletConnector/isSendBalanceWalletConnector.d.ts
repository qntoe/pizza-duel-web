import { WalletConnector } from '../..';
import { ISendBalanceWalletConnector } from '../../interfaces/ISendBalanceWalletConnector';
type WalletConnectorWithSendBalance = (WalletConnector | ISendBalanceWalletConnector) & {
    isSendBalanceUnsupported?: () => boolean;
};
export declare const isSendBalanceWalletConnector: (walletConnector: WalletConnectorWithSendBalance) => walletConnector is ISendBalanceWalletConnector;
export {};
