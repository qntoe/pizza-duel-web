'use client'
import * as z from 'zod/mini';
import { walletGroupSchema } from './walletGroup.js';
import { walletSchema } from './walletSchema.js';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-namespace
z.record(z.string(), walletSchema);
const walletBookSchema = z.pipe(z.transform((val) => val), z.object({
    groups: z.record(z.string(), walletGroupSchema),
    wallets: z.record(z.string(), walletSchema),
}));
z.record(z.string(), walletGroupSchema);

export { walletBookSchema };
