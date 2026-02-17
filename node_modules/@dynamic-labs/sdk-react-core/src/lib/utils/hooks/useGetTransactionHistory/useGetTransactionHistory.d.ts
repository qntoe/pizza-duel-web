import { GetTransactionHistoryParams, GetTransactionHistoryResponse } from '@dynamic-labs-sdk/client';
/**
 * Get transaction history
 *
 * @returns Function to get transaction history for the current user
 *
 * @example
 * ```tsx
 * const App = () => {
 *   const getTransactionHistory = useGetTransactionHistory();
 *   const [transactionHistory, setTransactionHistory] = useState<GetTransactionHistoryResponse>();
 *
 *   return (
 *     <button
 *       onClick={async () => {
 *         const transactionHistory = await getTransactionHistory({
 *           address: 'wallet-address',
 *           networkId: 101,
 *           chain: ChainEnum.Sol,
 *         });
 *         setTransactionHistory(transactionHistory);
 *       }}
 *     >
 *       Get transaction history
 *     </button>
 *   );
 * };
 */
export declare const useGetTransactionHistory: () => ((props: GetTransactionHistoryParams) => Promise<GetTransactionHistoryResponse>);
