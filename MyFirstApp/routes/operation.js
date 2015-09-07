/**
 * New node file
 */
exports.calculate = function(req, res) {
	console.log("########################\n" + JSON.stringify(req.body, null, 4));

	if (!(isNumeric(req.body.number1) && isNumeric(req.body.number2))) {
		res.render("index", {
			title : 'Error!',
			result : 'Number is not valid!'
		});
	}
	if (req.body.operation === "addition") {
		console.log("This should add numbers == ");

		var tempResult = Number(req.body.number1) + Number(req.body.number2);
		var output = req.body.number1 + ' + ' + req.body.number2 + ' = ' + tempResult;
		res.render("index", {
			title : 'Addition',
			result : output
		});

	} else if (req.body.operation === "subtraction") {
		console.log("This should subtract numbers == ");

		var tempResult = Number(req.body.number1) - Number(req.body.number2);
		var output = req.body.number1 + ' - ' + req.body.number2 + ' = ' + tempResult;
		res.render("index", {
			title : 'Subtraction',
			result : output
		});

	} else if (req.body.operation === "multiplication") {
		console.log("This should multiply numbers == ");

		var tempResult = Number(req.body.number1) * Number(req.body.number2);
		var output = req.body.number1 + ' * ' + req.body.number2 + ' = ' + tempResult;
		res.render("index", {
			title : 'Multiplication',
			result : output
		});

	} else if (req.body.operation === "division") {
		console.log("This should divide numbers == ");

		// If second number is zero; return error
		if (req.body.number2 == 0) {
			res.render("index", {
				title : 'Divde by zero error!',
				result : 'Divde by zero error!'
			});
			return;
		}
		
		var tempResult = Number(req.body.number1) / Number(req.body.number2);
		var output = req.body.number1 + ' / ' + req.body.number2 + ' = ' + tempResult;
		res.render("index", {
			title : 'Division',
			result : output
		});

	}
};

// Function to check if parameter is valid number
function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}