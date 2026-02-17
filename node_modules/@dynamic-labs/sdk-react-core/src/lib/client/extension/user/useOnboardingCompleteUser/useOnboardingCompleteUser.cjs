'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hasPendingRequirements = require('../../../../shared/utils/functions/hasPendingRequirements/hasPendingRequirements.cjs');
var convertSdkUserToUserProfile = require('../convertSdkUserToUserProfile/convertSdkUserToUserProfile.cjs');
var useUser = require('../useUser/useUser.cjs');

/**
 * Returns the user if and only if the user is logged in and has completed the onboarding process.
 *
 * We used to have the concept of "onboardingOnlyJwt", but now we only have the standard JWT.
 * Some customers used to rely on there not being a user until onboarding was complete.
 * To maintain backwards compatibility, we had to add logic that checks if a user has completed onboarding.
 * However, once a user is "tagged" as onboarding complete, it should never go back
 * to an incomplete onboarding tag unless they log out.
 * In order to ensure this doesn't happen we lock it with a ref.
 */
const useOnboardingCompleteUser = () => {
    const onboardingIsComplete = React.useRef(false);
    const user = useUser.useUser();
    if (!user) {
        // On logout, we unlock the ref.
        onboardingIsComplete.current = false;
        return;
    }
    if (!onboardingIsComplete.current && hasPendingRequirements.hasPendingRequirements(user)) {
        return;
    }
    onboardingIsComplete.current = true;
    return user;
};
/**
 * @deprecated you should call useOnboardingCompleteUser() instead
 */
const useOnboardingCompleteUserProfile = () => {
    const user = useOnboardingCompleteUser();
    return React.useMemo(() => (user ? convertSdkUserToUserProfile.convertSdkUserToUserProfile(user) : undefined), [user]);
};

exports.useOnboardingCompleteUser = useOnboardingCompleteUser;
exports.useOnboardingCompleteUserProfile = useOnboardingCompleteUserProfile;
