module.exports.formLetter = function(firstName, senderName, message) {
  return("Hello " + firstName + ",\n\n" + message + "\n\nSincerely,\n" + senderName);
};

//"Hello Rob,\n\nTake care.\n\nSincerely,\nJoe"

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
 return((bigString.substring(startA, endA)) + (bigString.substring(startB, endB)));
};

//sliceItAndCombineIt("This is a Test", 0, 4, 5, 7) // returns "Thisis"
//sliceItAndCombineIt("This is a Test", 0, 4, 1, 2) // returns "Thish".

module.exports.findFirstMatch = function(text, searchString) {
  return(text.indexOf(searchString));
};

//findFirst("Roses are red", "re") // returns 7 (the position of the "re" in "are"

module.exports.findLastMatch = function(text, searchString) {
  return(text.lastIndexOf(searchString));
};

module.exports.substringBetweenMatches = function(text, searchString) {
  return(text.substring((text.indexOf(searchString)+searchString.length), text.lastIndexOf(searchString)));
};

//substringBetweenMatches("It's been a great day to play during the great summer", "great");