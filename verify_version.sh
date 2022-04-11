#!/bin/bash

if ! npx genversion --check-only -v src/util/version.ts; then
  echo 'Run the following command to fix:'
  echo 'npx genversion --es6 --semi --double src/util/version.ts'
  exit 1
fi
