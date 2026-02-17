'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var useClientState = require('../../hooks/useClientState/useClientState.cjs');
var convertSdkUserToUserProfile = require('../convertSdkUserToUserProfile/convertSdkUserToUserProfile.cjs');

const useUser = () => useClientState.useClientState('user');
/**
 * @deprecated you should call useUser() instead
 */
const useUserProfile = () => {
    const user = useUser();
    return React.useMemo(() => (user ? convertSdkUserToUserProfile.convertSdkUserToUserProfile(user) : undefined), [user]);
};

exports.useUser = useUser;
exports.useUserProfile = useUserProfile;
