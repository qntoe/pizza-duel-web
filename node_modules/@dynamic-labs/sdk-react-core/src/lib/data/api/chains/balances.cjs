'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var sdkApiCore = require('@dynamic-labs/sdk-api-core');
var api = require('../api.cjs');

const getAccountTokenBalances = (_a) => _tslib.__awaiter(void 0, [_a], void 0, function* ({ environmentId, chainName = sdkApiCore.ChainEnum.Evm, networkId, accountAddress, includeNative = false, includePrices = false, forceRefresh = false, filterSpamTokens = true, whitelistedContracts, }) {
    const customHeaders = forceRefresh
        ? { 'Cache-Control': 'no-cache' }
        : undefined;
    const data = yield api.sdkApi({ customHeaders }).getAccountBalances({
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

exports.getAccountTokenBalances = getAccountTokenBalances;
