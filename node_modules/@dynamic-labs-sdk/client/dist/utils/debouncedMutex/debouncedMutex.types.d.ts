/**
 * Runs an async callback for a given `lockKey` **one at a time**, while
 * *debouncing* repeated calls:
 *
 * - If called again **before `debounceTime` elapses**, the pending call is
 *   cancelled and only the **latest** call will eventually run.
 * - If a previous callback is **still running**, the new call waits until
 *   that run finishes, then executes (again only the latest call survives).
 *
 * This ensures:
 *   • No two callbacks with the same key run concurrently.
 *   • Rapid successive calls collapse into a single execution.
 *
 * Useful for throttling expensive operations (e.g. API requests, writes) in
 * a concurrent environment without dropping the final intent.
 *
 * @param {string} lockKey Unique key to serialize by.
 * @param {Function} callback Async function to run once ready.
 * @param {number} [debounceTime]  Delay (ms) to wait before triggering callback; new calls during this delay replace the pending one.
 * @param {Function} onError Callback to run if the callback throws an error.
 * @returns A promise that resolves when the callback has finished executing.
 *
 * @example
 * const debouncedMutex = createDebouncedMutex();
 *
 * await debouncedMutex({
 *   lockKey: 'fetch-user-profile',
 *   debounceTime: 300,
 *   callback: async () => {
 *     await fetchUserProfile();
 *   }
 * });
 */
export type DebouncedMutex = (params: {
    callback: () => Promise<void>;
    debounceTime?: number;
    lockKey: string;
}) => Promise<void>;
//# sourceMappingURL=debouncedMutex.types.d.ts.map