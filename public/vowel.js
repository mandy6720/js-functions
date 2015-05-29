/*
  This function should accept a single-letter string as a parameter.
  It should return true if the string is a vowel.
  (For the sake of argument, let's make Y count as a consonant today.)
  Otherwise, it should return false.

  Hint: string.toLowerCase()
*/

function isVowel(letter, isYaVowel) {

 var input = letter.toLowerCase();
 var answer = false;
 var vowels = ["a", "e", "i", "o", "u"];

 if (isYaVowel) {
 	vowels.push("y");
 }

 if (vowels.indexOf(input) !== -1) {
 	answer = true;
 }
 return answer;
}

/*
  This function should accept a string as a parameter.
  It should return the number of vowels in the string.
  You should make use of the isVowel() function you just wrote.

  Hint: string[0] returns the 1st character in the string
*/

function countVowels(word) {
	
	var array = word.split("");
	var numVowels = 0;

	for (var i = 0; i < array.length; i++) {
		var current = array[i];
		if (isVowel(current) == true) {
			numVowels += 1;
		}
	}
	return numVowels;
}
