//Create lion object here
var lion = {
  name: "Simba",
  legs: 4,
  tails: 1,
};
// End of lion object
function myFunction(propname, propvalue) {
  //Only code below this line
  lion[propname] = propvalue;
  return lion;
  //Only code above this line
}
console.log(myFunction("roar", "roar-roar")); //Change this line
module.exports = myFunction;
