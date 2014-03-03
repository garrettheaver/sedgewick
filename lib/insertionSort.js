// Insertion Sort:
//  http://en.wikipedia.org/wiki/insertion_sort
//
// Complexity:
//  Best:  O(N)
//  Worst: O(N^2)
//  Avg:   O(N^2)

module.exports = function(input) {
  var output = input.slice(0);

  // inspect each element
  for(var i = 0; i < output.length; i++) {

    // inspect all previous elements
    for(var j = i; j > 0; j--) {

      if(output[j] < output[j - 1]) {

        // exchange if smaller
        var temp = output[j - 1];
        output[j - 1] = output[j];
        output[j] = temp;
      } else {

        // larger than previous
        break;
      }
    }
  }

  return output;
};

