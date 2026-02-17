import type * as z from 'zod/mini';
import type { StorageKeySchema } from '../storage.types';
export declare const createStorageKeySchema: <T>(params: {
    key: string;
    schema: z.ZodMiniType<T>;
}) => StorageKeySchema<T>;
//# sourceMappingURL=createStorageKeySchema.d.ts.map