// Selection Sort:
//  Returns a new array with the elements
//  sorted according to their natural order
//
// Complexity:
//  Best:  O(N^2)
//  Worst: O(N^2)
//  Avg:   O(N^2)

module.exports = function(input) {
  var output = input.slice(0);

  // inspect each element
  for(var i = 0; i < output.length; i++) {
    var min = i;

    // find smallest remaining element
    for (var j = i; j < output.length; j++) {
      if(output[j] < output[min]) {
        min = j;
      }
    }

    // exchange smallest element
    var temp = output[i];
    output[i] = output[min];
    output[min] = temp;
  }

  return output;
};

