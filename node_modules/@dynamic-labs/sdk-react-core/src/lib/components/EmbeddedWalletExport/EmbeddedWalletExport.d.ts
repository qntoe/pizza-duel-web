import { FC } from 'react';
import { Wallet, WalletConnectorCore } from '@dynamic-labs/wallet-connector-core';
export interface EmbeddedWalletExportProps {
    wallet: Wallet<WalletConnectorCore.WalletConnector>;
    isTurnkeyWallet: boolean;
    isWaasWallet: boolean;
    data: boolean | undefined;
    onIframeContainerRef?: (ref: HTMLDivElement | null) => void;
    onExportReady?: (isReady: boolean, wallet: Wallet<WalletConnectorCore.WalletConnector>) => void;
    isVisible?: boolean;
}
export declare const EmbeddedWalletExport: FC<EmbeddedWalletExportProps>;
