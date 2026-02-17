declare global {
    /**
     * All events that can be listened to from the client.
     *
     * This interface may be re-declared in other modules when they are imported to add more events,
     * such as EVM specific events.
     */
    export interface DynamicEvents {
    }
}
type EmitEventParams<E extends keyof DynamicEvents> = {
    args?: Parameters<DynamicEvents[E]>[0];
    event: E;
};
type OnEventParams<E extends keyof DynamicEvents> = {
    event: E;
    listener: DynamicEvents[E];
};
type OffEventParams<E extends keyof DynamicEvents> = OnEventParams<E>;
type OnceEventParams<E extends keyof DynamicEvents> = OnEventParams<E>;
export type { DynamicEvents, EmitEventParams, OffEventParams, OnceEventParams, OnEventParams, };
//# sourceMappingURL=clientEvents.types.d.ts.map