import { JwtVerifiedCredential } from '@dynamic-labs/sdk-api-core';
import { UserProfile } from '../..';
import { Wallet } from '../shared/types/wallets';
export type WalletUnlockPayload = {
    accountAddress: string;
    chainName: string;
};
export type WalletUnlockPasswordPayload = WalletUnlockPayload & {
    password: string;
};
export type EmbeddedWalletEvents = {
    embeddedWalletCreated: (wallet: Wallet, verifiedCredential: JwtVerifiedCredential | undefined, user: UserProfile | undefined) => void;
    embeddedWalletFailed: (error: unknown) => void;
    embeddedWalletRevealCompleted: (wallet: Wallet) => void;
    embeddedWalletRevealFailed: (error: unknown) => void;
    embeddedWalletDelegationCompleted: (wallet: Wallet) => void;
    embeddedWalletDelegationFailed: (error: unknown) => void;
    embeddedWalletRecoveryEmailCompleted: (email: string) => void;
    embeddedWalletRecoveryEmailFailed: (error: unknown) => void;
    embeddedWalletPasswordSetupCompleted: (password: string) => void;
    embeddedWalletPasswordSetupCancelled: () => void;
    walletUnlockAttempt: (payload: WalletUnlockPayload) => void;
    walletUnlockPasswordProvided: (payload: WalletUnlockPasswordPayload) => void;
    walletUnlockCompleted: (payload: WalletUnlockPayload) => void;
    walletUnlockFailed: (payload: WalletUnlockPayload & {
        error: unknown;
    }) => void;
    walletUnlockCancelled: (payload: WalletUnlockPayload) => void;
};
