use db;
CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    description TEXT
);

INSERT INTO departments (name, description)
VALUES
('Computer Science', 'Focuses on computing and programming'),
('Mathematics', 'Covers advanced math concepts'),
('English', 'Department for literature and communication');

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    role VARCHAR(20)
);

INSERT INTO users (name, email, role)
VALUES
('Vijaya', 'vijaya@example.com', 'student'),
('John', 'john@example.com', 'student'),
('Ashok', 'ashok@example.com', 'teacher');

SELECT * FROM users
WHERE role = 'student';

ALTER TABLE users
ADD COLUMN phone VARCHAR(15);

UPDATE users SET phone = '9876543210' WHERE id = 1;
UPDATE users SET phone = '9123456780' WHERE id = 2;
UPDATE users SET phone = '9001234567' WHERE id = 3;

select * from users;

CREATE TABLE student (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(100)
);

INSERT INTO student (student_id, student_name) VALUES
(1, 'Vijaya'),
(2, 'Ashok'),
(3, 'Meera');

CREATE TABLE course (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(100)
);

INSERT INTO course (course_id, course_name) VALUES
(101, 'HTML'),
(102, 'CSS'),
(103, 'JavaScript');

CREATE TABLE enrollment (
    enroll_id INT PRIMARY KEY,
    student_id INT,
    course_id INT
);

INSERT INTO enrollment (enroll_id, student_id, course_id) VALUES
(1, 1, 101),   
(2, 1, 103),   
(3, 2, 102),   
(4, 3, 101);   

SELECT 
    student.student_name,
    course.course_name
FROM student
JOIN enrollment ON student.student_id = enrollment.student_id
JOIN course ON enrollment.course_id = course.course_id;