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

console.log(findSmallerNumber(numbers));
