// Given the operations ['+', '-', '*', '/'], we want to generate all possible combinations of successive operations given a length n. For example, if n = 3, we want to generate all possible combinations of ['+', '-', '*', '/'] of length 3. The function should return an array of arrays, where each inner array is a combination of operations. For example, if n = 3, the function should return [['+', '+', '+'], ['+', '+', '-'], ['+', '+', '*'], ['+', '+', '/'], ['+', '-', '+'], ['+', '-', '-'], ['+', '-', '*'], ['+', '-', '/'], ['+', '*', '+'], ['+', '*', '-'], ['+', '*', '*'], ['+', '*', '/'], ['+', '/', '+'], ['+', '/', '-'], ['+', '/', '*'], ['+', '/', '/'], ['-', '+', '+'], ['-', '+', '-'], ['-', '+', '*'], ['-', '+', '/'], ['-', '-', '+'], ['-', '-', '-'], ['-', '-', '*'], ['-', '-', '/'], ['-', '*', '+'], ['-', '*', '-'], ['-', '*', '*'], ['-', '*', '/'], ['-', '/', '+'], ['-', '/', '-'], ['-', '/', '*'], ['-', '/', '/'], ['*', '+', '+'], ['*', '+', '-'], ['*', '+', '*'], ['*', '+', '/'], ['*', '-', '+'], ['*', '-', '-'], ['*', '-', '*'], ['*', '-', '/'], ['*', '*', '+'], ['*', '*', '-'], ['*', '*', '*'], ['*', '*', '/'], ['*', '/', '+'], ['*', '/', '-'], ['*', '/', '*'], ['*', '/', '/'], ['/', '+', '+'], ['/', '+', '-'], ['/', '+', '*'], ['/', '+', '/'], ['/', '-', '+'], ['/', '-', '-'], ['/', '-', '*'], ['/', '-', '/'], ['/', '*', '+'], ['/', '*', '-'], ['/', '*', '*'], ['/', '*', '/'], ['/', '/', '+'], ['/', '/', '-'], ['/', '/', '*'], ['/', '/', '/']]

function generateCombinations(n) {
  const operations = ['+', '-', '*', '/'];
  let combinations = [];
  if (n === 1) {
    return operations.map(op => [op]);
  }
  const recurse = (n, current) => {
    if (n === 0) {
      combinations.push(current);
    } else {
      for (let op of operations) {
        recurse(n - 1, current.concat(op));
      }
    }
  };
  recurse(n, []);
  return combinations;
}