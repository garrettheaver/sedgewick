var expect = require("chai").expect,
    sort = require("../lib/index").sort;

var itBehavesAsASort = function(sort) {

  var options = require("../lib/sortOptions"),
      numbers = [4, 8, 2, 6, 1, 9, 5, 3, 0, 7],
      alpha = ['gb', 'ie', 'ga', 'de', 'fr'];

  it("happily sorts an empty array", function() {
    var output = sort([]);
    expect(output).deep.equal([]);
  });

  it("does not modify the original input array", function() {
    var output = sort(numbers);
    expect(numbers).deep.equal([4, 8, 2, 6, 1, 9, 5, 3, 0, 7]);
  });

  it("sorts a new output array using natural order", function() {
    var output = sort(numbers);
    expect(output).deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("sorts a new output array using custom order", function() {
    var output = sort(numbers, options.byDescendingOrder);
    expect(output).deep.equal([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
  });

  it("sorts strings in alphabetical order", function() {
    var output = sort(alpha);
    expect(output).deep.equal(['de', 'fr', 'ga', 'gb', 'ie']);
  });

  it("sorts odd sized arrays", function() {
    var output = sort([1, 3, 0, 4, 2]);
    expect(output).deep.equal([0, 1, 2, 3, 4]);
  });

  it("sorts with duplicate keys", function() {
    var output = sort([1, 3, 0, 3, 2, 4]);
    expect(output).deep.equal([0, 1, 2, 3, 3, 4]);
  });

};

describe("selectionSort", function() {
  itBehavesAsASort(sort.selectionSort);
});

describe("insertionSort", function() {
  itBehavesAsASort(sort.insertionSort);
});

describe("shellSort", function() {
  itBehavesAsASort(sort.shellSort);
});

describe("mergeSort", function() {
  itBehavesAsASort(sort.mergeSort);
});

describe("quickSort", function() {
  itBehavesAsASort(sort.quickSort);
});

