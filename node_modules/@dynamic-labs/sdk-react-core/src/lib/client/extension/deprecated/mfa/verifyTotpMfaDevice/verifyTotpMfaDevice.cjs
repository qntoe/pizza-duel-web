'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@dynamic-labs-sdk/client/core');
var sdkApiCore = require('@dynamic-labs/sdk-api-core');
var client = require('../../../../client.cjs');

const verifyTotpMfaDevice = ({ code }) => {
    const client$1 = client.getDynamicClient();
    const core$1 = core.getCore(client$1);
    const apiClient = core.createApiClient({}, client$1);
    return apiClient.registerTotpMfaDeviceVerify({
        environmentId: core$1.environmentId,
        mFARegisterTotpDevicePostRequest: {
            code,
            type: sdkApiCore.MFADeviceType.Totp,
        },
    });
};

exports.verifyTotpMfaDevice = verifyTotpMfaDevice;
