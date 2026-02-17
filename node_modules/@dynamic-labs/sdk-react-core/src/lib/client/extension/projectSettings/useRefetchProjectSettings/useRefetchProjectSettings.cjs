'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../_virtual/_tslib.cjs');
var React = require('react');
var client = require('@dynamic-labs-sdk/client');

const useRefetchProjectSettings = () => React.useCallback(() => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    const projectSettings = yield client.fetchProjectSettings();
    return projectSettings || undefined;
}), []);

exports.useRefetchProjectSettings = useRefetchProjectSettings;
