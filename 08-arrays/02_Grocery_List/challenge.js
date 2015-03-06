module.exports.addItem = function(item, array) {
	
	if (array.indexOf(item) != -1) {
		array.push(item);
	} 
	return(array);
	
};

module.exports.reverseSortedList = undefined;