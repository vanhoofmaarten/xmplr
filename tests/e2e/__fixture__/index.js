import add from "./app/add.js";
import multiply from "./app/multiply.js";

const $valueOneInput = document.querySelector("#valueOne");
const $valueTwoInput = document.querySelector("#valueTwo");
const $addBtn = document.querySelector("button#add");
const $multiplyBtn = document.querySelector("button#multiply");
const $results = document.querySelector("#results");

$addBtn?.addEventListener("click", () => {
  const result = add(
    Number($valueOneInput.value),
    Number($valueTwoInput.value)
  );
  $results.innerText = result;
});

$multiplyBtn?.addEventListener("click", () => {
  const result = multiply(
    Number($valueOneInput.value),
    Number($valueTwoInput.value)
  );
  $results.textContent = result;
});
