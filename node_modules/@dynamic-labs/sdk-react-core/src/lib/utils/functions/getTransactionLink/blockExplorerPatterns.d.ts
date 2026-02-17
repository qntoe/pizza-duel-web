/**
 * Block explorer URL patterns for different chains
 * This mapping allows for easy configuration and extension of transaction link formats
 */
export interface BlockExplorerPattern {
    /** Domain pattern to match against block explorer URLs */
    domain: string;
    /** Function to generate the transaction URL */
    generateUrl: (baseUrl: string, transactionHash: string) => string;
    /** Description of the pattern for documentation */
    description: string;
}
/**
 * Predefined patterns for known block explorers
 * Add new patterns here as needed for different chains
 */
export declare const BLOCK_EXPLORER_PATTERNS: BlockExplorerPattern[];
/**
 * Default pattern for standard block explorers
 * Used when no specific pattern matches
 */
export declare const DEFAULT_PATTERN: BlockExplorerPattern;
/**
 * Find the appropriate pattern for a given block explorer URL
 */
export declare const findBlockExplorerPattern: (blockExplorerUrl: string) => BlockExplorerPattern;
