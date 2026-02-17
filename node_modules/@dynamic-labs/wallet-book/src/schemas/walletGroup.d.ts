import * as z from 'zod/mini';
declare const WalletOverrideEntrySchema: z.ZodMiniObject<{
    brand: z.ZodMiniOptional<z.ZodMiniObject<{
        alt: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
        primaryColor: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
        spriteId: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
    }, z.core.$strip>>;
    name: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
}, z.core.$strip>;
export declare const walletGroupSchema: z.ZodMiniObject<{
    brand: z.ZodMiniOptional<z.ZodMiniObject<{
        alt: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
        primaryColor: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
        spriteId: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
    }, z.core.$strip>>;
    key: z.ZodMiniString<string>;
    name: z.ZodMiniString<string>;
    walletOverrides: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniObject<{
        brand: z.ZodMiniOptional<z.ZodMiniObject<{
            alt: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
            primaryColor: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
            spriteId: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
        }, z.core.$strip>>;
        name: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type WalletGroupSchema = z.infer<typeof walletGroupSchema>;
export type WalletGroupOverride = z.infer<typeof WalletOverrideEntrySchema>;
export {};
