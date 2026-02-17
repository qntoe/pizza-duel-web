'use client'
import * as React from 'react';

var _g, _defs;
var _excluded = ["title", "titleId"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var SvgUpgrade = function SvgUpgrade(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 328,
    height: 112,
    viewBox: "0 0 328 112",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, _g || (_g = /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#upgrade_svg__a)"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: 164.5,
    cy: 114,
    r: 114,
    fill: "url(#upgrade_svg__b)",
    fillOpacity: 0.12
  }), /*#__PURE__*/React.createElement("path", {
    d: "M138.586 37.408s12.282 9.32 30.953-8.106c16.582-15.477 30.121 8.941 30.216 20.635.123 15.148-16.582 27.268-8.475 37.217 8.107 9.95-16.077 26.379-29.111 12.16-16.213-17.687-20.605-3.316-29.847-3.316-6.633 0-20.251-16.481-11.055-28.742 7.739-10.318 3.518-13.742 1.475-17.32-2.948-5.158 4.053-19.16 15.844-12.528Z",
    fill: "#DEE9FF"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M193.356 31.055a7.764 7.764 0 0 1-8.274 7.741 7.76 7.76 0 1 1 8.274-7.74Z",
    fill: "#A2BDFF"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M186.574 31.65c-.501.389-1.201 1.165-.99 2.89-.234.67-1.069 1.95-1.069 2.563 0 .612-1.002.723-1.113.556-.111-.168-.167-2.282-.779-2.671-.612-.39-.501-2.17-.501-2.17s.223-.668-.501-1.113c-.723-.445-1.227-1.502-.585-2.115.641-.612-1.084-1.001-1.306-1.446-.095-.19-.458-.612-.843-1.034a7.799 7.799 0 0 1 3.588-3.179c.569.594 1.061 1.355.927 2.154.022.39 1.713 1.001.885 1.836-.829.835-1.954 2.003 0 2.393 1.953.39 2.788.946 2.287 1.335ZM191.019 25.5c-.417.879-1.46 1.587-2.052 1.587-.668-.724-2.115.278-2.25-.89-.079-.682.697-1.739 1.359-2.505a7.777 7.777 0 0 1 2.943 1.809ZM193.326 31.734a7.74 7.74 0 0 1-2.46 5.02c-.257-.246-.474-.534-.397-.764.167-.501.846-1.559.729-2.226-.109-.623.466-2.509 2.128-2.03Z",
    fill: "#0E84E5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M180.69 70.309a21.881 21.881 0 0 1-1.227 4.48c-3.696 9.468-13.612 15.4-24.046 13.695a22.016 22.016 0 0 1-18.014-26.147c2.354-11.517 13.406-19.214 25.112-17.302a21.88 21.88 0 0 1 9.628 4.09 21.659 21.659 0 0 1 2.611 2.299 22 22 0 0 1 5.936 18.884Z",
    fill: "#699CFF"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M179.463 74.79c-4.192 2.698-9.142 5.194-14.6 7.259-5.557 2.1-11.014 3.52-16.016 4.263-11.753 1.752-20.983-.206-23.063-5.707-1.948-5.139 2.843-12.098 11.619-18.268a21.656 21.656 0 0 0-.446 4.11c-5.057 3.904-7.688 7.727-6.651 10.47 1.009 2.667 5.291 3.802 11.383 3.48 5.955-.314 13.64-2.029 21.684-5.07 6.957-2.633 13.058-5.834 17.6-9.05 6.082-4.299 9.38-8.625 8.242-11.643-1.171-3.098-6.756-4.131-14.461-3.21a21.591 21.591 0 0 0-2.611-2.298c10.786-1.247 19.099.79 21.058 5.972 2.1 5.542-3.625 13.193-13.738 19.692Z",
    fill: "#0E84E5"
  }))), _defs || (_defs = /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "upgrade_svg__b",
    x1: 164.5,
    y1: 0,
    x2: 164.5,
    y2: 93.5,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4779FF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#4779FF",
    stopOpacity: 0
  })), /*#__PURE__*/React.createElement("clipPath", {
    id: "upgrade_svg__a"
  }, /*#__PURE__*/React.createElement("rect", {
    x: 0.5,
    width: 327,
    height: 112,
    rx: 12,
    fill: "#fff"
  })))));
};

export { SvgUpgrade as ReactComponent };
