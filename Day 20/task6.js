function getGrade(marks) {
    if (marks >= 80) return "A";
    else if (marks >= 60) return "B";
    else return "C"
}
console.log("Grade:" , getGrade(50));