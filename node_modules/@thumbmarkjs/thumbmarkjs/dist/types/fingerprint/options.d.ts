export interface optionsInterface {
    exclude?: string[];
    include?: string[];
    webgl_runs?: number;
    canvas_runs?: number;
    permissions_to_check?: PermissionName[];
    retries?: number;
    timeout?: number;
}
export declare let options: optionsInterface;
export declare function setOption<K extends keyof optionsInterface>(key: K, value: optionsInterface[K]): void;
