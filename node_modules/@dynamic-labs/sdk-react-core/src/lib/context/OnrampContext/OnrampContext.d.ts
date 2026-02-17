import { type ReactNode } from 'react';
import { type OnrampProviders } from '@dynamic-labs/sdk-api-core';
import type { Wallet } from '@dynamic-labs/wallet-connector-core';
import type { OnrampOption } from '../DynamicContext';
type OpenOnrampProps = {
    address?: string;
    token?: string;
    onrampProvider: OnrampProviders;
    tokenAmount?: number;
    network?: string;
    chainName?: string;
    currency?: string;
    overrideOnRamp?: boolean;
    payingWithDynamic?: boolean;
    merchantName?: string;
};
export type OnrampContextReturn = {
    onrampEnabled: boolean;
    setShowOnramp: (value: boolean) => void;
    showOnramp: boolean;
    selectedOnramp: OnrampOption | undefined;
    enabledOnrampProviders: OnrampOption[];
    openOnramp: (props: OpenOnrampProps) => Promise<void>;
    selectOnrampProvider: ({ provider, wallet, }: {
        provider: OnrampOption;
        wallet: Wallet;
    }) => void;
    setEnabledOnrampProvidersTargetValue: (target: {
        address?: string;
        token?: string;
        network?: string;
        tokenAmount?: number;
        chainName?: string;
        currency?: string;
    }) => void;
};
export declare const OnrampContext: import("react").Context<OnrampContextReturn | undefined>;
export declare const OnrampContextProvider: ({ children, }: {
    children: ReactNode;
}) => JSX.Element;
export declare const useOnrampContext: () => OnrampContextReturn;
export {};
