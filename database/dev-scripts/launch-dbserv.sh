POSTGRES_DB_SOURCE=$HOME/postgres/data/v1
mkdir -p $POSTGRES_DB_SOURCE
cp ../src/*.sql $POSTGRES_DB_SOURCE

docker run -v $POSTGRES_DB_SOURCE:/docker-entrypoint-initdb.d/ \
    -e POSTGRES_PASSWORD=mysecretpassword \
    --name some_postgres \
    -p 15432:5432 \
    -d postgres