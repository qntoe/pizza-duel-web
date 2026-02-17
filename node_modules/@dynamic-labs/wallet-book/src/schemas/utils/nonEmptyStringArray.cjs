'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var z = require('zod/mini');

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

var z__namespace = /*#__PURE__*/_interopNamespace(z);

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-namespace
/**
 * A zod type to ensure an array is not empty
 */
const nonEmptyStringArray = z__namespace.optional(z__namespace.pipe(z__namespace.transform((val) => Array.isArray(val) && val.length > 0 ? val : undefined), z__namespace.optional(z__namespace.array(z__namespace.string()))));

exports.nonEmptyStringArray = nonEmptyStringArray;
