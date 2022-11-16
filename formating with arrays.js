//write a function that takes an array of names and returns a message formatted
//according to the console.log.

function myFunction(a) {
  if (!a.length) {
    return `Nobody liked it yet`;
  } else if (a.length === 1) return `${a[0]} likes this`;
  else if (a.length === 2) return `${a[0]} and ${a[1]} liked this`;
  else if (a.length === 3) return `${a[0]}, ${a[1]} and ${a[2]} liked this`;
  else a.length > 3;
  return `${a[0]}, ${a[1]} and ${a.length - 2} others liked this`;
}

console.log(myFunction([]));

console.log(myFunction(["Peter"]));

console.log(myFunction(["Jacob", "Alex"]));

console.log(myFunction(["Max", "John", "Marc"]));

console.log(myFunction(["Alex", "Jacob", "Mark", "Max"]));
