import { type SdkUser } from '@dynamic-labs/sdk-api-core';
import type { Chain } from '../../chain/chain.types';
type UserHasEmbeddedWalletForChainProps = {
    chain: Chain;
    user: SdkUser;
};
export declare const userHasEmbeddedWalletForChain: ({ user, chain, }: UserHasEmbeddedWalletForChainProps) => boolean;
export {};
//# sourceMappingURL=userHasEmbeddedWalletForChain.d.ts.map