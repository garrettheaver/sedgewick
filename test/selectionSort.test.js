var expect = require("chai").expect;

describe("selectionSort", function() {

  var input = [4, 8, 2, 6, 1, 5, 3, 7];
  var sort = require("../lib/index").selectionSort;

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

});

