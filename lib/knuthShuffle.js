// Knuth Shuffle
// http://en.wikipedia.org/wiki/Fisher-Yates_shuffle

var array = require("./arrayFunctions");

module.exports = function(input) {
  var output = input.slice(0);

  // swap inspected element to a random index
  for(var i = 0; i < output.length; i++) {

    // uniform random between 0 and i
    var r = Math.floor(Math.random() * (i + 1));
    array.swapByIndex(output, i, r);
  }

  return output;
};

