/*
Write a function that reverses a string. 
Take a string as input, reverse the string, and return the new string.
use .split() and .join()
*/

const stringReverse = function (string) {
	if (string === '') {
		return '';
	}
	return stringReverse(string.substr(1)) + string.charAt(0);
};

console.log(stringReverse('hello world'));
