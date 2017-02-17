CREATE DATABASE test;
\c test;
CREATE TABLE contact (
    "Id" int,
    "Name" varchar(100)
);
INSERT INTO contact VALUES(1, 'Jackie'); 
INSERT INTO contact VALUES(2, 'Tom'); 
INSERT INTO contact VALUES(2, 'HanMeimei'); 