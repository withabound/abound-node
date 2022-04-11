#!/bin/bash
set -e

# Clean dist directory
rm -rf dist

source ./verify_version.sh

# Build for esm and cjs
npm run build:esm
npm run build:cjs

# Fix esm imports
node ./fix-esm-imports.mjs

# Add package.json file to esm subtree
node ./create-package-json.js dist/esm/package.json module

# Add package.json file to cjs subtree
node ./create-package-json.js dist/cjs/package.json commonjs
