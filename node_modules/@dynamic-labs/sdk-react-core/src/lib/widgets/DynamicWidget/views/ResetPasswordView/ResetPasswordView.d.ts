import { FC } from 'react';
export type ResetPasswordViewProps = {
    onComplete: (oldPassword: string, newPassword: string) => void;
};
export declare const ResetPasswordView: FC<ResetPasswordViewProps>;
