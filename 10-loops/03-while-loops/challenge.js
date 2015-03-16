module.exports.stream = function(conditionalFn, actionFn) {
  while ( conditionalFn() ) {
    //executes this code
    actionFn();
  }
};

module.exports.sumNumbers = function(array) {
  var numOfElements = 0;
  var runningTotal = 0;
  while (numOfElements <= array.length - 1) {
    runningTotal += array[numOfElements];
    numOfElements++;
  }

  return runningTotal;
};

// module.exports.sumNumbers = function(arr) {
//   var sum = 0;
//   while(arr.length > 0) {
//     sum += arr.pop();
//   }
//   return sum;
// };