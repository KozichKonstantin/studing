import { Element } from "./scripts/classes.js";
import { ElementsArray } from "./scripts/classes.js";
let place = document.getElementsByClassName("form")[0];
const colors = [
  "pink",
  "black",
  "white",
  "green",
  "blue",
  "yellow",
  "violet",
  "grey",
  "gold",
  "aqua",
  "crimson",
  "chocolate",
  "antiquewhite",
  "cadetblue",
  "coral",
];
let elementsArr = [];
function createElement(i) {
  let block = document.createElement("div");
  block.style.backgroundColor = colors[i];
  block.className = "element";
  place.append(block);
  let newElement = new Element(block, colors[i]);
  elementsArr.push(newElement);
}
for (let i = 0; i < colors.length; i++) {
  createElement(i);
}
export const allElems = new ElementsArray(elementsArr);
