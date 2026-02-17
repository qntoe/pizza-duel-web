import { Wallet } from '@dynamic-labs/wallet-connector-core';
export type GetProvidersParams = {
    address?: string;
    chainName?: string;
    environmentId: string;
    network?: string | number | null;
    primaryWallet?: Wallet | null;
    token?: string;
    tokenAmount?: number;
    currency?: string;
    includeDisabled?: boolean;
    merchantName?: string;
};
