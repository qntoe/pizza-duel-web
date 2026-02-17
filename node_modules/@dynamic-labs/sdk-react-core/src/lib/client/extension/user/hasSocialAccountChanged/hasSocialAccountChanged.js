'use client'
/**
 * Determines if social accounts have changed between two user profiles.
 * Detects linking, unlinking, and credential replacement scenarios.
 *
 * @param oldUser - The previous user profile
 * @param newUser - The current user profile
 * @returns true if social accounts have changed, false otherwise
 */
const hasSocialAccountChanged = (oldUser, newUser) => {
    var _a, _b, _c, _d;
    const oldOAuthCredentials = (_b = (_a = oldUser.verifiedCredentials) === null || _a === void 0 ? void 0 : _a.filter((credential) => credential.format === 'oauth')) !== null && _b !== void 0 ? _b : [];
    const newOAuthCredentials = (_d = (_c = newUser.verifiedCredentials) === null || _c === void 0 ? void 0 : _c.filter((credential) => credential.format === 'oauth')) !== null && _d !== void 0 ? _d : [];
    // If the counts are different, there's definitely a change
    if (oldOAuthCredentials.length !== newOAuthCredentials.length) {
        return true;
    }
    // If counts are the same, check if the actual credentials are different
    // Create sets of credential IDs for comparison
    const oldCredentialIds = new Set(oldOAuthCredentials.map((cred) => cred.id));
    const newCredentialIds = new Set(newOAuthCredentials.map((cred) => cred.id));
    // Check if any credential IDs are different
    if (oldCredentialIds.size !== newCredentialIds.size) {
        return true;
    }
    // Check if any credential IDs are missing or new
    for (const oldId of oldCredentialIds) {
        if (!newCredentialIds.has(oldId)) {
            return true;
        }
    }
    for (const newId of newCredentialIds) {
        if (!oldCredentialIds.has(newId)) {
            return true;
        }
    }
    // If we get here, the credentials are the same
    return false;
};

export { hasSocialAccountChanged };
