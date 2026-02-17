/**
 * Hook that synchronizes Dynamic WaaS wallet creation based on user state and configuration.
 *
 * This hook automatically creates embedded wallets for enabled chains when:
 * - User is authenticated and onboarding is complete
 * - Project settings allow automatic wallet creation
 * - Required chains don't already have wallets
 * - No authentication is currently in progress
 *
 * The hook ensures wallet creation only happens once per session until logout.
 */
export declare const useSyncDynamicWaas: () => void;
