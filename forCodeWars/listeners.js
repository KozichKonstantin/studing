let choosed = "";
document.getElementById("btn1").addEventListener("click", () => {
  choosed = "ctrlC";
});
document.getElementById("btn2").addEventListener("click", () => {
  choosed = "toLower";
});
document.getElementsByClassName("run")[0].addEventListener("click", () => {
  console.log(choosed);
  output(document.getElementsByClassName("incert")[0].value, choosed);
});
