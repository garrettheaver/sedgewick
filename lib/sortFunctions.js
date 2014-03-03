var exports = module.exports = {};

// ascending order 1, 2, 3, ...
exports.byNaturalOrder = function(a, b) {
  return a < b;
};

// swaps two elements in an array
exports.swapByIndex = function(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

