
var array = [];

for (var i = 1; i < 101; i++) {
if ((!(i%3)) && (!(i%5))) {
array.push("FizzBuzz");
}else if (!(i%3)) {
array.push("Fizz");
}else if (!(i%5)) {
  array.push("Buzz");
}else {
  array.push(i);
}
}
console.log(array);
