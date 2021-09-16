const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`⭐⭐⭐ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(input) {
  const letterArray = []
  for (letters of input) {
    if (letters !== ' ') {
      if (letterArray[letters]) {
        letterArray[letters] += 1
      } else {
        letterArray[letters] = 1
      }
    } 
  } console.log(letterArray)
}
countLetters('LHL')
countLetters('HELLO THERE')