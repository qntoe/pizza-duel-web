'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const getStack = (constructorOpt) => {
    const err = {};
    // Standard V8 API to capture stack trace
    if (Error.captureStackTrace) {
        Error.captureStackTrace(err, constructorOpt);
        return err.stack;
    }
    // Fallback for non-V8 environments (e.g. Firefox/Safari)
    // We manually strip the top frames if we are using new Error()
    const { stack } = new Error();
    if (stack && constructorOpt) {
        // Simple heuristic: skip the top lines usually associated with Error creation
        // This is less precise than captureStackTrace but often sufficient for fallbacks
        return stack.split('\n').slice(2).join('\n');
    }
    return stack;
};

exports.getStack = getStack;
