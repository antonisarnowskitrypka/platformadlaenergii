#!/bin/bash

env=''
ns=''

print_usage() {
  printf "Usage: '-r' - prod, '-p' - pre_prod, '-d' - dev"
}

while getopts 'dpr' flag; do
  case "${flag}" in
    d) env='dev' && ns='nginx-proxy' ;;
    p) env='pre_prod' && ns='nginx-router-preprod' ;;
    r) env='prod' && ns='' ;;
    *) print_usage
       exit 1 ;;
  esac
done

# Create all resources
kubectl apply -k deployments/k8s/overlays/$env

sleep 15
for file in ./assets/images/*; do
  kubectl cp $file $ns/$(kubectl get pod -n $ns | grep nginx-router | awk '{print $1}'):/assets/$(basename "$file")
done

for file in ./assets/images/partners/*; do
  kubectl cp $file $ns/$(kubectl get pod -n $ns | grep nginx-router | awk '{print $1}'):/assets/partners/$(basename "$file")
done

# Delete old pod
kubectl get pod -n $ns | grep nginx-router | awk '{print $1}' | xargs kubectl delete pod -n $ns