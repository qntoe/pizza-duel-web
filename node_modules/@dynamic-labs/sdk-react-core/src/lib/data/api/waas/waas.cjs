'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react');
require('react/jsx-runtime');
require('../../../context/ViewContext/ViewContext.cjs');
var logger = require('../../../shared/logger.cjs');
require('@dynamic-labs/wallet-book');
require('@dynamic-labs/utils');
require('../../../utils/constants/colors.cjs');
require('../../../utils/constants/values.cjs');
require('@dynamic-labs/sdk-api-core');
require('../../../shared/consts/index.cjs');
var api = require('../api.cjs');

const updateWaasWalletSettings = (environmentId, walletId, settings) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    try {
        yield api.sdkApi().updateWaasWalletSettings({
            environmentId,
            updateWaasWalletSettingsRequest: settings,
            walletId,
        }, {
            credentials: 'omit',
        });
    }
    catch (error) {
        logger.logger.error('Failed to update waas wallet settings', { error, walletId });
        throw error;
    }
});

exports.updateWaasWalletSettings = updateWaasWalletSettings;
