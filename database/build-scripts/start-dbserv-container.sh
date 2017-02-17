docker run --name postgres_serv01 \
    -e POSTGRES_PASSWORD=mysecretpassword \
    -p 15432:5432 \
    -d jackiege/postgres:0.1