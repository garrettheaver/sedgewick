var expect = require("chai").expect;
var input = [4, 8, 2, 6, 1, 9, 5, 3, 0, 7];

var itBehavesAsASort = function(sort) {

  it("happily sorts an empty array", function() {
    var output = sort([]);
    expect(output).deep.equal([]);
  });

  it("does not modify the original input array", function() {
    var output = sort(input);
    expect(input).deep.equal([4, 8, 2, 6, 1, 9, 5, 3, 0, 7]);
  });

  it("sorts a new output array using natural order", function() {
    var output = sort(input);
    expect(output).deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("sorts a new output array using custom order", function() {
    var output = sort(input, function(a, b) { return a > b; });
    expect(output).deep.equal([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
  });

};

describe("selectionSort", function() {

  var sort = require("../lib/selectionSort");
  itBehavesAsASort(sort);

});

describe("insertionSort", function() {

  var sort = require("../lib/insertionSort");
  itBehavesAsASort(sort);

});

describe("shellSort", function() {

  var sort = require("../lib/shellSort");
  itBehavesAsASort(sort);

});

