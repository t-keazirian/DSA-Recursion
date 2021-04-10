/*
Write a recursive function that splits a string based on a separator (similar to String.prototype.split). 
Don't use JS array's split function to solve this problem.

Input: 02/20/2020
Output: ["02", "20", "2020"]
*/

const stringSplitter = function(string) {
  let n = string.length;
  if (!string.includes('/')) {
    return string;
  }
  return string[n] + ' ' + stringSplitter(string[n-1]) 
}

console.log(stringSplitter('02/20/2020'));