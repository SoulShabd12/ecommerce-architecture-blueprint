# Operations Manual

## Deployment
1. Build Docker images: `docker build -t ecom-app .`
2. Push to registry.
3. Deploy to Kubernetes via `kubectl apply -f infrastructure/kubernetes/`.

## Monitoring
- Use Prometheus for metrics collection.
- Use Grafana for visualization.
