'use client'
import * as React from 'react';

var _path;
var _excluded = ["title", "titleId"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var SvgErrorCircleX = function SvgErrorCircleX(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 17,
    height: 17,
    viewBox: "0 0 17 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.333 1.667a6.667 6.667 0 1 0 0 13.333 6.667 6.667 0 0 0 0-13.333ZM0 8.333a8.333 8.333 0 1 1 16.667 0A8.333 8.333 0 0 1 0 8.333Zm6.077-2.256a.833.833 0 0 1 1.179 0l1.077 1.078 1.078-1.078a.833.833 0 0 1 1.178 1.179L9.512 8.333l1.077 1.078a.833.833 0 0 1-1.178 1.178L8.333 9.512l-1.077 1.077a.833.833 0 0 1-1.179-1.178l1.078-1.078-1.078-1.077a.833.833 0 0 1 0-1.179Z",
    fill: "currentColor"
  })));
};

export { SvgErrorCircleX as ReactComponent };
