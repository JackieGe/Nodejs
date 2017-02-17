docker run --name postgres_serv01 \
    -e POSTGRES_PASSWORD=mysecretpassword \
    -p 15432:5432 \
    -d JackieGe/postgres:0.1