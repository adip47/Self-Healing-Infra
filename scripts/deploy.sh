#!/usr/bin/env bash
set -euo pipefail

# Install ArgoCD if not present
kubectl get ns argocd >/dev/null 2>&1 || kubectl create namespace argocd
helm repo add argo https://argoproj.github.io/argo-helm >/dev/null
helm upgrade --install argocd argo/argo-cd -n argocd

# Apply App-of-Apps
kubectl apply -f argocd/app-of-apps.yaml

echo "ArgoCD root app applied. Check 'argocd' namespace and UI to see sync status."
