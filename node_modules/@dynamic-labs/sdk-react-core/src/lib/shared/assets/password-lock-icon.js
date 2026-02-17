'use client'
import * as React from 'react';

var _path;
var _excluded = ["title", "titleId"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var SvgPasswordLockIcon = function SvgPasswordLockIcon(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 58,
    height: 70,
    viewBox: "0 0 58 70",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M28.117.065a6.369 6.369 0 0 1 1.82 0c.697.101 1.345.346 1.86.54l.137.052L49.006 7.06l.416.155c1.967.734 3.695 1.38 5.026 2.552a9.553 9.553 0 0 1 2.611 3.77c.552 1.45.619 3.042.625 4.824V34.81c0 9-4.895 16.503-10.186 22.015-5.327 5.55-11.421 9.469-14.644 11.349l-.13.077c-.588.345-1.352.793-2.361 1.01a6.78 6.78 0 0 1-2.671 0c-1.01-.217-1.773-.665-2.361-1.01l-.13-.077c-3.223-1.88-9.318-5.8-14.645-11.349C5.265 51.312.371 43.81.371 34.81V19.58l-.001-.444c-.003-2.1-.006-3.944.625-5.6a9.555 9.555 0 0 1 2.612-3.77c1.33-1.173 3.058-1.818 5.025-2.552l.416-.155L26.121.657l.137-.052c.515-.194 1.163-.439 1.859-.54ZM28.825 15a8.074 8.074 0 0 0-8.074 8.073v4.036a13.436 13.436 0 0 0-5.381 10.766c0 7.431 6.024 13.456 13.456 13.456 7.43 0 13.455-6.025 13.455-13.456 0-4.403-2.114-8.31-5.383-10.766v-4.036A8.073 8.073 0 0 0 28.825 15Zm.045 17a3.5 3.5 0 0 1 1.5 6.663V41.5a1.5 1.5 0 0 1-3 0v-2.837A3.5 3.5 0 0 1 28.87 32Zm-.045-14a5.073 5.073 0 0 1 5.073 5.073v2.335a13.416 13.416 0 0 0-5.072-.989 13.42 13.42 0 0 0-5.075.99v-2.336A5.074 5.074 0 0 1 28.825 18Z",
    fill: "#4779FF"
  })));
};

export { SvgPasswordLockIcon as ReactComponent };
