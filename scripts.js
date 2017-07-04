var inputs = [];

var operators = ["*", "/", "+", "-", "="];

var decimal = ".";

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

    if (decimalCheck.test(inputs) === true){
      console.log("Only one decimal allowed");
    }

    if (inputs.length === 0 && this.value === "."){

      inputs = ["0"];

    }

    if (element.value !== "ac" && element.value !== "ce" && element.value !== "=") {

      inputs.push(this.value);

      document.querySelector("#answer").innerHTML = inputs.join("");

    }

    if (element.value === "ac") {

      document.querySelector("#answer").innerHTML = 0;

      inputs = [];

    }

    if (element.value === "ce") {

      inputs = inputs.slice(0, inputs.length - 1);

      document.querySelector("#answer").innerHTML = inputs.join("");

    }

    if (element.value === "=") {

      totalString = inputs.join("");

      document.querySelector("#answer").innerHTML = eval(totalString);

    }

  }

}, false);
