'use client'
/**
 * Filter duplicates from an array by equality.
 * Uses a Set internally.
 */
const filterDuplicates = (array) => Array.from(new Set(array));

export { filterDuplicates };
