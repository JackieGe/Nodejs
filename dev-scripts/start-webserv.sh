#!/bin/bash
export NODE_ENV='development'
export PGSERVER="localhost"
export PGPORT="5433"
export PGDATABASE="test";
export PGUSER="postgres"
export PGPASSWORD="jackie"

export PORT=3001
cd ..
tsc && npm start