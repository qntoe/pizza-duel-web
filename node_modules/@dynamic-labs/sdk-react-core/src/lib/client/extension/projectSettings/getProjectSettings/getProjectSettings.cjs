'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var client = require('../../../client.cjs');

const getProjectSettings = () => { var _a; return (_a = client.getDynamicClient().projectSettings) !== null && _a !== void 0 ? _a : undefined; };

exports.getProjectSettings = getProjectSettings;
