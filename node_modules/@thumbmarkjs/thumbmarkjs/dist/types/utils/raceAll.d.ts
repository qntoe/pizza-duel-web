type DelayedPromise<T> = Promise<T>;
export declare function delay<T>(t: number, val: T): DelayedPromise<T>;
export interface RaceResult<T> {
    value: T;
    elapsed?: number;
}
export declare function raceAllPerformance<T>(promises: Promise<T>[], timeoutTime: number, timeoutVal: T): Promise<RaceResult<T>[]>;
export declare function raceAll<T>(promises: Promise<T>[], timeoutTime: number, timeoutVal: T): Promise<(T | undefined)[]>;
export {};
