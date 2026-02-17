'use client'
import * as z from 'zod/mini';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-namespace
/**
 * A zod type to ensure a string is not empty
 */
const nonEmptyString = z.optional(z.pipe(z.transform((val) => (val ? val : undefined)), z.optional(z.string())));

export { nonEmptyString };
