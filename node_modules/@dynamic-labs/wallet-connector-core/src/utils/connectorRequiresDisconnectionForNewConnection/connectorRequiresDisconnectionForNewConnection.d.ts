import type { WalletConnectorBase } from '../../WalletConnectorBase';
/**
 * Checks if a wallet connector supports multi-account connection.
 *
 * This function looks up the wallet entry in the wallet book and checks
 * if the `requiresDisconnectBeforeNewConnection` flag is set to true.
 *
 * @param connector - The wallet connector to check
 * @returns true if the connector supports multi-account connection, false otherwise
 *
 * @example
 * ```typescript
 * const connector = getSomeWalletConnector();
 * if (connectorRequiresDisconnectionForNewConnection(connector)) {
 *   // Handle multi-account connection
 * }
 * ```
 */
export declare const connectorRequiresDisconnectionForNewConnection: (connector: WalletConnectorBase | null | undefined) => boolean;
