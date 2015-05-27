/*
  This function should accept a string as a parameter.
  It should return a string with the parameter's contents, reversed.
  Note: No using string.reverse() or array.reverse(), that's cheating :)
*/
var reverseWord = function(word) {
	var reverseArr = [];
	var arr = word.split("");
	var arrLength = arr.length;


	for (var i = 0; i < arrLength; i++) {
		var popped = arr.pop();
		reverseArr.push(popped);
	}
	reverseArr = reverseArr.join("");
	return reverseArr;
}


/*
  This function should accept a string as a parameter.
  It should..
  - Break up the string into words (words are separated by spaces)
  - Reverse the contents of each word
  - Return a string that contains each reversed word, in order
*/
var reverseSentence = function(sentence) {
	var wordString = sentence.split(" ");
	var sentenceReversed = [];

	for (var i=0; i<wordString.length; i++) {
		var currentWord = wordString[i];
		sentenceReversed.push( reverseWord(currentWord) );
	}
	var newSent = sentenceReversed.join(" ");
	return newSent;
	}