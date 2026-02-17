'use client'
import * as z from 'zod/mini';
import { nonEmptyString } from './utils/nonEmptyString.js';
import { brandSchema } from './walletSchema.js';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-namespace
const WalletOverrideEntrySchema = z.object({
    brand: z.optional(brandSchema),
    name: nonEmptyString,
});
const walletGroupSchema = z.object({
    brand: z.optional(z.object({
        alt: nonEmptyString,
        primaryColor: nonEmptyString,
        spriteId: nonEmptyString,
    })),
    key: z.string(),
    name: z.string(),
    walletOverrides: z.optional(z.record(z.string(), WalletOverrideEntrySchema)),
});

export { walletGroupSchema };
