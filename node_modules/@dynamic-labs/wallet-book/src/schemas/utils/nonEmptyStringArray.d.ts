import * as z from 'zod/mini';
/**
 * A zod type to ensure an array is not empty
 */
export declare const nonEmptyStringArray: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<any[] | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniString<string>>>>>;
