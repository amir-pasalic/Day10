//Create school object here
var school = {
  name: "Arena",
  location: "Sarajevo",
  established: "2020",
};
//End of school object
function myFunction(name) {
  //Only code below this line
  school.location = name;
  return school;
  //Only code above this line
}
console.log(myFunction("Paragon")); // Change this line
module.exports = { school, myFunction };
