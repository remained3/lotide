const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false
  } else for (let i =0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false
    }
  } return true
}

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`⭐⭐⭐ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
}

const without = function(start, removed) {
  const endList = []
  for (let i = 0; i < start.length; i++) {
    let removal = false;
    for (let j = 0; j < removed.length; j++) {
    if (start[i] === removed[j]) {
         removal = true
      }
    } if (removal === false){
      endList.push(start[i])
    }
  } return endList
};
//Test Code

without([1, 2, 3], [1])
without(["1", "2", "3"], ["1", "2", "3"]) 
without(["hello", "world","lighthouse", "labs"], ["hello", "world"] )