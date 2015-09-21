/**
 * New node file
 */

var Question = function(question, id, topic, difficulty, correct_answer) {
	this.question = question;
	this.id = id;
	this.topic = topic;
	this.difficulty = difficulty;
	this.correct_answer = correct_answer;
	this.answerSet = [];
	console.log("Object created=======================>");
	console.log(this);
};

Question.prototype.addAnswer = function(answer) {
	this.answerSet.push(answer);
};

exports.Question = Question;