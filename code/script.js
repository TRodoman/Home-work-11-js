/* 1. 
Прив'яжіть усім інпутам наступну подію - втрата фокусу кожен інпут виводить своє value в параграф з id="test"
focus blur input */
window.addEventListener("DOMContentLoaded", () => {
  const inputTeg1 = document.getElementsByTagName("input")[0];
  const inputTeg2 = document.getElementsByTagName("input")[1];
  const inputTeg3 = document.getElementsByTagName("input")[2];

  const p = document.querySelector("#test");

  function focus() {
    inputTeg1.classList.add("focus");
    p.innerHTML = inputTeg1.value;
  }

  function blur() {
    inputTeg2.className = "";
    inputTeg2.classList.add("blur");
    p.innerHTML = inputTeg2.value;
  }

  function inputF() {
    inputTeg3.className = "";
    inputTeg3.classList.add("input");
    p.innerHTML = "";
    p.innerHTML += inputTeg3.value;
  }

  inputTeg1.addEventListener("focus", focus);
  inputTeg2.addEventListener("blur", blur);
  inputTeg3.addEventListener("input", inputF);
});

//  -----------------------------------------------------------------------------------------------

// 2.
// Дано інпути. Зробіть так, щоб усі інпути втрати фокусу перевіряли свій вміст на правильну кількість символів.
// Скільки символів має бути в інпуті, зазначається в атрибуті data-length. Якщо вбито правильну кількість,
// то межа інпуту стає зеленою, якщо неправильна – червоною.

const [...inputs] = document.querySelectorAll(".input-test > input");

inputs.forEach((input) => {
  input.addEventListener("blur", () => {
    if (
      input.getAttribute("data-length") > input.value.length ||
      input.getAttribute("data-length") < input.value.length
    ) {
      input.classList.remove("green");
      input.classList.add("red");
    } else {
      input.classList.remove("red");
      input.classList.add("green");
    }
  });
});

// ---------------------------------------------------------------------------------

// 4.
// - При завантаженні сторінки показати користувачеві поле введення (`input`) з написом `Price`. Це поле буде служити для
//   введення числових значень
// - Поведінка поля має бути такою:
// - При фокусі на полі введення – у нього має з'явитися рамка зеленого кольору. При втраті фокусу вона пропадає.
// - Коли забрали фокус з поля - його значення зчитується, над полем створюється `span`, в якому має бути виведений текст:
// .
// Поруч із ним має бути кнопка з хрестиком (`X`).
// Значення всередині поля введення фарбується зеленим.
// - При натисканні на `Х` - `span` з текстом та кнопка `X` повинні бути видалені.

// - Якщо користувач ввів число менше 0 - при втраті фокусу підсвічувати поле введення червоною рамкою,
// під полем виводити фразу - `Please enter correct price`. `span` зі значенням при цьому не створюється.
// */

window.addEventListener("DOMContentLoaded", () => {
  const price = document.querySelector(".price");
  const span = document.getElementById("span");
  const p = document.createElement("p");
  const button = document.createElement("button");

  price.addEventListener("focus", () => {
    price.classList.add("price-focus");
  });

  price.addEventListener("blur", () => {
    price.classList.remove("price-focus");
    price.classList.add("price-blur");

    if (price.value < 0) {
      price.classList.add("price-blur-error");

      document.querySelector(".price-box").appendChild(p);
      p.innerHTML = `Please enter correct price`;
    } else if (price.value > 0) {
      const span = document.createElement("span");
      document.querySelector(".span-box").appendChild(span);

      price.classList.remove("price-blur-error");
      span.classList.add("span-price");

      span.innerHTML = `Price: ${price.value}`;

      document.querySelector(".span-box").appendChild(button);
      button.classList.add("span-button");
      button.textContent = `X`;

      p.innerHTML = "";
    }

    button.addEventListener("click", () => {
      document.querySelector(".span-button").remove();
      document.querySelector(".span-price").remove();
    });
  });
});
