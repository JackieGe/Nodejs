#how to run with original postgres image (without build Dockerfile)

#.1 execute launch_db_serv.sh to start the postgres server container

#.2 run below
   docker run -it --name postgres_test_client --link some_postgres:postgres postgres psql -h postgres -U postgres -d postgres

#.3 or run below
   docker run -it --name postgres_test_client postgres psql -h <Your host machine real IP, not 127.0.0.1 or localhost> -p 15432 -U postgres -d postgres

   # when prompted for password, please type: mysecretpassword
   # then type: "select * from pg_database;" to check test db should be created;
   # then type: "\c test;" to use test db
   # then type: "select * from contact;" to check there should be initial data.