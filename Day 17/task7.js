let student = {
    name: "Vijaya",
    age: 22,
    course: "Python Full Stack",
    isEnrolled: true,
    skills: ["HTML", "CSS", "JavaScript"], // Array
    address: { city: "Chennai", country: "India" }, // Object
    internship: null, // Null
    futureGoal: undefined, // Undefined
    bigNumber: 987654321234567890n, // BigInt
    id: Symbol("studentID") // Symbol
};

console.log(student.name, "-", typeof student.name);
console.log(student.age, "-", typeof student.age);
console.log(student.course, "-", typeof student.course);
console.log(student.isEnrolled, "-", typeof student.isEnrolled);
console.log(student.skills, "-", typeof student.skills);
console.log(student.address, "-", typeof student.address);
console.log(student.internship, "-", typeof student.internship);
console.log(student.futureGoal, "-", typeof student.futureGoal);
console.log(student.bigNumber, "-", typeof student.bigNumber);
console.log(student.id, "-", typeof student.id);