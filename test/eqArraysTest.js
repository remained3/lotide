const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), true);
assertEqual(eqArrays(['hello'], ['hello']), true);
assertEqual(eqArrays(['hello'], ['goodbye']), true);
assertEqual(eqArrays(['hello', 3], ['hello', 3]), true);