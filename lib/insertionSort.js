// Insertion Sort
// http://en.wikipedia.org/wiki/insertion_sort

var sort = require("./sortFunctions");

module.exports = function(input, sortBy) {
  var less = sortBy || sort.byNaturalOrder;
  var output = input.slice(0);

  // inspect each element
  for(var i = 0; i < output.length; i++) {

    // inspect all previous elements
    for(var j = i; j > 0; j--) {

      // exchange if smaller
      if(less(output[j], output[j - 1])) {
        sort.swapByIndex(output, j - 1, j);
      } else {
        break;
      }
    }
  }

  return output;
};

