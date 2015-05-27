/*
  This function should accept two numbers as parameters.
  It should return the value of the numbers multiplied together.
*/

function multiply(a, b) {
	return a * b;
}

/*
  This function should accept two numbers as parameters.
  We can assume that both numbers are positive integers.
  It should return the value of the base, raised to the exponent-th power.
  You should make use of the multiply() function you just wrote.
*/

function power(base, exponent) {
	var answer = 1;

	for (var i = 1; i <= exponent; i++) {
		answer = answer * base;
	}
	return answer;
}

// power(5, 3) = 25