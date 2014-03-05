// Merge Sort
// http://en.wikipedia.org/wiki/merge_sort

var options = require("./sortOptions");
var array = require("./arrayFunctions");

module.exports = function(input, sortBy) {
  var less = sortBy || options.byNaturalOrder,
      output = input.slice(0),
      n = input.length;

  // work in doubling array sizes
  for (var size = 1; size < n; size *= 2) {

    // merge sets of sub arrays
    for (var lo = 0; lo < n - size; lo += size * 2) {
      var hi = Math.min(lo + (size * 2) - 1, n - 1);
      merge(output, less, lo, lo + size - 1, hi);
    }
  }

  return output;
};

function merge(output, less, lo, mid, hi) {
  var i = lo,
      j = mid + 1,
      aux = [];

  // clone to auxiliary array
  for (var k = lo; k <= hi; k++) {
    aux[k] = output[k];
  }

  // inspect sub array elements
  for (var k = lo; k <= hi; k++) {
    if (i > mid) {
      // left exhausted
      output[k] = aux[j++];
    } else if (j > hi) {
      // right exhausted
      output[k] = aux[i++];
    } else if (less(aux[j], aux[i])) {
      // right smaller
      output[k] = aux[j++];
    } else {
      // left smaller
      output[k] = aux[i++];
    }
  }
}

