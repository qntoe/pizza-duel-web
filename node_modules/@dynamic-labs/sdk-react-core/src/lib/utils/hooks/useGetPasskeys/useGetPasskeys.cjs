'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var React = require('react');
var client = require('@dynamic-labs-sdk/client');

/**
 * Get passkeys
 *
 * @returns Function to get passkeys for the current user
 *
 * @example
 * ```tsx
 * const App = () => {
 *   const getPasskeys = useGetPasskeys();
 *   const [passkeys, setPasskeys] = useState<UserPasskey[]>([]);
 *
 *   return (
 *     <button
 *       onClick={async () => {
 *         const passkeys = await getPasskeys();
 *         setPasskeys(passkeys);
 *       }}
 *     >
 *       Get passkeys
 *     </button>
 *  );
 * }
 */
const useGetPasskeys = () => React.useCallback(() => _tslib.__awaiter(void 0, void 0, void 0, function* () { return client.getPasskeys(); }), []);

exports.useGetPasskeys = useGetPasskeys;
