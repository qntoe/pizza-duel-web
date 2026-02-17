import { FC } from 'react';
import { Wallet, WalletConnectorCore } from '@dynamic-labs/wallet-connector-core';
export interface WalletUpgradeFlowViewProps {
    wallets: Wallet<WalletConnectorCore.WalletConnector>[];
    method: 'new' | 'existing';
    onComplete?: () => void;
    onCancel?: () => void;
}
export declare const WalletUpgradeFlowView: FC<WalletUpgradeFlowViewProps>;
