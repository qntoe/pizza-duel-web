type Bs58 = {
    encode(buffer: Uint8Array | number[]): string;
    decodeUnsafe(str: string): Uint8Array | undefined;
    decode(str: string): Uint8Array;
};
declare const bs58: Bs58;
export default bs58;
//# sourceMappingURL=bs58.d.ts.map