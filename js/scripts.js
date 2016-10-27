// business logic
var userInputs = 0;
var textResult = "";
var numberArray = [];
function replace(userInputs) {
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
    numberArray.push(textResult);

  }
  return numberArray;
}


// front end logic
$(document).ready(function() {
  $("#operation").submit(function() {
    event.preventDefault();

    $("ul").empty();

    var numberSelection = $(".numberEntry").val();
    var result = replace(numberSelection);
  // var ourFinalResult = "";
  // function finalResult(result) {
  //   for(i=0; i< result.length; i++) {
  //     $(finalResult).append(result[i]);
  //   }
  //   return ourFinalResult
  // }

// consoleLog(result);

  $(".resultHere").text(result);

  });
});
