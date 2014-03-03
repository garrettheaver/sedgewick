var expect = require("chai").expect;
var input = [4, 8, 2, 6, 1, 5, 3, 7];

var itBehavesLikeASortAlgorithm = function(sort) {

  it("happily sorts an empty array", function() {
    var output = sort([]);
    expect(output).deep.equal([]);
  });

  it("does not modify the original input array", function() {
    var output = sort(input);
    expect(input).deep.equal([4, 8, 2, 6, 1, 5, 3, 7]);
  });

  it("returns an new output array in natural order", function() {
    var output = sort(input);
    expect(output).deep.equal([1, 2, 3, 4, 5, 6, 7, 8]);
  });

};

describe("selectionSort", function() {

  var sort = require("../lib/selectionSort");
  itBehavesLikeASortAlgorithm(sort);

});

describe("insertionSort", function() {

  var sort = require("../lib/insertionSort");
  itBehavesLikeASortAlgorithm(sort);

});

