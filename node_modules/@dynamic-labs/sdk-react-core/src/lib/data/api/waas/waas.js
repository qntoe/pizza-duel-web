'use client'
import { __awaiter } from '../../../../../_virtual/_tslib.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react';
import 'react/jsx-runtime';
import '../../../context/ViewContext/ViewContext.js';
import { logger } from '../../../shared/logger.js';
import '@dynamic-labs/wallet-book';
import '@dynamic-labs/utils';
import '../../../utils/constants/colors.js';
import '../../../utils/constants/values.js';
import '@dynamic-labs/sdk-api-core';
import '../../../shared/consts/index.js';
import { sdkApi } from '../api.js';

const updateWaasWalletSettings = (environmentId, walletId, settings) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sdkApi().updateWaasWalletSettings({
            environmentId,
            updateWaasWalletSettingsRequest: settings,
            walletId,
        }, {
            credentials: 'omit',
        });
    }
    catch (error) {
        logger.error('Failed to update waas wallet settings', { error, walletId });
        throw error;
    }
});

export { updateWaasWalletSettings };
