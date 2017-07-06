/*

Javascript calculator using vanilla JS
V1.0.0
created by Adam Bohannon

*/

var input = "";
var operator = ["÷", "x", "-", "+"];
var operatorFlag = false;
var dotFlag = false;
var equation = "";
var result = "";
var i;

var buttons = document.querySelectorAll('.buttons > button');
var output = document.querySelector('.window');

for (i = 0; i < buttons.length; i++){
  buttons[i].onclick = function(e){
    var btnText = this.innerHTML;
    console.log('operator', operatorFlag);
    // clear all input
    if (btnText === 'AC') {
      input = "";
      operatorFlag = false;
      equation = "";
    // clear one entry
    } else if (btnText === 'CE') {
      input = input.slice(0, input.length - 1);
    // if there isn't a dot present, allow a dot
    } else if (btnText === '.') {
      if (input.indexOf('.') === -1 || dotFlag){
        input += '.';
        dotFlag = false;
      }

    } else if (btnText === "=") {
      // if an operator is the last input value, slice it and return only numbers
      if (operator.indexOf(input[input.length - 1]) > -1){
        input = input.slice(0, input.length - 1);
      }
      // otherwise process the input
      equation = input.replace(/x/g, '*'); // so we can eval, replace x in string with *
      equation = equation.replace(/÷/g, '/'); // so we can eval, replace ÷ in string with /
      result = Math.round(eval(equation)*1000000)/1000000; // eval the equation string and round
      input = result; // send the result to input
      operatorFlag = true;

    } else if (operator.indexOf(btnText) > -1) { // if pressed button is a number/not an operator
      // and if an operator isn't already present
      if (operatorFlag) {
        input += btnText; // add the pressed button to input
        operatorFlag = false; // and flip the operatorFlag to false
      } else {
        input = input.slice(0, input.length - 1) + btnText;
      }
      dotFlag = true;

    } else {
      if (result !== "" && operator.indexOf(input[input.length-1]) > -1) {
        input += btnText;
        result = "";
      } else if (result !== "") {
        input = btnText;
        result = "";
      } else {
        input += btnText;
      }

      operatorFlag = true;

    }

    output.innerHTML = input;

  };
}
