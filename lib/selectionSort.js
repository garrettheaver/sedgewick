// Selection Sort
// http://en.wikipedia.org/wiki/selection_sort

var sort = require("./sortFunctions");

module.exports = function(input, sortBy) {
  var less = sortBy || sort.byNaturalOrder;
  var output = input.slice(0);

  // inspect each element
  for(var i = 0; i < output.length; i++) {
    var min = i;

    // find smallest remaining element
    for (var j = i; j < output.length; j++) {
      if(less(output[j], output[min])) {
        min = j;
      }
    }

    // exchange smallest element
    sort.swapByIndex(output, i, min);
  }

  return output;
};

