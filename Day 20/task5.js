function getName(callback) {
  let name = "Vijaya";
  callback(name);       
}

function greetUser(name) {
  console.log("Hello, " + name + "!");
}

getName(greetUser);