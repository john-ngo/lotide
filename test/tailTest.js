const tail = require('../tail');
const assertEqual = require('../assertEqual');

const array = ["Hello", "Lighthouse", "Labs"];
const result = tail(array);

for (let i = 1; i < array.length; i++) {
  assertEqual(array[i], result[i - 1]);
}