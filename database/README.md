# How to run with original postgres image (without build Dockerfile)

1. Execute launch_db_serv.sh to start the postgres server container

2. Run below

   `docker run -it --name postgres_test_client --link some_postgres:postgres postgres psql -h postgres -U postgres -d postgres`

3. Or run below

   `docker run -it --name postgres_test_client postgres psql -h <Your host machine real IP, not 127.0.0.1 or localhost> -p 15432 -U postgres -d postgres`

**NOTE:**
   1. when prompted for password, please type: mysecretpassword
   2. then type: "select * from pg_database;" to check test db should be created;
   3. then type: "\c test;" to use test db
   4. then type: "select * from contact;" to check there should be initial data.