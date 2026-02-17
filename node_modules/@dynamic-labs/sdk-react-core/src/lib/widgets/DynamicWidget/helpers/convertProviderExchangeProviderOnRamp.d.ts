import { OnrampProviders, ProviderEnum } from '@dynamic-labs/sdk-api-core';
export declare const PROVIDER_EXCHANGE_TO_ONRAMP_MAP: Partial<Record<ProviderEnum, OnrampProviders>>;
export declare const PROVIDER_ONRAMP_TO_EXCHANGE_MAP: Record<OnrampProviders, ProviderEnum>;
export declare const convertProviderExchangetoProviderOnRampEnum: (providerExchange: ProviderEnum) => OnrampProviders;
export declare const convertProviderOnRamptoProviderExchangeEnum: (providerOnRamp: OnrampProviders) => ProviderEnum;
export declare const isProviderOnRamp: (provider: ProviderEnum) => boolean;
