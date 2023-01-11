const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const result = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (result[sentence[i]]) {
        result[sentence[i]].push(i);
      } else {
        result[sentence[i]] = [i];
      }
    }
  }
  
  return result;
};

const result1 = letterPositions('lighthouse in the house');

assertArraysEqual(result1.l, [0]);
assertArraysEqual(result1.i, [1, 11]);
assertArraysEqual(result1.g, [2]);
assertArraysEqual(result1.h, [3, 5, 15, 18]);
assertArraysEqual(result1.t, [4, 14]);
assertArraysEqual(result1.o, [6, 19]);
assertArraysEqual(result1.u, [7, 20]);
assertArraysEqual(result1.s, [8, 21]);
assertArraysEqual(result1.e, [9, 16, 22]);
assertArraysEqual(result1.n, [12]);