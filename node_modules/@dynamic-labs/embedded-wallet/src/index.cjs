'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var assertPackageVersion = require('@dynamic-labs/assert-package-version');
var _package = require('../package.cjs');
var TurnkeyAuthenticatorRecoveryHandler = require('./lib/AuthenticatorHandler/TurnkeyAuthenticatorRecoveryHandler.cjs');
var constants = require('./lib/constants.cjs');
var TurnkeyExportHandler = require('./lib/ExportHandler/TurnkeyExportHandler.cjs');
var TurnkeyWalletConnectorBase = require('./lib/TurnkeyWalletConnectorBase/TurnkeyWalletConnectorBase.cjs');
var findTurnkeyVerifiedCredentials = require('./lib/utils/findTurnkeyVerifiedCredentials/findTurnkeyVerifiedCredentials.cjs');
require('./lib/utils/convertAttestationTransports/convertAttestationTransports.cjs');
var logger = require('./lib/utils/logger/logger.cjs');
var TurnkeyPasskeyService = require('./lib/utils/TurnkeyPasskeyService/TurnkeyPasskeyService.cjs');
var types = require('./types.cjs');

assertPackageVersion.assertPackageVersion('@dynamic-labs/embedded-wallet', _package.version);

exports.turnkeyAuthenticatorRecoveryHandler = TurnkeyAuthenticatorRecoveryHandler.turnkeyAuthenticatorRecoveryHandler;
exports.INVALID_PASSKEY_SELECTED_ERROR_MESSAGE = constants.INVALID_PASSKEY_SELECTED_ERROR_MESSAGE;
exports.TURNKEY_API_BASE_URL = constants.TURNKEY_API_BASE_URL;
exports.TURNKEY_API_KEY_EXPIRY_MESSAGE = constants.TURNKEY_API_KEY_EXPIRY_MESSAGE;
exports.TURNKEY_API_KEY_NOT_FOUND_MESSAGE = constants.TURNKEY_API_KEY_NOT_FOUND_MESSAGE;
exports.TURNKEY_SDK_BENIGN_ERRORS = constants.TURNKEY_SDK_BENIGN_ERRORS;
exports.TURNKEY_SDK_SESSION_KEY_RETRYABLE_ERRORS = constants.TURNKEY_SDK_SESSION_KEY_RETRYABLE_ERRORS;
exports.USER_CANCELLED_REQUEST_ERROR_MESSAGE = constants.USER_CANCELLED_REQUEST_ERROR_MESSAGE;
exports.WEBAUTHN_NOT_SUPPORTED_OR_CANCELLED_ERROR_MESSAGE = constants.WEBAUTHN_NOT_SUPPORTED_OR_CANCELLED_ERROR_MESSAGE;
exports.WEBAUTHN_NOT_SUPPORTED_OR_DISABLED_ERROR_MESSAGE = constants.WEBAUTHN_NOT_SUPPORTED_OR_DISABLED_ERROR_MESSAGE;
exports.TurnkeyExportHandler = TurnkeyExportHandler.TurnkeyExportHandler;
exports.TurnkeyWalletConnectorBase = TurnkeyWalletConnectorBase.TurnkeyWalletConnectorBase;
exports.findTurnkeyVerifiedCredentials = findTurnkeyVerifiedCredentials.findTurnkeyVerifiedCredentials;
exports.findTurnkeyVerifiedCredentialsWithSmartWalletRef = findTurnkeyVerifiedCredentials.findTurnkeyVerifiedCredentialsWithSmartWalletRef;
exports.logger = logger.logger;
exports.TurnkeyPasskeyService = TurnkeyPasskeyService.TurnkeyPasskeyService;
exports.TurnkeyWalletConnectorInfo = types.TurnkeyWalletConnectorInfo;
