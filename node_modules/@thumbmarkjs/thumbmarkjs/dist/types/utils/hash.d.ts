/**
 * This code is taken from https://github.com/LinusU/murmur-128/blob/master/index.js
 * But instead of dependencies to encode-utf8 and fmix, I've implemented them here.
 */
export declare function hash(key: ArrayBuffer | string, seed?: number): string;
