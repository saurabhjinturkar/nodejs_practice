/**
 * New node file
 */
var mysql = require('./mysql');
var quizplan = require('../models/quizplan');
var questionClass = require('../models/question');

var setupQuiz = function setupQuiz() {
	console.log("$$$$$$");
	var defaultPlan = new quizplan.DefaultPlan();
	console.log(defaultPlan);

	for ( var property in defaultPlan.difficulty) {

		if (defaultPlan.difficulty.hasOwnProperty(property)) {

			console.log(property);
			mysql.getQuestionForDifficulty(property,
					defaultPlan.difficulty[property], function(rows) {
						console.log(rows);
						console.log("Completed the call for " + property);
						console.log("Fetched " + rows.length + " rows...");
						for (var i = 0; i < rows.length; i++) {
							console.log("$$###########$$");
							console.log(rows[i]);
							var row = rows[i];
							var question1 = new questionClass.Question(
									row['question'], row['id'],+
									row['topic'], row['difficulty'],
									row['correct_answer']);
						}
					});
		}
	}

};

setupQuiz();