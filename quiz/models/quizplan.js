/**
 * New node file
 */

var DefaultPlan = function() {
	this.numberOfQuestions = 10;
	this.difficulty = {
		1 : 2,
		3 : 2,
		5 : 2,
		7 : 2,
		9 : 2
	};
	console.log("Quiz plan setup");

};

console.log("File included..");
exports.DefaultPlan = DefaultPlan;