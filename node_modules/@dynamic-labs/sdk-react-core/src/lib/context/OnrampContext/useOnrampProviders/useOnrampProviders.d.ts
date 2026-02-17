import { type OnrampProviders, type RampConfiguration } from '@dynamic-labs/sdk-api-core';
import { type Wallet } from '@dynamic-labs/wallet-connector-core';
export type OnrampProvidersTarget = {
    address?: string;
    chainName?: string;
    currency?: string;
    network?: string;
    token?: string;
    tokenAmount?: number;
};
type UseOnrampProvidersProps = {
    projectSettingsOnramps: OnrampProviders[] | undefined;
    primaryWallet: Wallet | null;
    network: number | string | undefined;
    environmentId: string;
    target: OnrampProvidersTarget;
    includeDisabled?: boolean;
    shouldFetch?: boolean;
};
export declare const useOnrampProviders: ({ primaryWallet, network, environmentId, projectSettingsOnramps, target, includeDisabled, shouldFetch, }: UseOnrampProvidersProps) => {
    allOnRamps: RampConfiguration[];
    enabledOnRamps: RampConfiguration[];
};
export {};
