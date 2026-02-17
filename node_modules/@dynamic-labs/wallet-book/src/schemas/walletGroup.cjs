'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var z = require('zod/mini');
var nonEmptyString = require('./utils/nonEmptyString.cjs');
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
const WalletOverrideEntrySchema = z__namespace.object({
    brand: z__namespace.optional(walletSchema.brandSchema),
    name: nonEmptyString.nonEmptyString,
});
const walletGroupSchema = z__namespace.object({
    brand: z__namespace.optional(z__namespace.object({
        alt: nonEmptyString.nonEmptyString,
        primaryColor: nonEmptyString.nonEmptyString,
        spriteId: nonEmptyString.nonEmptyString,
    })),
    key: z__namespace.string(),
    name: z__namespace.string(),
    walletOverrides: z__namespace.optional(z__namespace.record(z__namespace.string(), WalletOverrideEntrySchema)),
});

exports.walletGroupSchema = walletGroupSchema;
