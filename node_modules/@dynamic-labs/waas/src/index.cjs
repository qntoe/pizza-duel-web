'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var assertPackageVersion = require('@dynamic-labs/assert-package-version');
var _package = require('../package.cjs');
var DynamicWaasMixin = require('./DynamicWaasMixin.cjs');

assertPackageVersion.assertPackageVersion('@dynamic-labs/waas', _package.version);

exports.WaasExportHandler = DynamicWaasMixin.WaasExportHandler;
exports.withDynamicWaas = DynamicWaasMixin.withDynamicWaas;
