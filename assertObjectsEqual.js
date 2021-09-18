const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`⭐⭐⭐ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let item of keys1) {
    let item1 = object1[item];
    let item2 = object2[item];
    if (Array.isArray(item1) && (Array.isArray(item2))) {
      return eqArrays(item1, item2);
    }
    if (item1 !== item2) {
      return false;
    }
  } return true;
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`⭐⭐⭐ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return true;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    return false;
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false