export declare class InstrumentationTimer {
    private startTime;
    private stepStartTime;
    constructor(startTime?: number);
    getElapsed(): number;
    startStep(): void;
    getStepElapsed(): number;
    resetStep(): void;
    setStartTime(startTime: number): void;
    setStepStartTime(stepStartTime: number): void;
}
export type InstrumentContext = {
    traceId?: string;
    accountAddress?: string;
    environmentId?: string;
};
export type TraceContext = {
    parentTraceId?: string;
    startTime?: number;
};
