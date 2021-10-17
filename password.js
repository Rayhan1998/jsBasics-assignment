const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Welcome to the password validator");

reader.question("what is your password: ", function(input) {
  let passwordManager = {
    state: {
      message: "",
      error: false
    },

    setPassword() {
      this.state.error
        ? console.log(this.state.message)
        : console.log("success");
    },

    checkPassword() {
      if (input.search(/[0-9]/) == -1) {
        this.state.message = "your password needs a number";
        this.state.error = true;
      }

      if (input.length < 10) {
        this.state.message =
          "failure your password needs to be atleast 10 charecters long";
        this.state.error = true;
      }
    },

    init() {
      this.checkPassword();
    }
  };
  // initializes if statements
  passwordManager.init();
  // Sets password
  passwordManager.setPassword();

  // This line closes the connection to the command line interface.
  reader.close();
});
