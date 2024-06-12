#!/bin/bash

# Execută un `git pull` pentru a actualiza repository-ul
echo "Pulling latest changes from Git repository..."
git pull origin main

# Actualizează submodulele Git
echo "Updating submodules..."
git submodule update --init --recursive

# Oprește containerul Docker pentru frontend
echo "Stopping Docker container 'admin'..."
docker stop Admin

# Elimină containerul Docker pentru frontend
echo "Removing Docker container 'frontend'..."
docker rm Admin

# Elimină imaginea Docker pentru frontend
echo "Removing Docker image 'marweb-frontend'..."
docker rmi marweb-admin

docker system prune

# Pornește serviciile definite în `docker-compose.yml`
echo "Starting Docker containers with docker-compose..."
docker-compose up --build -d

echo "Deployment script completed successfully."