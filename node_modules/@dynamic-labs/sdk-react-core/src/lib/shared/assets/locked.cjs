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
var SvgLocked = function SvgLocked(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: 65,
    height: 64,
    viewBox: "0 0 65 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M32.5 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32Zm.455 13a8.074 8.074 0 0 0-8.073 8.073v4.037A13.435 13.435 0 0 0 19.5 35.875c0 7.431 6.025 13.456 13.456 13.456 7.431 0 13.455-6.025 13.455-13.456 0-4.403-2.114-8.312-5.383-10.767v-4.035a8.073 8.073 0 0 0-7.657-8.062L32.955 13ZM33 30a3.5 3.5 0 0 1 1.5 6.663V39.5a1.5 1.5 0 0 1-3 0v-2.837A3.5 3.5 0 0 1 33 30Zm-.045-14a5.073 5.073 0 0 1 5.073 5.073v2.335a13.418 13.418 0 0 0-5.072-.99c-1.795 0-3.508.353-5.074.991v-2.336A5.074 5.074 0 0 1 32.955 16Z",
    fill: "#0A0B0C"
  })));
};

exports.ReactComponent = SvgLocked;
