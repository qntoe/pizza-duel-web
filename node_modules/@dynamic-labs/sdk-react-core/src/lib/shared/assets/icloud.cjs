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

var _path, _defs;
var _excluded = ["title", "titleId"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var SvgIcloud = function SvgIcloud(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M11.468 4.074a5.426 5.426 0 0 0-4.724 2.777 2.976 2.976 0 0 0-1.299-.3 2.976 2.976 0 0 0-2.93 2.5A4.098 4.098 0 0 0 0 12.83a4.098 4.098 0 0 0 4.1 4.094c.172-.001.344-.014.514-.037h11.393c.06.005.12.007.18.009l.171-.009h.273v-.02a3.809 3.809 0 0 0 2.404-1.259c.621-.7.964-1.606.965-2.545v-.007a3.844 3.844 0 0 0-.88-2.44A3.811 3.811 0 0 0 16.894 9.3a5.425 5.425 0 0 0-5.426-5.226Z",
    fill: "url(#icloud_svg__a)"
  })), _defs || (_defs = /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("linearGradient", {
    id: "icloud_svg__a",
    x1: 20.061,
    y1: 13.075,
    x2: -0.007,
    y2: 12.798,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React__namespace.createElement("stop", {
    stopColor: "#3E82F4"
  }), /*#__PURE__*/React__namespace.createElement("stop", {
    offset: 1,
    stopColor: "#93DCF7"
  })))));
};

exports.ReactComponent = SvgIcloud;
