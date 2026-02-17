import type { MFAAction } from '@dynamic-labs/sdk-api-core';
import type { DynamicClient } from '../../../client/types/DynamicClient';
type ConsumeMfaTokenIfRequiredForActionParams = {
    mfaAction: MFAAction;
};
export declare const consumeMfaTokenIfRequiredForAction: ({ mfaAction }: ConsumeMfaTokenIfRequiredForActionParams, client: DynamicClient) => Promise<string | undefined>;
export {};
//# sourceMappingURL=consumeMfaTokenIfRequiredForAction.d.ts.map