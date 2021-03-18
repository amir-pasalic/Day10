function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Man",
      relase_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
    },
    002: {
      artist: "Michael Jackson",
      title: "Billie Jean",
      relase_year: 1982,
      id: 2,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
      //Add a record here
    },
  };
  return myMusic;
}
console.log(myFunction());
module.exports = myFunction;
