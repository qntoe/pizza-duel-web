'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var client = require('@dynamic-labs-sdk/client');

const getMinAuthToken = () => { var _a; return (_a = client.getDefaultClient().token) !== null && _a !== void 0 ? _a : undefined; };

exports.getMinAuthToken = getMinAuthToken;
