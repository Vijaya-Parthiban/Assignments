let username = "vijaya";  
let password = "252525";

let enteredUsername = "vijaya";   
let enteredPassword = "252525";    

if (enteredUsername === username) {
  if (enteredPassword === password) {
    console.log("Login successful! Welcome " + username + "!");
  } else {
    console.log("Incorrect password!");
  }
} else {
  console.log("Username not found!");
}