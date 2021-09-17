#!/bin/bash

# Clean dist directory
rm -rf dist

# Build for esm and cjs
npm run build:esm
npm run build:cjs

# Fix esm imports
node ./fix-esm-imports.mjs

# Add package.json file to esm subtree
cat >dist/esm/package.json <<!EOF
{
    "type": "module"
}
!EOF

# Add package.json file to cjs subtree
cat >dist/cjs/package.json <<!EOF
{
  "type": "commonjs"
}
!EOF
