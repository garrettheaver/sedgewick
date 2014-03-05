// Insertion Sort
// http://en.wikipedia.org/wiki/insertion_sort

var options = require("./sortOptions");
var array = require("./arrayFunctions");

module.exports = function(input, sortBy) {
  var less = sortBy || options.byNaturalOrder,
      output = input.slice(0);

  // inspect each element
  for(var i = 0; i < output.length; i++) {

    // compare with previous elements
    for(var j = i; j > 0; j--) {

      // exchange if smaller
      if(less(output[j], output[j - 1])) {
        array.swapByIndex(output, j - 1, j);
      } else {
        break;
      }
    }
  }

  return output;
};

