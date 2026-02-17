import { getWebAuthnAttestation } from '@turnkey/http';
import { TWebauthnStamperConfig, WebauthnStamper } from '@turnkey/webauthn-stamper';
export type ITurnkeyPasskeyService = {
    getWebAuthnAttestation: typeof getWebAuthnAttestation;
    createWebauthnStamper: (config: TWebauthnStamperConfig) => WebauthnStamper;
};
