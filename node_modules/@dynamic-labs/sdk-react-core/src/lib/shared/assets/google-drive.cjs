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

var _g, _defs;
var _excluded = ["title", "titleId"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var SvgGoogleDrive = function SvgGoogleDrive(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: 20,
    height: 24,
    viewBox: "0 0 20 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, _g || (_g = /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#google-drive_svg__a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "m1.512 21.141.882 1.705c.183.36.447.641.756.846L6.3 17.59H0c0 .397.092.795.275 1.154l1.237 2.397Z",
    fill: "#0066DA"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M10 10.41 6.85 4.308a2.22 2.22 0 0 0-.756.846L.274 16.436A2.54 2.54 0 0 0 0 17.59h6.3l3.7-7.18Z",
    fill: "#00AC47"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M16.85 23.692a2.22 2.22 0 0 0 .756-.846l.366-.705 1.753-3.397A2.54 2.54 0 0 0 20 17.59h-6.3l1.34 2.948 1.81 3.154Z",
    fill: "#EA4335"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "m10 10.41 3.15-6.102A1.852 1.852 0 0 0 12.119 4H7.88a1.96 1.96 0 0 0-1.031.308L10 10.41Z",
    fill: "#00832D"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M13.7 17.59H6.3l-3.15 6.102c.31.205.665.308 1.031.308H15.82a1.96 1.96 0 0 0 1.031-.308L13.7 17.59Z",
    fill: "#2684FC"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "m16.816 10.795-2.91-5.641a2.221 2.221 0 0 0-.756-.846L10 10.41l3.7 7.18h6.288a2.54 2.54 0 0 0-.274-1.154l-2.898-5.641Z",
    fill: "#FFBA00"
  }))), _defs || (_defs = /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "google-drive_svg__a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    transform: "translate(0 4)",
    d: "M0 0h20v20H0z"
  })))));
};

exports.ReactComponent = SvgGoogleDrive;
