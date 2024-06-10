#!/bin/bash

# Setări pentru conexiunea la baza de date
DB_HOST=${DB_HOST:-localhost}
DB_PORT=${DB_PORT:-5432}
DB_NAME=${DB_NAME:-mydatabase}
DB_USER=${DB_USER:-postgres}
DB_PASSWORD=${DB_PASSWORD:-password}

# Locația de backup
BACKUP_DIR=./postgres-backup
BACKUP_FILE=$BACKUP_DIR/backup.sql

# Verifică dacă fișierul de backup există
if [ -f "$BACKUP_FILE" ]; then
    echo "Restoring database from $BACKUP_FILE"
    PGPASSWORD=$DB_PASSWORD psql -h $DB_HOST -U $DB_USER -d $DB_NAME -f $BACKUP_FILE
else
    echo "No backup file found at $BACKUP_FILE"
fi
