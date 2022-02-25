const init = () => {
  let nameBlock = document.querySelector(".name");
  let name = localStorage.getItem("name");
  nameBlock.innerHTML = name;
};

document.addEventListener("load", init());

let btns = document.querySelectorAll(".btn");
let screen = document.querySelector(".screen");

let ans;
let firstNum;
let solu;
btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    let calculate = e.target.innerHTML;
    if (calculate === "C") {
      screen.innerHTML = "";
    } else if (calculate === "=") {
      screen.innerHTML = ans;
    } else if (calculate === "+") {
      solu = "+";
      console.log(solu);
    } else {
      if (solu === "+") {
        screen.innerHTML = calculate;
        console.log(Number(screen.innerHTML));
        console.log("123");
        ans = Number(firstNum) + Number(screen.innerHTML);
      } else {
        screen.innerHTML = calculate;
        firstNum = calculate;
      }
    }
  });
});
