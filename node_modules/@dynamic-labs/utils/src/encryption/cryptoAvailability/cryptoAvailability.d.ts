/**
 * Checks if the Web Crypto API (crypto.subtle) is available in the current environment.
 *
 * The Web Crypto API is only available in secure contexts:
 * - HTTPS environments
 * - localhost (http://localhost or http://127.0.0.1)
 * - file:// protocol
 *
 * @returns {boolean} True if crypto.subtle is available, false otherwise
 */
export declare const isCryptoSubtleAvailable: () => boolean;
/**
 * Throws a descriptive error if crypto.subtle is not available.
 * Use this at the beginning of functions that require crypto.subtle.
 *
 * @throws {Error} If crypto.subtle is not available
 */
export declare const assertCryptoSubtleAvailable: () => void;
/**
 * Error class for crypto-related failures with better context
 */
export declare class CryptoNotAvailableError extends Error {
    constructor(operation: string);
}
