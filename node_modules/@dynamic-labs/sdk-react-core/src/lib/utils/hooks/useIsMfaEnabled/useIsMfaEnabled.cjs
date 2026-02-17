'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var useIsPasskeysMfaEnabled = require('../useIsPasskeysMfaEnabled/useIsPasskeysMfaEnabled.cjs');
var useIsTotpMfaEnabled = require('../useIsTotpMfaEnabled/useIsTotpMfaEnabled.cjs');

const useIsMfaEnabled = () => {
    const isTotpMfaEnabled = useIsTotpMfaEnabled.useIsTotpMfaEnabled();
    const isPasskeysMfaEnabled = useIsPasskeysMfaEnabled.useIsPasskeysMfaEnabled();
    return isTotpMfaEnabled || isPasskeysMfaEnabled;
};

exports.useIsMfaEnabled = useIsMfaEnabled;
