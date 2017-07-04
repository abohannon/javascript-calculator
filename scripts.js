/* User Stories:

I can add, subtract, multiply and divide two numbers.

I can clear the input field with a clear button.

I can keep chaining mathematical operations together until I hit the equal button, and the calculator will tell me the correct output.

*/

var inputs = [];

var operators = ["*", "/", "+", "-", "="];

var decimal = true;

var decimalCheck = /\..*/;

var buttonsArray = Array.from(document.getElementsByTagName("button"));

buttonsArray.filter(function(element) {

  element.addEventListener("click", calculations, false);

  function calculations(e) {

    // if (inputs[inputs.length - 1] === decimal){
    //
    //   buttonsArray[17].removeEventListener("click", calculations);
    //
    // }

    if (element.value !== "ac" && element.value !== "ce" && element.value !== "=") {

      inputs.push(this.value);

      document.querySelector("#answer").innerHTML = inputs.join("");

    }

    else if (element.value === "ac") {

      document.querySelector("#answer").innerHTML = 0;

      inputs = [];

    }

    else if (element.value === "ce") {

      inputs = inputs.slice(0, inputs.length - 1);

      document.querySelector("#answer").innerHTML = inputs.join("");

    }

    else if (element.value === "=") {

      totalString = inputs.join("");

      document.querySelector("#answer").innerHTML = eval(totalString);

    }

    else if (inputs.length === 0 && this.value === "."){

      inputs = ["0"];

    }

  }

}, false);
