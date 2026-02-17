'use client'
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const useGetPasskeyErrorMessage = (error) => {
    const { t } = useTranslation();
    return useMemo(() => {
        if (!error) {
            return undefined;
        }
        if (error.name === 'NotAllowedError') {
            return t('dyn_mfa.confirm_passkey_view.error.not_allowed');
        }
        if (error.name === 'InvalidStateError') {
            return error.message;
        }
        return error.message;
    }, [error, t]);
};

export { useGetPasskeyErrorMessage };
