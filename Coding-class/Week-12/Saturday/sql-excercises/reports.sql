
/** SALES REPORTS **/

/* Simple select of all products and how many times they've sold - what's the problem here? */
SELECT
    p.sku,
    oi.quantity
FROM order_item oi
    LEFT JOIN products p ON oi.product_id = p.id;

/* Proper select of the products - includes products that have no sales */
SELECT
    p.sku,
    oi.quantity
FROM order_item oi
    RIGHT JOIN products p ON oi.product_id = p.id;

/* Grouping the products together with total sales now (qty) */
SELECT
    p.sku,
    SUM(oi.quantity) AS sales_total
FROM order_item oi
    RIGHT JOIN products p ON oi.product_id = p.id
GROUP BY p.sku
ORDER BY sales_total DESC;

/* Adding the number of times they've been ordered */
SELECT
    p.sku,
    SUM(oi.quantity) AS sales_total,
    COUNT(oi.order_id) AS times_ordered
FROM order_item oi
    RIGHT JOIN products p ON oi.product_id = p.id
GROUP BY p.sku
ORDER BY sales_total DESC;

/* Get the average number of quantity ordered per order */
SELECT
    p.sku,
    SUM(oi.quantity) AS sales_total,
    COUNT(oi.order_id) AS times_ordered,
    SUM(oi.quantity)/COUNT(oi.order_id) AS avg_per_order
FROM order_item oi
    RIGHT JOIN products p ON oi.product_id = p.id
GROUP BY p.sku
ORDER BY sales_total DESC;

/* Now with a default value if they haven't ever been ordered */
SELECT
    p.sku,
    IF( SUM(oi.quantity) > 0,  SUM(oi.quantity), 0 ) AS sales_qty,
    COUNT(oi.order_id) AS times_ordered
FROM order_item oi
    RIGHT JOIN products p ON oi.product_id = p.id
GROUP BY p.sku
ORDER BY sales_qty DESC;

/* Now, ordering them based on the total sales total rather than the quantity */
SELECT
    p.sku,
    IF( SUM(oi.quantity) > 0,  SUM(oi.quantity), 0 ) AS sales_qty,
    IF(
        SUM(oi.quantity) > 0,
        SUM(oi.quantity) * SUM(p.price),
        0
    ) AS sales_total,
    COUNT(oi.order_id) AS times_ordered
FROM order_item oi
    RIGHT JOIN products p ON oi.product_id = p.id
GROUP BY p.sku
ORDER BY sales_total DESC;

/** CUSTOMER ORDERS **/

/* Get all customers who have orders - without grouping them */
SELECT 
    c.id,
    c.name
FROM customer c
    INNER JOIN `order` o ON o.customer_id = c.id
GROUP BY c.id, c.name;

/* Get all customers who have orders - grouping their orders together */
SELECT 
    c.id,
    c.name
FROM customer c
    INNER JOIN `order` o ON o.customer_id = c.id
GROUP BY c.id, c.name;

/* Find our most loyal customers */
SELECT 
    c.id,
    c.name,
    COUNT(o.id) AS num_orders
FROM customer c
    INNER JOIN `order` o ON o.customer_id = c.id
GROUP BY c.id, c.name
ORDER BY num_orders DESC;

/* Find out how many items each customer purchased */
SELECT 
    c.id,
    c.name,
    COUNT(o.id) AS num_orders,
    SUM(oi.quantity) AS num_items_ordered_total
FROM customer c
    INNER JOIN `order` o ON o.customer_id = c.id
    INNER JOIN `order_item` oi ON oi.order_id = o.id
    INNER JOIN `products` p ON p.id = oi.product_id
GROUP BY c.id, c.name
ORDER BY num_orders DESC;

/* Find out how much each person has spent at our "store" */
SELECT 
    c.id,
    c.name,
    COUNT(o.id) AS num_orders,
    SUM(oi.quantity) AS num_items_ordered_total,
    SUM(oi.quantity * p.price)  AS total_spent
FROM customer c
    INNER JOIN `order` o ON o.customer_id = c.id
    INNER JOIN `order_item` oi ON oi.order_id = o.id
    INNER JOIN `products` p ON p.id = oi.product_id
GROUP BY c.id, c.name
ORDER BY total_spent DESC;

/* Get ONLY our highest spender */
SELECT 
    c.id,
    c.name,
    COUNT(o.id) AS num_orders,
    SUM(oi.quantity) AS num_items_ordered_total,
    SUM(oi.quantity * p.price)  AS total_spent
FROM customer c
    INNER JOIN `order` o ON o.customer_id = c.id
    INNER JOIN `order_item` oi ON oi.order_id = o.id
    INNER JOIN `products` p ON p.id = oi.product_id
GROUP BY c.id, c.name
ORDER BY total_spent DESC
LIMIT 1;

/* Get a customer by name */

SELECT 
    id,
    name
FROM `customer`
WHERE `name` LIKE '%black';

/* Using our previous query's data, find all customer orders */
SELECT 
    customer.name,
    order.id,
    order.date_placed  
FROM `order` 
    INNER JOIN(
        SELECT 
            id,
            name
        FROM `customer`
        WHERE `name` LIKE '%black'        
    ) AS customer 
    ON customer_id = customer.id;

/* Now, get the customer's addresses */
SELECT 
    name,
    a.id as address_id,
    city,
    state,
    country_code,
    street,
    customer_id
FROM `address` a   
    INNER JOIN(
        SELECT 
            id,
            name
        FROM `customer`
        WHERE `name` LIKE '%black' 
    ) AS customer
    ON customer_id = customer.id;

/* Get the total amount of shipments to each address and the name of who they went to */
SELECT 
    name,
    a.id as address_id,
    city,
    state,
    country_code,
    street,
    COUNT(o.id) as num_orders_placed
FROM `order` o  
    RIGHT JOIN address a ON a.id = o.address_id
    LEFT JOIN customer c ON c.id = o.customer_id
GROUP BY
    name,
    a.id,
    city,
    state,
    country_code,
    street;

/* Finally, get all customers in this report even if they don't have an address */
SELECT 
    name,
    a.id as address_id,
    city,
    state,
    country_code,
    street,
    COUNT(o.id) as num_orders_placed
FROM `order` o  
    RIGHT JOIN address a ON a.id = o.address_id
    RIGHT JOIN customer c ON c.id = o.customer_id
GROUP BY
    name,
    a.id,
    city,
    state,
    country_code,
    street;
