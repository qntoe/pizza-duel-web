import { ITurnkeyPasskeyService } from './types';
export declare class TurnkeyPasskeyService {
    #private;
    /**
     * Gets the current passkey service implementation.
     * If no implementation is set, it will create a new turnkey passkey service.
     * @returns {ITurnkeyPasskeyService} The passkey service implementation.
     */
    static get implementation(): ITurnkeyPasskeyService;
    /**
     * Sets the passkey service implementation.
     * @param {ITurnkeyPasskeyService} implementation The passkey service implementation to set.
     */
    static set implementation(implementation: ITurnkeyPasskeyService);
    /**
     * Gets the WebAuthn attestation method from the current implementation.
     */
    static get getWebAuthnAttestation(): typeof import("@turnkey/http").getWebAuthnAttestation;
    /**
     * Gets the createWebauthnStamper method from the current implementation.
     */
    static get createWebauthnStamper(): (config: import("@turnkey/webauthn-stamper").TWebauthnStamperConfig) => import("@turnkey/webauthn-stamper").WebauthnStamper;
}
