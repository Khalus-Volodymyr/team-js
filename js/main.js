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
