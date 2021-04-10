/*
Write a recursive function that prints out the binary representation of a given number. 
For example, the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. 
Note that the binary representation of 0 should be 0.
*/

const binary = function(num) {
  if (num >= 1) {
    if (num % 2) {
      return binary((num - 1) / 2) + 1;
    } else {
      return binary(num / 2) + 0
    }
  } else {
    return ''
  }
}

console.log(binary(25));