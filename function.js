//First Name
function firstLetterName(name) {
  alert("The name " + name + " starts with the letter " + name[0]);
}

//divisibleByTwo
function divisibleByTwo(num) {
  if (num % 2 == 0)
    return true;
  else
    return false;
}


//largetsNum
function largestNum(input) {
  if (toString.call(input) !== "[object Array]")
    return false;
  return Math.max.apply(null, input);
}

//Call Function
firstLetterName("Jahaira")
firstLetterName("Shaun")

console.log(divisibleByTwo(5))
console.log(divisibleByTwo(8))
console.log(divisibleByTwo(33))
console.log(divisibleByTwo(68))
console.log(divisibleByTwo(95))

console.log(largestNum([0, 15, 99, 1001, 45]));
console.log(largestNum([-3, -55, -1, -3, 8]));
