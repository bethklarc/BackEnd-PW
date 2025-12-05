CREATE DATABASE bdd_prueba;
USE bdd_prueba;

CREATE TABLE works(
id_works int not null,
emp_id int not null,
store_id int not null,
primary key(id_works,store_id))
partition by range(store_id)(
partition p1 values less than (2),
partition p2 values less than (3),
partition p3 values less than (4),
partition p4 values less than (5),
partition plast values less than maxvalue
);