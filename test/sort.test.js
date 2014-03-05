var expect = require("chai").expect;

var itBehavesAsASort = function(sort) {

  var options = require("../lib/sortOptions"),
      input = [4, 8, 2, 6, 1, 9, 5, 3, 0, 7];

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
    var output = sort(input, options.byDescendingOrder);
    expect(output).deep.equal([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
  });

  it("sorts odd sized arrays", function() {
    var output = sort([1, 3, 0, 4, 2]);
    expect(output).deep.equal([0, 1, 2, 3, 4]);
  });

};

describe("selectionSort", function() {
  itBehavesAsASort(require("../lib/selectionSort"));
});

describe("insertionSort", function() {
  itBehavesAsASort(require("../lib/insertionSort"));
});

describe("shellSort", function() {
  itBehavesAsASort(require("../lib/shellSort"));
});

describe("mergeSort", function() {
  itBehavesAsASort(require("../lib/mergeSort"));
});

