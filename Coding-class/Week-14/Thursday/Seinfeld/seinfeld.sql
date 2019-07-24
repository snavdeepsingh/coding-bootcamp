-- Created the DB "wizard_schools_db" (only works on local connections)
CREATE DATABASE seinfeld_db;
USE seinfeld_db;

-- Created the table "schools" 
CREATE TABLE characters (
  id int AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `coolness` INT NOT NULL,
  `attitude` varchar(30) NOT NULL,
  PRIMARY KEY(id)
);

-- Inserted a set of records into the table
INSERT INTO characters VALUES ("jerry", '50', "Not-relaxed" );
INSERT INTO characters VALUES ("George", '30', "Not-relaxed" );
INSERT INTO characters VALUES ("Elaine", '35', "Not-relaxed" );
INSERT INTO characters VALUES ("Kramer", '30', "relaxed" );
