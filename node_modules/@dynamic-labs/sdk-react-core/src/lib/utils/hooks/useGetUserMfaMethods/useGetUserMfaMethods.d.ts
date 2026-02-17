import { getMfaMethods } from '@dynamic-labs-sdk/client';
/**
 * Get user MFA methods
 *
 * @returns Function to get user MFA methods
 *
 * @example
 * ```tsx
 * const App = () => {
 *   const getUserMfaMethods = useGetUserMfaMethods();
 *
 *   const getMfaMethods = async () => {
 *     const methods = await getUserMfaMethods();
 *     console.log(methods);
 *   }
 *
 *   return (
 *     <button onClick={getMfaMethods}>Get user MFA methods</button>
 *   );
 * }
 */
export declare const useGetUserMfaMethods: () => (() => ReturnType<typeof getMfaMethods>);
