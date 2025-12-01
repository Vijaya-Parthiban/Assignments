CREATE DATABASE store_db;
USE store_db;

CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200),
    price DECIMAL(10,2),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (name, price)
VALUES
('Laptop', 75000),
('Mechanical Keyboard', 3200),
('Smartphone', 30000),
('Gaming Headphones', 4500),
('Smart Watch', 5500),
('Bluetooth Speaker', 1800),
('LED Monitor', 12000),
('External Hard Disk', 5000),
('Wireless Mouse', 900),
('Tablet', 22000);

SELECT *
FROM products
WHERE price > 500;

UPDATE products
SET name = 'Premium Smartphone'
WHERE id = (
    SELECT id FROM (
        SELECT id FROM products WHERE name = 'Smartphone'
    ) AS t
);

SELECT *
FROM products
ORDER BY price DESC
LIMIT 3;