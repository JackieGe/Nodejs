docker run --name node_serv01 \
    --link postgres_serv01:postgres \
    -e PGSERVER="postgres" \
    -e PGPORT=5432 \
    -e PGDATABASE="test" \
    -e PGUSER="postgres" \
    -e PGPASSWORD="mysecretpassword" \
    -p 8081:8081 \
    -d jackiege/node:0.1