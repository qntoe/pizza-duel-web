/**
 * @deprecated use useOnramp instead
 */
export declare const useFunding: () => {
    enabled: boolean;
    openExternalFunding: (props: {
        address?: string | undefined;
        token?: string | undefined;
        onrampProvider: import("@dynamic-labs/sdk-api-core").OnrampProviders;
        tokenAmount?: number | undefined;
        network?: string | undefined;
        chainName?: string | undefined;
        currency?: string | undefined;
        overrideOnRamp?: boolean | undefined;
        payingWithDynamic?: boolean | undefined;
        merchantName?: string | undefined;
    }) => Promise<void>;
};
