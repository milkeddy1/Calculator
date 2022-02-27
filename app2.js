const init = () => {
  let nameBlock = document.querySelector(".name");
  let name = localStorage.getItem("name");
  nameBlock.innerHTML = name;
};

document.addEventListener("load", init());

let btns = document.querySelectorAll(".btn");
let screen = document.querySelector(".screen");
let currentNumber;
let formula = "";
let statu;
const newEval = () => { };

btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    let calculate = e.target.dataset.id;
    if (calculate === "C") {
      screen.value = "";
      currentNumber = 0;
      formula = "";
    } else if (calculate === "=") {
      let ans = eval(formula);
      screen.value = ans ? ans : 0;
      formula = screen.value;
    } else if (calculate === "+") {
      if (statu != 'number') return
      currentNumber = eval(formula)
      formula = currentNumber
      screen.value = "";
      formula += calculate;
      statu = 'notNumber'
    } else if (calculate === "-") {
      if (statu != 'number')
        return
      currentNumber = eval(formula)
      formula = currentNumber
      screen.value = "";
      formula += calculate;
      statu = 'notNumber'

    } else if (calculate === "*") {
      if (statu != 'number') return
      currentNumber = eval(formula)
      formula = currentNumber
      screen.value = "";
      formula += calculate;
      statu = 'notNumber'
    } else if (calculate === "/") {
      if (statu != 'number') return
      currentNumber = eval(formula)
      formula = currentNumber
      screen.value = "";
      formula += calculate;
      statu = 'notNumber'
    } else if (calculate === "!") {
      let factorial = 1;
      currentNumber = screen.value;
      for (let i = 1; i <= currentNumber; i++) {
        factorial = factorial * i;
      }
      screen.value = "";
      formula += factorial;
      formula = formula.replace(currentNumber, "");

    } else {
      statu = 'number'
      currentNumber = calculate;
      formula += calculate;
      screen.value += calculate;
    }
  });
});
