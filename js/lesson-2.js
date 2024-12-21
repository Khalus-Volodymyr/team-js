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

// const arr = [2, 6, 24, 7, 35, 24, "hello", 9, "world"];

// function caclculateAverage(...args) {
//   let sum = 0;
//   let count = 0;
//   for (const num of args) {
//     if (typeof num === "number") {
//       sum += num;
//       count += 1;
//     }
//   }
//   return sum / count;
// }

// console.log(caclculateAverage(...arr));

//Напишіть ф-цію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і
//Рядок з назвою каменю.
//Функція повертає загальну вартість каменів
//з ​​таким ім'ям, ціною та кількістю з об'єкта
/*
const stones = [
  { name: "Смарагд", price: 1300, quantity: 4 },
  { name: "Діамант", price: 2700, quantity: 6 },
  { name: "Сапфір", price: 400, quantity: 7 },
  { name: "Щебінь", price: 150, quantity: 100 },
];

function calcTotalPrice(stones, stonesName) {
  for (const stone of stones) {
    if (stone.name === stonesName) {
      return `${stone.name} ${stone.quantity * stone.price}`;
    }
  }
}

console.log(calcTotalPrice(stones, "Щебінь")); */

// Угруповання об'єктів студентів по курсам
// Створіть масив об'єктів, що являють собою різних студентів. Кожен об'єкт повинен містити властивості ім'я, вік та курс.
// Використовуйте цикл for...of, щоб згрупувати студентів за курсами.
// Результатом буде об'єкт, де ключами будуть назви курсів, а значення – масиви об'єктів студентів, що належать до відповідного курсу.
// Очікуванний результат:
// const groupedStudents = {
//   Java: [
//     { name: "Алиса", age: 20, course: "Java" },
//     { name: "Карл", age: 21, course: "Java" },
//   ],
//   Python: [{ name: "Боб", age: 22, course: "Python" }],
//   JavaScript: [{ name: "Джон", age: 23, course: "JavaScript" }],
// };
const students = [
  { name: "Алиса", age: 20, course: "Java" },
  { name: "Боб", age: 22, course: "Python" },
  { name: "Карл", age: 21, course: "Java" },
  { name: "Джон", age: 23, course: "JavaScript" },
];
