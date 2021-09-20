const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')

const middle = function(array) {
  const midpoint = Math.floor(array.length / 2)
  const midArray = []
  if (array.length < 3) {
    console.log(midArray)
    return midArray;
  } else if (array.length % 2 === 0) {
    midArray.push(array.slice(midpoint -1, midpoint + 1))
  } else {
    midArray.push(array.slice(midpoint, midpoint +1))
  } return midArray;
}

module.exports = middle