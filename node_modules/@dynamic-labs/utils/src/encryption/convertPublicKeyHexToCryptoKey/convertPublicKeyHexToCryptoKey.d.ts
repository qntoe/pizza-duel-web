/**
 * Converts a hexadecimal string representation of a public key into a CryptoKey object
 *
 * @param hex - The hexadecimal string representation of the public key
 * @returns A Promise that resolves to a CryptoKey object suitable for ECDH operations
 * @throws Error if the hex string length is invalid or doesn't represent a valid public key
 * @throws CryptoNotAvailableError if crypto.subtle is not available (requires secure context)
 */
export declare const convertPublicKeyHexToCryptoKey: (hex: string) => Promise<CryptoKey>;
