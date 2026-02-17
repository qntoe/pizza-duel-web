'use client'
import * as z from 'zod/mini';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-namespace
/**
 * A zod type to ensure an array is not empty
 */
const nonEmptyStringArray = z.optional(z.pipe(z.transform((val) => Array.isArray(val) && val.length > 0 ? val : undefined), z.optional(z.array(z.string()))));

export { nonEmptyStringArray };
