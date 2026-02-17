import { Wallet, WalletConnectorCore } from '@dynamic-labs/wallet-connector-core';
import { UserProfile } from '@dynamic-labs/types';
export interface ExportWalletCredentialParams {
    isTurnkeyWallet: boolean;
    isWaasWallet: boolean;
    wallet: Wallet<WalletConnectorCore.WalletConnector>;
    user: UserProfile | undefined;
    environmentId: string;
    exportPrivateKey?: boolean;
    iframeContainerRef?: HTMLIFrameElement | null;
    handleAcknowledgeExportPrompt: () => void;
}
export declare const exportWalletCredential: ({ isTurnkeyWallet, isWaasWallet, wallet, user, environmentId, exportPrivateKey, iframeContainerRef, handleAcknowledgeExportPrompt, }: ExportWalletCredentialParams) => Promise<boolean | undefined>;
