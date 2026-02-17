'use client'
import { updateAuthFromVerifyResponse } from '@dynamic-labs-sdk/client/core';
import { getDynamicClient } from '../../client.js';
import { convertSdkUserToUserProfile } from '../user/convertSdkUserToUserProfile/convertSdkUserToUserProfile.js';
import { raiseUserProfileEvent } from '../user/raiseUserProfileEvent/raiseUserProfileEvent.js';

const storeTokenAndUser = (verifyResponse) => {
    const oldUser = getDynamicClient().user;
    updateAuthFromVerifyResponse({ response: verifyResponse }, getDynamicClient());
    if (verifyResponse.user && oldUser)
        raiseUserProfileEvent({ newUser: verifyResponse.user, oldUser });
    return convertSdkUserToUserProfile(verifyResponse.user);
};

export { storeTokenAndUser };
