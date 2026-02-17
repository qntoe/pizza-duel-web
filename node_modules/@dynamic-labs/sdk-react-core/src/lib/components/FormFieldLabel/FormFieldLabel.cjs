'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var classNames = require('../../utils/functions/classNames/classNames.cjs');

const FormFieldLabel = (_a) => {
    var { children, htmlFor, className, divider } = _a, props = _tslib.__rest(_a, ["children", "htmlFor", "className", "divider"]);
    return (jsxRuntime.jsx("label", Object.assign({ className: classNames.classNames('form-field-label', { 'form-field-label__with-divider': divider }, className), htmlFor: htmlFor }, props, { children: children })));
};

exports.FormFieldLabel = FormFieldLabel;
