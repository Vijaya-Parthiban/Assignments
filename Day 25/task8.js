function ageCheck(age) {
    if (age < 18) {
        throw new Error("You must be at least 18 years old.");
    }
    return "Access granted.";
}

try {
    console.log(ageCheck(16));
} catch (error) {
    console.log(error.message);
}