/* eslint-env browser */
/*
Javascript calculator using vanilla JS
V2.0.0
created by Adam Bohannon
*/

const calculator = (function calculatorModule() {
  let input = '';
  let operatorFlag = false;
  let dotFlag = false;

  const operator = ['÷', 'x', '-', '+'];

  const buttons = document.querySelectorAll('.buttons > button');
  const output = document.querySelector('.window');

  // Private Methods
  function updateView() {
    output.innerHTML = input;
  }

  // Public Methods
  function clearAll() {
    input = '';
    operatorFlag = false;
    dotFlag = false;
    updateView();
  }

  function deleteLast() {
    input = input.slice(0, input.length - 1);
    updateView();
  }

  function addDot() {
    if (!dotFlag) {
      input += '.';
      dotFlag = true;
      updateView();
    }
  }

  function addOperator(value) {
    if (!operatorFlag) {
      if (input[input.length - 1] === '.') {
        input = input.slice(0, input.length - 1) + value;
      } else {
        input += value;
      }

      operatorFlag = true;
      dotFlag = false;
      updateView();
    }
  }

  function calculateSolution() {
    let equation = '';
    let result = '';

    if (operator.includes(input[input.length - 1])) {
      input = input.slice(0, input.length - 1);
    }

    if (input.length > 0) {
      equation = input.replace(/x/g, '*');
      equation = equation.replace(/÷/g, '/');
      result = eval(equation);

      input = result;
      operatorFlag = false;
      updateView();
    }
  }

  function updateNumber(value) {
    input += value;
    operatorFlag = false;
    updateView();
  }

  // Public API
  return {
    operator,
    buttons,
    clearAll,
    deleteLast,
    addDot,
    addOperator,
    calculateSolution,
    updateNumber,
  };
}());

calculator.buttons.forEach((button) => {
  button.onclick = () => {
    const value = button.innerHTML;
    switch (true) {
      case (value === 'AC'):
        return calculator.clearAll();
      case (value === 'CE'):
        return calculator.deleteLast();
      case (value === '.'):
        return calculator.addDot();
      case (value === '='):
        return calculator.calculateSolution();
      case calculator.operator.includes(value):
        return calculator.addOperator(value);
      default:
        return calculator.updateNumber(value);
    }
  };
});

