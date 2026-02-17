export type AccountChangeEventHandler = (accounts: string[]) => Promise<void>;
export type ChainChangeEventHandler = (chainId: string | number) => Promise<void>;
export type DisconnectEventHandler = (error?: {
    code: number;
}) => Promise<void>;
export declare namespace WalletConnectorCore { }
export type { WalletMetadata, HardwareWallet, WalletDeepLinks, WalletDownloadLinks, WalletEvent, WalletLimitations, WalletLinks, WalletMethod, } from '@dynamic-labs/types';
