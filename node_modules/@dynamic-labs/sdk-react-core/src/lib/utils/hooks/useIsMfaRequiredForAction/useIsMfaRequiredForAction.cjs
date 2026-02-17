'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var React = require('react');
var client = require('@dynamic-labs-sdk/client');

/**
 * Check if MFA is required for an action
 *
 * @returns Function to check if MFA is required for an action
 *
 * @example
 * ```tsx
 * const App = () => {
 *   const isMfaRequiredForAction = useIsMfaRequiredForAction();
 *
 *   return (
 *     <button
 *       onClick={() => isMfaRequiredForAction({ mfaAction: MFAAction.UpdateUser })}
 *     >
 *       Check if MFA is required for an action
 *     </button>
 *  );
 * }
 */
const useIsMfaRequiredForAction = () => React.useCallback((_a) => _tslib.__awaiter(void 0, [_a], void 0, function* ({ mfaAction }) { return client.isMfaRequiredForAction({ mfaAction }); }), []);

exports.useIsMfaRequiredForAction = useIsMfaRequiredForAction;
