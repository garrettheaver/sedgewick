// Shell Sort
// http://en.wikipedia.org/wiki/shell_sort

var sort = require("./sortOptions");

module.exports = function(input, sortBy) {
  var less = sortBy || sort.byNaturalOrder;
  var output = input.slice(0);

  var h = 1;
  while(h < (output.length / 3)) {
    h = 3 * h + 1; // knuth's 3x + 1 sequence
  }

  while(h >= 1) {

    // sort by h stride length
    for(var i = h; i < output.length; i++) {

      // compare with previous elements
      for(var j = i; j >= h; j -= h) {

        // insertion sort style exchange
        if(less(output[j], output[j - h])) {
          sort.swapByIndex(output, j, j - h);
        } else {
          break;
        }
      }
    }

    // chunk down stride
    h = Math.round(h / 3);
  }

  return output;
};

