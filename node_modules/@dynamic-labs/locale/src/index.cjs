'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var assertPackageVersion = require('@dynamic-labs/assert-package-version');
var _package = require('../package.cjs');
var locale = require('./lib/locale.cjs');
var translation = require('./lib/en/translation.cjs');

assertPackageVersion.assertPackageVersion('@dynamic-labs/locale', _package.version);

exports.Locale = locale.Locale;
exports.translation = translation.translation;
