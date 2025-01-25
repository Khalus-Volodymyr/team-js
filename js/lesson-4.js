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
})
