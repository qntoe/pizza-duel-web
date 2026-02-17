import { FC } from 'react';
import { WalletWithStatus } from '../../../../utils/hooks/useWalletDelegation/useWalletDelegation';
import { ChainEnum } from '../../../../..';
export interface WalletsDelegatedSettings {
    name: string;
    url: string;
    icon: string;
    topic: string;
}
export type WalletsDelegatedSettingsViewProps = {
    name?: string;
};
export declare const mapWalletsForRevoke: (wallets: WalletWithStatus[]) => {
    accountAddress: string;
    chainName: ChainEnum;
}[];
export declare const mapWalletsForDelegate: (wallets: WalletWithStatus[]) => {
    accountAddress: string;
    chainName: ChainEnum;
}[];
export declare const createHandleRevoke: (revokeDelegation: (wallets: any[]) => Promise<void>) => (walletWithStatus: WalletWithStatus[]) => Promise<boolean>;
export declare const createHandleDelegate: (delegateKeyShares: (wallets: any[]) => Promise<void>) => (walletWithStatus: WalletWithStatus[]) => Promise<boolean>;
export declare const createHandleWalletStatusChange: (handleRevoke: (wallets: WalletWithStatus[]) => Promise<boolean>, handleDelegate: (wallets: WalletWithStatus[]) => Promise<boolean>) => (wallet: WalletWithStatus) => Promise<void>;
export declare const createHandleRevokeAll: (handleRevoke: (wallets: WalletWithStatus[]) => Promise<boolean>, walletsWithStatus: WalletWithStatus[]) => () => Promise<void>;
export declare const WalletsDelegatedSettingsView: FC<WalletsDelegatedSettingsViewProps>;
export default WalletsDelegatedSettingsView;
