#!/bin/bash
cd ..
# Execută un `git pull` pentru a actualiza repository-ul
echo "Pulling latest changes from Git repository..."
git pull origin main

# Actualizează submodulele Git
echo "Updating submodules..."
git submodule update --init --recursive

# Oprește containerul Docker pentru frontend
echo "Stopping Docker container 'backend'..."
docker stop backend

# Elimină containerul Docker pentru frontend
echo "Removing Docker container 'backend'..."
docker rm backend

# Elimină imaginea Docker pentru frontend
echo "Removing Docker image 'marweb-nestjs'..."
docker rmi marweb-nestjs

docker system prune

# Pornește serviciile definite în `docker-compose.yml`
echo "Starting Docker containers with docker-compose..."
docker-compose up --build -d

echo "Deployment script completed successfully."