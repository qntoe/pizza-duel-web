'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var client = require('../../../client.cjs');
var convertSdkUserToUserProfile = require('../convertSdkUserToUserProfile/convertSdkUserToUserProfile.cjs');

/**
 * @deprecated you should call getClient().user instead
 */
const getUserProfile = () => {
    const { user } = client.getDynamicClient();
    if (!user)
        return undefined;
    return convertSdkUserToUserProfile.convertSdkUserToUserProfile(user);
};

exports.getUserProfile = getUserProfile;
