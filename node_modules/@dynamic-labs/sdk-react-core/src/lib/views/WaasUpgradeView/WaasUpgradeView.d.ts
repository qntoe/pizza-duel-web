import { FC } from 'react';
export interface WaasUpgradeViewProps {
    onUpgrade?: (selectedWallets: string[], upgradeOption: 'keep' | 'fresh') => void;
}
export declare const WaasUpgradeView: FC<WaasUpgradeViewProps>;
