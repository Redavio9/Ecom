#!/bin/bash
set -e
echo "Waiting for PostgreSQL to be ready..."
while ! nc -z postgres 5432; do
sleep 1
done
echo "PostgreSQL is up - executing command"
exec "$@"