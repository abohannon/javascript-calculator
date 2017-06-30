var entryValue = "0";
document.querySelector("#entry").innerHTML = entryValue;

var newEntryValue = [];

var buttonsArray = Array.from(document.getElementsByTagName("button"));


buttonsArray.filter(function(element) {

  if (element.value !== "ac" && element.value !== "ce") {

  element.addEventListener("click", function(e) {

    // var entryValue = this.value;
    newEntryValue.push(this.value);

    document.querySelector("#entry").innerHTML = newEntryValue.join("");

  });

}


}, false);
