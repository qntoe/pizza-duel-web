'use client'
import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { ChainEnum } from '@dynamic-labs/sdk-api-core';
import { sdkApi } from '../api.js';

const getAccountTokenBalances = (_a) => __awaiter(void 0, [_a], void 0, function* ({ environmentId, chainName = ChainEnum.Evm, networkId, accountAddress, includeNative = false, includePrices = false, forceRefresh = false, filterSpamTokens = true, whitelistedContracts, }) {
    const customHeaders = forceRefresh
        ? { 'Cache-Control': 'no-cache' }
        : undefined;
    const data = yield sdkApi({ customHeaders }).getAccountBalances({
        accountAddress,
        chainName,
        environmentId,
        filterSpamTokens,
        forceRefresh,
        includeNative,
        includePrices,
        networkId,
        whitelistedContracts,
    });
    return data;
});

export { getAccountTokenBalances };
