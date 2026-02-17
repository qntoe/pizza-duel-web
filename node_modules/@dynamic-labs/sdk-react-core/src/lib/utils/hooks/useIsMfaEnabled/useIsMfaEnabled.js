'use client'
import { useIsPasskeysMfaEnabled } from '../useIsPasskeysMfaEnabled/useIsPasskeysMfaEnabled.js';
import { useIsTotpMfaEnabled } from '../useIsTotpMfaEnabled/useIsTotpMfaEnabled.js';

const useIsMfaEnabled = () => {
    const isTotpMfaEnabled = useIsTotpMfaEnabled();
    const isPasskeysMfaEnabled = useIsPasskeysMfaEnabled();
    return isTotpMfaEnabled || isPasskeysMfaEnabled;
};

export { useIsMfaEnabled };
