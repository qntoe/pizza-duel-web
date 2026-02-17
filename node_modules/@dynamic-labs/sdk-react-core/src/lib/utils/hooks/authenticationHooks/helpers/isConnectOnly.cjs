'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var authMode = require('../../../../store/state/authMode/authMode.cjs');

const isConnectOnly = () => {
    const authMode$1 = authMode.getAuthMode();
    return authMode$1 === 'connect-only';
};

exports.isConnectOnly = isConnectOnly;
