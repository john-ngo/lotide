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

const flatten = function(array) {
  const newArray = [];

  for (const el of array) {
    if (Array.isArray(el)) {
      for (const e of el) {
        newArray.push(e);
      }
    } else {
      newArray.push(el);
    }
  }

  return newArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));

module.exports = flatten;