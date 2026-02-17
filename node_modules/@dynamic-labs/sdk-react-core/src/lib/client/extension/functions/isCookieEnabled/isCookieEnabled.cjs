'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@dynamic-labs-sdk/client/core');
var client = require('@dynamic-labs-sdk/client');

const isCookieEnabled = () => core.isCookieEnabled(client.getDefaultClient());

exports.isCookieEnabled = isCookieEnabled;
