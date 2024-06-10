#!/bin/bash

# Numele containerului PostgreSQL
CONTAINER_NAME=marweb_database

# Numele bazei de date și utilizatorului
DB_NAME=${POSTGRES_DB:-mydatabase}
DB_USER=${POSTGRES_USER:-postgres}

# Locația de backup pe mașina gazdă
BACKUP_DIR=./postgres-backup
BACKUP_FILE=$BACKUP_DIR/backup.sql

# Verifică dacă fișierul de backup există
if [ -f "$BACKUP_FILE" ]; then
    echo "Restoring database from $BACKUP_FILE"
    docker exec -i $CONTAINER_NAME psql -U $DB_USER -d $DB_NAME < $BACKUP_FILE
else
    echo "No backup file found at $BACKUP_FILE"
fi
