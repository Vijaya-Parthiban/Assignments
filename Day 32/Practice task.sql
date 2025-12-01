CREATE DATABASE company_db;

USE company_db;

CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    salary DECIMAL(10,2),
    hire_date DATE
);

INSERT INTO employees (first_name, last_name, salary, hire_date)
VALUES
('Aarav', 'Sharma', 45000, '2022-05-10'),
('Meera', 'Iyer', 52000, '2023-01-15'),
('Karan', 'Singh', 60000, '2020-11-20'),
('Divya', 'Nair', 48000, '2022-08-12'),
('Sanjay', 'Kumar', 54000, '2019-03-18'),
('Riya', 'Chopra', 62000, '2023-09-10'),
('Vivek', 'Patel', 70000, '2021-12-01'),
('Neha', 'Reddy', 58000, '2020-06-20');

SELECT first_name, hire_date
FROM employees;

UPDATE employees
SET salary = salary + 5000
WHERE id = (SELECT id FROM (SELECT id FROM employees WHERE first_name = 'Meera') AS t);

DELETE FROM employees
WHERE id IN (
    SELECT id FROM (
        SELECT id FROM employees WHERE hire_date < '2021-01-01'
    ) AS temp
);

SELECT *
FROM employees
ORDER BY salary ASC;