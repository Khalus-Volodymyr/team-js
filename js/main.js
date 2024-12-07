//Напишіть функцію min(a, b), яка повертає
//менше з чисел a, b
//Потрібно додати перевірку, що функція отримує числа

function min(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Мають бути передані числа";
  }
  return a > b ? b : a;
  //   return Math.min(a, b);
}
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

function makeInvetedString(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toLowerCase()) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }

  return newStr;
}

// console.log(makeInvetedString("jAVAsCRIPT"));


// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

function myFunction(num) {
  switch (num) {
    case 1:
      return 'зима';
    case 2:
      return 'весна';
    case 3:
      return 'літо';
    case 4:
      return 'осінь';
    default:
      return '?';
  }
}

console.log(myFunction(3));

//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max
function writeMaxMin(max, min) {
  let sum = 0;
  for (let i = max; i >= min; i--) {
    console.log(i);
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(`result: ${writeMaxMin(3, 1)}`);
