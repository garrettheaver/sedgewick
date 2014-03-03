var exports = module.exports = {};

// swaps two elements in an array
exports.swapByIndex = function(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

