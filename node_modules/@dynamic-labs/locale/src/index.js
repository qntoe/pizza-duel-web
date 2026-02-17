'use client'
import { assertPackageVersion } from '@dynamic-labs/assert-package-version';
import { version } from '../package.js';
export { Locale } from './lib/locale.js';
export { translation } from './lib/en/translation.js';

assertPackageVersion('@dynamic-labs/locale', version);
