/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

button = document.querySelector('#swapButton');
inputFirs = document.querySelector('#leftSwapInput');
inputSecond = document.querySelector('#rightSwapInput');

button.addEventListener('click', () => {
  [inputFirs.value, inputSecond.value] = [inputSecond.value, inputFirs.value];
});

/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

const btnElem = document.querySelector('#passwordButton');
const inpElem = document.querySelector('#passwordInput');

btnElem.addEventListener('click', () => {
  if (inpElem.getAttribute('type') !== 'password') {
    inpElem.setAttribute('type', 'password');
    btnElem.textContent = 'Розкрити';
  } else {
    inpElem.setAttribute('type', 'text');
    btnElem.textContent = 'Приховати';
  }
});

// Кнопка "Зменшити" робить квадрат менше на 10 пікселів, кнопка "Збільшити" - більше на 10 пікселів.
// https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle

const btndecrease = document.querySelector('#decrease');
const btnincrease = document.querySelector('#increase');

const boxElem = document.querySelector('#box');
btndecrease.addEventListener('click', () => {
  let widthBox = parseInt(getComputedStyle(boxElem).width);
  let heightBox = parseInt(getComputedStyle(boxElem).height);
  widthBox -= 10;
  heightBox -= 10;
  boxElem.style.width = widthBox + 'px';
  boxElem.style.height = heightBox + 'px';
});

btnincrease.addEventListener('click', () => {
  let widthBox = parseInt(getComputedStyle(boxElem).width);
  let heightBox = parseInt(getComputedStyle(boxElem).height);
  widthBox += 10;
  heightBox += 10;
  boxElem.style.width = widthBox + 'px';
  boxElem.style.height = heightBox + 'px';
});

// ! ----------------------------  PushEax -------------------

const circle = document.querySelector('.outerCircle');

let isClicked = false;

const circleHandler = event => {
  circle.style.left = event.pageX - 20 + 'px';
  circle.style.top = event.pageY - 20 + 'px';
  console.log('Hello');
};

circle.addEventListener('click', event => {
  if (!isClicked) {
    isClicked = true;
    circle.style.position = 'absolute';
    window.addEventListener('mousemove', circleHandler);
  } else {
    isClicked = false;
    circle.style.position = 'static';
    window.removeEventListener('mousemove', circleHandler);
  }
});
