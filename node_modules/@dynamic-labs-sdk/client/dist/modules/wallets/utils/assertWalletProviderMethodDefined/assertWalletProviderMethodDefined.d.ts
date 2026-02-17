import type { WalletProvider } from '../../walletProvider/walletProvider.types';
/**
 * Asserts that a specific wallet provider method is defined, throwing an error if it's not.
 * This function acts as a type guard, narrowing the type to ensure the method exists.
 *
 * @template T - The specific wallet provider method key being checked
 * @param walletProvider - The wallet provider object to check
 * @param methodName - The name of the method to check for availability
 * @throws Throws WalletProviderMethodUnavailableError if the method is not defined
 * @example
 * ```typescript
 * const walletProvider: WalletProvider = getWalletProvider();
 * assertWalletProviderMethodDefined(walletProvider, 'connect');
 * // walletProvider.connect is now guaranteed to be defined
 * await walletProvider.connect();
 * ```
 */
export declare function assertWalletProviderMethodDefined<T extends keyof WalletProvider>(walletProvider: WalletProvider, methodName: T): asserts walletProvider is WalletProvider & Required<Pick<WalletProvider, T>>;
//# sourceMappingURL=assertWalletProviderMethodDefined.d.ts.map