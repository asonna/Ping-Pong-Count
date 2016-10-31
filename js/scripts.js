// business logic
var userInputs = 0;
var textResult = "";
var numberArrays = [];

function replace(userInputs) {
  if(userInputs > 0) {
    for(var i=1; i<=userInputs; i++) {
      if(i%15 === 0) {
        textResult = "PingPong";
      } else if (i%3 === 0) {
        textResult = "Ping";
      } else if (i%5 === 0) {
        textResult = "Pong";
      } else {
        textResult = i;
      }
      numberArrays.push(textResult);
    }
    return numberArrays;
  } else {
    alert("Please enter a number greater than 0!");
  }
}


// front end logic
$(document).ready(function() {
  $("#operation").submit(function() {
    event.preventDefault();
    $("#inp").empty();

    var numberSelection = 0;
    var results = [];
    var numberSelection = $(".numberEntry").val();
    var results = replace(numberSelection);
    $("#output ul").empty();

    results.forEach(function(result) {
      $("#output ul").append("<li>" + result + "</li>");
    });

      $(".output ul").text();

  });
});
