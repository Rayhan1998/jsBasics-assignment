const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Welcome to the password validator");

reader.question("what is your password: ", function(input) {
  let message = "";
  let error = false;

  if (input.search(/[0-9]/) == -1) {
    message = "your password needs a number";
    error = true;
  }

  if (input.length < 10) {
    message = "failure your password needs to be atleast 10 charecters long";
    error = true;
  }

  error ? console.log(message) : console.log("success");

  // This line closes the connection to the command line interface.
  reader.close();
});
