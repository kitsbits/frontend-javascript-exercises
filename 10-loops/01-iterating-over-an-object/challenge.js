module.exports.getKeys = function(object) {
	var keys = Object.keys(object);
	return(keys);
};

module.exports.getValues = function (object) {
	var array =[];
	for (var values in object) {
		array.push(object[values]);
	}
	return array;
};

module.exports.objectToArray = function(object) {
	var keys = Object.keys(object);
	//console.log(keys);
	var values = [];
	for (var property in object) {
		values.push(object[property]);
	}
	//console.log(values);
	var finalArray = [];
	for (i = 0; i < keys.length; i++) {
		finalArray.push(keys[i] + " is " + values[i]);
	}
	//console.log(finalArray);
	return finalArray;

};