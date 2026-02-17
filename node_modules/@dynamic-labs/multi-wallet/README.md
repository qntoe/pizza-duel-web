# @dynamic-labs/multi-wallet

## Overview

The multi-wallet package provides utility functions for filtering and configuring wallet connectors in the Dynamic Labs SDK. It contains helper functions used by the main SDK to determine which wallets should be available based on project settings and enabled chains.

## Key Features

- **Wallet filtering**: Filters wallet connectors based on enabled chains and project settings
- **Configuration building**: Creates configuration objects needed to instantiate wallet connectors
- **Message generation**: Generates standardized messages for wallet signature operations
- **Provider filtering**: Determines which authentication providers are enabled

## Core Functions

### `getSupportedWallets(opts)`

Main function that returns a filtered list of available wallet connectors based on:

- Project settings and enabled providers
- Platform compatibility (mobile/desktop)
- Wallet availability and installation status
- User preferences and disabled connectors

### `getWalletConnectorConstructorOptions(params)`

Builds configuration options for wallet connector constructors, including:

- Network configurations for all supported chains
- API providers and RPC configurations
- Authentication modes and UI utilities
- WalletConnect project settings

### `getEnabledWallets(props)`

Filters wallet connectors based on enabled chains. Takes an object with:

- `enabledChains`: Array of Chain types that are enabled
- `getSupportedWalletOpts`: Configuration options for getting supported wallets

### `generateMessageToSign(params)`

Creates standardized messages for wallet signing operations. Takes a `MessageParameters` object with fields like:

- `blockchain`: The blockchain type (Chain)
- `domain`: The domain requesting the signature
- `nonce`: Unique nonce for the request
- `publicKey`: User's public key
- `uri`: URI of the requesting application
- Additional optional fields for chainId, statement, resources, etc.

### `getEnabledProviders(providers)`

Filters providers to return only those that are enabled (have `enabledAt` set, or are MagicLink with `providerProjectId`, or are Turnkey).

### `getSupportedChainsForWalletConnector(walletBook, walletConnector)`

Returns the supported chains for a specific wallet connector instance. The behavior depends on the `mergeWalletBookChains` property of the connector:

- When `mergeWalletBookChains` is `true` (default): Returns a merged set of chains from both the wallet book (global wallet brand capabilities) and the connector's `supportedChains`. This is the default behavior for most connectors.

- When `mergeWalletBookChains` is `false`: Returns only the connector's `supportedChains`, ignoring wallet book chains. This is used for Solana WalletConnect connectors to ensure they are correctly filtered out when Solana is disabled, even if the wallet book indicates the wallet brand supports both ETH and SOL globally (e.g., Trust Wallet Solana connector with walletKey 'trust' matching the wallet book entry that lists both EVM and SOL chains).

## Usage

```typescript
import { getSupportedWallets } from '@dynamic-labs/multi-wallet';

const wallets = getSupportedWallets({
  settings: projectSettings,
  walletConnectorsProp: walletConnectors,
  walletBook: walletBookData,
  chainRpcProviders: rpcProviders,
  // ... other options
});
```

## Usage in Dynamic SDK

This package is primarily used internally by the Dynamic SDK React Core package. The main usage patterns are:

- **Wallet List Building**: `getEnabledWallets` is used to filter available wallets based on enabled chains
- **Configuration Setup**: `getWalletConnectorConstructorOptions` builds the options needed to create wallet connector instances
- **Message Signing**: `generateMessageToSign` creates SIWE-compliant messages for wallet authentication

## Development

### Running unit tests

```bash
npx nx test multi-wallet
```

### Building the package

```bash
npx nx build multi-wallet
```
