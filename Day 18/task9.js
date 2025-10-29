let age = 22;  
let subscribed = "not";  

if (age >= 18 && subscribed === "yes") {
  console.log("Welcome!");
} else if (age < 18 && subscribed === "yes") {
  console.log("You're subscribed but not old enough!");
} else if (age >= 18 && subscribed === "no") {
  console.log("You're old enough, but not subscribed!");
} else {
  console.log("Sorry, you're not eligible yet.");
}