import { WalletRecoveryState } from '@dynamic-labs-wallet/browser-wallet-client';
import { ChainEnum } from '@dynamic-labs/sdk-api-core';
export type WalletUnlockState = {
    isLocked: boolean;
    recoveryState: WalletRecoveryState | null;
    isLoading: boolean;
    error: string | null;
};
export type UseWalletUnlockReturn = {
    checkWalletLockState: (accountAddress: string, chainName: ChainEnum) => Promise<WalletRecoveryState | null>;
    unlockWallet: (accountAddress: string, chainName: ChainEnum, password: string) => Promise<boolean>;
    state: WalletUnlockState;
    resetState: () => void;
};
export declare const useWalletUnlock: () => UseWalletUnlockReturn;
