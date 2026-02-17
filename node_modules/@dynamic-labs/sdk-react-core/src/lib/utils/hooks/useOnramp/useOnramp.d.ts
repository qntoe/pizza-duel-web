import type { OnrampProviders } from '@dynamic-labs/sdk-api-core';
type OnrampParams = {
    onrampProvider: OnrampProviders;
    address?: string;
    token?: string;
    tokenAmount?: number;
    network?: string | number;
    chainName?: string;
    currency?: string;
    merchantName?: string;
};
export declare const useOnramp: () => {
    enabled: boolean;
    getOnrampQrCode: (params: OnrampParams) => Promise<string | undefined>;
    getOnrampUrl: (params: OnrampParams) => Promise<string | undefined>;
    open: (props: {
        address?: string | undefined;
        token?: string | undefined;
        onrampProvider: OnrampProviders;
        tokenAmount?: number | undefined;
        network?: string | undefined;
        chainName?: string | undefined;
        currency?: string | undefined;
        overrideOnRamp?: boolean | undefined;
        payingWithDynamic?: boolean | undefined;
        merchantName?: string | undefined;
    }) => Promise<void>;
    providers: import("../../../context/DynamicContext").OnrampOption[];
};
export {};
