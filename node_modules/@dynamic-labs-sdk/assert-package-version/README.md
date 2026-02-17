# @dynamic-labs/assert-package-version

Ensures all `@dynamic-labs/*` packages in your project are running on the same version.

## What it does

- Automatically checks version consistency across all `@dynamic-labs` packages
- Logs detailed error messages when versions don't match
- Uses `@dynamic-labs/sdk-react-core` as the reference version

## Error Example

```
🚨 Version Mismatch Error

Affected Packages:
- `@dynamic-labs/sdk-ui` (installed: **4.24.0**, required: **4.25.7**)

💡 Update all @dynamic-labs/* packages to version `4.25.7` in your package.json
```

## Fix

1. Update all `@dynamic-labs/*` packages in `package.json` to the same version
2. Run `npm install` or `yarn install`
3. Use `npx dynamic-doctor run` for additional checks

## API

```typescript
import { assertPackageVersion } from '@dynamic-labs/assert-package-version';

// Called internally by @dynamic-labs packages
assertPackageVersion('@dynamic-labs/sdk-react-core', '4.25.7');
```
