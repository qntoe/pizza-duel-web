'use client'
import { __classPrivateFieldGet, __classPrivateFieldSet } from '../../../../_virtual/_tslib.js';
import { createTurnkeyPasskeyService } from './utils/createTurnkeyPasskeyService/createTurnkeyPasskeyService.js';

var _a, _TurnkeyPasskeyService_implementation;
class TurnkeyPasskeyService {
    /**
     * Gets the current passkey service implementation.
     * If no implementation is set, it will create a new turnkey passkey service.
     * @returns {ITurnkeyPasskeyService} The passkey service implementation.
     */
    static get implementation() {
        if (!__classPrivateFieldGet(_a, _a, "f", _TurnkeyPasskeyService_implementation)) {
            return createTurnkeyPasskeyService();
        }
        return __classPrivateFieldGet(_a, _a, "f", _TurnkeyPasskeyService_implementation);
    }
    /**
     * Sets the passkey service implementation.
     * @param {ITurnkeyPasskeyService} implementation The passkey service implementation to set.
     */
    static set implementation(implementation) {
        __classPrivateFieldSet(_a, _a, implementation, "f", _TurnkeyPasskeyService_implementation);
    }
    /**
     * Gets the WebAuthn attestation method from the current implementation.
     */
    static get getWebAuthnAttestation() {
        return _a.implementation.getWebAuthnAttestation;
    }
    /**
     * Gets the createWebauthnStamper method from the current implementation.
     */
    static get createWebauthnStamper() {
        return _a.implementation.createWebauthnStamper;
    }
}
_a = TurnkeyPasskeyService;
_TurnkeyPasskeyService_implementation = { value: void 0 };

export { TurnkeyPasskeyService };
