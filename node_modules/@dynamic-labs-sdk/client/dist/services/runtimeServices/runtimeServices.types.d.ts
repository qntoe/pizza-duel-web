export type RuntimeServices = {
    getByKey: <T>(key: string) => T | null;
    register: (key: string, service: unknown) => void;
    unregister: (key: string) => void;
};
//# sourceMappingURL=runtimeServices.types.d.ts.map