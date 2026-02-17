/* tslint:disable */
/* eslint-disable */
/**
 * A client can call out to `<enclave-url>/.well-known/attestation` to fetch the attestation doc from the Enclave
 * The fetched attestation doc will have the public key of the domain's cert embedded inside it along with an expiry
 * Note: this is the typical attestation flow used in our server side SDK, but is unlikely to be usable in browser
 * as there's no access to the Remote TLS Certificate. You likely need the validateAttestationDocPcrs function.
 */
export function attestEnclave(cert: Uint8Array, expected_pcrs_list: PCRs[], attestation_doc: string): boolean;
/**
 * A client can call out to `<enclave-url>/.well-known/attestation` to fetch the attestation doc from the Enclave
 * The fetched attestation doc will have the public key of the domain's cert embedded inside it along with an expiry
 */
export function validateAttestationDocPcrs(attestation_doc: string, expected_pcrs_list: PCRs[]): boolean;
/**
 * Given an attestation document, return the user data if it exists
 */
export function getUserData(attestation_doc: string): Uint8Array | undefined;
/**
 * Given an attestation document, return the nonce if it exists
 */
export function getNonce(attestation_doc: string): Uint8Array | undefined;
export class PCRs {
  free(): void;
  constructor(pcr_0?: string | null, pcr_1?: string | null, pcr_2?: string | null, pcr_8?: string | null, hash_algorithm?: string | null);
  /**
   * Helper to create an empty PCR container, to support setting the PCRs explicitly
   * ```js
   * const pcrs = PCRs.empty();
   * pcrs.pcr0 = "...";
   * pcrs.pcr8 = "...";
   * ```
   */
  static empty(): PCRs;
  get hashAlgorithm(): string | undefined;
  set hashAlgorithm(value: string | null | undefined);
  get pcr0(): string | undefined;
  set pcr0(value: string | null | undefined);
  get pcr1(): string | undefined;
  set pcr1(value: string | null | undefined);
  get pcr2(): string | undefined;
  set pcr2(value: string | null | undefined);
  get pcr8(): string | undefined;
  set pcr8(value: string | null | undefined);
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_pcrs_free: (a: number, b: number) => void;
  readonly __wbg_get_pcrs_hashAlgorithm: (a: number) => [number, number];
  readonly __wbg_set_pcrs_hashAlgorithm: (a: number, b: number, c: number) => void;
  readonly __wbg_get_pcrs_pcr0: (a: number) => [number, number];
  readonly __wbg_set_pcrs_pcr0: (a: number, b: number, c: number) => void;
  readonly __wbg_get_pcrs_pcr1: (a: number) => [number, number];
  readonly __wbg_set_pcrs_pcr1: (a: number, b: number, c: number) => void;
  readonly __wbg_get_pcrs_pcr2: (a: number) => [number, number];
  readonly __wbg_set_pcrs_pcr2: (a: number, b: number, c: number) => void;
  readonly __wbg_get_pcrs_pcr8: (a: number) => [number, number];
  readonly __wbg_set_pcrs_pcr8: (a: number, b: number, c: number) => void;
  readonly pcrs_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number) => number;
  readonly pcrs_empty: () => number;
  readonly attestEnclave: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly validateAttestationDocPcrs: (a: number, b: number, c: number, d: number) => number;
  readonly getUserData: (a: number, b: number) => [number, number, number, number];
  readonly getNonce: (a: number, b: number) => [number, number, number, number];
  readonly ring_core_0_17_14__bn_mul_mont: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_3: WebAssembly.Table;
  readonly __externref_table_alloc: () => number;
  readonly __externref_table_dealloc: (a: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
