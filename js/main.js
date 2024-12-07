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
console.log(min(3, "5"));

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

console.log(makeInvetedString("jAVAsCRIPT"));
