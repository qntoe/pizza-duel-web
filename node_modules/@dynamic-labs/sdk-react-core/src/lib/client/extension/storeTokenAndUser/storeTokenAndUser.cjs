'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@dynamic-labs-sdk/client/core');
var client = require('../../client.cjs');
var convertSdkUserToUserProfile = require('../user/convertSdkUserToUserProfile/convertSdkUserToUserProfile.cjs');
var raiseUserProfileEvent = require('../user/raiseUserProfileEvent/raiseUserProfileEvent.cjs');

const storeTokenAndUser = (verifyResponse) => {
    const oldUser = client.getDynamicClient().user;
    core.updateAuthFromVerifyResponse({ response: verifyResponse }, client.getDynamicClient());
    if (verifyResponse.user && oldUser)
        raiseUserProfileEvent.raiseUserProfileEvent({ newUser: verifyResponse.user, oldUser });
    return convertSdkUserToUserProfile.convertSdkUserToUserProfile(verifyResponse.user);
};

exports.storeTokenAndUser = storeTokenAndUser;
