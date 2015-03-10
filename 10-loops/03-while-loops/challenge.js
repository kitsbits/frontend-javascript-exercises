module.exports.stream = function(conditionalFn, actionFn) {
    actionFn = function() {console.log("Hello!");};

    var counter = 10;
    while (counter <= 10) {
      conditionalFn = function() { 
      counter--;
      return actionFn;
      }
    };
};

module.exports.sumNumbers = undefined;

