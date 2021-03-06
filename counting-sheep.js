/*

DONE

Write a recursive function that counts how many sheep jump over the fence. 
Your program should take a number as input. 
That number should be the number of sheep you have. 
The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

Input: 3
Output:
3: Another sheep jumps over the fence
2: Another sheep jumps over the fence
1: Another sheep jumps over the fence
All sheep jumped over the fence
*/

const countSheep = function(sheep) {
  // base case
  if (sheep === 0) {
    return `All the sheep jumped over the fence`
  }
  return `${sheep}: Another sheep jumps over the fence ` + countSheep(sheep - 1)
}

console.log(countSheep(5));
