export type DeferredPromise<T> = {
    promise: Promise<T>;
    reject: (reason?: unknown) => void;
    resolve: (value: T) => void;
};
//# sourceMappingURL=deferredPromise.types.d.ts.map