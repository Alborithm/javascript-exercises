const sumAll = function(a, b) {
  // loop from b to a and start summing the in between values
  // Get the smallest number and use that as the starting point
  if ( a < 0 || b < 0) {
    return "ERROR";
  }
  if (typeof a !== "number" || typeof b !== "number") {
    return "ERROR";
  }
  if (a % 1 !== 0 || b % 1 !== 0) {
    return "ERROR";
  }
  
  let smallest;
  let largest;
  let result = 0;
  if (a <= b) {
    smallest = a;
    largest = b;
  } else {
    smallest = b;
    largest = a;
  }

  for (let i = smallest; smallest <= largest; smallest++) {
    result += smallest;
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
