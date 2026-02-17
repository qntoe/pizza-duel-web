'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Filter duplicates from an array by equality.
 * Uses a Set internally.
 */
const filterDuplicates = (array) => Array.from(new Set(array));

exports.filterDuplicates = filterDuplicates;
