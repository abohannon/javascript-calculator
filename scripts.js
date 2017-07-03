var entryValue = "0";
document.querySelector("#entry").innerHTML = entryValue;

var newEntryValue = [];

var buttonsArray = Array.from(document.getElementsByTagName("button"));


buttonsArray.filter(function(element) {

  if (element.value !== "ac" && element.value !== "ce") {

    element.addEventListener("click", function(e) {

      newEntryValue.push(this.value);

      document.querySelector("#entry").innerHTML = newEntryValue.join("");

    });

  }

  if (element.value === "ac") {

    element.addEventListener("click", function(e) {

      document.querySelector("#entry").innerHTML = 0;
      newEntryValue = [];

    });

  }

}, false);
