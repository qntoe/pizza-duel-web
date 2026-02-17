import { FC } from 'react';
import { ClassStyleProps } from '../../utils/types';
type ModalHeaderBannerType = 'error' | 'success' | 'notice';
export type ModalHeaderBannerProps = {
    messageKey?: string;
    type?: ModalHeaderBannerType;
    disableTruncate?: boolean;
} & ClassStyleProps;
export declare const ModalHeaderBanner: FC<ModalHeaderBannerProps>;
export {};
