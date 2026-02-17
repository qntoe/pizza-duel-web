'use client'
import * as React from 'react';

var _path, _path2;
var _excluded = ["title", "titleId"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var SvgKnowledgeCheckIcon = function SvgKnowledgeCheckIcon(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 69,
    height: 69,
    viewBox: "0 0 69 69",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M34.5 0C53.554 0 69 15.446 69 34.5 69 53.554 53.554 69 34.5 69 15.446 69 0 53.554 0 34.5 0 15.446 15.446 0 34.5 0Z",
    fill: "#4779FF"
  })), _path2 || (_path2 = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M35.825 23.161a6.761 6.761 0 0 0-4.32.735c-1.282.707-2.205 1.787-2.663 3.007a3.012 3.012 0 0 1-3.889 1.77 3.043 3.043 0 0 1-1.758-3.914c.991-2.644 2.928-4.822 5.41-6.19a12.764 12.764 0 0 1 8.173-1.406c2.802.45 5.386 1.824 7.272 3.925 1.89 2.107 2.954 4.81 2.95 7.635 0 4.604-3.614 7.56-6.047 9.081a25.197 25.197 0 0 1-3.615 1.852 24.858 24.858 0 0 1-1.546.586l-.105.034-.033.01-.012.004-.005.002s-.003.001-.898-2.9l.895 2.901a3.014 3.014 0 0 1-3.777-2 3.04 3.04 0 0 1 1.984-3.8m0 0 .052-.017.233-.081c.21-.075.523-.192.902-.35.767-.32 1.765-.79 2.74-1.4 2.188-1.369 3.196-2.748 3.196-3.924v-.005c.002-1.268-.473-2.53-1.394-3.556-.925-1.032-2.245-1.758-3.745-1.999M31.84 48.963a3.028 3.028 0 0 1 3.018-3.037h.04a3.028 3.028 0 0 1 3.019 3.037A3.028 3.028 0 0 1 34.899 52h-.041a3.028 3.028 0 0 1-3.018-3.037Z",
    fill: "#fff"
  })));
};

export { SvgKnowledgeCheckIcon as ReactComponent };
