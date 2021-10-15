const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Welcome to the password validator");

reader.question("what is your password ", function(input) {
  if (input.length >= 10) {
    console.log("success");
  } else {
    console.log("failure");
  }
  // This line closes the connection to the command line interface.
  reader.close();
});
