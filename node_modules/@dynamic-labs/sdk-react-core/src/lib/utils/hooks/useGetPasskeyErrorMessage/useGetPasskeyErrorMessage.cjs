'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactI18next = require('react-i18next');

const useGetPasskeyErrorMessage = (error) => {
    const { t } = reactI18next.useTranslation();
    return React.useMemo(() => {
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

exports.useGetPasskeyErrorMessage = useGetPasskeyErrorMessage;
