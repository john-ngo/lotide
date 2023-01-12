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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word + 'ay');
const results3 = map(words, word => word.toUpperCase());

assertArraysEqual(['g', 'c', 't', 'm', 't'], results1);
assertArraysEqual(["grounday", "controlay", "toay", "majoray", "tomay"], results2);
assertArraysEqual(["GROUND", "CONTROL", "TO", "MAJOR", "TOM"], results3);
