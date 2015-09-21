/**
 * New node file
 */
var mysql = require('mysql');

var pool = mysql.createPool({
	connectionLimit : 10, // important
	host : 'localhost',
	user : 'root',
	password : 'root',
	database : 'quizup',
});

var getQuestionForDifficulty = function getQuestionForDifficulty(difficultyLevel,
		numberOfQuestions, callback) {

	pool.getConnection(function(err, connection) {
		if (err)
			throw err;

		var sql = "select * from question where question.difficulty = "
				+ difficultyLevel + " order by Rand() limit "
				+ numberOfQuestions + ";";
		console.log(sql);
		connection.query(sql, function(err, rows) {
			// console.log(rows);
			callback(rows);
		});

		connection.release();

	});
};

var getAnswerForQuestionId = function getAnswerForQuestionId(id, callback) {
	pool
			.getConnection(function(err, connection) {
				if (err)
					throw err;

				var sql = "select * from answer where answer.question_id = "
						+ id + ";";
				console.log(sql);
				connection.query(sql, function(err, rows) {
					callback(rows);
				});
				connection.release();
			});
};

// Test
/*getQuestionForDifficulty(5, 2, function(rows) {
	console.log("Here");
	// console.log(rows);
	for (var i = 0; i < rows.length; i++) {
		console.log("-----------------------------");
		console.log(rows[i]);
		getAnswerForQuestionId(rows[i].id, function(rows) {
			console.log(rows)
		});
	}
});*/

exports.getQuestionForDifficulty = getQuestionForDifficulty;
exports.getAnswerForQuestionId = getAnswerForQuestionId;