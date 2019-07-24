INSERT INTO `products`(`sku`, `price`)
VALUES
    ('AAAAA1', 19.99), 
    ('AAAAA2', 9.99), 
    ('AAAAA3', 4.99), 
    ('AAAAA4', 17.99), 
    ('AAAAA5', 1.00);

INSERT INTO `customer`
    (`name`)
VALUES
    ('Arthur Dent'), 
    ('Sirius Black'), 
    ('Zaphod Beeblebrox'), 
    ("Trillian McMillan");


INSERT INTO `address`
(
    `type`,
    `city`,
    `state`,
    `country_code`,
    `street`,
    `customer_id`
)
SELECT
    'shipping',
    'Somewhere',
    'West Country',
    'UK',
    '1 Boring Lane',
    arthur.id
FROM `customer` as arthur WHERE `name` = "Arthur Dent";

INSERT INTO `address`
(
    `type`,
    `city`,
    `state`,
    `country_code`,
    `street`,
    `customer_id`
)
SELECT
    'shipping',
    'london',
    'london',
    'UK',
    '12 Grimmauld Place',
    sirius.id
FROM `customer` as sirius WHERE `name` = "Sirius Black";

INSERT INTO `address`
(
    `type`,
    `city`,
    `state`,
    `country_code`,
    `street`,
    `customer_id`
)
SELECT
    'shipping',
    'Azkaban Island',
    'London',
    'UK',
    '??',
    sirius.id
FROM `customer` as sirius WHERE `name` = "Sirius Black";

INSERT INTO `address`
(
    `type`,
    `city`,
    `state`,
    `country_code`,
    `street`,
    `customer_id`
)
SELECT
    'shipping',
    '??',
    '??',
    'GX',
    '??',
    zaphod.id
FROM `customer` as zaphod WHERE `name` = "Zaphod Beeblebrox";

INSERT INTO `order`(customer_id, address_id)
SELECT `id`, 1 FROM `customer` WHERE `name` = "Arthur Dent";

SET @order_id = LAST_INSERT_ID();
INSERT INTO `order_item`(
    `order_id`,
    `product_id`,
    `quantity`,
    `notes`
)
VALUES(
    @order_id,
    1,
    6,
    "I need six of these things"
);

INSERT INTO `order_item`(
    `order_id`,
    `product_id`,
    `quantity`,
    `notes`
)
VALUES(
    @order_id,
    2,
    1,
    "And one of these"
);

INSERT INTO `order_item`(
    `order_id`,
    `product_id`,
    `quantity`,
    `notes`
)
VALUES(
    @order_id,
    3,
    1,
    "And this"
);


INSERT INTO `order`(customer_id, address_id)
SELECT id, 1 FROM customer WHERE `name` = "Arthur Dent";
SET @order_id = LAST_INSERT_ID();
INSERT INTO `order_item`(
    `order_id`,
    `product_id`,
    `quantity`,
    `notes`
)
VALUES(
    @order_id,
    2,
    4,
    "Please don't break these this time"
);

INSERT INTO `order`(customer_id, address_id)
SELECT id, 1 FROM customer WHERE `name` = "Arthur Dent";
SET @order_id = LAST_INSERT_ID();
INSERT INTO `order_item`(
    `order_id`,
    `product_id`,
    `quantity`,
    `notes`
)
VALUES(
    @order_id,
    3,
    1,
    ""
);

INSERT INTO `order`(customer_id, address_id)
SELECT id, 2 FROM customer WHERE `name` = "Sirius Black";
SET @order_id = LAST_INSERT_ID();
INSERT INTO `order_item`(
    `order_id`,
    `product_id`,
    `quantity`,
    `notes`
)
VALUES(
    @order_id,
    1,
    1,
    ""
);

INSERT INTO `order`(customer_id, address_id)
SELECT id, 3 FROM customer WHERE `name` = "Sirius Black";
SET @order_id = LAST_INSERT_ID();
INSERT INTO `order_item`(
    `order_id`,
    `product_id`,
    `quantity`,
    `notes`
)
VALUES(
    @order_id,
    1,
    1,
    ""
);

INSERT INTO `order`(customer_id, address_id)
SELECT id, 4 FROM customer WHERE `name` = "Zaphod BeebleBrox";
SET @order_id = LAST_INSERT_ID();
INSERT INTO `order_item`(
    `order_id`,
    `product_id`,
    `quantity`,
    `notes`
)
VALUES(
    @order_id,
    4,
    10,
    ""
);

    