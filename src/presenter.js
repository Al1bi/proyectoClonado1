import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
//const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const sumBtn = document.getElementById("sumar-button");
const multiplyBtn = document.getElementById("multiply-button")

sumBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  
  div.innerHTML = "<p>Resultado de la suma: " + sumar(firstNumber, secondNumber) + "</p>";
});

multiplyBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  
  div.innerHTML = "<p>Resultado de la multiplicación: " + multiplicar(firstNumber, secondNumber) + "</p>";
});