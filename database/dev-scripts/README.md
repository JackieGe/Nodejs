# How to run with original postgres image (without build Dockerfile)

## Start Server

1. Execute launch_dbserv.sh to start the postgres server container

## Test Client

1. Run below

   `docker run -it --name postgres_test_client --link postgres_serv01:postgres postgres psql -h postgres -U postgres -d postgres`

2. Or run below

   `docker run -it --name postgres_test_client postgres psql -h <Your host machine real IP, not 127.0.0.1 or localhost> -p 15432 -U postgres -d postgres`

**NOTE:**
   1. when prompted for password, please type: mysecretpassword
   2. then type: "select * from pg_database;" to check test db should be created;
   3. then type: "\c test;" to use test db
   4. then type: "select * from contact;" to check there should be initial data.