'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var z = require('zod/mini');
var walletGroup = require('./walletGroup.cjs');
var walletSchema = require('./walletSchema.cjs');

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
z__namespace.record(z__namespace.string(), walletSchema.walletSchema);
const walletBookSchema = z__namespace.pipe(z__namespace.transform((val) => val), z__namespace.object({
    groups: z__namespace.record(z__namespace.string(), walletGroup.walletGroupSchema),
    wallets: z__namespace.record(z__namespace.string(), walletSchema.walletSchema),
}));
z__namespace.record(z__namespace.string(), walletGroup.walletGroupSchema);

exports.walletBookSchema = walletBookSchema;
