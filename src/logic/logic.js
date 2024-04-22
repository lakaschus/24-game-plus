/* 
Here's the core logic of the 24 game implemented. 
The logic is like this:
1. We have n numbers, and we need to find a way to combine them using the four basic operations (+, -, *, /, brackets) to get to the number N.
2. n and N are specified by the user.
3. We generate all possible permutations of the n numbers.
4. For each permutation, we generate all possible ways to combine the numbers using the four basic operations.
5. We check if any of the combinations equals N.
6. If we find a combination that equals N, we return it.
7. If we don't find any combination that equals N, we return a message that there's no valid combination.

*/

// parse string of form "123456" to array of numbers [1, 2, 3, 4, 5, 6]
function parseNumbers(numbers) {
  return numbers.split("").map((n) => parseInt(n));
}

// Function to generate all possible permutations of the numbers; export function
export function generatePermutations(numbers) {
  console.log("numbers", numbers);
  const nums = parseNumbers(numbers);
  console.log("nums", nums);
  const permutations = [];
  const generate = (arr, m = []) => {
    if (arr.length === 0) {
      permutations.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        generate(curr.slice(), m.concat(next));
      }
    }
  };
  // Only generate permutations if the input is valid
    if (nums.length > 0) { 
  generate(nums);
  return permutations;}
        
}