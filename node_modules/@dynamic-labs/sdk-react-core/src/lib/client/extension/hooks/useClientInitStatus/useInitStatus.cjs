'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var useClientState = require('../useClientState/useClientState.cjs');

const useClientInitStatus = () => { var _a; return (_a = useClientState.useClientState('initStatus')) !== null && _a !== void 0 ? _a : 'uninitialized'; };

exports.useClientInitStatus = useClientInitStatus;
