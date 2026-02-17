'use client'
import { ExchangeKeyEnum, ProviderEnum } from '@dynamic-labs/sdk-api-core';

const EXCHANGE_TO_PROVIDER_OVERRIDES = {
    [ExchangeKeyEnum.Coinbase]: ProviderEnum.Coinbasesocial,
    [ExchangeKeyEnum.Kraken]: ProviderEnum.Kraken,
};
const PROVIDER_TO_EXCHANGE_OVERRIDES = Object.fromEntries(Object.entries(EXCHANGE_TO_PROVIDER_OVERRIDES).map(([exchange, provider]) => [
    provider,
    exchange,
]));
const convertExchangeKeytoProviderEnum = (exchangeKey) => {
    const overridden = EXCHANGE_TO_PROVIDER_OVERRIDES[exchangeKey];
    if (overridden)
        return overridden;
    const provider = ProviderEnum[exchangeKey];
    if (provider)
        return provider;
    throw new Error(`convertExchangeKeytoProviderEnum: No ProviderEnum value found for ExchangeKeyEnum.${exchangeKey}`);
};
const convertProviderToExchangeKeyEnum = (provider) => {
    const overridden = PROVIDER_TO_EXCHANGE_OVERRIDES[provider];
    if (overridden)
        return overridden;
    const exchange = ExchangeKeyEnum[provider];
    if (exchange)
        return exchange;
    throw new Error(`convertProviderToExchangeKeyEnum: No ExchangeKeyEnum value found for ProviderEnum.${provider}`);
};

export { convertExchangeKeytoProviderEnum, convertProviderToExchangeKeyEnum };
