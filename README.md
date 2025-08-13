# 🛡️ Self-Healing Infrastructure

End-to-end, production-like self-healing setup for microservices on Kubernetes with Helm, ArgoCD (GitOps), CI/CD (GitHub Actions), autoscaling (HPA/KEDA), monitoring (Prometheus, Grafana, Alertmanager) and chaos testing.

## What’s inside
- **.github/workflows** – CI/CD pipelines (build → push → deploy via ArgoCD)
- **argocd** – App-of-Apps + applications for services and monitoring
- **helm** – 4 service charts (user, auth, video, watch-history)
- **infrastructure** – monitoring configs, autoscaling, (optional) EKS IaC placeholder
- **chaos** – Litmus chaos experiments
- **scripts** – one-liners to deploy and cleanup

## Quick start
```bash
# 1) Create cluster (kind/minikube/EKS)
# 2) Install ArgoCD
kubectl create namespace argocd
helm repo add argo https://argoproj.github.io/argo-helm
helm install argocd argo/argo-cd -n argocd

# 3) Apply App-of-Apps (points ArgoCD to this repo)
kubectl apply -f argocd/app-of-apps.yaml

# 4) (Optional) Port-forward ArgoCD
kubectl -n argocd port-forward svc/argocd-server 8080:80
```

### Secrets needed for CI/CD
Create GitHub Actions repo secrets:
- `GHCR_USERNAME`, `GHCR_TOKEN` (or use ECR credentials)
- `ARGOCD_SERVER`, `ARGOCD_USERNAME`, `ARGOCD_PASSWORD`

Update image repositories under `helm/charts/*/values.yaml`.

---

> Use this as a companion infra repo for: `https://github.com/<you>/netflix-microservices-clone`.
