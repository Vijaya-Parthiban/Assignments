function checkPositive(num) {
    if (num < 0) {
        throw new Error("Number cannot be negative!");
    }
    return "Number is positive.";
}

try {
    console.log(checkPositive(-5));
} catch (error) {
    console.log(error.message);
}