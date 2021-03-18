//Only code below this line
var myPet = {
  species: "dog",
  name: "Rex",
  legs: 4,
  friends: ["Dingo", "Rocky"],
};

function myFunction(myObj) {
  return myObj;
}

//Only code above this line

console.log(myFunction(myPet)); //Change this line
module.exports = { myPet, myFunction };
