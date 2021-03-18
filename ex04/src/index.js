//Only code below this line
var players = {
  7: "Muhamed Besic",
  10: "Miralem Pjanic",
  11: "Edin Dzeko",
};
function myFunction(myObj) {
  var player = myObj[playerNumber];

  return player;
}
var playerNumber = 10;

console.log(myFunction(players));
//Only code abov this line
module.exports = { players, myFunction };
