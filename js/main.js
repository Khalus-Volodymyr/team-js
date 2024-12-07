//Напишіть функцію min(a, b), яка повертає
//менше з чисел a, b
//Потрібно додати перевірку, що функція отримує числа

// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Мають бути передані числа";
//   }
//   return a > b ? b : a;
//   //   return Math.min(a, b);
// }
// console.log(min(3, "5"));

// Task Зарано
//Напиши функцію findLongestWord(string)
//яка приймає довільний рядок
//що складається лише з розділених слів
//пробілом (параметр string)
//і повертає найдовше слово у цьому рядку

// const string = "Nunc sed turpis a felis in nunc fringilla"

// Task 2
//Напишіть функцію makeInvetedString(), яка замінює регістр кожного символу
//У сторіччі на протилежний
//Наприклад 'JavaScript' повинен повернути 'jAVAsCRIPT'

// function makeInvetedString(str) {
//   let newStr = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == str[i].toLowerCase()) {
//       newStr += str[i].toUpperCase();
//     } else {
//       newStr += str[i].toLowerCase();
//     }
//   }

//   return newStr;
// }

// console.log(makeInvetedString("jAVAsCRIPT"));

// / У змінній min лежить число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число(у першу, другу, третю чи четверту).

function timeInterval(min) {
  if (min >= 0 && min <=15) {
    return "first part";
  }
  if (min >=16 && min <= 30) {
    return "second part";
  }
  if (min >= 31 && min <= 45) {
    return "third part";
  } if (min >= 46 && min <=59) {
    return "forth part";
  }
  return 'invalid value';
}


//  console.log(timeInterval(15));

// Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
// Інакше вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
//інакше виводити рядок "Невірний пароль!"

const userRule = prompt("Введіть логін");

if (userRule === "Адмін") {
  const password = prompt("Введіть пароль");
  if (!password) {
    console.log("Скасовано");
  } else if (password === "Я головний") {
    console.log("Добрий день!");
  } else {
    console.log("Невірний пароль!");
  }
} else {
  console.log("Я вас не знаю");
}

