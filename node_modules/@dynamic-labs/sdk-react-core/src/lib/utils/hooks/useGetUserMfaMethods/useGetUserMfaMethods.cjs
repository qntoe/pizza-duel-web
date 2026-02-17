'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var React = require('react');
var client = require('@dynamic-labs-sdk/client');

/**
 * Get user MFA methods
 *
 * @returns Function to get user MFA methods
 *
 * @example
 * ```tsx
 * const App = () => {
 *   const getUserMfaMethods = useGetUserMfaMethods();
 *
 *   const getMfaMethods = async () => {
 *     const methods = await getUserMfaMethods();
 *     console.log(methods);
 *   }
 *
 *   return (
 *     <button onClick={getMfaMethods}>Get user MFA methods</button>
 *   );
 * }
 */
const useGetUserMfaMethods = () => React.useCallback(() => _tslib.__awaiter(void 0, void 0, void 0, function* () { return client.getMfaMethods(); }), []);

exports.useGetUserMfaMethods = useGetUserMfaMethods;
