'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var client = require('@dynamic-labs-sdk/client');
var core = require('@dynamic-labs-sdk/client/core');

const getAuthToken = () => {
    const core$1 = core.getCore(client.getDefaultClient());
    const { legacyToken } = core$1.state.get();
    return legacyToken !== null && legacyToken !== void 0 ? legacyToken : undefined;
};

exports.getAuthToken = getAuthToken;
