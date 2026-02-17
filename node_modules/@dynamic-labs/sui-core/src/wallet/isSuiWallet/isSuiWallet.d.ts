import { Wallet } from '@dynamic-labs/wallet-connector-core';
import { SuiWallet } from '../SuiWallet';
export declare const isSuiWallet: (wallet: Wallet) => wallet is SuiWallet;
