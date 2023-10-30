#!/bin/bash
set -e

# Clean dist directory
rm -rf dist

# Verify package.json version matches version.ts
source ./verify_version.sh

# Build for esm and cjs
npm run build:esm
npm run build:cjs

# Fix esm imports
node ./fix-esm-imports.mjs

# Add package.json file to esm subtree
node ./create-package-json.cjs dist/esm/package.json module

# Add package.json file to cjs subtree
node ./create-package-json.cjs dist/cjs/package.json commonjs

# Remove test files
find ./dist -type f -name "*.test.js" -exec rm {} +
find ./dist -type f -name "*.test.d.ts" -exec rm {} +
find ./dist -type f -name "test-utils*" -exec rm {} +
