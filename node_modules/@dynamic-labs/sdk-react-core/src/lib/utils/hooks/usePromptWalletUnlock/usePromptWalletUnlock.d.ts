export type PromptWalletUnlockProps = {
    accountAddress: string;
    chainName: string;
};
export declare const usePromptWalletUnlock: () => ({ accountAddress, chainName, }: PromptWalletUnlockProps) => Promise<string | undefined>;
