// Selection Sort
// http://en.wikipedia.org/wiki/selection_sort

var options = require("./sortOptions");
var array = require("./arrayFunctions");

module.exports = function(input, sortBy) {
  var less = sortBy || options.byNaturalOrder,
      output = input.slice(0);

  // inspect each element
  for (var i = 0; i < output.length; i++) {
    var min = i;

    // find smallest remaining element
    for (var j = i; j < output.length; j++) {
      if (less(output[j], output[min])) {
        min = j;
      }
    }

    // exchange smallest element
    array.swapByIndex(output, i, min);
  }

  return output;
};

