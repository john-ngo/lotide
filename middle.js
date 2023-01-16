const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  const newArray = [];

  if (array.length < 3) {
    return newArray;
  }

  const i = Math.floor(array.length / 2);

  if (array.length % 2 === 0) {
    newArray.push(array[i - 1]);
    newArray.push(array[i]);
  } else {
    newArray.push(array[i]);
  }

  return newArray;
};

module.exports = middle;