/**
 * This file is used to create the includeComponent function as well as the interfaces each of the
 * fingerprint components must implement.
 *
 */
interface componentInterface {
    [key: string]: string | string[] | number | boolean | componentInterface;
}

declare function getFingerprintData(): Promise<componentInterface>;
declare function getFingerprint(includeData?: false): Promise<string>;
declare function getFingerprint(includeData: true): Promise<{
    hash: string;
    data: componentInterface;
}>;
declare function getFingerprintPerformance(): Promise<{
    [key: string]: any;
}>;

interface optionsInterface {
    exclude?: string[];
    include?: string[];
    webgl_runs?: number;
    canvas_runs?: number;
    permissions_to_check?: PermissionName[];
    retries?: number;
    timeout?: number;
}
declare function setOption<K extends keyof optionsInterface>(key: K, value: optionsInterface[K]): void;

declare function getVersion(): string;

export { getFingerprint, getFingerprintData, getFingerprintPerformance, getVersion, setOption };
