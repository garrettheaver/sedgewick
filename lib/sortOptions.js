var exports = module.exports = {};

// ascending order 1, 2, 3, ...
exports.byNaturalOrder = function(a, b) {
  return a < b;
};

// reverse order ..., 3, 2, 1
exports.byDescendingOrder = function(a, b) {
  return a > b;
};

