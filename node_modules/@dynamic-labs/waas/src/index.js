'use client'
import { assertPackageVersion } from '@dynamic-labs/assert-package-version';
import { version } from '../package.js';
export { WaasExportHandler, withDynamicWaas } from './DynamicWaasMixin.js';

assertPackageVersion('@dynamic-labs/waas', version);
