//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
const numbers = [12, 5, 35, 56, 3, 24, 7, 80, 12];

function findSmallerNumber(numbers) {
  /*let elementArr = numbers[0];

  if (Array.isArray(numbers)) {
    for (const number of numbers) {
      if (number < elementArr) {
        elementArr = number;
      }
    }
  }

  return elementArr;

  //  console.log(Array.isArray(numbers));

  */

  return Math.min(...numbers);
}

// console.log(findSmallerNumber(numbers));


/*
Напишіть функцію caclculateAverage()
яка приймає довільну кількість
аргументів і повертає їхнє середнє значення.
Додати перевірку, що аргументи це числа.

*/

const arr = [2, 6, 24, 7, 35, 24, "hello", 9, "world"];

function caclculateAverage(...args) {
  let sum = 0;
  let count = 0;
  for (const num of args) {
    if (typeof num === "number") {
      sum += num;
      count += 1;
    }
  }
  return sum / count;
}

console.log(caclculateAverage(...arr));

