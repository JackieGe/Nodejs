POSTGRES_DB_SOURCE=$HOME/postgres/data/v1
mkdir -p $POSTGRES_DB_SOURCE
cp ../src/*.sql $POSTGRES_DB_SOURCE

docker run --name postgres_serv01 \
    -v $POSTGRES_DB_SOURCE:/docker-entrypoint-initdb.d/ \
    -e POSTGRES_PASSWORD=mysecretpassword \
    -p 15432:5432 \
    -d postgres