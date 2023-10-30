function addCollumn(weight) {
  const createdType = document.createElement("div");
  createdType.className = `column`;
  createdType.setAttribute("name", `${weight}`);
  createdType.style.height = `${weight}px`;
  try {
    document
      .getElementsByClassName("basic")[0]
      .childNodes[1].append(createdType);
  } catch (error) {}
}

function addDate(date) {
  const createdDate = document.createElement("p");
  createdDate.className = `date`;
  createdDate.textContent = `${date}`;
  document.getElementsByClassName("datesContent")[0].append(createdDate);
}

function addWeight(weight) {
  const collumns = document.getElementsByClassName("column");
  for (let i = 0; i < collumns.length; i++) {
    collumns[i].textContent = weight[i];
  }
}

/* global */

function deleteOld(collumns, stoper) {
  const allCollumns = document.querySelectorAll(".column");
  const allDates = document.querySelectorAll(".date");
  if (collumns == stoper) {
    allCollumns[0].remove();
    allDates[0].remove();
  }
}

/** */

function getMax(arr) {
  return (max = arr.reduce((max, value) => (value > max ? value : max), 0));
}

function editAll(objMass) {
  try {
    let collumn = document.getElementsByClassName("column");
    for (let i = 0; i < objMass.length; i++) {
      collumn[i].style.height = `${objMass[i].getHight(
        getMax(objMass.map((col) => col.weight))
      )}px`;
    }
  } catch (error) {}
}

function returnErr(funcName) {
  return new Error(`${funcName}`);
}

/**
 *
 */

function builder() {
  let name = document
    .getElementsByClassName("navigation")[0]
    .getAttribute("name");
  name != "added" ? buildNavigation() : deleteNavigation();
}

function buildNavigation() {
  let navigation = document.createElement("div");
  navigation.className = "navCase";
  document.getElementsByClassName("navigation")[0].append(navigation);
  document
    .getElementsByClassName("navigation")[0]
    .setAttribute("name", "added");
  for (let i = 0; i < 4; i++) {
    navigation = document.createElement("div");
    navigation.className = "button";
    document.getElementsByClassName("navCase")[0].append(navigation);
    button = document.createElement("button");
    button.className = "buttonText";
    document.getElementsByClassName("button")[i].append(button);
    document.getElementsByClassName("buttonText")[i].textContent = "Navigation text";
  }
}

function deleteNavigation() {
  document
    .getElementsByClassName("navigation")[0]
    .setAttribute("name", "deleted");
  function del() {
    document.getElementsByClassName("navCase")[0].remove();
  }
  setTimeout(del, 450);
}

/***
 *
 *
 */

function graphClass(action) {
  let graph = document.getElementsByClassName("graph")[0];
  let classes = graph.classList;
  let allButtons = document.querySelectorAll(".arrow");
  let button = document.getElementsByClassName(
    `arrow ${action.slice(0, -2)}`
  )[0];
  if (classes[1] == action) {
    return 0;
  }
  classes.length == 2
    ? (graph.classList.remove(classes[1]), graph.setAttribute("name", "basic"))
    : (graph.classList.add(action),
      graph.removeAttribute("name"),
      cleanCollumns());
  classes.length == 2
    ? (button.style.pointerEvents = "none")
    : allButtons.forEach(
        (arr) => (arr.style.pointerEvents = "auto"),
        console.log("koko")
      );
}

function grClass(action) {
  let graph = document.getElementsByClassName("graph")[0];
  let classes = graph.classList;

  classes[1] == "basic"
    ? (graph.classList.remove(classes[1]), graph.classList.add(action))
    : (graph.classList.remove(classes[1]), graph.classList.add("basic"));
  classes[1] == "basic" ? buidBasic() : cleanCollumns();
}

function buidBasic() {
  let dates = document.querySelector(".datesContent");
  objMass.map((elem) => addCollumn(elem.weight));
  editAll(objMass);
  addWeight(objMass.slice(-14).map((obj) => obj.weight));
  dates.style.display = "flex";
  delCanvas();
}

function cleanCollumns() {
  let colls = document.querySelectorAll(".column");
  let dates = document.querySelector(".datesContent");
  colls.forEach((coll) => coll.remove());
  dates.style.display = "none";
}
