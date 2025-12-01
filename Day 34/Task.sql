CREATE DATABASE companyy_db;

USE companyy_db;

CREATE TABLE employees (
    emp_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    department_id INT,
    salary INT,
    hire_date DATE,
    active TINYINT(1)
);

INSERT INTO employees (first_name, last_name, department_id, salary, hire_date, active) VALUES
('Aarav', 'Sharma', 1, 90000, '2021-03-12', 1),
('Vijay', 'Kumar', 2, 45000, '2019-05-10', 1),
('Meera', 'Rao', 3, 82000, '2020-11-20', 0),
('Rahul', 'Singh', 1, 76000, '2022-01-15', 1),
('Anu', 'Menon', 5, 50000, '2021-07-08', 0),
('Kabir', 'Patel', 3, 120000, '2018-12-05', 1),
('Riya', 'Das', 5, 67000, '2023-02-24', 1),
('Arjun', 'Iyer', 1, 78000, '2020-06-18', 1),
('Pooja', 'Nair', 3, 95000, '2022-09-03', 1),
('Sana', 'Ali', 2, 30000, '2017-04-14', 0),
('Karan', 'Verma', 1, 86000, '2020-10-22', 1),
('Dev', 'Gowda', 5, 40000, '2021-12-12', 1),
('Nisha', 'Shetty', 3, 102000, '2022-03-10', 1),
('Manoj', 'Rathi', 1, 54000, '2021-09-19', 0);

SELECT first_name, salary
FROM employees
WHERE salary > 75000;

SELECT *
FROM employees
WHERE hire_date BETWEEN '2020-01-01' AND '2022-12-31';

SELECT *
FROM employees
WHERE department_id IN (1, 3, 5);

SELECT *
FROM employees
WHERE active = 0;

SELECT *
FROM employees
ORDER BY salary DESC
LIMIT 5;

SELECT department_id, COUNT(*) AS total_employees
FROM employees
GROUP BY department_id;

SELECT department_id, COUNT(*) AS total_employees
FROM employees
GROUP BY department_id
HAVING COUNT(*) > 5;

SELECT 
    department_id,
    SUM(salary) AS total_salary,
    AVG(salary) AS avg_salary,
    MIN(salary) AS min_salary,
    MAX(salary) AS max_salary
FROM employees
GROUP BY department_id;

SELECT *
FROM employees
LIMIT 10 OFFSET 10;

SELECT *
FROM employees
WHERE salary NOT BETWEEN 50000 AND 80000;