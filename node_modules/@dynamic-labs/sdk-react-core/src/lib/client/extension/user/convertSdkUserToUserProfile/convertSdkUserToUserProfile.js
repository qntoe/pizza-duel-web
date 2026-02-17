'use client'
/**
 * @deprecated you should be using the SdkUser object directly instead
 */
const convertSdkUserToUserProfile = (sdkUser) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    return ({
        alias: (_a = sdkUser.alias) !== null && _a !== void 0 ? _a : undefined,
        btcWallet: (_b = sdkUser.btcWallet) !== null && _b !== void 0 ? _b : undefined,
        ckbWallet: (_c = sdkUser.ckbWallet) !== null && _c !== void 0 ? _c : undefined,
        country: (_d = sdkUser.country) !== null && _d !== void 0 ? _d : undefined,
        discordNotification: (_e = sdkUser.discordNotification) !== null && _e !== void 0 ? _e : undefined,
        dogeWallet: (_f = sdkUser.dogeWallet) !== null && _f !== void 0 ? _f : undefined,
        email: (_g = sdkUser.email) !== null && _g !== void 0 ? _g : undefined,
        emailNotification: (_h = sdkUser.emailNotification) !== null && _h !== void 0 ? _h : undefined,
        environmentId: sdkUser.projectEnvironmentId,
        firstName: (_j = sdkUser.firstName) !== null && _j !== void 0 ? _j : undefined,
        jobTitle: (_k = sdkUser.jobTitle) !== null && _k !== void 0 ? _k : undefined,
        kasWallet: (_l = sdkUser.kasWallet) !== null && _l !== void 0 ? _l : undefined,
        kdaWallet: (_m = sdkUser.kdaWallet) !== null && _m !== void 0 ? _m : undefined,
        lastName: (_o = sdkUser.lastName) !== null && _o !== void 0 ? _o : undefined,
        lastVerifiedCredentialId: (_p = sdkUser.lastVerifiedCredentialId) !== null && _p !== void 0 ? _p : undefined,
        lists: sdkUser.lists,
        ltcWallet: (_q = sdkUser.ltcWallet) !== null && _q !== void 0 ? _q : undefined,
        metadata: sdkUser.metadata,
        mfaBackupCodeAcknowledgement: sdkUser.mfaBackupCodeAcknowledgement,
        missingFields: sdkUser.missingFields,
        newUser: sdkUser.newUser,
        newsletterNotification: (_r = sdkUser.newsletterNotification) !== null && _r !== void 0 ? _r : undefined,
        phoneNumber: (_s = sdkUser.phoneNumber) !== null && _s !== void 0 ? _s : undefined,
        policiesConsent: (_t = sdkUser.policiesConsent) !== null && _t !== void 0 ? _t : undefined,
        scope: sdkUser.scope,
        sessionId: (_u = sdkUser.sessionId) !== null && _u !== void 0 ? _u : 'missing-sessionId',
        tShirtSize: (_v = sdkUser.tShirtSize) !== null && _v !== void 0 ? _v : undefined,
        team: (_w = sdkUser.team) !== null && _w !== void 0 ? _w : undefined,
        userId: sdkUser.id,
        username: (_x = sdkUser.username) !== null && _x !== void 0 ? _x : undefined,
        verifiedCredentials: sdkUser.verifiedCredentials || [],
    });
};

export { convertSdkUserToUserProfile };
