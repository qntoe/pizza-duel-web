import { type EventEmitter } from 'eventemitter3';
/** Minimum log level to display */
export type LogLevel = 'debug' | 'info' | 'warn' | 'error';
/** Event emitter for the logger */
export type LoggerEventEmitter = EventEmitter<{
    log: (level: LogLevel, message: string, ...args: unknown[]) => void;
}>;
/** Logger object with methods for each log level and event emitter methods */
export type Logger = {
    /** Log detailed information for debugging purposes. Use for tracing execution flow and variable values. */
    debug: (message: string, ...args: unknown[]) => void;
    /** Log error conditions that prevent normal operation. Use for exceptions, failures, and critical issues. */
    error: (message: string, ...args: unknown[]) => void;
    /** Log general information about application state and user actions. Use for normal operation tracking. */
    info: (message: string, ...args: unknown[]) => void;
    /** Log warning conditions that don't prevent operation but may indicate potential issues. Use for deprecations and recoverable problems. */
    warn: (message: string, ...args: unknown[]) => void;
} & Pick<LoggerEventEmitter, 'on' | 'off'>;
//# sourceMappingURL=logger.types.d.ts.map