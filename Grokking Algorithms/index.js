// 4.1

// function sumOfArray(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   return arr[0] + sumOfArray(arr.slice(1));
// }

// 4.2

// function listItemsCount(list) {
//   let number = 0;
//   if (list.next) {
//     number += listItemsCount(list.next);
//   }
//   number += 1;
//   return number;
// }

// 4.3

// function fMN(list) {
//   let max = list.value;
//   if (list.next) {
//     max = max > fMN(list.next) ? max : fMN(list.next);
//   }
//   return max;
// }

// 4.4

// function binarySearch(num, min, max) {
//   if (num < min || num > max) {
//     return -1; // Number is not within the range, return -1 to indicate not found
//   }

//   let guess = Math.round((max + min) / 2);
//   if (guess === num) {
//     return guess; // Found the number, return it
//   }
//   if (guess < num) {
//     console.log(`${guess}, recursive call`);
//     return binarySearch(num, guess + 1, max); // Search the right half
//   }
//   console.log(`${guess}, recursive call`);
//   return binarySearch(num, min, guess - 1); // Search the left half
// }
