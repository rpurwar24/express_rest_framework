SET sql_mode='ANSI_QUOTES';
CREATE DATABASE IF NOT EXISTS erf;
use erf;
CREATE TABLE IF NOT EXISTS user (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,name varchar(100) not null,email varchar(30) not null,mobile varchar(10) not null,password varchar(100) not null);
CREATE TABLE IF NOT EXISTS category (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,name varchar(100) not null,description text null);
CREATE TABLE IF NOT EXISTS product (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,name varchar(100) ,description text ,price float ,category_id int not null,Foreign Key (category_id) REFERENCES category(id));
CREATE TABLE IF NOT EXISTS transaction (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,user_id int not null,product_id int not null,purchase_date date not null,quantity int not null DEFAULT 0,Foreign Key (user_id) REFERENCES user(id),Foreign Key (product_id) REFERENCES product(id));
