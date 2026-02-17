export declare const SDK_NAMESPACE: {
    readonly REACT: "WalletKit";
    readonly CLIENT: "ClientSDK";
};
export type SdkNamespace = (typeof SDK_NAMESPACE)[keyof typeof SDK_NAMESPACE];
export interface ParsedSdkVersion {
    namespace: SdkNamespace;
    version: string;
    raw: string;
}
/**
 * Parses a potentially namespaced SDK version string
 * @param sdkVersion - The SDK version string, optionally namespaced
 * @returns Parsed SDK version with namespace and version
 * @example
 * parseNamespacedVersion("WalletKit/1.0.0") // { namespace: "WalletKit", version: "1.0.0", raw: "WalletKit/1.0.0" }
 * parseNamespacedVersion("1.0.0") // { namespace: "WalletKit", version: "1.0.0", raw: "1.0.0" }
 */
export declare function parseNamespacedVersion(sdkVersion: string | undefined | null): ParsedSdkVersion | null;
/**
 * Formats a parsed SDK version back to string format
 * @param parsedVersion - The parsed SDK version object
 * @returns Formatted SDK version string
 */
export declare function formatNamespacedVersion(parsedVersion: ParsedSdkVersion): string;
/**
 * Gets the version string without namespace
 * @param sdkVersion - The SDK version string, optionally namespaced
 * @returns Version string without namespace
 */
export declare function getVersionWithoutNamespace(sdkVersion: string | undefined | null): string | null;
/**
 * Gets the namespace from a potentially namespaced SDK version
 * @param sdkVersion - The SDK version string, optionally namespaced
 * @returns The namespace or default namespace
 */
export declare function getVersionNamespace(sdkVersion: string | undefined | null): SdkNamespace | null;
//# sourceMappingURL=sdkVersion.d.ts.map