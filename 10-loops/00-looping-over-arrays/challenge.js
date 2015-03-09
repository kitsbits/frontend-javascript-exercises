
module.exports.sumNumbers = function(array) {
	var arraySum = 0;
	for (var i = 0; i < array.length; i++) {
		arraySum += array[i];	
	}
	return(arraySum);
};

module.exports.splitAndLowerCaseString = function(string) {
	var lowerCaseString = string.toLowerCase();
	var splitString = lowerCaseString.split(",");
	return(splitString);
};

module.exports.addIndex = function(array) {
	//console.log(array);
	var newArray = [];
	for (i = 0; i < array.length; i++) {
		newArray.push(i + " is " + array[i]);
		//console.log(newArray);
	}
	return(newArray);
};

