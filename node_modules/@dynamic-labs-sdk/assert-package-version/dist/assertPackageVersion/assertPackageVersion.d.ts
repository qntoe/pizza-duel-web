/**
 * Asserts that all `@dynamic-labs-sdk` packages are on the same version.
 * Throws an error with instructions if versions mismatch.
 *
 * @param {string} packageName - The name of the package to assert.
 * @param {string} version - The version of the package.
 */
export declare const assertPackageVersion: (packageName: string, version: string) => void;
export declare const clearPackageVersionState: () => void;
export declare const getVersionCheckTimeout: () => NodeJS.Timeout | null;
//# sourceMappingURL=assertPackageVersion.d.ts.map