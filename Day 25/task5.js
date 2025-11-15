function checkNumber(num) {
    if (num > 100) {
        throw new Error("Number cannot be greater than 100");
    }
    return "Number is valid";
}

try {
    console.log(checkNumber(120));
} catch (error) {
    console.log(error.message);
}