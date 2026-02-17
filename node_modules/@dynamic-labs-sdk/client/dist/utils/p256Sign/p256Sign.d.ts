type P256SignParams = {
    message: string;
    privateKeyJwk: JsonWebKey;
};
export declare const p256Sign: ({ privateKeyJwk, message }: P256SignParams) => Promise<string>;
export {};
//# sourceMappingURL=p256Sign.d.ts.map