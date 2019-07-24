DROP SCHEMA IF EXISTS products;

CREATE SCHEMA `products`;
USE products;

CREATE TABLE `products`(
    `id` INTEGER UNSIGNED AUTO_INCREMENT NOT NULL,
    `sku` VARCHAR(14) NOT NULL,
    `price` FLOAT(6, 2) NOT NULL,
    `date_added` DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);

CREATE TABLE `customer`(
    `id` INTEGER UNSIGNED AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(50),
    PRIMARY KEY(id)
);

CREATE TABLE `order`(
    `id` INTEGER UNSIGNED AUTO_INCREMENT NOT NULL,
    `customer_id` INTEGER UNSIGNED NOT NULL,
    `address_id` INTEGER UNSIGNED NOT NULL,
    `date_placed` DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    FOREIGN KEY(customer_id) REFERENCES customer(id)
);

CREATE TABLE `order_item`(
    `order_id` INTEGER UNSIGNED NOT NULL,
    `product_id` INTEGER UNSIGNED NOT NULL,
    `quantity` INTEGER DEFAULT 1,
    `notes` VARCHAR(255)
);

CREATE TABLE `address`(
    `id` INTEGER UNSIGNED AUTO_INCREMENT NOT NULL,
    `type` ENUM('billing', 'shipping') NOT NULL,
    `city` VARCHAR(255),
    `state` VARCHAR(255),
    `country_code` CHAR(2),
    `street` VARCHAR(255),
    `customer_id` INTEGER UNSIGNED NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(customer_id) REFERENCES customer(id)
);

