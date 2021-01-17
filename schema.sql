--Drop if needed
DROP DATABASE IF EXISTS Employee_Tracker;
--Create Database
CREATE DATABASE Employee_Tracker;
--Select Database
USE Employee_Tracker;

CREATE TABLE department(
id INTEGER AUTO_INCREMENT NOT NULL,
NAME VARCHAR(50) NOT NULL,
PRIMARY KEY(id)
);
--Create Role Table
CREATE TABLE role(
id INTEGER AUTO_INCREMENT NOT NULL,
title VARCHAR(30) NOT NULL,
salary DECIMAL NOT NULL,
department_id INTEGER NOT NULL,
CONSTRAINT fk_department_id FOREIGN KEY (department_id) REFERENCES department(id),
PRIMARY KEY(id)
);
--Create Employee Table
CREATE TABLE employee(
id INTEGER AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INTEGER NOT NULL,
CONSTRAINT fk_role_id FOREIGN KEY (role_id) REFERENCES ROLE(id),
manager_id INTEGER ,
CONSTRAINT fk_manager_id FOREIGN KEY (manager_id) REFERENCES employee(id),
PRIMARY KEY(id)
);

--SELECT
SELECT * FROM employee;
SELECT * FROM role;
SELECT * FROM department;

--INSERT
INSERT INTO department (NAME)
VALUES ("Chiefs");
INSERT INTO department (NAME)
VALUES ("Secretaries");
INSERT INTO department (NAME)
VALUES ("Finance");
INSERT INTO department (NAME)
VALUES ("Legal");
INSERT INTO department (NAME)
VALUES ("Consulting");

--SELECT
SELECT * FROM department;

--INSERT
INSERT INTO ROLE (title, salary, department_id)
VALUES ("Chief of Everyone", 100000, 1);
INSERT INTO ROLE (title, salary, department_id)
VALUES ("Secretary of Defense", 75000, 2);
INSERT INTO ROLE (title, salary, department_id)
VALUES ("Chief of Staff", 80000, 1);
INSERT INTO ROLE (title, salary, department_id)
VALUES ("Company Attorney", 80000, 4);
INSERT INTO ROLE (title, salary, department_id)
VALUES ("Accountant", 60000, 3);
INSERT INTO ROLE (title, salary, department_id)
VALUES ("Consultants", 45000, 5);

--SELECT
SELECT * FROM ROLE;

--INSERT
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Ava", "Brenneke", 1); 
INSERT into employee (first_name, last_name, role_id)
VALUES ("Omar", "Teacher", 2);
INSERT into employee (first_name, last_name, role_id)
VALUES ("Matt", "Subteach", 3);
INSERT into employee (first_name, last_name, role_id)
VALUES ("Peter", "Parker", 4);
INSERT into employee (first_name, last_name, role_id)
VALUES ("Chris", "Brown", 5);
INSERT into employee (first_name, last_name, role_id)
VALUES ("Post", "Malone", 6);

--SELECT
SELECT * FROM employee;
