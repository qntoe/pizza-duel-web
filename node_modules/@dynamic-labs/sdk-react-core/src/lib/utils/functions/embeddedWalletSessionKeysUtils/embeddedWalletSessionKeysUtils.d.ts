export type SessionKey = {
    publicKey: string;
    privateKey: string;
    privateKeyJwk: JsonWebKey;
    registered: boolean;
    expirationDate?: Date;
};
export declare const generateSessionKey: () => Promise<SessionKey>;
/**
 * Generates a new session key and saves it to session storage
 * It doesn't register the session key with the backend, it's only used to generate a new key
 * and save it to session storage.
 * @returns the new session key
 */
export declare const generateAndSaveSessionKey: () => Promise<SessionKey>;
