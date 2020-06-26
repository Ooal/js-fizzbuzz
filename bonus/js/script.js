var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
var array = document.getElementById("array");
for (var i = 1; i < 101; i++) {
  if ((!(i%3)) && (!(i%5))) {
    array.innerHTML += "<li class=\"fizzbuzz\">FizzBuzz</li>";
  }else if (!(i%3)) {
    array.innerHTML += "<li class=\"fizz\">Fizz</li>";
  } else if (!(i%5)) {
    array.innerHTML += "<li class=\"buzz\">Buzz</li>";
  }else {
    array.innerHTML += "<li>" + i + "</li>";
}
}
btn.className = "hidden";
});
console.log(array);
