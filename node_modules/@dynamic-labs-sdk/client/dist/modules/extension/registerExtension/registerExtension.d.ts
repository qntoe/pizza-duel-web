import type { DynamicClient } from '../../../client/types';
type RegisterExtensionParams = {
    extensionKey: string;
};
/**
 * Registers an extension to the client.
 *
 * Other extensions can be aware of which extensions are present,
 * and allows creating dependencies between extensions.
 *
 * @param client - The client instance.
 * @param extensionKey - The key of the extension to register.
 * @returns The client instance.
 */
export declare const registerExtension: ({ extensionKey }: RegisterExtensionParams, client: DynamicClient) => void;
export {};
//# sourceMappingURL=registerExtension.d.ts.map