'use client'
import { getDynamicClient } from '../../../client.js';
import { convertSdkUserToUserProfile } from '../convertSdkUserToUserProfile/convertSdkUserToUserProfile.js';

/**
 * @deprecated you should call getClient().user instead
 */
const getUserProfile = () => {
    const { user } = getDynamicClient();
    if (!user)
        return undefined;
    return convertSdkUserToUserProfile(user);
};

export { getUserProfile };
