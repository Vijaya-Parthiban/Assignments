-- create database edu_platform;

-- use edu_platform;

CREATE TABLE stud_assignment (
    assignment_id INT AUTO_INCREMENT PRIMARY KEY,
    assignment_title VARCHAR(255),
    due_date DATE,
    course_name VARCHAR(100),
    lesson_id INT
);

INSERT INTO stud_assignment (assignment_id, assignment_title, due_date, course_name, lesson_id) VALUES
(1, 'HTML Basics Quiz', '2025-01-10', 'HTML', 1),
(2, 'Build a Simple Webpage', '2025-01-15', 'HTML', 1),
(3, 'CSS Styling Assignment', '2025-01-20', 'CSS', 2),
(4, 'JavaScript Mini Project', '2025-01-30', 'JavaScript', 3);

SELECT assignment_id, assignment_title, course_name, due_date, lesson_id
FROM stud_assignment;

CREATE TABLE lessons (
    lesson_id INT PRIMARY KEY,
    lesson_title VARCHAR(255),
    course_name VARCHAR(100)
);

INSERT INTO lessons (lesson_id, lesson_title, course_name) VALUES
(1, 'HTML Basics', 'HTML'),
(2, 'CSS Styling', 'CSS'),
(3, 'JavaScript Introduction', 'JavaScript');

ALTER TABLE stud_assignment
ADD CONSTRAINT fk_lesson
FOREIGN KEY (lesson_id) REFERENCES lessons (lesson_id)
ON DELETE CASCADE;