'use client'
import { getCore, createApiClient } from '@dynamic-labs-sdk/client/core';
import { MFADeviceType } from '@dynamic-labs/sdk-api-core';
import { getDynamicClient } from '../../../../client.js';

const verifyTotpMfaDevice = ({ code }) => {
    const client = getDynamicClient();
    const core = getCore(client);
    const apiClient = createApiClient({}, client);
    return apiClient.registerTotpMfaDeviceVerify({
        environmentId: core.environmentId,
        mFARegisterTotpDevicePostRequest: {
            code,
            type: MFADeviceType.Totp,
        },
    });
};

export { verifyTotpMfaDevice };
