import type { DynamicClient } from '../../../client/types';
type GenerateSessionSignatureParams = {
    sessionId: string;
};
export declare const generateSessionSignature: ({ sessionId }: GenerateSessionSignatureParams, client: DynamicClient) => Promise<{
    signature: string;
}>;
export {};
//# sourceMappingURL=generateSessionSignature.d.ts.map