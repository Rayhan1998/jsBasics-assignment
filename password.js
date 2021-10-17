const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Welcome to the password validator");

reader.question("what is your password: ", function(input) {
  let status = {
    message: "",
    error: false
  };

  if (input.search(/[0-9]/) == -1) {
    status.message = "your password needs a number";
    status.error = true;
  }

  if (input.length < 10) {
    status.message =
      "failure your password needs to be atleast 10 charecters long";
    status.error = true;
  }

  status.error ? console.log(status.message) : console.log("success");

  // This line closes the connection to the command line interface.
  reader.close();
});
