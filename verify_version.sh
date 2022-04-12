#!/bin/bash

# Verify package.json version matches version.ts
if ! npx genversion --check-only -v --es6 --semi --double src/util/version.ts; then
  echo "Run the following command to fix:
npx genversion --es6 --semi --double src/util/version.ts"

  exit 1
fi
