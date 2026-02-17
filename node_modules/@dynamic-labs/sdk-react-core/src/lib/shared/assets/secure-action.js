'use client'
import * as React from 'react';

var _path;
var _excluded = ["title", "titleId"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var SvgSecureAction = function SvgSecureAction(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 59,
    height: 70,
    viewBox: "0 0 59 70",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M30.465.065a6.368 6.368 0 0 0-1.822 0c-.696.101-1.344.346-1.858.54l-.138.052L9.575 7.059l-.415.155h-.001c-1.967.735-3.695 1.38-5.025 2.553a9.552 9.552 0 0 0-2.612 3.769c-.63 1.657-.628 3.501-.625 5.6v15.672c0 9 4.895 16.504 10.186 22.016 5.327 5.55 11.421 9.47 14.644 11.35l.13.076c.589.345 1.352.793 2.362 1.01a6.774 6.774 0 0 0 2.67 0c1.01-.217 1.773-.665 2.362-1.01l.13-.077c3.223-1.88 9.317-5.8 14.644-11.349 5.29-5.512 10.186-13.015 10.186-22.016V19.137c.003-2.1.006-3.944-.625-5.601a9.552 9.552 0 0 0-2.612-3.77c-1.33-1.172-3.058-1.817-5.025-2.551l-.416-.156L32.461.657l-.138-.052c-.514-.194-1.162-.439-1.858-.54ZM30.096 19a3.2 3.2 0 0 1 3.2 3.2V35a3.2 3.2 0 0 1-6.4 0V22.2a3.2 3.2 0 0 1 3.2-3.2Zm-3.2 28.8a3.2 3.2 0 0 1 3.2-3.2h.032a3.2 3.2 0 0 1 0 6.4h-.032a3.2 3.2 0 0 1-3.2-3.2Z",
    fill: "#4779FF"
  })));
};

export { SvgSecureAction as ReactComponent };
