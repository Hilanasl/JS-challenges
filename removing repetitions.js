// Write a function that takes a string as a parameter and returns an array of characters
// removing close repetitions.

function myFunction(a) {
  let unique = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== a[i + 1]) unique += a[i];
  }
  return unique.split("");
}

console.log(myFunction("AAAABBBCCDAABBB"));
// ["A","B","C","D","A","B"]

console.log(myFunction("ABBCcAD"));
// ["A","B","C","c","A","D"]

console.log(myFunction([1, 2, 2, 3, 3]));
// ["1","2","3"]
