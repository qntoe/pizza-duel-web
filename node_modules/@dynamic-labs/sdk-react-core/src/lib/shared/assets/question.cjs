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
var SvgQuestion = function SvgQuestion(_ref) {
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
    d: "M32.5 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32Zm.11 42.446c-1.561 0-2.828 1.243-2.828 2.777 0 1.533 1.267 2.777 2.828 2.777h.038c1.562 0 2.828-1.244 2.828-2.777 0-1.534-1.266-2.777-2.828-2.777h-.038Zm1.8-26.297a12.215 12.215 0 0 0-7.658 1.286c-2.326 1.25-4.14 3.242-5.07 5.659-.55 1.434.187 3.036 1.648 3.578 1.461.541 3.092-.183 3.644-1.617.428-1.116 1.294-2.103 2.495-2.75a6.458 6.458 0 0 1 3.783-.708l-1.595 10.396-.003.001c-1.488.457-2.319 2.012-1.856 3.475.463 1.464 2.048 2.283 3.539 1.828l-.839-2.652c.8 2.525.84 2.644.843 2.65l.004-.001.01-.003.032-.01.098-.031a23.601 23.601 0 0 0 1.448-.535c.906-.368 2.136-.93 3.388-1.693 2.28-1.392 5.665-4.095 5.665-8.304.004-2.583-.993-5.054-2.763-6.98-1.767-1.921-4.188-3.176-6.814-3.589Zm-.894 5.484c1.405.22 2.642.884 3.51 1.827.862.938 1.307 2.092 1.305 3.252v.005c0 1.075-.945 2.335-2.995 3.587-.913.557-1.848.988-2.566 1.28a17.913 17.913 0 0 1-1.064.393l1.81-10.344Z",
    fill: "currentColor"
  })));
};

exports.ReactComponent = SvgQuestion;
