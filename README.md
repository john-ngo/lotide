# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @john_ngo/lotide`

**Require it:**

`const _ = require('@john_ngo/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(sentence)`: counts letters in a sentence
* `countOnly(allItems, itemsToCount)`: counts specified items
* `eqArrays(actual, expected)`: compares two arrays
* `eqObjects(object1, object2)`: compares two objects
* `findKey(object, callback)`: finds a key that matches a function
* `findKeyByValue(object, value)`: finds a key that matches a value
* `flatten(array)`: flattens an array
* `head(array)`: first element in an array
* `letterPositions(sentence)`: finds positions of letters in a sentence
* `map(array, callback)`: creates a new array populated with the results of calling a provided function on every element in the calling array
* `middle(array)`: return middle of an array
* `tail(array)`: returns last element of an array
* `takeUntil(array, callback)`: creates a new array populated with elements until callback returns true
* `without(source, itemsToRemove)`: creates an array copy that does not include a specified item