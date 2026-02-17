'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

var _path;
var _excluded = ["title", "titleId"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var SvgBackupWaas = function SvgBackupWaas(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: 64,
    height: 64,
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm10.325 34.635a.89.89 0 0 0-1.258-.016l-1.8 1.757a.89.89 0 0 0-.016 1.258l1.758 1.801a.89.89 0 0 0 1.273-1.242l-.338-.346a7.119 7.119 0 1 1-5.245.735.89.89 0 1 0-.886-1.543 8.897 8.897 0 1 0 6.321-.975l.176-.171a.89.89 0 0 0 .015-1.258ZM19.95 15A4.95 4.95 0 0 0 15 19.95v23.1A4.95 4.95 0 0 0 19.95 48h8.11a12.481 12.481 0 0 1-.383-3.081c0-6.002 4.245-11.014 9.897-12.193a2.47 2.47 0 0 1 2.183-.257A12.405 12.405 0 0 1 48 35.262V26.55a4.95 4.95 0 0 0-4.95-4.95h-23.1a1.65 1.65 0 1 1 0-3.3h19.8a1.65 1.65 0 1 0 0-3.3h-19.8Z",
    fill: "#4779FF"
  })));
};

exports.ReactComponent = SvgBackupWaas;
