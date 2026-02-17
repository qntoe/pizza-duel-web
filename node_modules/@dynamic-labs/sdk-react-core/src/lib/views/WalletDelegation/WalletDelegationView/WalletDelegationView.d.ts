import { FC } from 'react';
import { Wallet } from '../../../shared';
type WalletDelegationViewProps = {
    /** Optional list of wallets to display instead of default WAAS wallets */
    wallets?: Wallet[];
};
export declare const WalletDelegationView: FC<WalletDelegationViewProps>;
export {};
