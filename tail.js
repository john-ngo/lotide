const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

const array = ["Hello", "Lighthouse", "Labs"];
const result = tail(array);

for (let i = 1; i < array.length; i++) {
  assertEqual(array[i], result[i - 1]);
}