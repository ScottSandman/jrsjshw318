function result() {
  console.log(5 + 6 + 7 + 8 + 9 + 10);
}
result();

function perimeter() {
  return 2 * 5 + 2 * 8;
}
perimeter();

function perimeter2(w, h) {
  return 2 * w + 2 * h;
}
perimeter2(2, 5);

function convertFahrenheitToCelsius(f) {
  return (f - 32) * (5 / 9);
}
convertFahrenheitToCelsius(70);

function convertCelsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}
convertCelsiusToFahrenheit(25);

function calculateTip(bill, percentage) {
  return (bill * percentage).toFixed(2);
}
calculateTip(20.5, 0.15);

function addDigits(x) {
  let s = x.toString();
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    let newNum = parseInt(s[i]);
    num += newNum;
  }
  return num;
}
addDigits(998);
addDigits(88);

function addDigitsFromInput() {
  let s = prompt("Please enter a multi-digit number ex. 12");
  s.toString();
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    let newNum = parseInt(s[i]);
    num += newNum;
  }
  return num;
}
addDigitsFromInput();

function convertSecondsToYears(sec) {
  return sec / 31536000 + " year(s)";
}
convertSecondsToYears(1000000000);
convertSecondsToYears(31536000);

function currentDateTime() {
  let d = Date();
  return d;
}
currentDateTime();

function addDays() {
  let now = new Date();
  let newDate = new Date();
  newDate.setDate(now.getDate() + 33);
  return newDate;
}
addDays();

function meanOfArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}
meanOfArray([10, 20, 30, 40, 50]);

function randomMonth() {
  let monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let rand = Math.floor(Math.random() * (12 * 1 + 1)) + 1;
  return monthArr[rand];
}
randomMonth();

function increasingOrder(x, y, z) {
  let total = x + y + z;
  let newX = Math.min(x, y, z);
  let newZ = Math.max(x, y, z);
  let newY = total - newX - newZ;
  return "$(newX), $(newY), $(newZ)";
}
increasingOrder(3, 2, 1);
increasingOrder(15, 25, 1);

function isPalindrome(str) {
  var len = str.length;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
isPalindrome("racecar");
isPalindrome("palapal");

function isCoerced(x, y) {
  if (x === y) {
    return false;
  } else {
    return x == y;
  }
}
isCoerced(5, "5");
isCoerced(5, 5);
isCoerced(4, "shoe");

function isEven(x) {
  if (x % 2 === 0) {
    return true;
  }
  return false;
}
isEven(10);
isEven(11);
isEven("two");

function isOdd(x) {
  if (isEven(x)) {
    return false;
  }
  return true;
}
isOdd(3);
isOdd(10);

function multipleOfThree(x) {
  if (x % 3 === 0) {
    return true;
  }
  return false;
}
multipleOfThree(0);
multipleOfThree(4);
multipleOfThree(9);

function checkMultiple(x, y) {
  if (x % y === 0) {
    return true;
  }
  return false;
}
checkMultiple(20, 5);
checkMultiple(21, 5);

function arrayMinNumber(arr) {
  return Math.min(...arr);
}
arrayMinNumber([100, 23, 17, 55]);

function largestSquare() {
  return Math.floor(Math.sqrt(12000));
}
largestSquare();

function smallestN(x) {
  return Math.floor(Math.sqrt(x));
}
smallestN(5);
smallestN(9);
smallestN(105);

function reverseString(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += str[str.length - 1 - i];
  }
  return newStr;
}
reverseString("tommy");
reverseString("alphabet");

function countOccurences(arr, occ) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === occ) {
      count += 1;
    }
  }
  return count;
}
countOccurences([5, 7, 12, 5, 3, 3, 5], 3);
countOccurences([5, 7, 12, 5, 3, 3, 5], 5);
countOccurences([5, 7, 12, 5, 3, 3, 5], 13);

function countAllOccurences(arr) {
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!tempArr.includes(arr[i])) {
      tempArr.push(arr[i]);
    }
  }
  //console.log(tempArr);
  let newArr = [];
  for (let j = 0; j < tempArr.length; j++) {
    let count = 0;
    for (let k = 0; k < arr.length; k++) {
      if (tempArr[j] === arr[k]) {
        count += 1;
      }
    }
    newArr.push([tempArr[j], count]);
  }
  return newArr;
}
countAllOccurences([5, 7, 12, 5, 3, 3, 5]);

function nonDecreasingOrder(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
nonDecreasingOrder([1, 2, 3, 4, 5, 6]);
nonDecreasingOrder([1, 1, 1, 5, 1, 1]);
nonDecreasingOrder([1, 1, 1, 1, 1, 1]);
nonDecreasingOrder([7, 2, 3, 4, 5, 10]);

function sortedIncreasingOrder(arr) {
  for (let k = 0; k < arr.length; k++) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] < arr[i - 1]) {
        let larger = arr[i - 1];
        let lesser = arr[i];
        arr[i] = larger;
        arr[i - 1] = lesser;
      }
    }
  }
  return arr;
}
sortedIncreasingOrder([5, 7, 2, 8, 1, 0]);
sortedIncreasingOrder([10, 1, 5, 4, 3, 9]);
sortedIncreasingOrder([5, 5, 1, 1, 0, 2]);

function merge(arr1, arr2) {
  let mergedArr = arr1.concat(arr2);
  mergedArr = mergedArr.sort((a, b) => a - b);
  return mergedArr;
}
merge([1, 2, 10, 30, 50], [5, 7, 9, 41, 50]);

function calculatePi(term) {
  let terms = 0;
  let den = 1;
  for (let i = 1; i <= term; i++) {
    let nextTerm = 1 / den;
    //console.log(nextTerm + " nextTerm")
    if (i % 2 === 0) {
      terms -= nextTerm;
    } else {
      terms += nextTerm;
    }
    den += 2;
    //console.log(terms + " terms")
    //console.log(den + " den")
  }
  return 4 * terms;
}
calculatePi(5);
calculatePi(1);
calculatePi(10);
