#!/bin/bash
# Installs npm dependencies so tests, linters and builds work in Claude Code
# cloud sessions. Local sessions are left alone.
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "${CLAUDE_PROJECT_DIR:-$(dirname "$0")/../..}"

# npm install rather than npm ci: it reuses node_modules from the cached
# container instead of deleting it. Browsers are pre-installed in the image,
# so Playwright must not download its own.
export PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1
npm install --no-audit --no-fund
