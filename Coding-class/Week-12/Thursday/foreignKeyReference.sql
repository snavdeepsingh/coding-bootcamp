
DROP SCHEMA IF EXISTS products_db;
CREATE SCHEMA products_db;

USE products_db;

CREATE TABLE products(
  id INTEGER UNSIGNED AUTO_INCREMENT  NOT NULL,
  product_name VARCHAR(20),
  sku VARCHAR(20),
  PRIMARY KEY(id)
);

CREATE TABLE product_descriptions(
  id INTEGER UNSIGNED AUTO_INCREMENT NOT NULL,
  description VARCHAR(255) NOT NULL,
  product_id INTEGER UNSIGNED,
  PRIMARY KEY(id),
  FOREIGN KEY(product_id) REFERENCES products(id) ON DELETE CASCADE
);

INSERT INTO products(
 product_name,
 sku
)
VALUES (
  "Acme Widget A",
  "AA001"
), (
  "Acme Widget B", 
  "BB001"
)


INSERT INTO product_descriptions(
  description,
  product_id
)
VALUES(
  "This does a thing.",
  1
) ,
(
  "This also does a thing",
  1
)


