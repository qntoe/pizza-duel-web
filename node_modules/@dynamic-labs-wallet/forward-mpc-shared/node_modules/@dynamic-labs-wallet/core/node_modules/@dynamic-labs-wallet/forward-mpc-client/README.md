# @dynamic-labs-wallet/forward-mpc-client

WebSocket client for Forward MPC (Multi-Party Computation) operations.

## Installation

```bash
npm install @dynamic-labs-wallet/forward-mpc-client
# or
pnpm add @dynamic-labs-wallet/forward-mpc-client
# or
yarn add @dynamic-labs-wallet/forward-mpc-client
```

## Usage

```typescript
import { ForwardMpcClient } from '@dynamic-labs-wallet/forward-mpc-client';

// Create a new client instance
const client = new ForwardMpcClient({
  url: 'wss://your-mpc-server.com',
  // ... other configuration options
});

// Connect to the MPC server
await client.connect();

// Perform MPC operations
const result = await client.performSigning({
  // ... signing parameters
});

// Clean up
client.disconnect();
```

## Features

- WebSocket-based communication
- MPC signing operations
- Attestation verification
- Event-driven architecture
- TypeScript support

## License

MIT
