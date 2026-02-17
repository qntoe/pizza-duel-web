'use client'
import { useState, useCallback } from 'react';
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect/useIsomorphicLayoutEffect.js';

const useResizeObserver = (ref, callback) => {
    const [rect, setRect] = useState();
    const onResize = useCallback((entries) => {
        if (!Array.isArray(entries)) {
            return;
        }
        const [entry] = entries;
        setRect(entry.contentRect);
        if (callback) {
            callback(entry.contentRect);
        }
    }, [callback, setRect]);
    useIsomorphicLayoutEffect(() => {
        if (!ref.current) {
            return;
        }
        let observer = new ResizeObserver(onResize);
        observer.observe(ref.current);
        return () => {
            observer === null || observer === void 0 ? void 0 : observer.disconnect();
            observer = null;
        };
    }, [ref]);
    return [rect];
};

export { useResizeObserver };
