import { ExchangeKeyEnum, ProviderEnum } from '@dynamic-labs/sdk-api-core';
export declare const convertExchangeKeytoProviderEnum: (exchangeKey: ExchangeKeyEnum) => ProviderEnum;
export declare const convertProviderToExchangeKeyEnum: (provider: ProviderEnum) => ExchangeKeyEnum;
export declare const isProviderExchange: (provider: ProviderEnum) => boolean;
