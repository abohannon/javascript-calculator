var entryValue = "0";

document.querySelector("#entry").innerHTML = entryValue;

var buttonsArray = Array.from(document.getElementsByTagName("button"));

buttonsArray.filter(function(element){
  element.addEventListener("click", function(e){

    console.log(e.target.value);
    console.log(this.value);

    var newEntryValue = this.value;

    document.querySelector("#entry").innerHTML = newEntryValue;

  });
}, false);
