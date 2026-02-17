'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var useClientState = require('../../hooks/useClientState/useClientState.cjs');

const useInitStatus = () => useClientState.useClientState('initStatus');

exports.useInitStatus = useInitStatus;
