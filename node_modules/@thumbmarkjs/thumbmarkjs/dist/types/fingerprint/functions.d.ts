import { componentInterface } from '../factory';
export declare function getFingerprintData(): Promise<componentInterface>;
export declare function getFingerprint(includeData?: false): Promise<string>;
export declare function getFingerprint(includeData: true): Promise<{
    hash: string;
    data: componentInterface;
}>;
export declare function getFingerprintPerformance(): Promise<{
    [key: string]: any;
}>;
