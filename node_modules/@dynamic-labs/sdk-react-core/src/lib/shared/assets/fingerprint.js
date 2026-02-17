'use client'
import * as React from 'react';

var _path;
var _excluded = ["title", "titleId"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var SvgFingerprint = function SvgFingerprint(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 65,
    height: 64,
    viewBox: "0 0 65 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M32.5 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32Zm6.389 39.467a1.815 1.815 0 0 0-2.24 1.252 37.88 37.88 0 0 1-2.583 6.654 1.814 1.814 0 0 0 3.244 1.625 41.508 41.508 0 0 0 2.83-7.292 1.814 1.814 0 0 0-1.251-2.24Zm-6.247-10.953a1.813 1.813 0 0 0-1.814 1.813 30.69 30.69 0 0 1-4.716 16.399 1.814 1.814 0 1 0 3.072 1.931 34.317 34.317 0 0 0 5.272-18.33 1.814 1.814 0 0 0-1.814-1.813Zm0-7.257a9.07 9.07 0 0 0-9.07 9.07c0 4.622-1.322 8.909-3.602 12.534l-.123.202a1.815 1.815 0 0 0 3.12 1.852l.074-.122a27.06 27.06 0 0 0 4.158-14.466 5.443 5.443 0 0 1 10.885 0c0 1.763-.12 3.498-.352 5.197a1.814 1.814 0 1 0 3.595.492c.254-1.862.386-3.761.386-5.689 0-5.01-4.062-9.07-9.071-9.07Zm0-7.257c-2.971 0-5.762.795-8.165 2.186a1.814 1.814 0 0 0 1.817 3.14 12.632 12.632 0 0 1 6.348-1.698c7.013 0 12.699 5.686 12.699 12.7 0 4.316-.602 8.49-1.727 12.442a1.814 1.814 0 1 0 3.49.993 49.017 49.017 0 0 0 1.866-13.436C48.97 21.31 41.659 14 32.642 14Zm-11.664 7.5a1.815 1.815 0 0 0-2.478.662 16.262 16.262 0 0 0-2.186 8.165c0 2.558-.587 4.974-1.631 7.125a1.815 1.815 0 1 0 3.263 1.585 19.884 19.884 0 0 0 1.997-8.71c0-2.316.618-4.482 1.698-6.348a1.815 1.815 0 0 0-.662-2.479Z",
    fill: "#4779FF"
  })));
};

export { SvgFingerprint as ReactComponent };
