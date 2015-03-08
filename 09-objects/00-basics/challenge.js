module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
		var createCourse = {};
		createCourse.title = courseTitle;
		createCourse.duration = courseDuration;
		createCourse.students = courseStudents;
		
		return createCourse;
};

module.exports.addProperty = function (object, newProperty, newValue) {
	if (!object[newProperty]) {
		object[newProperty] = newValue;
	}
	return object;
};

module.exports.formLetter = function(letter) {
	return("Hello " + letter.recipient + "," + "\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender);
};

module.exports.canIGet = function (item, money) {
	var canAfford = {
		item1: 'MacBook Air',
		money1: 999,
		item2: 'MacBook Pro',
		money2: 1299,
		item3: 'Mac Pro',
		money3: 2499,
        item4: 'Apple Sticker',
        money4: 1

	}
	return((item === canAfford.item1 && money >= canAfford.money1) 
		|| (item === canAfford.item2 && money >= canAfford.money2)
		|| (item === canAfford.item3 && money >= canAfford.money3)
		|| (item === canAfford.item4 && money >= canAfford.money4));
};