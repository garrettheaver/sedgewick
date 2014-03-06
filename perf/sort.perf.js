var benchmark = require("benchmark"),
    sort = require("../lib/index").sort;

function randomArray(n) {
  var output = [];

  for (var i = 0; i < n; i++) {
    output[i] = Math.random() * n;
  }

  return output;
}

var suite = new benchmark.Suite,
    rand = randomArray(1e6);

console.log("1M elements:");
suite.add("system", function() {
  var x = rand.slice(0);
  x.sort(function(a, b) { return a - b });
}).add("quickSort", function() {
  sort.quickSort(rand);
}).add("mergeSort", function() {
  sort.mergeSort(rand);
}).add("shellSort", function() {
  sort.shellSort(rand);
}).on("cycle", function(event) {
  console.log(String(event.target));
}).run();

var suite = new benchmark.Suite,
    rand = randomArray(2e4);

console.log("\n20K elements:");
suite.add("insertionSort", function() {
  sort.insertionSort(rand);
}).add("selectionSort", function() {
  sort.selectionSort(rand);
}).on("cycle", function(event) {
  console.log(String(event.target));
}).run();

