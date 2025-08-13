#!/usr/bin/env bash
set -euo pipefail
kubectl delete -f argocd/app-of-apps.yaml || true
kubectl delete ns monitoring apps || true
helm -n argocd uninstall argocd || true
kubectl delete ns argocd || true
echo "Cleanup completed."
