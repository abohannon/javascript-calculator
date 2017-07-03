var answerValue = "";

var newAnswerValue = [];

var buttonsArray = Array.from(document.getElementsByTagName("button"));


buttonsArray.filter(function(element) {

  if (element.value !== "ac" && element.value !== "ce" && element.value !== "=") {

    element.addEventListener("click", function(e) {

      newAnswerValue.push(this.value);

      document.querySelector("#answer").innerHTML = newAnswerValue.join("");

    });

  }

  if (element.value === "ac") {

    element.addEventListener("click", function(e) {

      document.querySelector("#answer").innerHTML = 0;
      newAnswerValue = [];

    });

  }

  if (element.value === "=") {

    element.addEventListener("click", function(e) {

      totalString = newAnswerValue.join("");

      document.querySelector("#answer").innerHTML = eval(totalString);

    });

  }

}, false);
