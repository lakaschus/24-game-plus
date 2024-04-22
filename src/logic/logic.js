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

// Map numbers to the four basic operations
// const operations = {
//   "+": (a, b) => a + b,
//   "-": (a, b) => a - b,
//   "*": (a, b) => a * b,
//   "/": (a, b) => a / b,
// };

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

// For a single permutation, we generate all possible ways to combine the numbers using the four basic operations
export function generateCombinations(numbers, target=24) {
  const operators = ['+', '-', '*', '/'];

  function calculate(a, b, operator) {
    switch (operator) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return b !== 0 ? a / b : null; // Avoid division by zero
      default: throw new Error('Invalid operator');
    }
  }

  function combine(arr, currentExpression, currentValue) {
    if (arr.length === 0) {
      return [[currentExpression, currentValue]];
    }

    const results = [];
    const nextNumber = arr[0];
    const remainingNumbers = arr.slice(1);

    for (const operator of operators) {
      const newValue = calculate(currentValue, nextNumber, operator);
      if (newValue !== null) { // Skip invalid operations like division by zero
        const newExpression = `(${currentExpression} ${operator} ${nextNumber})`;
        results.push(...combine(remainingNumbers, newExpression, newValue));
      }
    }
    // finally return only the results that match the target value
    return results.filter((arr) => arr[1] === target);
  }

  // Start the recursive process with the first number as the initial value
  return combine(numbers.slice(1), numbers[0].toString(), numbers[0]);
}

// Finally, we combine the two functions to generate all possible combinations for all permutations
export async function generateAllCombinations(numbers, target) {
  const permutations = generatePermutations(numbers);
  const results = [];
  for (const permutation of permutations) {
    results.push(...generateCombinations(permutation, target));
  }
  // Finally, filter out all results that are duplicates
  return results;
}


