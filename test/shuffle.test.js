var expect = require("chai").expect;
var input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

describe("knuthShuffle", function() {

  var shuffle = require("../lib/knuthShuffle");

  it("happily shuffles an empty array", function() {
    var output = shuffle([]);
    expect(output).deep.equal([]);
  });

  it("does not modify the original input array", function() {
    var output = shuffle(input);
    expect(input).deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("shuffles a new output array in random order", function() {
    var output = shuffle(input);
    expect(output).not.deep.equal(input);
  });

  it("does not shuffle the same way twice", function() {
    var output = shuffle(input);
    expect(output).not.deep.equal(shuffle(input));
  });

});

