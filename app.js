let btn = document.querySelector(".btn");
let nameBlock = document.querySelector(".name");
btn.addEventListener("click", (e) => {
  window.document.location.href = "./index2.html";
  name = nameBlock.value;
  localStorage.setItem("name", name);
});

nameBlock.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    btn.click();
  }
});

// document.addEventListener("load", init());
