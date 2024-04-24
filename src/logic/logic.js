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
  const nums = parseNumbers(numbers);
  const permutations = [];
  const used = new Array(nums.length).fill(false);

  function generate(currentPermutation) {
      if (currentPermutation.length === nums.length) {
          permutations.push([...currentPermutation]);
          return;
      }

      for (let i = 0; i < nums.length; i++) {
          if (!used[i]) {
              used[i] = true;
              currentPermutation.push(nums[i]);
              generate(currentPermutation);
              currentPermutation.pop();
              used[i] = false;
          }
      }
  }

  if (nums.length > 0) {
      generate([]);
  }

  return permutations;
}


// For a single permutation, we generate all possible ways to combine the numbers using the four basic operations
export function generateCombinations(numbers, target = 24) {
  const operators = ['+', '-', '*', '/'];
  const memo = new Map();

  function calculate(a, b, operator) {
    switch (operator) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return b !== 0 ? a / b : null;
      default: throw new Error('Invalid operator');
    }
  }

  function combine(index, currentExpression, currentValue) {
    if (index === numbers.length) {
      return currentValue === target ? [[currentExpression, currentValue]] : [];
    }

    const memoKey = `${index}-${currentExpression}-${currentValue}`;
    if (memo.has(memoKey)) {
      return memo.get(memoKey);
    }

    const results = [];
    const nextNumber = numbers[index];

    for (const operator of operators) {
      const newValue = calculate(currentValue, nextNumber, operator);
      if (newValue !== null) {
        const newExpression = `(${currentExpression} ${operator} ${nextNumber})`;
        const subResults = combine(index + 1, newExpression, newValue);
        results.push(...subResults);
      }
    }

    memo.set(memoKey, results);
    return results;
  }

  return combine(1, numbers[0].toString(), numbers[0]);
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


