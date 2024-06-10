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

# Asigură-te că directorul de backup există
mkdir -p $BACKUP_DIR

# Efectuează backup-ul bazei de date
PGPASSWORD=$DB_PASSWORD pg_dump -h $DB_HOST -U $DB_USER -d $DB_NAME -f $BACKUP_FILE

echo "Backup completed and saved to $BACKUP_FILE"
