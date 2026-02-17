import { RampConfiguration } from '@dynamic-labs/sdk-api-core';
import { GetProvidersParams } from '../types';
export declare const getOnrampProviders: ({ address, chainName, environmentId, network, primaryWallet, token, tokenAmount, currency, includeDisabled, merchantName, }: GetProvidersParams) => Promise<RampConfiguration[]>;
