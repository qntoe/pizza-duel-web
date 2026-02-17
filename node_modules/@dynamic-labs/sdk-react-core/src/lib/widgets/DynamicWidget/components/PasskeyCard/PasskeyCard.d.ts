import { FC } from 'react';
import { UserPasskey } from '@dynamic-labs/sdk-api-core';
type PasskeyCardProps = {
    passkey: UserPasskey;
    onUpdate?: () => void;
};
export declare const PasskeyCard: FC<PasskeyCardProps>;
export {};
