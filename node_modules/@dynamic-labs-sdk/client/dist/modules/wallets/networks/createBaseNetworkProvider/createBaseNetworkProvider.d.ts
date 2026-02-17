import type { Chain } from '../../../chain';
import type { BaseNetworkProvider, NetworkData } from '../networkProvider/networkProvider.types';
export declare const createBaseNetworkProvider: <TChain extends Chain = Chain>(chain: TChain, networkData: NetworkData) => Omit<BaseNetworkProvider<TChain>, "getBalance">;
//# sourceMappingURL=createBaseNetworkProvider.d.ts.map