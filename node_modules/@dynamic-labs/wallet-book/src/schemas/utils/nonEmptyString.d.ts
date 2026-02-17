import * as z from 'zod/mini';
/**
 * A zod type to ensure a string is not empty
 */
export declare const nonEmptyString: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
