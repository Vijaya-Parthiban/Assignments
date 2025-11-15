function validateUser(name, email) {
    if (!name) throw new Error("Name cannot be empty!");
    if (!email.includes("@")) throw new Error("Email is invalid!");
    return "User is valid!";
}

try {
    console.log(validateUser("", "testemail.com"));
} catch (error) {
    console.log(error.message);
}