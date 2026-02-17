import { FC } from 'react';
import { VerifyResponse } from '@dynamic-labs/sdk-api-core';
type SetupPasskeyViewProps = {
    registerPasskeyPromise: Promise<VerifyResponse>;
};
export declare const SetupPasskeyView: FC<SetupPasskeyViewProps>;
export {};
