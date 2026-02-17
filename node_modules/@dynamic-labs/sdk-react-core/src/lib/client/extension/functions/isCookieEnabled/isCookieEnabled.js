'use client'
import { isCookieEnabled as isCookieEnabled$1 } from '@dynamic-labs-sdk/client/core';
import { getDefaultClient } from '@dynamic-labs-sdk/client';

const isCookieEnabled = () => isCookieEnabled$1(getDefaultClient());

export { isCookieEnabled };
