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
var SvgSparkles = function SvgSparkles(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.667 2.667C7.403 2.667 8 3.264 8 4v1.333h1.333a1.333 1.333 0 0 1 0 2.667H8v1.333a1.333 1.333 0 1 1-2.667 0V8H4a1.333 1.333 0 0 1 0-2.667h1.333V4c0-.736.597-1.333 1.334-1.333Zm10.666 0c.574 0 1.084.367 1.265.911l2.847 8.54 7.023 2.634a1.333 1.333 0 0 1 0 2.496l-7.023 2.634-2.847 8.54a1.333 1.333 0 0 1-2.53 0l-2.846-8.54-7.023-2.634a1.333 1.333 0 0 1 0-2.496l7.023-2.634 2.846-8.54a1.333 1.333 0 0 1 1.265-.911Zm0 5.55-1.782 5.348c-.128.381-.42.685-.797.826L10.464 16l4.29 1.609c.377.141.67.445.797.826l1.782 5.349 1.783-5.348c.127-.382.42-.686.797-.827L24.203 16l-4.29-1.609a1.333 1.333 0 0 1-.797-.826l-1.783-5.349ZM8 21.332c.736 0 1.333.597 1.333 1.334V24h1.334a1.333 1.333 0 0 1 0 2.667H9.333V28a1.333 1.333 0 1 1-2.666 0v-1.333H5.333a1.333 1.333 0 0 1 0-2.667h1.334v-1.333c0-.737.597-1.334 1.333-1.334Z",
    fill: "currentColor"
  })));
};

exports.ReactComponent = SvgSparkles;
