CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (

  -- TABLE CODE TO GO HERE
  id int NOT NULL AUTO_INCREMENT,
	author varchar(255) NOT NULL,
	chirp varchar(255) NOT NULL,
  created_at TIMESTAMP,
	PRIMARY KEY (id)
);