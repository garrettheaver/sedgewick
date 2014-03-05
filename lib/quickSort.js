// Quick Sort
// http://en.wikipedia.org/wiki/quick_sort

var options = require("./sortOptions");
var shuffle = require("./knuthShuffle");
var array = require("./arrayFunctions");

module.exports = function(input, sortBy) {
  var less = sortBy || options.byNaturalOrder,
      output = shuffle(input);

  // start the quick sort recursion
  sort(output, less, 0, output.length - 1);
  return output;
};

function sort(output, less, lo, hi) {
  if (hi <= lo) { return }

  // determine a pivot point
  var j = partition(output, less, lo, hi);

  // sort both sub arrays
  sort(output, less, lo, j - 1);
  sort(output, less, j + 1, hi);
}

function partition(output, less, lo, hi) {
  var i = lo,
      j = hi + 1;

  while (true) {

    // move i left to right
    while (less(output[++i], output[lo])) {
      if (i == hi) { break }
    }

    // move j right to left
    while (less(output[lo], output[--j])) {
      if (j == lo) { break }
    }

    // pointer cross-over
    if (i >= j) { break }
    array.swapByIndex(output, i, j);
  }

  // swap pivot element into place
  array.swapByIndex(output, lo, j);
  return j;
}

