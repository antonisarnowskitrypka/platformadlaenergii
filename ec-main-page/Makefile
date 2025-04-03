# Define variables
NUXT_BUILD_DIR = .output/public  # Or adjust if your Nuxt build directory is different
TARBALL_NAME = nuxt3-build.tar.gz

# nginx-proxy : dev, nginx-router-preprod : pp
NAMESPACE = nginx-router-preprod

CONTAINER_PATH = /app/public
TEMP_DIR = /tmp

POD_NAME = $(shell kubectl get pods -n $(NAMESPACE) --field-selector=status.phase=Running -o=jsonpath='{.items[0].metadata.name}' | sort -r | head -n 1)

# Targets
.PHONY: build copy-to-pod extract-files reload-nginx

info:
	@echo "Deploying new Nuxt App to ${POD_NAME}"


# Build Nuxt 3 app (if not already built)
build:
	@echo "Step 1. Building Nuxt 3 app..."
	npx nuxt generate
	@echo "---------------------"

# Create a tarball of the Nuxt 3 build directory
create-tarball:
	@echo "Step 2. Creating tarball of Nuxt 3 build..."
	tar -czf $(TARBALL_NAME) -C $(NUXT_BUILD_DIR) .
	@echo "---------------------"


# Copy the tarball to the Kubernetes pod
copy-to-pod: create-tarball
	@echo "Step 3. Copying tarball to the pod..."
	@echo "Ensuring the directory exists on the pod..."
	kubectl exec -it -n $(NAMESPACE) $(POD_NAME) -- mkdir -p $(TEMP_DIR)
	@echo "Copying tarball to the pod..."
	kubectl cp $(TARBALL_NAME) $(NAMESPACE)/$(POD_NAME):$(TEMP_DIR)/
	@echo "---------------------"


# Extract the tarball into the /app/public directory
extract-files: copy-to-pod
	@echo "Step 4. Ensuring the directory $(CONTAINER_PATH) exists in the pod..."
	kubectl exec -it -n $(NAMESPACE) $(POD_NAME) -- bash -c "mkdir -p $(CONTAINER_PATH)"
	@echo "Step 5. Extracting tarball into $(CONTAINER_PATH) in the pod..."
	kubectl exec -it -n $(NAMESPACE) $(POD_NAME) -- bash -c "tar -xzf /tmp/$(TARBALL_NAME) -C $(CONTAINER_PATH)"
	@echo "---------------------"


# Reload Nginx to apply the changes
reload-nginx:
	@echo "Step 6. Reloading Nginx..."
	kubectl exec -it -n $(NAMESPACE) $(POD_NAME) -- nginx -s reload
	@echo "---------------------"


# Full deploy command
deploy: info build create-tarball copy-to-pod extract-files reload-nginx
	@echo "YAY! Nuxt 3 app deployed and Nginx reloaded successfully!"
