type Bs58Check = {
    encode(payload: Uint8Array | number[]): string;
    decode(str: string): Uint8Array;
    decodeUnsafe(str: string): Uint8Array | undefined;
};
declare const bs58check: Bs58Check;
export default bs58check;
//# sourceMappingURL=bs58check.d.ts.map