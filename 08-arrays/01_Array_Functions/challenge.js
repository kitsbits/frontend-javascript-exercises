
var array = [];

module.exports.reversePlusOne = function(array) {
	array.reverse();
	array.unshift(1);
	return(array);
}

module.exports.plusesEverywhere = function(array) {
	return(array.join('+'));
}

module.exports.arrayQuantityPlusOne = function (array) {
	return(array.length + 1);
};

