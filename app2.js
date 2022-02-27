const init = () => {
  let nameBlock = document.querySelector(".name");
  let name = localStorage.getItem("name");
  nameBlock.innerHTML = name;
};

document.addEventListener("load", init());

let btns = document.querySelectorAll(".btn");
let screen = document.querySelector(".screen");
let ans = 0;
let currentNumber;
let solu;
let formula = "";
let ans2 = 0;

const newEval = () => {};

btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    let calculate = e.target.dataset.id;
    if (calculate === "C") {
      screen.value = "";
      currentNumber = 0;
      formula = "";
    } else if (calculate === "=") {
      let ans = eval(formula);
      formula = "";
      screen.value = ans;
    } else if (calculate === "+") {
      if (currentNumber === 0) {
        return;
      } else {
        screen.value = "";
        formula += calculate;
        currentNumber = 0;
      }
    } else if (calculate === "-") {
      if (currentNumber === 0) {
        return;
      } else {
        formula = screen.value;
        screen.value = "";
        formula += calculate;
      }
    } else if (calculate === "*") {
      if (currentNumber === 0) {
        return;
      } else {
        formula = screen.value;
        screen.value = "";
        formula += calculate;
      }
    } else if (calculate === "/") {
      if (currentNumber === 0) {
        return;
      } else {
        formula = screen.value;
        screen.value = "";
        formula += calculate;
      }
    } else if (calculate === "!") {
      let factorial = 1;
      currentNumber = screen.value;
      if (currentNumber === 0) {
        return;
      } else {
        for (let i = 1; i <= currentNumber; i++) {
          factorial = factorial * i;
        }
        screen.value = "";
        formula += factorial;
        formula = formula.replace(currentNumber, "");
      }
    } else {
      currentNumber = calculate;
      formula += calculate;
      screen.value += calculate;
    }
  });
});
