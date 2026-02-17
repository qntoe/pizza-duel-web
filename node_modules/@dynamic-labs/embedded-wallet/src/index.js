'use client'
import { assertPackageVersion } from '@dynamic-labs/assert-package-version';
import { version } from '../package.js';
export { turnkeyAuthenticatorRecoveryHandler } from './lib/AuthenticatorHandler/TurnkeyAuthenticatorRecoveryHandler.js';
export { INVALID_PASSKEY_SELECTED_ERROR_MESSAGE, TURNKEY_API_BASE_URL, TURNKEY_API_KEY_EXPIRY_MESSAGE, TURNKEY_API_KEY_NOT_FOUND_MESSAGE, TURNKEY_SDK_BENIGN_ERRORS, TURNKEY_SDK_SESSION_KEY_RETRYABLE_ERRORS, USER_CANCELLED_REQUEST_ERROR_MESSAGE, WEBAUTHN_NOT_SUPPORTED_OR_CANCELLED_ERROR_MESSAGE, WEBAUTHN_NOT_SUPPORTED_OR_DISABLED_ERROR_MESSAGE } from './lib/constants.js';
export { TurnkeyExportHandler } from './lib/ExportHandler/TurnkeyExportHandler.js';
export { TurnkeyWalletConnectorBase } from './lib/TurnkeyWalletConnectorBase/TurnkeyWalletConnectorBase.js';
export { findTurnkeyVerifiedCredentials, findTurnkeyVerifiedCredentialsWithSmartWalletRef } from './lib/utils/findTurnkeyVerifiedCredentials/findTurnkeyVerifiedCredentials.js';
import './lib/utils/convertAttestationTransports/convertAttestationTransports.js';
export { logger } from './lib/utils/logger/logger.js';
export { TurnkeyPasskeyService } from './lib/utils/TurnkeyPasskeyService/TurnkeyPasskeyService.js';
export { TurnkeyWalletConnectorInfo } from './types.js';

assertPackageVersion('@dynamic-labs/embedded-wallet', version);
