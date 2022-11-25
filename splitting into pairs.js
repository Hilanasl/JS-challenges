// Write a function that takes a string as a parameter.
// Separate the string into pairs within an array.
// If the last item is unpaired (the string contains an odd number of characters) complete with underscore _

function myFunction(str) {
  let i = 0;
  let result = [];
  if (str.length % 2 !== 0) {
    str = str + "_";
  }
  while (i < str.length) {
    result.push(str[i] + str[i + 1]);
    i += 2;
  }
  return result;
}

console.log(myFunction(abc));

console.log(myFunction(abcdefgh));

console.log(myFunction(abcdefg));
