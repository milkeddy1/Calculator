const init = () => {
  let nameBlock = document.querySelector(".name");
  let name = localStorage.getItem("name");
  nameBlock.innerHTML = name;
};

document.addEventListener("load", init());

let btns = document.querySelectorAll(".btn");
let screen = document.querySelector(".screen");
let ans;
let currentNumber;
let solu;


const newEval = () => {

}


btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    let calculate = e.target.innerHTML;
    if (calculate === "C") {
      screen.value = "";
      currentNumber = 0
      console.log(currentNumber);
      solu = ''
    } else if (calculate === "=") {
      let ans = eval(screen.value)
      screen.value = ans;

    } else if (calculate === "+") {
      if (currentNumber === 0) {
        return
      } else {
        screen.value += calculate
        solu = "+";
      }
    } else if (calculate === "-") {
      if (currentNumber === 0) {
        return
      } else {
        screen.value += calculate
        solu = "-";
      }
    } else if (calculate === "*") {
      if (currentNumber === 0) {
        return
      } else {
        screen.value += calculate
        solu = "*";
      }
    } else if (calculate === "/") {
      if (currentNumber === 0) {
        return
      } else {
        screen.value += calculate
        solu = "/";
      }
    } else if (calculate === "!") {
      let factorial = 1
      if (currentNumber === 0) {
        return
      } else {
        for (let i = 1; i <= currentNumber; i++) {
          factorial = factorial * i
        }
        console.log(factorial);
        currentNumber = factorial
      }
    }
    else {
      // if (solu === "+") {
      //   screen.value += calculate;
      //   currentNumber = Number(currentNumber) + Number(screen.value);
      // } else if (solu === "-") {
      //   screen.value += calculate;
      //   currentNumber = Number(currentNumber) - Number(screen.value);
      // } else if (solu === "*") {
      //   screen.value += calculate;
      //   currentNumber = Number(currentNumber) * Number(screen.value);
      // } else if (solu === "/") {
      //   screen.value += calculate;
      //   currentNumber = Number(currentNumber) / Number(screen.value);
      // }

      screen.value += calculate;
      currentNumber = screen.value;

    }

  });
});
