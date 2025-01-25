/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

button = document.querySelector("#swapButton");
inputFirs = document.querySelector("#leftSwapInput");
inputSecond = document.querySelector("#rightSwapInput");

button.addEventListener("click", () => {
  [inputFirs.value, inputSecond.value] = [inputSecond.value, inputFirs.value];
});

/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

const btnElem = document.querySelector("#passwordButton");
const inpElem = document.querySelector("#passwordInput");

btnElem.addEventListener("click", () => {
  if (inpElem.getAttribute("type") !== "password") {
    inpElem.setAttribute("type", "password");
    btnElem.textContent = "Розкрити";
  } else {
    inpElem.setAttribute("type", "text");
    btnElem.textContent = "Приховати";
  }
});
