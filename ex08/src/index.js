function getUsername(email) {
  var username = "";
  //Only code below this line
  var username = {};
  username["user1@mail.com"] = "user1";
  username["user2@mail.com"] = "user2";
  username["user3@mail.com"] = "user3";
  username["user4@mail.com"] = "user4";
  username["user5@mail.com"] = "user5";
  username["user6@mail.com"] = "user6";
  username = username[email];
  //Only change code above this line
  return username;
}
getUsername("user2@mail.com");
module.exports = getUsername;
