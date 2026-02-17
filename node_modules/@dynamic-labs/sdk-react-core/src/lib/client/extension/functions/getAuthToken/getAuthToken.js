'use client'
import { getDefaultClient } from '@dynamic-labs-sdk/client';
import { getCore } from '@dynamic-labs-sdk/client/core';

const getAuthToken = () => {
    const core = getCore(getDefaultClient());
    const { legacyToken } = core.state.get();
    return legacyToken !== null && legacyToken !== void 0 ? legacyToken : undefined;
};

export { getAuthToken };
