// Write a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript.
// Do some googling to figure this out if you forget how conditionals work.
console.log("---------Max of Two numbers-----------");
let maxOfTwoNumbers = (x, y) => {
  if (x > y) return x;
  else return y;
}
var num1 = 65,
  num2 = 100;
var result = maxOfTwoNumbers(num1, num2);
console.log(`Max of ${num1} and ${num2} is ${result}`);


// Write a function maxOfThree that takes three numbers as arguments and returns the largest of them.
console.log("\n---------Max of three numbers-----------");
let maxOfThreeNumbers = (x, y, z) => {
  if (x > y && x > z) return x;
  else if (y > x && y > z) return y;
  else return z;
}
var num1 = 165,
  num2 = 260,
  num3 = 790;
var result = maxOfThreeNumbers(num1, num2, num3);
console.log(`Max of ${num1} , ${num2} , ${num3} is ${result}`);

// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and
// returns true if it is a vowel, false otherwise
console.log("\n---------Output true if it's a vowel and false otherwise-----------");
//Note: I am practicing using Arrow functions.Since it's a single parameter, no need of parenthesis around it.
let isCharacterAVowel = x => {
  if (x == 'a' || x == "e" || x == 'i' || x == 'o' || x == 'u') return true;
  else return false;
}
var str = 'z';
var result = isCharacterAVowel(str);
console.log(result);

// Write a function charCount that takes a string and returns the length of the string.
console.log("\n---------Length of the given String-----------");
//Note: Here i tried using arrow functions. if we are passing one argument, no need of brackets in function
// and no need of keyword "return". Implicit returns are fine.
const charCount = x => x.length;

var result = charCount('seetha ramesh');
console.log("String length is " + result);

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively)
// all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10,
// and multiplyArray([1,2,3,4]) should return 24.

let sumArray = (wArray) => {
  var sum = 0;
  var i = 0;
  for (i in wArray) //instead of using for(var i = 0; i < wArray.length; i++)
    sum += wArray[i];
  return sum;
}
let multiplyArray = (zArray) => {
  var product = 1;
  var j = 0;
  for (j in zArray)
    product *= zArray[j];
  return product;
}
var arr = [-1, 1, -3, 4, 5, 2];
var sumResult = sumArray(arr);
var productResult = multiplyArray(arr);
console.log("Sum of the given array: " + sumResult);
console.log("Product of the given array: " + productResult);
console.log("*****************************");



// Write a function that returns the number of arguments passed to the function when called.
// function countArg(numArray,a,b,c)
//   return countArg.length;

let countArg = (numArray, a, b, c) => console.log("Number of arguments passed: " + countArg.length);
// since there's one statement in arrow function body, no need to specify return statement
// (it'll be taken as implicit return) and no body parenthesis.

var arr = [1, 2, 3];
var j = 6,
  k = 10,
  m = -6,
  n = "Test",
  p = false;
countArg(arr, j, n, p);
console.log("*******************");

// Define a function reverseString that computes the reversal of a string.
//For example, reverseString("jag testar") should return the string "ratset gaj".

let revString = (str) => {
  //1. step 1 use split("") on str to split the characters and return a new array.
  var splitArray = str.split("");
  //2. Now reverse this new array "splitArray" using reverse();
  var reverseArray = splitArray.reverse();
  //3. Now use join() to join the individual characters in "reverseArray" to make the whole string and output the result
  console.log("The original string " + str + " is reversed to " + reverseArray.join(""));
}
var strArg = "!World is Beautiful!";
revString(strArg);
console.log("**********************");

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
let findLongestWord = (arrayOfWords) => {
  var lengthOfArray = arrayOfWords.length;
  var newArray = new Array(); //creating an Array to store the length of each original array elements.
  for (var i = 0; i < lengthOfArray; i++) {
    newArray[i] = arrayOfWords[i].length;
  }
  console.log("New array looks like this:" + newArray);
  var lengthOfLongestString = Math.max(...newArray); //spread operator here "..." allows us to use the
  //elements of the newArray array as the argument for Math.max().
  return lengthOfLongestString;
}

var wordsArray = ["The", "World", "is", "a", "beautiful", "place", "to", "live"];
var longestString = findLongestWord(wordsArray);
console.log("Longest String length is:" + longestString);
console.log("*********************");

// Write a function filterLongWords that takes an array of words and a number i
// and returns the array of words that are longer than i characters long.
let filterLongWords = (arrayOfWords, num) => {
  var lengthOfArray = arrayOfWords.length;
  var j = 0;
  //var newArray = new Array(); //creating an Array to store the elements that are > num length.
  var newArray = []; //this is another way of creating an array
  for (var i = 0; i < lengthOfArray; i++) {
    if (arrayOfWords[i].length > num) {
      newArray[j] = arrayOfWords[i]; //using j so that position of new array begins at 0
      j++;
    }
  }
  return newArray;
}

var arr = ["My", "garden", "has", "rose", "bushes"];
var i = 4;
var newArray = filterLongWords(arr, i);
console.log(`New Array of Words that are greater than ${i} characters long is: ${newArray}`); //new way of printing using ``
console.log("*********************");

// Bonus #1
// Add a method reverseString (from question 6) to the object String
// so that it is possible to call: "Per Scholas".reverseString().
let reverseString = (str) => {
  //1. step 1 use split("") on str to split the characters and return a new array.
  var splitArray = str.split("");
  //2. Now reverse this new array "splitArray" using reverse();
  var reverseArray = splitArray.reverse();
  //3. Now use join() to join the individual characters in "reverseArray" to make the whole string and output the result
  console.log("The original string " + str + " is reversed to " + reverseArray.join(""));
}

var strArg = new String();
strArg = "Per Scholas";
reverseString(strArg);
console.log("**********************");
