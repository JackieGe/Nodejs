docker run --name node_serv01 \
    -e PGSERVER="10.32.146.180" \
    -p 8081:8081 \
    -d jackiege/node:0.1