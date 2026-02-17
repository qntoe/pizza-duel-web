# @dynamic-labs-wallet/forward-mpc-shared

Shared types, schemas, and utilities for Forward MPC Client operations.

## Installation

```bash
npm install @dynamic-labs-wallet/forward-mpc-shared
# or
pnpm add @dynamic-labs-wallet/forward-mpc-shared
# or
yarn add @dynamic-labs-wallet/forward-mpc-shared
```

## Usage

```typescript
import {
  // Core types and utilities
  ForwardMpcMessage,
  ForwardMpcError,

  // Codecs for serialization
  DomainCodec,
  EncryptedKeyshareCodec,

  // Crypto utilities
  generateKeypair,
  encapsulate,
  decapsulate,

  // Signing algorithms
  SigningAlgorithm,
  AllSigningAlgorithms,
} from '@dynamic-labs-wallet/forward-mpc-shared';
```

## Exports

### Main Export

- Core types, utilities, and constants

### Sub-exports

- `./codecs` - Serialization codecs for various data types
- `./crypto` - Cryptographic utilities and key operations
- `./utils/*` - Utility functions

## License

MIT
