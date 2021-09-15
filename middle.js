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

const middle = function(array) {
  const midpoint = Math.floor(array.length / 2)
  const midArray = []
  if (array.length < 3) {
    console.log(midArray)
    return
  } else if (array.length % 2 === 0) {
    midArray.push(array.slice(midpoint -1, midpoint + 1))
  } else {
    midArray.push(array.slice(midpoint, midpoint +1))
  } return midArray 
}
middle([1, 2, 3, 4, 5, 6]) 
middle([1, 2, 3, 4, 5])
middle([1, 2])