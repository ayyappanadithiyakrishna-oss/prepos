#!/usr/bin/env bash
# Run after significant changes: new routes, components, API routes, content files.
# Usage: npm run graphify:update
#        npm run graphify:update -- "added SAT geometry content"
set -euo pipefail

PROJ_DIR="$(cd "$(dirname "$0")/.." && pwd)"
MSG="${1:-}"

echo "PrepOS graphify update..."
cd "$PROJ_DIR"

if [ ! -f "graphify-out/graph.json" ]; then
  echo "No existing graph — running full build..."
  graphify "$PROJ_DIR"
else
  graphify "$PROJ_DIR" --update
fi

echo ""
echo "Graph updated. God nodes:"
grep -A 12 "## God Nodes" graphify-out/GRAPH_REPORT.md 2>/dev/null | tail -11 || true

if [ -n "$MSG" ]; then
  echo "$(date -u +%Y-%m-%dT%H:%M:%SZ)  $MSG" >> graphify-out/.graphify_update_log.txt
fi
