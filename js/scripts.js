// business logic
// var number = [1,2,3,4,5,6]
var userInputs = 0;
var textResult = "";
var numberArray = [];
// replace.length = parseInt(userInputs);
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
//     // if(text%15) {
//     //   text = PingPong;
//     // } else if (text%3) {
//     //   text = Ping;
//     // } else if (text%5) {
//     //   text = Pong;
//     // } else {
//     //   text = text;
//     // }
  }
  return numberArray;
}


// front end logic
$(document).ready(function() {
  $("#operation").submit(function() {
    event.preventDefault();

  var numberSelection = $(".numberEntry").val();
  var result = replace(numberSelection);
// consoleLog(result);

  $(".output").show();
  $(".resultHere").text(result);

  });
});
