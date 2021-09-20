const assertArraysEqual = require('../assertArraysEqual');

//Test Code

console.log(assertArraysEqual([1,2,3], [1,2,3]));
assertArraysEqual([1,2], [1,3]);
assertArraysEqual(['hello'], ['hello']);
assertArraysEqual(['hello'], ['hi']);