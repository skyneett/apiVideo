CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
    id INT (11) NOT NULL AUTO_INCREMENT,
    name VARCHAR (45) DEFAULT NULL,
    salary INT DEFAULT NULL,
    PRIMARY KEY (id),
)

insert into employee values
(1, 'John Doe', 50000),
(2, 'Jane Smith', 60000),
(3, 'Alice Johnson', 70000),
(4, 'Bob Brown', 80000),
(5, 'Charlie White', 90000);