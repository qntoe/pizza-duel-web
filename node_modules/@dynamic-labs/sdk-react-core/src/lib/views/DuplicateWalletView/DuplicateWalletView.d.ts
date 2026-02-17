/// <reference types="react" />
export type DuplicateWalletViewProps = {
    onReturn: (initiatedByWidget: boolean) => void;
    initiatedByWidget: boolean;
};
export declare const DuplicateWalletView: React.FC<DuplicateWalletViewProps>;
