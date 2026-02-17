export declare function ephemeralIFrame(callback: ({ iframe }: {
    iframe: Document;
}) => void): Promise<any>;
export declare function wait<T = void>(durationMs: number, resolveWith?: T): Promise<T>;
