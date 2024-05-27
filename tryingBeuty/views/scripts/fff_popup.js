
const popup = document.getElementsByClassName("popup");
console.log(popup)
let btn_pop = document.getElementsByClassName("top");
const shadow_pop = document.getElementsByClassName("shadow_pop");
for (let i = 0; i < btn_pop.length; i++) {
  btn_pop[i].addEventListener("click", () => {
    open();
    form(i)
  });
}
function open() {
  popup[0].classList.add("pop_active");
  shadow_pop[0].classList.add("shadow_pop_active");
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
}
function form(number){
  let field = document.getElementsByClassName("description")[0];
  let text = tasks[user.trainNum][0][number][0].description;
  field.textContent = text
}

document
  .getElementsByClassName("close_pop")[0]
  .addEventListener("click", () => {
    close();
  });
shadow_pop[0].addEventListener("click", () => {
  close();
  console.log("hell");
});

function close() {
  popup[0].classList.remove("pop_active");
  shadow_pop[0].classList.remove("shadow_pop_active");
  document.getElementsByTagName("body")[0].style.removeProperty("overflow");
}
