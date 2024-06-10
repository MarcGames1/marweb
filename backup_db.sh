#!/bin/bash

# Numele containerului PostgreSQL
CONTAINER_NAME=marweb_database

# Numele bazei de date și utilizatorului
DB_NAME=${POSTGRES_DB}
DB_USER=${POSTGRES_USER}

# Locația de backup pe mașina gazdă
BACKUP_DIR=./postgres-backup
BACKUP_FILE=$BACKUP_DIR/backup.sql

# Asigură-te că directorul de backup există
mkdir -p $BACKUP_DIR

# Efectuează backup-ul bazei de date folosind `docker exec`
docker exec $CONTAINER_NAME pg_dump -U $DB_USER $DB_NAME > $BACKUP_FILE

echo "Backup completed and saved to $BACKUP_FILE"
