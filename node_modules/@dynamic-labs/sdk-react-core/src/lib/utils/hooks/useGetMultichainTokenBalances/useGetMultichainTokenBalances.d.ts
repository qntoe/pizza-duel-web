import { MultichainAccountBalanceResponse, MultichainAccountBalancesRequest } from '@dynamic-labs/sdk-api-core';
/**
 * Get multichain token balances
 *
 * @returns Function to get multichain token balances for the current user
 *
 * @example
 * ```tsx
 * const App = () => {
 *   const { primaryWallet } = useDynamicContext();
 *   const getMultichainTokenBalances = useGetMultichainTokenBalances();
 *   const [multichainTokenBalances, setMultichainTokenBalances] =
 *       useState<MultichainAccountBalanceResponse['chainBalances']>();
 *
 *   return (
 *     <button
 *       onClick={async () => {
 *         const balanceRequests = {
 *           filterSpamTokens: true, // defaults to true
 *           balanceRequests: [
 *             {
 *               address: primaryWallet?.address ?? '',
 *               chain: ChainEnum.Evm,
 *               networkIds: [1],
 *             },
 *           ],
 *         };
 *         const multichainTokenBalances = await getMultichainTokenBalances(balanceRequests);
 *         setMultichainTokenBalances(multichainTokenBalances);
 *       }}
 *     >
 *       Get multichain token balances
 *     </button>
 *  );
 * }
 */
export declare const useGetMultichainTokenBalances: () => ((props: MultichainAccountBalancesRequest) => Promise<MultichainAccountBalanceResponse['chainBalances']>);
