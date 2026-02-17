'use client'
import { useMemo } from 'react';
import { useClientState } from '../../hooks/useClientState/useClientState.js';
import { convertSdkUserToUserProfile } from '../convertSdkUserToUserProfile/convertSdkUserToUserProfile.js';

const useUser = () => useClientState('user');
/**
 * @deprecated you should call useUser() instead
 */
const useUserProfile = () => {
    const user = useUser();
    return useMemo(() => (user ? convertSdkUserToUserProfile(user) : undefined), [user]);
};

export { useUser, useUserProfile };
